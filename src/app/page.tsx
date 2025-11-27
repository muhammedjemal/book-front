
"use client";
import Hero from "@/components/Hero3";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Header from "@/components/navDesktop3";
import MobileNav from "@/components/mobilenav3";
import SlidingBanner from "@/components/VeryTop";
import SlidingBanner2 from "@/components/slidingBanner23";
import ProductGrid from "@/components/Products";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { FlipWordsDemo } from "@/components/ui/Steps";
import LensDemo from "@/components/offerCard";
import { Poppins } from "@next/font/google";
import LensDemoMaster1 from "@/components/offerCardMaster1";
import LensDemoMaster2 from "@/components/offerCardMaster2";
import LensDemoMaster3 from "@/components/offerCardMaster3";
import LensDemoOffer1 from "@/components/offerCardOffer3";
import LensDemoOffer2 from "@/components/offerCardOffer2";
import AuthModal from "@/components/auth/AuthModal";

const poppins = Poppins({
  weight: "800",
  subsets: ["latin"],
});

const HomePage: React.FC = () => {
  const [oneHovered, setOneHovered] = useState(false);

  const oneHandleMouseEnter1 = () => setOneHovered(true);
  const oneHandleMouseLeave1 = () => setOneHovered(false);

  const [twoHovered, setTwoHovered] = useState(false);
  const twoHandleMouseEnter2 = () => setTwoHovered(true);
  const twoHandleMouseLeave2 = () => setTwoHovered(false);

  const [threeHovered, setThreeHovered] = useState(false);
  const threeHandleMouseEnter3 = () => setThreeHovered(true);
  const threeHandleMouseLeave3 = () => setThreeHovered(false);

  return (
    <>
      <SlidingBanner
        texts={[
          "Welcome to our site!",
          "Check out our Apartments!",
          "Get newcomer 20% off!",
          "Enjoy our charming Rooms!",
        ]}
      />
      <div className="hidden md:block">{/* <Header /> */}</div>
      <div className="md:hidden">{/* <MobileNav /> */}</div>

      <Hero />
<AuthModal />

    </>
  );
};

export default HomePage;
