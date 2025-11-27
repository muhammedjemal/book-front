"use client";

import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAccepted, setHasAccepted] = useState(false);

  useEffect(() => {
    const storedAcceptance = localStorage.getItem("cookieConsent");
    if (storedAcceptance === "accepted") {
      setHasAccepted(true);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000); // Show after 2 seconds (adjust as needed)

    return () => clearTimeout(timer);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setHasAccepted(true);
    setIsVisible(false);
  };

  if (hasAccepted) {
    return null;
  }

  return isVisible ? (
    <div
      className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 transform transition-transform ease-out duration-300 slide-in-bottom"
      style={{
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="flex items-center justify-between">
        <p className="text-gray-700 text-sm">
          This website uses cookies to enhance user experience. By continuing to
          use this site, you agree to our use of cookies.
        </p>
        <button
          onClick={handleAccept}
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm"
        >
          Accept
        </button>
      </div>
    </div>
  ) : null;
};

export default CookieConsent;
