"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // The logged-in user object
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // 1. Check if user is logged in when the app starts
  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  const checkUserLoggedIn = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        // Ask Laravel: "Who owns this token?"
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}api/user`, {
          headers: {
            Authorization: `Bearer ${token}`, // WEAR YOUR ID CARD
            Accept: "application/json",
          },
        });

        if (res.ok) {
          const userData = await res.json();
          setUser(userData);
        } else {
          // Token is invalid/expired
          localStorage.removeItem("token");
          setUser(null);
        }
      } catch (error) {
        console.error("Auth check failed", error);
      }
    }
    setLoading(false);
  };

  // 2. Login Function (Call this from LoginForm)
  const login = (token, userData) => {
    localStorage.setItem("token", token);
    setUser(userData);
    router.refresh();
  };

  // 3. Logout Function
  const logout = () => {
    localStorage.removeItem("token"); // Destroy the ID card
    setUser(null);
    router.push("/"); // Go to homepage
    router.refresh();
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);