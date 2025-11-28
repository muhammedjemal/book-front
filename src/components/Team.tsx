"use client";
import React, { useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        ".",
      name: "",
      designation: "",
      src: "/images/related2.jpg",
      learnMoreLink: "", // Added learnMoreLink
    },
    {
      quote:
        "",
      name: "",
      designation: "",
      src: "/images/related1.jpg",
      learnMoreLink: "", // Added learnMoreLink
    },
    {
      quote:
        "",
      name: "",
      designation: "",
      src: "/images/team.jpg",
      learnMoreLink: "", // Added learnMoreLink
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
