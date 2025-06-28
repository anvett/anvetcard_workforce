
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GallerySlider from "@/components/profile/ProfileGallerySlider/ProfileGallerySlider";

const ProfileCard = ({
  profile,
  layoutOptions = {},
  buttonOptions = {},
  imageOptions = {},
  animationOptions = {},

  // 🎠 Nuevo: usar GallerySlider como imagen
  useSliderAsProfile = false,
  profileSliderItems = [],
}) => {
  // 🎨 Opciones de layout
  const {
    bgColor = "bg-white",
    textColor = "text-black",
    borderColor = "border-gray-300",
    nameSize = "text-xl sm:text-2xl md:text-3xl",
    titleSize = "text-lg sm:text-xl md:text-2xl",
    descriptionSize = "text-base sm:text-lg md:text-xl",
  } = layoutOptions;

  // 🎯 Botones
  const {
    type = "btn-solid",
    bgColor: buttonBgColor = "bg-primary",
    textColor: buttonTextColor = "text-white",
    textSize: buttonTextSize = "text-sm sm:text-base md:text-lg",
    saveLabel = "Guardar Contacto",
    whatsappLabel1 = "Contacto 1",
    whatsappLabel2 = "Contacto 2",
    vcfLink = "/assets/vcards/contact.vcf",
    whatsappMessage1 = "Hola, quiero más información.",
    whatsappMessage2 = "Hola, quiero más información.",
  } = buttonOptions;

  // 🖼️ Imagen
  const {
    width = 200,
    height = 200,
    size: imageSize = "w-40 h-40",
    rounded: imageRounded = "rounded-md",
    shadow: imageShadow = "shadow-lg",
  } = imageOptions;

  const { duration = 0.6 } = animationOptions;

  // 🎞️ Animaciones
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration, ease: "easeInOut" },
    },
  };

  const imageZoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: duration + 0.2, ease: "easeInOut" },
    },
  };

  const whatsappLink1 = profile.phone
    ? `https://wa.me/${profile.phone}?text=${encodeURIComponent(whatsappMessage1)}`
    : null;

  const whatsappLink2 = profile.whatsapp2
    ? `https://wa.me/${profile.whatsapp2}?text=${encodeURIComponent(whatsappMessage2)}`
    : null;

  return (
    <div className={`flex justify-center p-1 w-full ${bgColor} ${borderColor} border-none rounded-lg`}>
      <div className="card w-full max-w-md bg-image-with-overlay shadow-lg shadow-secondary text-center sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* ✅ Imagen o Slider */}
        <figure className="flex justify-center items-start pt-spacing-3 pb-spacing-3">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageZoomIn}
            className={`relative flex justify-center items-center overflow-hidden ${imageRounded} ${imageShadow} ${imageSize}`}
          >
            {useSliderAsProfile ? (
              <GallerySlider
                items={profileSliderItems}
                titleOptions={{ text: "", color: "", size: "", alignment: "", margin: "" }}
                carouselOptions={{
                  transitionDuration: 1500,
                  delay: 4000,
                  stopAtEnd: true,
                  restartOnClick: true,
                }}
                itemOptions={{
                  width: "w-full",
                  height: "h-full",
                  rounded: imageRounded,
                  shadow: "",
                  objectFit: "object-cover",
                }}
              />
            ) : (
              <Image
                src={profile.image}
                alt="Foto de perfil"
                width={width}
                height={height}
                className={`object-fill w-[260px] h-[350px] sm:w-[360px] sm:h-[500px] ${imageRounded}`}
              />
            )}
          </motion.div>
        </figure>

        {/* ✅ Contenido */}
        <div className={`card-body bg-transparent ${textColor}`}>
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${nameSize} font-bold font-primary  drop-shadow-[2px_2px_0px_#757575]`}
          >
            {profile.name}
          </motion.h2>

          <motion.h4
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${titleSize} font-semibold`}
          >
            {profile.title}
          </motion.h4>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className={`${descriptionSize}`}
          >
            {profile.description}
          </motion.p>

          {/* ✅ Botones */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="card-actions justify-center flex-wrap gap-3 mt-spacing-2 pb-spacing-4"
          >
            {/* Guardar Contacto */}
            <motion.a
              href={vcfLink}
              download
              className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize}`}
              whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
              aria-label="Guardar contacto"
            >
              <Image
                src="/assets/icons/save.png"
                alt="Icono contacto"
                width={24}
                height={24}
                className="w-10 h-10"
              />
              <span>{saveLabel}</span>
            </motion.a>

            {/* WhatsApp 1 */}
            {profile.phone && (
              <motion.a
                href={whatsappLink1}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize}`}
                whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
                aria-label="Asesor 1"
              >
                <Image
                  src="/assets/icons/whatsapp.png"
                  alt="Icono WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>{whatsappLabel1}</span>
              </motion.a>
            )}

            {/* WhatsApp 2 */}
            {profile.whatsapp2 && (
              <motion.a
                href={whatsappLink2}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize}`}
                whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
                aria-label="Asesor 2"
              >
                <Image
                  src="/assets/icons/whatsapp.png"
                  alt="Icono WhatsApp"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>{whatsappLabel2}</span>
              </motion.a>
            )}

            {/* Sitio Web */}
            {profile.website && (
              <motion.a
                href={profile.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md ${type} ${buttonBgColor} ${buttonTextColor} ${buttonTextSize}`}
                whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
                aria-label="Sitio web"
              >
                <Image
                  src="/assets/icons/web.png"
                  alt="Icono Web"
                  width={24}
                  height={24}
                  className="w-8 h-8"
                />
                <span>Visitar sitio web</span>
              </motion.a>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
