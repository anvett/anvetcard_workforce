

"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const EducationExperience = ({
  entries = [],
  titleOptions = {},
  blockOptions = {},
  accordionOptions = {},
  textOptions = {},
  behaviorOptions = {},
}) => {
  // 📦 Desestructuración con valores por defecto
  const {
    text: componentTitle = "Formación Académica y Experiencia",
    color: componentTitleColor = "text-black",
    size: componentTitleSize = "text-2xl sm:text-3xl",
  } = titleOptions;

  const {
    gap = "gap-4",
    bgColor: componentBgColor = "bg-transparent",
  } = blockOptions;

  const {
    bgColor = "bg-primary",
    borderColor = "",
    contentBgColor = "bg-light",
  } = accordionOptions;

  const {
    titleColor: titleTextColor = "text-primary",
    titleSize = "text-lg sm:text-xl",
    detailColor: detailsTextColor = "text-secondary",
    detailSize = "text-sm sm:text-base",
  } = textOptions;

  const {
    useBulletPoints = true,
    animate = true,
  } = behaviorOptions;

  // 🌀 Animaciones
  const fadeIn = animate
    ? {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
        }),
      }
    : {};

  const slideDown = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1, transition: { duration: 0.6, ease: "easeInOut" } },
    exit: { height: 0, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  const zoomOnHover = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // 🛡️ Fallback si no hay entradas
  if (!entries || entries.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No hay formación o experiencia registrada.
      </div>
    );
  }

  return (
    <div className={`container mx-auto p-4 py-spacing-3 ${componentBgColor} ${gap}`}>
      <h2 className={`text-center font-primary font-bold mb-spacing-2 ${componentTitleColor} ${componentTitleSize}`}>
        {componentTitle}
      </h2>

      {entries?.map((entry, index) => (
        <motion.div
        key={index}
        className="p-2 w-full"
        custom={index}
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <motion.div
          initial="rest"
          whileHover="hover"
          animate="rest"
          className={`collapse collapse-arrow border rounded-box ${bgColor} ${borderColor}`}
          variants={zoomOnHover}
        >
          {/* 🔐 Input con atributos de accesibilidad */}
          <input
            type="checkbox"
            className="peer"
            id={`toggle-${index}`}
            hidden
            aria-controls={`panel-${index}`}
            aria-expanded="false"
          />
      
          {/* 🔗 Etiqueta accesible */}
          <label
            htmlFor={`toggle-${index}`}
            id={`label-${index}`}
            className={`collapse-title font-medium block cursor-pointer whitespace-normal break-words ${titleSize} ${titleTextColor}`}
          >
            {entry.title}  <strong>{entry.date}</strong>
          </label>
      
          {/* 📦 Contenido con roles y referencias */}
          <AnimatePresence>
            <motion.div
              id={`panel-${index}`}
              role="region"
              aria-labelledby={`label-${index}`}
              className={`collapse-content peer-checked:block hidden ${contentBgColor} ${detailsTextColor} ${detailSize}`}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={slideDown}
            >
              <ul className={`${useBulletPoints ? "list-disc" : "list-none"} pt-spacing-1 pl-5`}>
                {entry.details?.map((detail, i) => (
                  <li key={i} className="py-2 sm:py-3">
                    {detail}
                  </li>
                ))}
              </ul>
      
              {entry.image && (
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeIn" } }}
                >
                  <Image
                    src={entry.image}
                    alt="Certificate"
                    width={600}
                    height={400}
                    loading="lazy"
                    className="my-spacing-2 w-full max-w-full h-auto sm:max-w-md lg:max-w-lg"
                  />
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </motion.div>
      
      ))}
    </div>
  );
};

export default EducationExperience;
