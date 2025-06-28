"use client";

import React from "react";
import { motion } from "framer-motion";

const VideoPlayer = ({
  videoUrl,
  titleOptions = {},
  containerOptions = {},
}) => {
  // 🎨 Desestructurar props agrupadas
  const {
    text: componentTitle = "Reproductor de Video",
    color: titleColor = "text-black",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleFontWeight = "font-bold",
  } = titleOptions;

  const {
    bgColor: componentBgColor = "bg-transparent",
    borderColor = "border border-gray-300",
    borderRadius = "rounded-lg",
    shadow = "shadow-lg",
    aspectRatioMobile = "9:16",
    aspectRatioDesktop = "16:9",
  } = containerOptions;

  // 🧠 Generar clases responsive
  const aspectClass = `aspect-[${aspectRatioMobile.replace(":", "/")}] sm:aspect-[${aspectRatioDesktop.replace(":", "/")}]`;

  return (
    <motion.div
      className={`flex flex-col items-center justify-center py-spacing-3 gap-spacing-2 sm:gap-spacing-3 ${componentBgColor}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* ✅ Título */}
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} mb-4 px-spacing-1`}>
        {componentTitle}
      </h2>

      {/* ✅ Video o fallback */}
      {videoUrl ? (
        <div className={`relative w-90 max-w-lg sm:w-280 sm:max-w-4xl  p-2 sm:p-0 ${aspectClass} ${borderColor} ${borderRadius} ${shadow}`}>
          <video
            src={videoUrl}
            className="w-full h-full object-contain"
            controls
            preload="metadata"
            aria-label={componentTitle}
            title={componentTitle}
          />
        </div>
      ) : (
        <p className="text-center text-red-500">⚠️ Video no disponible</p>
      )}
    </motion.div>
  );
};

export default VideoPlayer;
