
"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFingerprint } from "react-icons/fa";

import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";
import Image from "next/image";
import { Lobster } from "@next/font/google";
import { WorldMap } from "./ui/world-map";
import { AnimatedModalDemo } from "./AnimatedModalDemo";
import ChatBox from "./ChatBox";
import { usePathname } from "next/navigation";

const lobster = Lobster({
  weight: "400",
  subsets: ["latin"],
});

const Footer: React.FC = () => {
  const pathname = usePathname();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async () => {
    // Simulate sending data to backend
    try {
      
      console.log("Subscribed with email:", email); // Simulate success
      setSubscribed(true);
      setEmail("");
      // Optionally, show a success message to the user
    } catch (error) {
      console.error("Subscription error:", error);
      // Handle error, e.g., show an error message to the user
    }
  };
  return (
    <footer
      className={`bg-[#dcad5f]  text-foreground py-0 mt-4 `}
      id="footer"
    >
      <div>
        <ChatBox />
        <AnimatedModalDemo />
      </div>
      <div className={`${pathname.startsWith("/v") && "hidden"}`}>
        <WorldMap
          dots={[
            {
              start: { lat: -8.7921, lng: 40.9219 }, // Nairobi
              end: {
                lat: 34.0522,
                lng: -118.2437,
              }, // Los Angeles
            },
            {
              start: { lat: -8.7921, lng: 40.9219 }, // Nairobi
              end: { lat: -20.7975, lng: -47.8919 }, // Brazil (Brasília)
            },
            {
              start: { lat: -8.7921, lng: 40.9219 }, // Nairobi
              end: { lat: 51.5074, lng: -0.1278 }, // London
            },
            {
              start: { lat: -8.7921, lng: 40.9219 }, // Nairobi
              end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
            },
            {
              start: { lat: -8.7921, lng: 40.9219 }, // Nairobi

              end: { lat: 28.6139, lng: 77.209 }, // New Delhi
            },
            {
              start: { lat: -8.7921, lng: 40.9219 }, // Nairobi

              end: { lat: 38.9072, lng: -77.0369 }, // Washington, D.C.
            },
          ]}
        />
      </div>

      <div className={`${pathname.startsWith("/v" ) && "hidden"}`}>
        <div className="max-w-7xl w-full mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={"/img/logo.png"}
                width={50}
                height={50}
                alt="Acme logo"
                className="min-w-fit w-5 h-5 md:w-7 md:h-7"
              />
              <h3 className={` text-xl  cursor-pointer ${lobster.className}`}>
                Acme Booking Inc.
              </h3>
            </Link>
            <p className="mt-3.5 text-foreground-accent">
              {footerDetails.subheading}
            </p>
            <div className="mt-5 hidden">
              <h1 className="text-lg font-semibold mb-3">
                Subscribe to our Newsletter
              </h1>
              {subscribed ? (
                <p className="text-green-600">
                  Thank you for subscribing! 
                </p>
              ) : (
                <>
                  <input
                    type="email"
                    placeholder="Your email..."
                    className="w-full p-3 bg-white/80  border-orange-500 rounded-md mb-2 focus:ring-orange-300 focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button
                    id="hs-run-on-click-run-confetti"
                    type="button"
                    className="relative h-[50px] w-full  overflow-hidden border border-orange-500 bg-hero-background px-1 text-orange-600 shadow-2xl font-bold transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full disabled:bg-gray-400 disabled:text-gray-200 disabled:shadow-none disabled:cursor-not-allowed"
                    onClick={handleSubscribe}
                    disabled={!email}
                  >
                    <span className="relative z-5">Subscribe</span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="text-foreground-accent">
              {footerDetails.quickLinks.map((link) => (
                <li key={link.text} className="mb-2">
                  <Link href={link.url} className="hover:text-foreground">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>

            {footerDetails.email && (
              <a
                href={`mailto:${footerDetails.email}`}
                className="block text-foreground-accent hover:text-foreground"
              >
                Email: {footerDetails.email}
              </a>
            )}

            {footerDetails.telephone && (
              <a
                href={`tel:${footerDetails.telephone}`}
                className="block text-foreground-accent hover:text-foreground"
              >
                Phone:
                <p>{footerDetails.telephone}</p>
                
              </a>
            )}

            {footerDetails.socials && (
              <div className="mt-5 flex items-center gap-5 flex-wrap">
                {Object.keys(footerDetails.socials).map((platformName) => {
                  if (platformName && footerDetails.socials[platformName]) {
                    return (
                      <Link
                        href={footerDetails.socials[platformName]}
                        key={platformName}
                        aria-label={platformName}
                      >
                        {getPlatformIconByName(platformName)}
                      </Link>
                    );
                  }
                })}
              </div>
            )}
          </div>
        </div>
        <div className="mt-8 md:text-center text-foreground-accent px-6">
          <p>
            Copyright © {new Date().getFullYear()} {siteDetails.siteName} {" "}
            All rights reserved.
          </p>
          {/* <p className="text-sm mt-2 text-gray-500">
            Made with ♥ by{" "}
            <a href="https://nexilaunch.com" target="_blank">
              Nexi Launch
            </a>
          </p>
          <p className="text-sm mt-2 text-gray-500">
            UI kit by{" "}
            <a
              href="https://ui8.net/youthmind/products/fintech-finance-mobile-app-ui-kit"
              target="_blank"
            >
              Youthmind
            </a>
          </p> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
