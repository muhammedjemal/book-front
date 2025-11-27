"use client";
import React, { useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Adulis Media is your full-service creative agency in Ethiopia, here to support all your creative needs. We work closely with the talented teams behind Dejene Ethiopia Tours, Adulis Ethiopian Art. At Adulis Media, we're passionate about showcasing Ethiopian stories, voices, and perspectives, and we're here to make sure your vision stands out.",
      name: "Adulis Media",
      designation: "Creative Agency",
      src: "/images/related2.jpg",
      learnMoreLink: "https://adulismedia.com/", // Added learnMoreLink
    },
    {
      quote:
        "Dejene Ethiopia Tours is designed to offer unique and immersive travel experiences that highlight Ethiopia's cultural and natural heritage, aiming to redefine tourism in Ethiopia. Our objective is to showcase Ethiopia's beauty and history, creating impactful travel experiences that resonate with visitors and benefit local communities.",
      name: "Dejene Ethiopian Tours",
      designation: "Tourism & Travel",
      src: "/images/related1.jpg",
      learnMoreLink: "https://dejeneethiopiatours.com/", // Added learnMoreLink
    },
    {
      quote:
        "Driven by a deep passion for Ethiopia, Dejene has spearheaded a network of initiatives dedicated to showcasing the richness and diversity of Ethiopian culture. Through these ventures, including a global art platform, a creative media agency, immersive travel experiences, and a premium coffee line, we strive to share the authentic narratives and unique flavors of Ethiopia with the world. This collective effort represents a commitment to innovation, cultural preservation, and global connection.",
      name: "The Team",
      designation: "",
      src: "/images/team.jpg",
      learnMoreLink: "https://dejenehodes.com/", // Added learnMoreLink
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
