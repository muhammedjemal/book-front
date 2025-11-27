"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [fetching, setFetching] = useState(true);

  // 1. Check if Admin & Fetch Data
//   useEffect(() => {
//     if (!loading) {
//       if (!user || user.is_admin !== 1) { // is_admin comes as 1 (true) or 0 (false) from Laravel
//         // Not an admin? Kick them out.
//         router.push("/");
//         return;
//       }

//       fetchAllBookings();
//     }
//   }, [user, loading, router]);

// 1. Check if Admin & Fetch Data
  useEffect(() => {
    if (!loading) {
      // FIX: Use Boolean() to accept 1, true, "1", etc.
      const isAdmin = user && (user.is_admin === 1 || user.is_admin === true);

      if (!isAdmin) { 
        router.push("/");
        return;
      }

      fetchAllBookings();
    }
  }, [user, loading, router]);


  const fetchAllBookings = async () => {
    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/admin/bookings`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.ok) {
        const data = await res.json();
        setBookings(data);
      } else {
        toast.error("Failed to load data");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setFetching(false);
    }
  };

  // 2. Handle Delete
  const handleDelete = async (id) => {
    if(!confirm("Are you sure you want to cancel this booking?")) return;

    const token = localStorage.getItem("token");
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/admin/bookings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.ok) {
        toast.success("Booking Removed");
        // Remove from UI immediately
        setBookings(bookings.filter((b) => b.id !== id));
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Error occurred");
    }
  };

  if (loading || fetching) {
    return <div className="p-10 text-center">Loading Dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <button 
            onClick={() => router.push('/')}
            className="text-sm text-gray-600 hover:text-orange-600 underline"
          >
            Back to Home
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm">Total Bookings</h3>
            <p className="text-3xl font-bold text-orange-600">{bookings.length}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600">
              ${bookings.reduce((acc, curr) => acc + parseFloat(curr.price), 0).toLocaleString()}
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
          <table className="w-full text-left border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-sm font-semibold text-gray-600">ID</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Customer</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Apartment</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Price</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Date</th>
                <th className="p-4 text-sm font-semibold text-gray-600">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {bookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="p-4 text-sm text-gray-500">#{booking.id}</td>
                  <td className="p-4 text-sm">
                    <div className="font-medium text-gray-900">{booking.user.name}</div>
                    <div className="text-gray-500 text-xs">{booking.user.email}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-800">{booking.item_name}</td>
                  <td className="p-4 text-sm font-medium text-green-600">${booking.price}</td>
                  <td className="p-4 text-sm text-gray-500">
                    {new Date(booking.created_at).toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(booking.id)}
                      className="text-red-500 hover:text-red-700 text-sm font-semibold bg-red-50 hover:bg-red-100 px-3 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))}
              
              {bookings.length === 0 && (
                <tr>
                  <td colSpan="6" className="p-8 text-center text-gray-500">
                    No bookings found yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}