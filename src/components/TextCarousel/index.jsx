import React, { useState } from "react";

import {
  CheckMarkStarIcon,
  TruckIcon,
  HeartOutlineIcon,
  ArrowSyncCheckMarkIcon,
} from "../SVGIcons";
import "./TextCarousel.css";

const PrevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M13.75 4.50781L12.9414 3.75L6.25 10L12.9414 16.25L13.75 15.4961L7.87109 10L13.75 4.50781Z"
      fill="white"
    />
  </svg>
);
const NextIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
  >
    <path
      d="M6.25 4.50781L7.05859 3.75L13.75 10L7.05859 16.25L6.25 15.4961L12.1289 10L6.25 4.50781Z"
      fill="white"
    />
  </svg>
);

const items = [
  <div className="flex items-center gap-2 shrink-0">
    <CheckMarkStarIcon />
    <p className="text-xs leading-none text-white capitalize">
      30-DAY SATISFACTION GUARANTEE
    </p>
  </div>,
  <div className="flex items-center gap-2 shrink-0">
    <TruckIcon />
    <p className="text-xs leading-none text-white capitalize">
      Free delivery on orders over $40.00
    </p>
  </div>,
  <div className="flex items-center gap-2 shrink-0">
    <HeartOutlineIcon />
    <p className="text-xs leading-none text-white capitalize">
      50.000+ HAPPY CUSTOMERS
    </p>
  </div>,
  <div className="flex items-center gap-2 shrink-0">
    <ArrowSyncCheckMarkIcon />
    <p className="text-xs leading-none text-white capitalize">
      100% Money Back Guarantee
    </p>
  </div>,
];

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextItem = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
      setAnimate(false);
    }, 300);
  };

  const prevItem = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentIndex(currentIndex === 0 ? items.length - 1 : currentIndex - 1);
      setAnimate(false);
    }, 300);
  };

  return (
    <div className="text-carousel md:hidden">
      <button onClick={prevItem} className="prev-button">
        <PrevIcon />
      </button>
      <div className={`carousel-item ${animate ? "animate" : ""}`}>
        {items[currentIndex]}
      </div>
      <button onClick={nextItem} className="next-button">
        <NextIcon />
      </button>
    </div>
  );
};

export default TextCarousel;
