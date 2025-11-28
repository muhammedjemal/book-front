"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { createPopper } from "@popperjs/core";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";

const NumberDropdown = ({ onSelect, pathname }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const dropdownRef = useRef(null);
  const numbers = Array.from({ length: 100 }, (_, i) => i + 1);
  const initialDisabledNumbers = [1, 2, 3, 5, 10, 22, 100];
  const [disabledNumbers, setDisabledNumbers] = useState(
    initialDisabledNumbers
  );
  const [hoveredNumber, setHoveredNumber] = useState(null);
  const popperInstances = useRef({});
  const tooltipElements = useRef({});
  const [cartItems, setCartItems] = useState([]);

  const updateCart = useCallback((newCartItems) => {
    setCartItems(newCartItems);
    if (typeof window !== "undefined") {
      Cookies.set("cart", JSON.stringify(newCartItems));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCart = Cookies.get("cart");
      try {
        if (storedCart) {
          setCartItems(JSON.parse(storedCart));
        }
      } catch (error) {
        console.error("Error parsing cart cookie:", error);
        Cookies.remove("cart");
        setCartItems([]);
      }
    }
  }, []);

  useEffect(() => {
    const cartNumbers = cartItems
      ? cartItems
          .filter((item) => item.pathname === pathname)
          .map((item) => item.selectedNumberVar)
      : [];

    const newDisabledNumbers = [...initialDisabledNumbers, ...cartNumbers];

    setDisabledNumbers(newDisabledNumbers);
  }, [cartItems, pathname]);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNumberClick = (number) => {
    if (!disabledNumbers.includes(number)) {
      setSelectedValue(number);
      onSelect(number);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      // Clean up all Popper instances on component unmount
      for (const key in popperInstances.current) {
        popperInstances.current[key].destroy();
      }
    };
  }, []);

  const handleMouseEnter = (number, event) => {
    if (disabledNumbers.includes(number)) {
      setHoveredNumber(number);
      const button = event.target;
      if (!tooltipElements.current[number]) {
        const tooltip = document.createElement("div");
        tooltip.textContent = "Sorry, this print number is taken!";
        tooltip.classList.add(
          "absolute",
          "bg-gray-800",
          "text-white",
          "text-xs",
          "py-1",
          "px-2",
          "rounded",
          "z-50",
          "whitespace-nowrap",
          "pointer-events-none"
        );
        button.parentNode.appendChild(tooltip);
        tooltipElements.current[number] = tooltip;
      } else {
        tooltipElements.current[number].style.display = "block";
      }
      if (!popperInstances.current[number]) {
        popperInstances.current[number] = createPopper(
          button,
          tooltipElements.current[number],
          {
            placement: "bottom",
          }
        );
      }
    }
  };

  const handleMouseLeave = (number) => {
    setHoveredNumber(null);
    if (tooltipElements.current[number]) {
      tooltipElements.current[number].style.display = "none";
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, scaleY: 0.9 },
    visible: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.3 },
    },
    exit: { opacity: 0, scaleY: 0.9, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.02 },
    }),
    exit: { opacity: 0, y: -10 },
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full px-4 py-2 font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
        onClick={toggleDropdown}
      >
        {selectedValue === null ? "SELECT YOUR PRINT NUMBER" : selectedValue}
        <svg
          className={`ml-2 -mr-1 h-5 w-5 text-gray-400 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute z-10 mt-1 w-72 bg-white rounded-md shadow-lg focus:outline-none overflow-hidden max-h-[300px] overflow-y-auto grid grid-cols-5"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropdownVariants}
            style={{ transformOrigin: "top" }}
          >
            {numbers.map((number, index) => {
              const isDisabled = disabledNumbers.includes(number);
              return (
                <motion.div
                  key={number}
                  className="relative"
                  onMouseEnter={(e) => handleMouseEnter(number, e)}
                  onMouseLeave={() => handleMouseLeave(number)}
                >
                  <motion.div
                    className={`block px-4 py-2 text-gray-700 cursor-pointer text-center
                                    ${
                                      isDisabled
                                        ? "bg-yellow-100 text-gray-400 opacity-50 pointer-events-none"
                                        : "hover:bg-green-200"
                                    } ${
                      selectedValue === number ? "bg-green-500 text-white" : ""
                    }`}
                    onClick={() => handleNumberClick(number)}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    custom={index}
                  >
                    {number}
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NumberDropdown;
