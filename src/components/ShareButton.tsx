import React from "react";
import { FaShareAlt } from "react-icons/fa";

const ShareButton = ({ productUrl, productName }) => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: productName,
          url: productUrl,
        });
        console.log("Shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert(
        "Web Share API is not supported in your browser. Please copy the link manually."
      );
    }
  };

  return (
    <button
      onClick={handleShare}
      className="flex items-center  justify-center px-3 py-2 rounded-md ring ring-gray-300 bg-orange-400 hover:bg-orange-300 focus:outline-none focus:ring focus:ring-orange-600 active:bg-orange-600 text-gray-700 font-semibold text-sm"
    >
      <FaShareAlt className="mr-2 h-4 w-4" />
      Share
    </button>
  );
};

export default ShareButton;
