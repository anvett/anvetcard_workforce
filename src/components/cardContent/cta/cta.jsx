
"use client";

import React from "react";
import { motion } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

const CallToAction = ({ titleOptions = {}, buttonOptions = {}, layoutOptions = {} }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  // 🎯 Título
  const {
    text: ctaText = "¡Únete a Nosotros!",
    color: titleColor = "text-white",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleFontWeight = "font-bold",
    font: fontType = "font-primary",
  } = titleOptions;

  // 📞 Botón
  const {
    text: buttonText = "Contáctanos",
    phoneNumber = "593999999999",
    type = "btn-solid",
    bgColor: buttonBgColor = "bg-primary",
    textColor: buttonTextColor = "text-light",
    borderColor: buttonBorderColor = "border border-transparent",
    hoverColor: buttonHoverColor = "hover:bg-accent hover:text-primary",
    textSize: buttonTextSize = "text-size-2 sm:text-size-4",
  } = buttonOptions;

  // 🎨 Layout general
  const {
    bgColor: componentBgColor = "bg-light",
    borderColor = "border border-gray-300",
    borderRadius = "rounded-lg",
    shadow = "shadow-lg",
    backgroundImage = "",
  } = layoutOptions;

  const encodedMessage = encodeURIComponent(`Hola, estoy interesado en ${ctaText}`);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <section
      ref={ref}
      className={`relative py-spacing-8 text-center overflow-hidden ${componentBgColor} ${borderColor} ${borderRadius} ${shadow}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `url('${backgroundImage}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }
          : {}
      }
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Contenido con z-index */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        {/* Título animado */}
        <motion.h2
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
          className={`${titleColor} ${titleSize} ${titleFontWeight} ${fontType}`}
          initial={{ y: -50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {ctaText}
        </motion.h2>

        {/* Botón animado */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label={`Enviar mensaje por WhatsApp: ${ctaText}`}
          className={`inline-block mt-spacing-4 px-6 py-3 font-bold rounded-md transition-all duration-300 ${type} ${buttonBgColor} ${buttonTextColor} ${buttonBorderColor} ${buttonHoverColor} ${buttonTextSize}`}
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default CallToAction;
