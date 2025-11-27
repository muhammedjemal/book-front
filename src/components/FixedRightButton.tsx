// // FixedRightButton.jsx
// import React from "react";
// import { ModalTrigger } from "@/components/ui/animated-modal";

// const FixedRightButton = ({ onClick }) => {
//   return (
//     <div className="fixed top-1/2 transform -translate-y-1/2 right-4 z-20">
//       <ModalTrigger
//         className="relative flex justify-center group/modal-btn w-28 h-16 overflow-hidden"
//         onClick={onClick}
//       >
//         <span className="bg-orange-500 text-white rounded-full py-2 px-4  inline-block text-sm font-medium transform rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//           Get 25% off
//         </span>
//       </ModalTrigger>
//     </div>
//   );
// };

// export default FixedRightButton;
// FixedRightButton.jsx
// import React from "react";
// import { ModalTrigger } from "@/components/ui/animated-modal";

// const FixedRightButton = ({ onClick }) => {
//   return (
//     <div className="fixed top-1/2 transform -translate-y-1/2 right-4 z-20">
//       <ModalTrigger
//         className="relative flex justify-center group/modal-btn w-32 h-32 overflow-hidden"
//         onClick={onClick}
//       >
//         <span className="bg-orange-500 text-white rounded-full py-2 px-4  inline-block text-sm font-medium transform rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
//           Get 25% off
//         </span>
//       </ModalTrigger>
//     </div>
//   );
// };

// export default FixedRightButton;
// FixedRightButton.jsx
import React, { useState, useEffect } from "react";
import { ModalTrigger } from "@/components/ui/animated-modal";

const FixedRightButton = ({ onClick }) => {
  const [rightOffset, setRightOffset] = useState("-96px"); // Initial offset

  useEffect(() => {
    const calculateRightOffset = () => {
      const screenWidth = window.innerWidth;
      // Max offset is 5px (at 768px screen width) and min offset is -15px (at 320px screen width).
      const maxOffset = 30; // Maximum space from right side in pixels
      const minOffset = -15; // Minimum space from right side in pixels
      const maxWidth = 768; // Screen width where max offset will be set.
      const minWidth = 320; // Screen width where min offset will be set.
      const offset = Math.max(
        minOffset,
        Math.min(
          maxOffset,
          ((screenWidth - minWidth) / (maxWidth - minWidth)) *
            (maxOffset - minOffset)
        )
      ); // Offset based on screen width
      setRightOffset(`${offset - 42}px`);
    };

    calculateRightOffset(); // Initial calculation

    // Recalculate on window resize
    window.addEventListener("resize", calculateRightOffset);

    return () => {
      window.removeEventListener("resize", calculateRightOffset);
    };
  }, []);

  return (
    <div
      className="fixed top-1/2 transform -translate-y-1/2 z-20 "
      style={{ right: rightOffset }}
    >
      <ModalTrigger className="relative flex justify-center group/modal-btn w-20 h-32 overflow-hidden">
        <span
          className=" bg-orange-500 text-white rounded-full py-2 px-4 inline-block text-sm font-medium transform rotate-90 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap"
          onClick={onClick}
        >
          Get 20% off
        </span>
      </ModalTrigger>
    </div>
  );
};

export default FixedRightButton;
