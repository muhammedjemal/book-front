// import React from "react";
// import { FlipWords } from "@/components/ui/flip-words.tsx";

// export function FlipWordsDemo() {
//   const words = ["Historical" , "Cultural", "Glowing", "Fancy", "Fun"];

//   return (
//     <div className="h-fit flex justify-center items-center px-5">
//       <div className="text-3xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//         Make your house look more
//         <FlipWords words={words} />
//         {/* that's all */}
//       </div>
//     </div>
//   );
// }
import React from "react";
import { FlipWords } from "@/components/ui/flip-words.tsx";

export function FlipWordsDemo() {
  const words = ["Comfortable", "Affordable", "Luxury", "Relaxing", "Unforgettable"];

  return (
    <div className="h-fit flex justify-center items-center px-5">
      <div className="text-3xl md:text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Book your perfect stay with
        <FlipWords words={words} />
      </div>
    </div>
  );
}
