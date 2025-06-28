"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GallerySlider = ({
  items = [],
  titleOptions = {},
  carouselOptions = {},
  itemOptions = {},
  overlayOptions = {},
  indicatorOptions = {},
}) => {
  // 🎯 Título general del slider
  const {
    text = "Galería",
    color: titleColor = "text-primary",
    size: titleSize = "text-size-5 sm:text-size-7",
    alignment: titleAlignment = "text-center",
    margin = "mb-spacing-3",
  } = titleOptions;

  // ⚙️ Comportamiento
  const {
    transitionDuration = 2000,
    delay = 3000,
    stopAtEnd = true,
    restartOnClick = true,
  } = carouselOptions;

  // 🎨 Estilo de cada imagen
  const {
    width = "w-72 sm:w-96 md:w-[30rem]",
    height = "h-48 sm:h-60 md:h-80",
    rounded = "rounded-xl",
    shadow = "shadow-xl shadow-secondary",
    objectFit = "object-cover",
  } = itemOptions;

  // 📝 Overlay
  const {
    showOverlay = true,
    overlayTextSize = "text-size-2 sm:text-size-3",
    overlayTextColor = "text-light",
    overlayFont = "font-primary",
    overlayBg = "bg-black bg-opacity-50",
  } = overlayOptions;

  // 🔘 Indicadores
  const {
    showIndicators = true,
    indicatorSize = "w-3 h-3",
    activeColor = "bg-primary",
    inactiveColor = "bg-accent",
    gap = "gap-2",
  } = indicatorOptions;

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
    <section className="w-full py-spacing-4 px-4">
      {/* ✅ Título */}
      {text && (
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${titleColor} ${titleSize} ${titleAlignment} ${margin} font-bold`}
        >
          {text}
        </motion.h2>
      )}

      {/* ✅ Slider */}
      <div className="w-full flex flex-col justify-center items-center" onClick={handleClick}>
        <div className={`relative ${width} ${height} overflow-hidden`}>
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              } ${rounded} ${shadow}`}
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
              {showOverlay && item.text && (
                <div
                  className={`absolute bottom-0 w-full text-center px-2 py-2 ${overlayBg} ${overlayTextColor} ${overlayFont} ${overlayTextSize}`}
                >
                  {item.text}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* ✅ Puntos indicadores */}
        {showIndicators && (
          <div className={`flex justify-center mt-spacing-2 ${gap}`}>
            {items.map((_, idx) => (
              <span
                key={idx}
                className={`rounded-full transition-all duration-300 ${
                  idx === currentIndex ? activeColor : inactiveColor
                } ${indicatorSize}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySlider;
