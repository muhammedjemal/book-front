
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // <--- IMPORT CONTEXT

export default function LoginForm({ switchToRegister }) {
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState(""); 
  const router = useRouter();
  const { login } = useAuth(); // <--- GET LOGIN FUNCTION

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setGlobalError(""); 

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/login`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(data),
      });

      // Safe parsing
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        const text = await response.text();
        result = { message: text || "An unexpected error occurred." };
      }

      if (!response.ok) {
        throw new Error(result.message || result.error || "Invalid credentials");
      }

      // --- SUCCESS ---
      toast.success("Logged in successfully");
      
      // 1. Update Global State
      login(result.token, result.user);
      
      // 2. Redirect to products
      router.push("/products");
      
    } catch (error) {
      setGlobalError(error.message);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* VISIBLE ERROR ALERT */}
      {globalError && (
        <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm border border-red-200">
          {globalError}
        </div>
      )}

      {/* Email Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
          type="email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          placeholder="name@company.com"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Password Input */}
      <div>
        <div className="flex items-center justify-between mb-1">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <a href="/products" className="text-xs text-orange-600 hover:underline">
            login as a guest
          </a>
        </div>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        disabled={isLoading}
        type="submit"
        className="w-full bg-orange-600 text-white font-semibold py-2.5 rounded-lg hover:bg-orange-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isLoading ? "Signing in..." : "Sign In"}
      </button>

      {/* Switcher Text */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={switchToRegister}
          className="text-orange-600 font-semibold hover:underline"
        >
          Sign up
        </button>
      </p>
    </form>
  );
}