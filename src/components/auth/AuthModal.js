"use client";

import { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext"; // <--- CONNECTS TO THE BRAIN
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthSection() {
  const [view, setView] = useState("login");
  const { user, logout, loading } = useAuth(); // <--- GET USER INFO

  // 1. Loading State (Prevents flickering)
  if (loading) {
    return (
      <section className="w-full py-20 bg-gray-50 flex items-center justify-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-4 w-32 bg-gray-300 rounded mb-4"></div>
          <div className="h-10 w-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </section>
    );
  }

  // 2. LOGGED IN VIEW: Show Profile instead of Forms
  if (user) {
    return (
      <section className="w-full py-16 bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 p-8 text-center">
          
          {/* User Icon */}
          <div className="w-20 h-20 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-bold border-4 border-white shadow-sm">
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-1">
            Welcome, {user.name}!
          </h2>
          <p className="text-gray-500 text-sm mb-8">{user.email}</p>

          <div className="space-y-3">
            <Link 
              href="/products" 
              className="block w-full bg-orange-600 text-white font-semibold py-3 rounded-lg hover:bg-orange-700 transition-colors shadow-md"
            >
              Browse Our Bookings
            </Link>
            
            <button
              onClick={logout}
              className="block w-full bg-white text-gray-700 font-semibold py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Sign Out
            </button>
          </div>

        </div>
      </section>
    );
  }

  // 3. GUEST VIEW: Show Forms (Same as before)
  return (
    <section className="w-full py-16 bg-gray-50 flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        
        {/* Toggle Header */}
        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setView("login")}
            className={`flex-1 py-4 text-sm font-semibold transition-colors ${
              view === "login"
                ? "bg-white text-orange-600 border-b-2 border-orange-600"
                : "bg-gray-50 text-gray-500 hover:text-gray-700"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setView("register")}
            className={`flex-1 py-4 text-sm font-semibold transition-colors ${
              view === "register"
                ? "bg-white text-orange-600 border-b-2 border-orange-600"
                : "bg-gray-50 text-gray-500 hover:text-gray-700"
            }`}
          >
            Register
          </button>
        </div>

        {/* Content Area */}
        <div className="p-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">
              {view === "login" ? "Welcome Back" : "Create Account"}
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              {view === "login"
                ? "Access your dashboard using your email."
                : "Get started with your free account today."}
            </p>
          </div>

          {view === "login" ? (
            <LoginForm switchToRegister={() => setView("register")} />
          ) : (
            <RegisterForm switchToLogin={() => setView("login")} />
          )}
        </div>
      </div>
    </section>
  );
}