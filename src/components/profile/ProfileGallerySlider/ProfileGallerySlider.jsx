"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GallerySlider = ({
  items = [],
  titleOptions = {},
  carouselOptions = {},
  itemOptions = {},
}) => {
  const {
    transitionDuration = 1000,
    delay = 3000,
    stopAtEnd = true,
    restartOnClick = true,
  } = carouselOptions;

  const {
    width = "w-full",
    height = "h-full",
    rounded = "rounded-xl",
    shadow = "",
    objectFit = "object-cover",
  } = itemOptions;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [stopped, setStopped] = useState(false);

  useEffect(() => {
    if (stopAtEnd && stopped) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        if (next >= items.length) {
          if (stopAtEnd) {
            setStopped(true);
            return prev;
          }
          return 0;
        }
        return next;
      });
    }, delay);
    return () => clearInterval(interval);
  }, [currentIndex, delay, stopAtEnd, stopped, items.length]);

  const handleClick = () => {
    if (restartOnClick) {
      setCurrentIndex(0);
      setStopped(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${width} ${height} ${rounded} ${shadow}`}
      onClick={handleClick}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          initial={false}
          animate={{
            opacity: index === currentIndex ? 1 : 0,
            scale: index === currentIndex ? 1 : 0.95,
          }}
          transition={{ duration: transitionDuration / 1000 }}
        >
          <img
            src={item.image}
            alt={item.title}
            className={`w-full h-full ${objectFit} ${rounded}`}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default GallerySlider;

