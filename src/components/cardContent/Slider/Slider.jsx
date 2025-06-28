"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const Slider = ({
  slides = [],
  titleOptions = {},
  carouselOptions = {},
  buttonOptions = {},
  behaviorOptions = {},
}) => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // 🎨 Desestructurar props agrupadas
  const {
    text: componentTitle = "Galería de Imágenes",
    color: titleColor = "text-black",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleFontWeight = "font-bold",
  } = titleOptions;

  const {
    bgColor: componentBgColor = "bg-transparent",
    borderColor: carouselBorderColor = "border border-gray-300",
    borderRadius: carouselBorderRadius = "rounded-lg",
    shadow: carouselShadow = "shadow-lg",
    imageSize = "w-full lg:w-3/5",
    gap = "gap-4",
  } = carouselOptions;

  const {
    bgColor: buttonBgColor = "bg-primary",
    textColor: buttonTextColor = "text-white",
    borderColor: buttonBorderColor = "border border-gray-300",
    hoverColor: buttonHoverColor = "hover:bg-secondary",
    activeBgColor = "bg-dark",
    activeTextColor = "text-white",
  } = buttonOptions;

  const {
    animationSpeed = 0.8,
    loop = false,
    autoplay = false,
    autoplaySpeed = 3000,
    showIndicators = true,
  } = behaviorOptions;

  // 🔁 Navegación
  const handleScrollToSlide = (index) => {
    const slideElement = document.querySelector(`#slide${index}`);
    if (slideElement && carouselRef.current) {
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  // ⏱️ Autoplay + loop funcional
  useEffect(() => {
    if (autoplay && slides.length > 1) {
      const interval = setInterval(() => {
        const nextIndex = loop
          ? (currentIndex + 1) % slides.length
          : Math.min(currentIndex + 1, slides.length - 1);
        handleScrollToSlide(nextIndex);
      }, autoplaySpeed);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoplay, autoplaySpeed, loop, slides.length]);

  // 🛡️ Fallback si no hay imágenes
  if (!slides.length) {
    return <div className="text-center text-gray-500 py-8">No hay imágenes para mostrar.</div>;
  }

  return (
    <section
      className={`w-full container mx-auto py-spacing-3 ${componentBgColor} ${gap}`}
      role="region"
      aria-label="Carrusel de imágenes destacadas"
    >
      {/* ✅ Título */}
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb-spacing-4`}>
        {componentTitle}
      </h2>

      {/* ✅ Carrusel */}
      <div
        ref={carouselRef}
        className={`carousel w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth ${carouselBorderColor} ${carouselBorderRadius} ${carouselShadow}`}
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full snap-start"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: animationSpeed, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={slide.image}
              className={`${imageSize} mx-auto`}
              alt={slide.title || `Imagen ${index + 1}`}
            />
          </motion.div>
        ))}
      </div>

      {/* ✅ Navegación */}
      {showIndicators ? (
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, index) => (
            <span
              key={index}
              role="button"
              aria-label={`Ir al slide ${index + 1}`}
              aria-current={index === currentIndex ? "true" : "false"}
              className={`h-3 w-3 rounded-full cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => handleScrollToSlide(index)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center mt-spacing-2 flex flex-wrap gap-2 justify-center">
          {slides.map((slide, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={index}
                aria-label={`Ir a ${slide.title}`}
                aria-current={isActive}
                className={`w-full sm:w-[180px] text-center px-4 py-2 rounded-md font-semibold transition-all
          ${
            isActive ? `${activeBgColor} ${activeTextColor}` : `${buttonBgColor} ${buttonTextColor}`
          }
          ${buttonBorderColor} ${buttonHoverColor}`}
                onClick={() => handleScrollToSlide(index)}
              >
                {slide.title}
              </button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Slider;
