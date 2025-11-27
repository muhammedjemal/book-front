"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export default function BookButton({ itemKey, itemName, price, isAlreadyBooked, onBookSuccess }) {
  const [loading, setLoading] = useState(false);
  const { user } = useAuth(); // Check if logged in

  const handleBook = async () => {
    // 1. Check Login Status
    if (!user) {
      toast.error("Please login to book an apartment");
      // Optional: Scroll to top or open modal
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      // 2. Send Request to Laravel
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/bookings`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, // Send the ID Card
          "Accept": "application/json"
        },
        body: JSON.stringify({
          item_key: itemKey,
          item_name: itemName,
          price: price
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // If conflict (409), it means they already booked it (maybe via another tab)
        if(response.status === 409) {
            toast.error("You already booked this!");
            onBookSuccess(itemKey); // Turn button green anyway
        } else {
            throw new Error(data.message || "Booking failed");
        }
      } else {
        // Success!
        toast.success("Apartment Booked Successfully!");
        onBookSuccess(itemKey); // Tell parent to update UI
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  // STATE A: Already Booked (Green Button)
  if (isAlreadyBooked) {
    return (
      <button disabled className="p-[3px] relative cursor-default">
        <div className="absolute inset-0 bg-green-500 rounded-lg" />
        <div className="px-8 py-2 bg-black rounded-[6px] relative text-green-400 font-bold flex items-center gap-2">
          Booked <span>✔</span>
        </div>
      </button>
    );
  }

  // STATE B: Available (Purple Button)
  return (
    <button onClick={handleBook} disabled={loading} className="p-[3px] relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black rounded-[6px] relative transition duration-200 text-white group-hover:bg-transparent">
        {loading ? "Processing..." : "Book"}
      </div>
    </button>
  );
}