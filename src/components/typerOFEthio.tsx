"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "We",
    },
    {
      text: "are",
    },
    {
      text: "more",
    },
    {
      text: "interested",
    },
    {
      text: "in",
    },
    {
      text: "Ethiopia.",
      className: "text-orange-500 dark:text-orange-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center mt-10  ">
      <TypewriterEffectSmooth words={words} />
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Learn more about us and see what we do
      </p>
    </div>
  );
}
