import React from "react";
import { motion } from "framer-motion";

const ReplicatedAddToCartButton = ({ children, onClick, className }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`button button--outline w-full relative overflow-hidden ${className}`}
      whileHover={{}}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        className="absolute inset-0 bg-orange-700 border-green-500 border z-0"
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 0, originX: 0 }}
        transition={{ type: "tween" }}
        style={{ background: "orange-100" }}
        whileHover={{ scaleX: 1, originX: 0 }}
      />
    </motion.button>
  );
};

export default ReplicatedAddToCartButton;
