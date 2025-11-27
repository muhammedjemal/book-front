

"use client";

import Hero from "@/components/Hero3";
import SlidingBanner from "@/components/VeryTop";
import SlidingBanner2 from "@/components/slidingBanner23";
import { FlipWordsDemo } from "@/components/ui/Steps";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

// NEW IMPORTS
import BookButton from "@/components/BookButton"; 
import { useAuth } from "@/context/AuthContext";

const HomePage: React.FC = () => {
  const { user } = useAuth();
  
  // State to track which items are booked (e.g., ['studio', '3bedroom'])
  const [bookedItems, setBookedItems] = useState<string[]>([]);
  
  // Hover States
  const [oneHovered, setOneHovered] = useState(false);
  const [twoHovered, setTwoHovered] = useState(false);
  const [threeHovered, setThreeHovered] = useState(false);

  // Hover Handlers
  const oneHandleMouseEnter1 = () => setOneHovered(true);
  const oneHandleMouseLeave1 = () => setOneHovered(false);

  const twoHandleMouseEnter2 = () => setTwoHovered(true);
  const twoHandleMouseLeave2 = () => setTwoHovered(false);

  const threeHandleMouseEnter3 = () => setThreeHovered(true);
  const threeHandleMouseLeave3 = () => setThreeHovered(false);

  // 1. Fetch User's Existing Bookings when page loads
  useEffect(() => {
    if (user) {
      const fetchBookings = async () => {
        const token = localStorage.getItem("token");
        try {
          const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/my-bookings`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          if (res.ok) {
            const keys = await res.json();
            setBookedItems(keys);
          }
        } catch (error) {
          console.error("Failed to fetch bookings");
        }
      };
      fetchBookings();
    } else {
      setBookedItems([]); // Clear if logged out
    }
  }, [user]);

  // Helper to update state instantly when a button reports success
  const handleBookingSuccess = (key: string) => {
    setBookedItems((prev) => [...prev, key]);
  };

  return (
    <>
      <SlidingBanner
        texts={[
          "Welcome to our site!",
          "Check out our Apartments!",
          "Get newcomer 20% off!",
          "Enjoy our charming Rooms!",
        ]}
      />
      <div className="hidden md:block">{/* <Header /> */}</div>
      <div className="md:hidden">{/* <MobileNav /> */}</div>

      <Hero />
      <SlidingBanner2 />
      <FlipWordsDemo />

      <div className="py-16 font-sans">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          
          {/* Product 1: Studio */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-72 relative overflow-hidden rounded"
              onMouseEnter={oneHandleMouseEnter1}
              onMouseLeave={oneHandleMouseLeave1}
            >
              <Link
                href={"/virtual-tour-studio"}
                className="relative block h-full w-full"
              >
                <Image
                  src="/img/studio.jpg"
                  alt="Studio"
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    oneHovered ? "opacity-0" : "opacity-100"
                  }`}
                />

                <Image
                  src="/img/studio2.jpg"
                  alt="Studio Hover"
                  fill
                  className={`object-cover transition-opacity duration-500 absolute inset-0 ${
                    oneHovered ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            </div>
            <div className="mt-4 text-center mb-4">
              <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              Studio
              </h3>
              <p className="text-gray-600 text-sm mt-1">$ 499.00</p>
            </div> 
            
            {/* NEW SMART BUTTON */}
            <BookButton 
                itemKey="studio" 
                itemName="Studio Apartment" 
                price={499.00}
                isAlreadyBooked={bookedItems.includes("studio")}
                onBookSuccess={handleBookingSuccess}
            />
          </div>

          {/* Product 2: 2 Bedroom */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-72 relative overflow-hidden rounded"
              onMouseEnter={twoHandleMouseEnter2}
              onMouseLeave={twoHandleMouseLeave2}
            >
              <Link href={"/virtual-tour-2bedroom"}>
                <Image
                  src={twoHovered ? "/img/2bedroom.webp" : "/img/2bedroom2.jpg"}
                  alt="2 Bedroom"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className="mt-4 text-center mb-4">
              <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              2 bed room
              </h3>
              <p className="text-gray-600 text-sm mt-1">$ 999.00</p>
            </div>
            
            {/* NEW SMART BUTTON */}
            <BookButton 
                itemKey="2bedroom" 
                itemName="2 Bedroom Apartment" 
                price={999.00}
                isAlreadyBooked={bookedItems.includes("2bedroom")}
                onBookSuccess={handleBookingSuccess}
            />
          </div>

          {/* Product 3: 3 Bedroom */}
          <div className="flex flex-col items-center">
            <div
              className="w-full h-72 relative overflow-hidden rounded"
              onMouseEnter={threeHandleMouseEnter3}
              onMouseLeave={threeHandleMouseLeave3}
            >
              <Link href={"/virtual-tour-3bedroom"}>
                <Image
                  src={threeHovered ? "/img/3bedroom.jpg" : "/img/3bedroom2.jpg"}
                  alt="3 Bedroom"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Link>
            </div>
            <div className="mt-4 text-center mb-4">
              <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
              3 bed room
              </h3>
              <p className="text-gray-600 text-sm mt-1">$ 1,499.00</p>
            </div>
            
            {/* NEW SMART BUTTON */}
            <BookButton 
                itemKey="3bedroom" 
                itemName="3 Bedroom Apartment" 
                price={1499.00}
                isAlreadyBooked={bookedItems.includes("3bedroom")}
                onBookSuccess={handleBookingSuccess}
            />
          </div>
        </div>
      </div>      
    </>
  );
};

export default HomePage;
