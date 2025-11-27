// // Overlay.jsx
// import React from "react";
// import { motion } from "framer-motion";

// const Overlay = ({ className }) => {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//       }}
//       animate={{
//         opacity: 1,
//         backdropFilter: "blur(10px)",
//       }}
//       exit={{
//         opacity: 0,
//         backdropFilter: "blur(0px)",
//       }}
//       className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
//     ></motion.div>
//   );
// };

// export default Overlay;
// Overlay.jsx
import React from "react";
import { motion } from "framer-motion";

const Overlay = ({ className }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      style={{ backdropFilter: "blur(10px)" }}
      className={`fixed inset-0 h-full w-full bg-black bg-opacity-50 z-50 ${className}`}
    ></motion.div>
  );
};

export default Overlay;
