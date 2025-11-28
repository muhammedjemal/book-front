
"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Lexend, Poppins } from "@next/font/google";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
const lexend = Lexend({ weight: "300", subsets: ["latin"] });
const poppins = Poppins({
  weight: "600",
  subsets: ["latin"],

});

const ArtistBio = ({ prodName }) => {
  const pathname = usePathname();
  const bioText =
    prodName === "1"
      ? ``
      : prodName === "2"
      ? `.`
      : ``;
  const [isExpanded, setIsExpanded] = useState(false);
  const [initialText, setInitialText] = useState("");
  const [remainingText, setRemainingText] = useState("");

  const setInitialTextAndRemaining = (text) => {
    const words = text.split(" ");
    const initialWordCount = Math.ceil(words.length / 3);
    setInitialText(words.slice(0, initialWordCount).join(" ") + "...");
    setRemainingText(words.slice(initialWordCount).join(" "));
  };

  useEffect(() => {
    setInitialTextAndRemaining(bioText);
  }, [bioText]);

  const lastThreeLines = isExpanded
    ? remainingText.split("\n")?.slice(-3) || []
    : [];

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
  
    <div className="bg-transparent py-10 font-sans -mt-10 relative">
      <div className="container mx-auto px-4 md:px-10 flex flex-col items-center md:flex-row md:items-start gap-8 md:gap-10">
        {/* Left Section: Credentials and Bio */}
        <div className="md:flex-1 flex flex-col gap-6 w-full">

          {/* </div> */}
          {/* Artist Description */}
          <div className="flex md:flex-1 flex-col gap-4 w-full mt-6 relative">
            { pathname === "/collections/1" && <p
              className={`italic text-orange-500 text-xl  ${lexend.className}`}
            >
           
            </p>}
            { pathname === "/collections/2" && <p
              className={`italic text-orange-500 text-xl  ${lexend.className}`}
            >
           
            </p>}
            { pathname === "/collections/3" && <p
              className={`italic text-orange-500 text-xl  ${lexend.className}`}
            >
              
            </p>}
            <div className={` ${lexend.className}`}>
              <p className="text-gray-700">{initialText}</p>

              {isExpanded && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                  }}
                  className="text-gray-700"
                >
                  {remainingText}
                </motion.p>
              )}
              {lastThreeLines.map((line, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 1 }}
                  animate={{
                    opacity: isExpanded
                      ? 1
                      : (lastThreeLines.length - index) * 0.33,
                  }}
                  className={`text-gray-700 fade-line`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            {!isExpanded && remainingText.length > 0 && (
              <div className="absolute bottom-0 left-0 w-full flex justify-center items-end pb-2">
                <motion.button
                  onClick={toggleExpanded}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-hero-background  rounded-md px-2 hover:bg-hero-background hover:scale-105 hover:text-orange-500 cursor-pointer transition-colors duration-300 font-extrabold bg-orange-500"
                >
                  Read More
                </motion.button>
                <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none" />
              </div>
            )}
            {isExpanded && remainingText.length > 0 && (
              <div className="flex justify-center mt-4">
                <motion.button
                  onClick={toggleExpanded}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="text-hero-background  rounded-md px-2 hover:bg-hero-background hover:scale-105 hover:text-orange-500 cursor-pointer transition-colors duration-300 font-extrabold bg-orange-500"
                >
                  Read Less
                </motion.button>
              </div>
            )}
          </div>
        </div>

        {/* Right Section: Artist Image */}
        <div className="md:flex-1 relative rounded-md w-full h-72 md:h-96 overflow-hidden">
          <Image
            src={`/images/artist${prodName}/artist-${prodName}.webp`}
            alt="image"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
    <h1 className={`text-2xl text-center mx-auto ${poppins.className}`}>
        All 
      </h1>
      <div className="py-16 font-sans">
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Product 1 */}
          {(
            <div className="flex flex-col items-center">
              <div
                className="w-full h-72 relative overflow-hidden rounded"
              >
                <Link href={"/collections/1"}>
                  <Image
                    src={ "/images/artist1/artist1.webp"}
                    alt="Abstract Canvas Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
                
                </h3>
                <p className="text-gray-600 text-sm mt-1"></p>
              </div>
            </div>
          )}

          {/* Product 2 */}
          { (
            <div className="flex flex-col items-center">
              <div
                className="w-full h-72 relative overflow-hidden rounded"
              >
                <Link href={"/collections/2"}>
                  <Image
                    src={ "/images/artist2/artist2.webp"}
                    alt="Abstract Canvas Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
                
                </h3>
                <p className="text-gray-600 text-sm mt-1"></p>
              </div>
            </div>
          )}

          {/* Product 3 */}
          {(
            <div className="flex flex-col items-center">
              <div
                className="w-full h-72 relative overflow-hidden rounded"
              >
                <Link href={"/collections/3"}>
                  <Image
                    src={ "/images/artist3/artist3.webp"}
                    alt="Abstract Canvas Art"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </div>
              <div className="mt-4 text-center">
                <h3 className="uppercase text-sm text-gray-700 tracking-wider font-medium">
                
                </h3>
                <p className="text-gray-600 text-sm mt-1"></p>
              </div>
            </div>
          )}
        </div>
      </div>{" "}
  </>
  );
};

export default ArtistBio;
