"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import VisitCounterAPI from "../utils/VisitCounterApi/VisitCounterApi";

const Footer = ({
  // 🎨 Visual
  bgColor = "bg-footer",
  bgSecondColor = "bg-dark",
  textColor = "text-base-content",
  borderColor = "border-gray-400",

  // 🔗 Navegación
  footerLinks = [],
  linkTextSize = "text-base",

  // © Copyright
  copyrightText = "© 2024 Anvetcorp SAS. All rights reserved.",
  copyrightColor = "text-secondary",
  copyrightSize = "text-sm",

  // 🖼️ Branding
  footerLogo = "",

  // 🔢 Contador de visitas
  counterOptions = {
    namespace: "anvetcard",
    counterKey: "default",
    buttonLabel: "Contador de visitas",
    buttonStyles: "btn btn-outline",
    modalMessageText: "Actualmente {count} personas han visitado tu sitio.",
    modalBg: "bg-white",
    modalTextColor: "text-black",
    modalPadding: "p-6",
    modalRounded: "rounded-lg",
    modalShadow: "shadow-lg",
    buttonCloseText: "Cerrar",
    buttonCloseStyles: "btn btn-primary mt-4",
  },
}) => {
  return (
    <>
      {/* 🔗 Footer principal con logo y links */}
      <footer className={`${bgColor} py-4 ${textColor} ${borderColor} border-t-2`}>
        {/* Logo */}
        {footerLogo && (
          <div className="flex justify-center mb-2">
            <Image src={footerLogo} width={200} height={200} alt="Footer Logo" />
          </div>
        )}

        {/* Links */}
        <ul className="flex justify-center gap-4 mb-2">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={`${linkTextSize} hover:text-secondary`}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contador de visitas */}
        {/* <div className="mt-4 mb-2 flex justify-center">
          <VisitCounterAPI {...counterOptions} />
        </div> */}
      </footer>

      {/* © Derechos de autor */}
      <footer className={`text-center p-4 ${bgSecondColor} ${textColor}`}>
        <p className={`${copyrightSize} ${copyrightColor}`}>{copyrightText}</p>
      </footer>
    </>
  );
};

export default Footer;
