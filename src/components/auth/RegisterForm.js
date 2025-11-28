"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // <--- IMPORT CONTEXT

export default function RegisterForm({ switchToLogin }) {
  const [isLoading, setIsLoading] = useState(false);
  const [globalError, setGlobalError] = useState(""); 
  const router = useRouter();
  const { login } = useAuth(); // <--- GET LOGIN FUNCTION

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setGlobalError(""); 

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/register`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json" 
        },
        body: JSON.stringify(data),
      });

      // Safe Parsing
      let result;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        result = await response.json();
      } else {
        result = { message: await response.text() };
      }

      if (!response.ok) {
        // Handle Validation Errors specifically
        if (response.status === 422 && result.errors) {
          Object.keys(result.errors).forEach((key) => {
            setError(key, { type: "manual", message: result.errors[key][0] });
          });
          throw new Error("Please fix the validation errors.");
        }
        
        // Handle generic errors
        throw new Error(result.message || result.error || "Registration failed");
      }

      // --- SUCCESS ---
      toast.success("Account created! Logging you in...");
      
      // 1. Update Global State (Auto-login after register)
      login(result.token, result.user);

      // 2. Redirect
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

      {/* Name Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          {...register("name", { required: "Name is required" })}
          type="text"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all"
          placeholder="John Doe"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      {/* Email Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email format",
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
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
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
        {isLoading ? "Creating Account..." : "Create Account"}
      </button>

      {/* Switcher Text */}
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <button

          type="button"
          onClick={switchToLogin}
          className="text-orange-600 font-semibold hover:underline"
        >
          Log in
        </button>
      </p>
    </form>
  );
}