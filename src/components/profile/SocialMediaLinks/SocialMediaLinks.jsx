"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const SocialMediaLinks = ({
  socialLinks = [],
  variant = "icon-only", // "with-text" | "icon-only"
  layoutOptions = {},
  buttonOptions = {},
  animate = true,
}) => {
  const {
    layout = "row",
    gap = "gap-4",
    padding = "p-4",
    componentBgColor = "bg-transparent",
  } = layoutOptions;

  const {
    buttonType = "btn-solid",
    bgColor = "",
    textColor = "",
    borderColor = "",
    hoverColor = "",
    iconSize = "w-6 h-6",
    buttonTextSize = "text-sm sm:text-base md:text-lg",
  } = buttonOptions;

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

  return (
    <div
      className={`flex ${
        layout === "row" ? "flex-wrap justify-center" : "flex-col items-center"
      } ${gap} ${padding} ${componentBgColor}`}
    >
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.type}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center ${
            variant === "with-text" ? "gap-2" : ""
          } ${buttonType} ${bgColor} ${textColor} ${borderColor} ${hoverColor}`}
          custom={index}
          initial={animate ? "hidden" : false}
          animate={animate ? "visible" : false}
          variants={fadeIn}
          whileHover={
            animate ? { scale: 1.1, y: -5, transition: { duration: 0.3 } } : {}
          }
          aria-label={`Abrir ${link.type}`}
        >
          <Image
            src={`/assets/icons/${link.icon}`}
            alt={`${link.type} icon`}
            className={iconSize}
            width={40}
            height={40}
          />
          {variant === "with-text" && (
            <span className={buttonTextSize}>{link.text}</span>
          )}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaLinks;
