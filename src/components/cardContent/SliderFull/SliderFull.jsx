"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import { motion } from "framer-motion";

const FullSlider = ({
  slides = [],
  titleOptions = {},
  carouselOptions = {},
  thumbOptions = {},
  labelOptions = {},
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  // 🎨 Título
  const {
    text: componentTitle = "Galería Destacada",
    color: titleColor = "text-primary",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleFontWeight = "font-bold",
  } = titleOptions;

  // 🎨 Carrusel
  const {
    bgColor: componentBgColor = "bg-light",
    borderColor = "border border-gray-300",
    borderRadius = "rounded-xl",
    shadow = "shadow-lg",
    imageSize = "max-h-[400px]",
    gap = "gap-6",
  } = carouselOptions;

  // 🎨 Miniaturas
  const {
    thumbSize = "h-16 w-24",
    activeThumbBorder = "border-2 border-primary",
  } = thumbOptions;

  // 🎨 Etiquetas
  const {
    show = true,
    bgColor = "bg-primary",
    textColor = "text-white",
    textSize = "text-sm",
    position = "top-left",
    rounded = "rounded-md",
    labelShadow = "shadow-lg",
    px = "px-3",
    py = "py-1",
  } = labelOptions;

  const getPositionClass = (pos) => {
    switch (pos) {
      case "top-right":
        return "top-4 right-4";
      case "bottom-left":
        return "bottom-4 left-4";
      case "bottom-right":
        return "bottom-4 right-4";
      case "bottom-center":
        return "bottom-4 left-1/2 -translate-x-1/2";
      default:
        return "top-4 left-4";
    }
  };

  if (!slides.length) {
    return (
      <div className="text-center text-gray-500 py-8">
        No hay imágenes para mostrar.
      </div>
    );
  }

  return (
    <section className={`py-spacing-5 ${componentBgColor} ${gap}`}>
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb-spacing-4`}>
        {componentTitle}
      </h2>

      {/* ✅ Slider principal */}
      <div className={`relative max-w-5xl mx-auto px-4 ${borderColor} ${borderRadius} ${shadow}`}>
        <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden">
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="keen-slider__slide w-full flex justify-center items-center relative"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full flex justify-center items-center relative"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`object-contain mx-auto ${imageSize}`}
                />
                {show && slide.label && (
                  <div
                    className={`absolute ${getPositionClass(position)} ${bgColor} ${textColor} ${textSize} ${rounded} ${shadow} ${px} ${py} backdrop-blur-md`}
                  >
                    {slide.label}
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>

        {/* ✅ Flechas */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-dark text-light p-2 rounded-full shadow hover:bg-primary transition"
          aria-label="Anterior"
        >
          ◀
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-dark text-light p-2 rounded-full shadow hover:bg-primary transition"
          aria-label="Siguiente"
        >
          ▶
        </button>
      </div>

      {/* ✅ Miniaturas */}
      <div className="flex justify-center flex-wrap gap-3 mt-6">
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`transition border rounded-md overflow-hidden ${thumbSize} ${
              index === currentSlide ? activeThumbBorder : "border border-gray-300"
            }`}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            aria-label={`Ir a ${slide.title}`}
          >
            <img
              src={slide.image}
              alt={`Miniatura ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
};

export default FullSlider;
