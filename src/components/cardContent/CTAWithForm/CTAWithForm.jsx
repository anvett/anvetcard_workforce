"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import ContactForm from "../contactForm/ContactForm";

const CTAWithForm = ({
  titleOptions = {},
  buttonOptions = {},
  layoutOptions = {},
  modalOptions = {},
  formOptions = {},
}) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [open, setOpen] = useState(false);

  // 🎯 Título del CTA
  const {
    text: ctaText = "¡Únete a Nosotros!",
    color: titleColor = "text-white",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleFontWeight = "font-bold",
    font: fontType = "font-primary",
  } = titleOptions;

  // 🔘 Botón de apertura del modal
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

  // 🎨 Layout del CTA
  const {
    bgColor: componentBgColor = "bg-light",
    borderColor = "border border-gray-300",
    borderRadius = "rounded-lg",
    shadow = "shadow-lg",
    backgroundImage = "",
  } = layoutOptions;

  // 🧩 Modal styles
  const {
    modalBg = "bg-white",
    modalTextColor = "text-dark",
    modalPadding = "p-6",
    modalRounded = "rounded-xl",
    modalShadow = "shadow-xl shadow-secondary",
    buttonCloseText = "Cerrar",
    buttonCloseStyles = "btn btn-secondary mt-4",
  } = modalOptions;

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

      {/* Contenido principal */}
      <div className="relative max-w-7xl mx-auto px-4 z-10">
        <motion.h2
          style={{ textShadow: "2px 2px 6px rgba(0,0,0,0.8)" }}
          className={`${titleColor} ${titleSize} ${titleFontWeight} ${fontType}`}
          initial={{ y: -50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {ctaText}
        </motion.h2>

        <div className="flex justify-center mt-spacing-4">
          <motion.button
            onClick={() => setOpen(true)}
            className={`px-4 py-3 font-bold transition-all duration-300 ${type} ${buttonBgColor} ${buttonTextColor} ${buttonBorderColor} ${buttonHoverColor} ${buttonTextSize}`}
            initial={{ y: 50, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
          >
            {buttonText}
          </motion.button>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`w-full max-w-xl mx-auto ${modalBg} ${modalTextColor} ${modalRounded} ${modalPadding} ${modalShadow}`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <ContactForm phoneNumber={phoneNumber} {...formOptions} />
              <div className="text-center">
                <button onClick={() => setOpen(false)} className={buttonCloseStyles}>
                  {buttonCloseText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CTAWithForm;
