"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const ProfileCard = ({
  profile,
  whatsappMessage,
  bgColor = "bg-white",
  textColor = "text-black",
  borderColor = "border-gray-300",
  nameSize = "text-xl sm:text-2xl md:text-3xl",
  titleSize = "text-lg sm:text-xl md:text-2xl",
  descriptionSize = "text-base sm:text-lg md:text-xl",
  buttonTextSize = "text-sm sm:text-base md:text-lg",
  buttonType = "btn-solid",
  buttonBgColor = "bg-primary",
  buttonTextColor = "text-white",
  animationDuration = 0.6,
}) => {
  const whatsappLink = `https://wa.me/${profile.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: animationDuration, ease: "easeInOut" } },
  };

  const imageZoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: animationDuration + 0.2, ease: "easeInOut" } },
  };

  return (
    <div className={`flex justify-center p-5 w-full ${bgColor} ${borderColor} border rounded-lg`}>
      <div className="card w-full max-w-sm shadow-xl text-center sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Imagen del perfil con animación */}
        <figure className="px-10 pt-10 bg-transparent">
          <motion.div initial="hidden" animate="visible" variants={imageZoomIn}>
            <Image
              src={profile.image}
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-full mb-spacing-2"
            />
          </motion.div>
        </figure>

        {/* Información del perfil con animación */}
        <div className={`card-body bg-transparent ${textColor}`}>
          <motion.h2 initial="hidden" animate="visible" variants={fadeInUp} className={`${nameSize} font-bold`}>
            {profile.name}
          </motion.h2>
          <motion.h4 initial="hidden" animate="visible" variants={fadeInUp} className={`${titleSize} font-semibold`}>
            {profile.title}
          </motion.h4>
          <motion.p initial="hidden" animate="visible" variants={fadeInUp} className={`${descriptionSize}`}>
            {profile.description}
          </motion.p>

          {/* Botón de conectar con animación hover */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="card-actions justify-center mt-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonType} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize}`.trim()}
            >
              Conectar
            </a>
            <a
              href="/assets/vcards/aveintimilla_contact.vcf"
              download="anvetcorp_contact.vcf"
              className={`${buttonType} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize}`.trim()}
            >
              Guardar Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;





