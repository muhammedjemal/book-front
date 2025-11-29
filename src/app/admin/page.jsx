"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";


const API_BASE = "https://book-backend-production-be1f.up.railway.app/api";

export default function AdminDashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  // Data States
  const [bookings, setBookings] = useState([]);
  const [users, setUsers] = useState([]);
  
  // UI States
  const [activeTab, setActiveTab] = useState("bookings"); 
  const [fetching, setFetching] = useState(true); 
  
  // Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  // --- 1. ADMIN CHECK ---
  useEffect(() => {
    if (!loading && user) {
      const isAdmin = Boolean(Number(user.is_admin)) === true || user.is_admin === true;
      if (isAdmin) {
        refreshData();
      }
    }
  }, [user, loading]);

  // --- 2. DATA FETCHING ---
  const refreshData = () => {
    setFetching(true);
    Promise.all([fetchBookings(), fetchUsers()]).finally(() => setFetching(false));
  };

  const fetchBookings = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = `${API_BASE}/admin/bookings`; 
      const res = await fetch(url, {
        headers: { 
            Authorization: `Bearer ${token}`,
            "Accept": "application/json" 
        },
      });
      if (res.ok) setBookings(await res.json());
    } catch (e) { console.error(e); }
  };

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      const url = `${API_BASE}/admin/users`;
      const res = await fetch(url, {
        headers: { 
            Authorization: `Bearer ${token}`,
            "Accept": "application/json"
        },
      });
      if (res.ok) setUsers(await res.json());
    } catch (e) { console.error(e); }
  };

  // --- 3. DELETE ACTIONS ---
  const handleDeleteBooking = async (id) => {
    if(!confirm("Are you sure?")) return;
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_BASE}/admin/bookings/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}`, "Accept": "application/json" },
      });
      if (res.ok) {
        toast.success("Booking Removed");
        setBookings(bookings.filter((b) => b.id !== id));
      }
    } catch (e) { toast.error("Error deleting"); }
  };

  const handleDeleteUser = async (id) => {
    if(!confirm("Are you sure?")) return;
    const token = localStorage.getItem("token");

    try {
      const res = await fetch(`${API_BASE}/admin/users/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}`, "Accept": "application/json" },
      });
      if (res.ok) {
        toast.success("User Deleted");
        setUsers(users.filter((u) => u.id !== id));
      } else {
        const data = await res.json();
        toast.error(data.message || "Failed");
      }
    } catch (e) { toast.error("Error deleting"); }
  };

  // --- RENDER ---
  if (loading) return <div className="p-20 text-center">Checking...</div>;
  if (!user) return <div className="p-20 text-center">Not Logged In</div>;
  
  const isAdmin = Boolean(Number(user.is_admin)) === true || user.is_admin === true;
  if (!isAdmin) return <div className="p-20 text-center text-red-600 font-bold">Access Denied</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <div className="flex gap-4 items-center">
            <button onClick={() => router.push('/')} className="text-sm text-gray-600 underline">
              Back to Home
            </button>
            <button onClick={() => { setEditingUser(null); setIsModalOpen(true); }} className="bg-orange-600 text-white px-4 py-2 rounded shadow hover:bg-orange-700 text-sm">
              + New User
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          {/* Revenue */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-3xl font-bold text-green-600">
              {fetching ? (
                <span className="text-gray-300 text-2xl animate-pulse">Loading...</span>
              ) : (
                `$ ${bookings.reduce((acc, curr) => acc + parseFloat(curr.price), 0).toLocaleString()} `
              )}
            </p>
          </div>
          
          {/* Bookings Count */}
          <div onClick={() => setActiveTab('bookings')} className={`cursor-pointer p-6 rounded-lg shadow-sm border ${activeTab === 'bookings' ? 'bg-orange-50 border-orange-200' : 'bg-white border-gray-100'}`}>
            <h3 className="text-gray-500 text-sm">Total Bookings</h3>
            <p className="text-3xl font-bold text-gray-800">
              {fetching ? <span className="text-gray-300 text-2xl animate-pulse">...</span> : bookings.length}
            </p>
          </div>
          
          {/* Users Count */}
          <div onClick={() => setActiveTab('users')} className={`cursor-pointer p-6 rounded-lg shadow-sm border ${activeTab === 'users' ? 'bg-orange-50 border-orange-200' : 'bg-white border-gray-100'}`}>
            <h3 className="text-gray-500 text-sm">Total Users</h3>
            <p className="text-3xl font-bold text-gray-800">
               {fetching ? <span className="text-gray-300 text-2xl animate-pulse">...</span> : users.length}
            </p>
          </div>
        </div>

        {/* --- BOOKINGS TAB --- */}
        {activeTab === 'bookings' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
             <div className="p-4 bg-gray-50 border-b font-bold text-gray-700">All Bookings</div>
             
             <div className="overflow-x-auto">
               <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-gray-600">ID</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Customer</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Apartment</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Price</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Date</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {/* LOADING STATE */}
                    {fetching ? (
                        <tr>
                            <td colSpan="6" className="p-8 text-center text-gray-500 animate-pulse">
                                Loading bookings...
                            </td>
                        </tr>
                    ) : bookings.length === 0 ? (
                        /* EMPTY STATE */
                        <tr>
                            <td colSpan="6" className="p-8 text-center text-gray-500">
                                No bookings found.
                            </td>
                        </tr>
                    ) : (
                        /* DATA MAPPING */
                        bookings.map((booking) => (
                        <tr key={booking.id} className="hover:bg-gray-50">
                            <td className="p-4 text-sm text-gray-500">#{booking.id}</td>
                            <td className="p-4 text-sm">
                            <div className="font-medium text-gray-900">{booking.user?.name || "Unknown"}</div>
                            <div className="text-gray-500 text-xs">{booking.user?.email}</div>
                            </td>
                            <td className="p-4 text-sm text-gray-800">{booking.item_name}</td>
                            <td className="p-4 text-sm font-medium text-green-600">${booking.price} </td>
                            <td className="p-4 text-sm text-gray-500">{new Date(booking.created_at).toLocaleDateString()}</td>
                            <td className="p-4">
                            <button onClick={() => handleDeleteBooking(booking.id)} className="text-red-500 hover:text-red-700 text-xs font-semibold bg-red-50 px-2 py-1 rounded">
                                Cancel
                            </button>
                            </td>
                        </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
          </div>
        )}

        {/* --- USERS TAB --- */}
        {activeTab === 'users' && (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-4 bg-gray-50 border-b font-bold text-gray-700">All Users</div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-4 text-xs font-semibold text-gray-600">ID</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Name</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Email</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Role</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Joined</th>
                      <th className="p-4 text-xs font-semibold text-gray-600">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {/* LOADING STATE */}
                    {fetching ? (
                        <tr>
                            <td colSpan="6" className="p-8 text-center text-gray-500 animate-pulse">
                                Loading users...
                            </td>
                        </tr>
                    ) : users.length === 0 ? (
                        /* EMPTY STATE */
                        <tr>
                            <td colSpan="6" className="p-8 text-center text-gray-500">
                                No users found.
                            </td>
                        </tr>
                    ) : (
                        /* DATA MAPPING */
                        users.map((u) => (
                        <tr key={u.id} className="hover:bg-gray-50">
                            <td className="p-4 text-sm text-gray-500">#{u.id}</td>
                            <td className="p-4 text-sm font-medium">{u.name}</td>
                            <td className="p-4 text-sm text-gray-600">{u.email}</td>
                            <td className="p-4 text-sm">
                            {u.is_admin ? 
                                <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-bold">Admin</span> : 
                                <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">User</span>
                            }
                            </td>
                            <td className="p-4 text-sm text-gray-500">{new Date(u.created_at).toLocaleDateString()}</td>
                            <td className="p-4 flex gap-2">
                            <button onClick={() => { setEditingUser(u); setIsModalOpen(true); }} className="text-blue-600 hover:underline text-xs">Edit</button>
                            <button onClick={() => handleDeleteUser(u.id)} className="text-red-600 hover:underline text-xs">Delete</button>
                            </td>
                        </tr>
                        ))
                    )}
                  </tbody>
                </table>
              </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <UserModal user={editingUser} close={() => setIsModalOpen(false)} refresh={refreshData} />
      )}
    </div>
  );
}

// --- USER MODAL ---
function UserModal({ user, close, refresh }) {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    password: "", 
    is_admin: user?.is_admin ? true : false
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");
    
    // USE API_BASE
    const url = user 
      ? `${API_BASE}/admin/users/${user.id}`
      : `${API_BASE}/admin/users`;
    
    const method = user ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { 
          "Content-Type": "application/json", 
          "Accept": "application/json", 
          Authorization: `Bearer ${token}` 
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");

      toast.success(user ? "User Updated" : "User Created");
      refresh();
      close();
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-xl">
        <h2 className="text-xl font-bold mb-4">{user ? "Edit User" : "Add New User"}</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input required type="text" className="w-full border p-2 rounded" 
              value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input required type="email" className="w-full border p-2 rounded" 
              value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
          </div>
          {!user && (
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input required type="password" className="w-full border p-2 rounded" 
                value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} />
            </div>
          )}
          <div className="flex items-center gap-2 mt-4">
            <input type="checkbox" id="is_admin" 
              checked={formData.is_admin} onChange={e => setFormData({...formData, is_admin: e.target.checked})} />
            <label htmlFor="is_admin" className="text-sm">Make Admin?</label>
          </div>
          <div className="flex gap-2 mt-6">
            <button type="button" onClick={close} className="flex-1 bg-gray-200 text-gray-800 py-2 rounded">Cancel</button>
            <button disabled={loading} type="submit" className="flex-1 bg-orange-600 text-white py-2 rounded hover:bg-orange-700">{loading ? "Saving..." : "Save"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}