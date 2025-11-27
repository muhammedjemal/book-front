import React, { useState, useRef, useEffect, useCallback } from "react";
import { Transition } from "react-transition-group";
import StarIcon from "./StarIcon"; // Ensure you have Heroicons installed

type AnimatedWidths = Record<string, string>;

type Review = {
  label: string;
  width: string;
  percentage: string;
};

const ReviewDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animatedWidths, setAnimatedWidths] = useState<AnimatedWidths>({});
  const reviewRef = useRef<HTMLDivElement>(null);
  const transitionRef = useRef<HTMLDivElement>(null);

  const dropdownDuration = 300; // Duration for the dropdown animation
  const sliderDuration = 700; // Duration for the slider fill animation

  const toggleDropdown = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const sliderElems = Array.from(
      transitionRef.current?.querySelectorAll("[data-slider]") || []
    );
    const newAnimatedWidth: AnimatedWidths = {};

    if (isOpen) {
      sliderElems.forEach((slider) => {
        if (slider instanceof HTMLElement) {
          const width = slider.getAttribute("data-width");
          if (width) {
            newAnimatedWidth[slider.id] = width;
          }
        }
      });
    } else {
      sliderElems.forEach((slider) => {
        if (slider instanceof HTMLElement) {
          newAnimatedWidth[slider.id] = "0%";
        }
      });
    }
    requestAnimationFrame(() => {
      setAnimatedWidths(newAnimatedWidth);
    });
  }, [isOpen]);

  const reviews: Review[] = [
    { label: "5 star", width: "100%", percentage: "100%" },
    { label: "4 star", width: "0%", percentage: "0%" },
    { label: "3 star", width: "0%", percentage: "0%" },
    { label: "2 star", width: "0%", percentage: "0%" },
    { label: "1 star", width: "0%", percentage: "0%" },
  ];

  const renderStarIcons = (count: number, isFilled: boolean) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`w-4 h-4 me-1 ${
            i < count || isFilled
              ? "text-yellow-300"
              : "text-gray-300 dark:text-gray-500"
          }`}
          aria-hidden="true"
          style={{ fill: i < count || isFilled ? "#eab308" : "" }}
        />
      );
    }
    return stars;
  };

  return (
    <div ref={transitionRef} className="relative">
      <button
        onClick={toggleDropdown}
        className="text-lg font-medium text-green-600 dark:text-green-500 hover:underline flex items-center  "
      >
        <div className="text-xl flex items-center">
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5.0
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            out of
          </p>
          <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
            5
          </p>
        </div>{" "}
      </button>

      <Transition
        in={isOpen}
        timeout={dropdownDuration}
        unmountOnExit

        // make this open by default initially
      >
        {(state) => (
          <div
            className="absolute top-full mt-2 left-0 z-10 bg-white dark:bg-gray-800 rounded-md shadow-lg py-4 px-6 w-full max-w-sm"
            style={{
              transition: `opacity ${dropdownDuration}ms ease-in-out, transform ${dropdownDuration}ms ease-in-out`,
              opacity: state === "entered" ? 1 : 0,
              transform:
                state === "entered" ? "translateY(0)" : "translateY(-10px)",
            }}
          >
            <div className="flex items-center mb-2">
              {renderStarIcons(4, true)}
              {renderStarIcons(1, false)}
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5.0
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                out of
              </p>
              <p className="ms-1 text-sm font-medium text-gray-500 dark:text-gray-400">
                5
              </p>
            </div>
            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
              1,745 global ratings
            </p>
            {reviews.map(({ label, width, percentage }) => (
              <div className="flex items-center mt-4" key={label}>
                <a
                  href="#"
                  className="text-md font-medium text-green-600 dark:text-green-500 hover:underline"
                >
                  {label}
                </a>
                <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                  <div
                    id={`slider-${label}`}
                    data-slider="true"
                    data-width={width}
                    className="h-5 bg-yellow-300 rounded transition-width-fill"
                    style={{
                      width: animatedWidths[`slider-${label}`] || "100%",
                      transitionDuration: `${sliderDuration}ms`,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-teal-600 dark:text-gray-400">
                  {percentage}
                </span>
              </div>
            ))}
          </div>
        )}
      </Transition>
    </div>
  );
};

export default ReviewDropdown;
