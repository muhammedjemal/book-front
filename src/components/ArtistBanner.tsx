
import React from "react";
import Image from "next/image"; // for the profile picture
import { Lexend } from "@next/font/google";
import Link from "next/link";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });

const AboutArtistBanner = ({ prodName }) => {
  return (
    <>
      <h4
        className={`text-2xl font-bold mb-4 text-center pt-6 ${lexend.className}`}
      >
        
      </h4>
      <div className=" py-16 pt-9 font-sans">
        <div className="container mx-auto px-4 sm:px-12 md:px-24 lg:px-44  flex flex-col md:flex-row items-center gap-5">
          <div className="relative rounded-full w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 overflow-hidden">
            <Image
              src={`/images/artist${prodName}/artist${prodName}.webp`} // Replace with your image path
              alt="Artist Image"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="md:flex-1 flex flex-col gap-2">
            <div className="flex justify-between items-center text-center md:text-start">
              <div>
                <h2
                  className={`text-base font-medium text-gray-800  ${lexend.className}`}
                >
                  {prodName === "1"
                    ? " "
                    : prodName === "2"
                    ? " "
                    : ""}
                </h2>
                <p className={`text-gray-600 text-base ${lexend.className}`}>
                  
                </p>
              </div>
            </div>
          </div>
          <Link href={`/collections/${prodName}`}>
            <button
              className={`bg-orange-500 text-white font-medium px-4 sm:px-6 py-3 rounded hover:bg-orange-600 ${lexend.className}`}
            >
              
            </button>
          </Link>
        </div>
        <h2
          className={`text-gray-700 mt-4 px-4 sm:px-12 md:px-24 lg:px-44 text-justify text-base ${lexend.className}`}
        >
          {prodName === "1"
            ? ``
            : prodName === "2"
            ? ``
            : ``}
        </h2>
        <div className="mt-8 px-4 sm:px-12 md:px-24 lg:px-44">
          <h3
            className={`text-gray-800 uppercase test-base ${lexend.className}`}
          >
            
          </h3>
          <div className="flex items-center gap-5 sm:gap-10 mt-3">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full border-2 border-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 013 2.801z"
                  />
                </svg>
              </div>
              <p className={`text-gray-700 text-base ${lexend.className}`}>
                
              </p>
            </div>
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-full border-2 border-yellow-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 text-yellow-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 013 2.801z"
                  />
                </svg>
              </div>
              <p className={`text-gray-700 text-base  ${lexend.className}`}>
                
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutArtistBanner;
