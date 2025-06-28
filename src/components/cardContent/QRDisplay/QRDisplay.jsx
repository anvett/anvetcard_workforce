"use client";

import React from "react";
import Image from "next/image";

const QRDisplay = ({
  titleOptions = {},
  qrOptions = {},
}) => {
  const {
    text: componentTitle = "Escanea el Código QR",
    color: titleColor = "text-black",
    size: titleSize = "text-2xl sm:text-3xl",
    weight: titleFontWeight = "font-bold",
  } = titleOptions;

  const {
    image = "",
    size: qrSize = "w-48 h-48",
    alt = "Código QR",
    borderColor = "border border-gray-300",
    borderRadius = "rounded-lg",
    shadow = "shadow-lg",
    bgColor = "bg-transparent",
    gap = "gap-4",
  } = qrOptions;

  return (
    <div className={`flex flex-col items-center justify-center p-spacing-3 ${bgColor} ${gap}`}>
      {/* ✅ Título */}
      <h2 className={`text-center ${titleColor} ${titleSize} ${titleFontWeight} `}>
        {componentTitle}
      </h2>

      {/* ✅ Imagen QR */}
      <div className={`relative ${qrSize} my-spacing-3 ${borderColor} ${borderRadius} ${shadow}`}>
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default QRDisplay;
