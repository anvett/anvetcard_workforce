

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GalleryWithModal = ({
  items,
  titleOptions = {},
  galleryOptions = {},
  modalOptions = {},
  buttonOptions = {},
  whatsappNumber = "", // ✅ nuevo prop para número global
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const {
    text: componentTitle = "",
    color: componentTitleColor = "text-black",
    size: componentTitleSize = "text-2xl sm:text-3xl",
    subtitle = "",
  } = titleOptions;

  const {
    bgColor: componentBgColor = "bg-transparent",
    itemBg: galleryItemBgColor = "bg-white",
    titleColor: titleTextColor = "text-primary",
    titleSize = "text-lg sm:text-xl",
  } = galleryOptions;

  const {
    bgColor: modalBgColor = "bg-white",
    titleColor: modalTitleTextColor = "text-secondary",
    titleSize: modalTitleSize = "text-xl sm:text-2xl",
    descriptionColor: descriptionTextColor = "text-gray-700",
    descriptionSize: descriptionTextSize = "text-sm sm:text-base",
    highlightColor: highlightTextColor = "text-accent",
    highlightSize: highlightTextSize = "text-base sm:text-lg",
    aspectRatio = "16:9",
  } = modalOptions;

  const {
    text: whatsAppButtonText = "Contactar por WhatsApp",
    type: modalButtonType = "btn-outline",
    size: modalButtonTextSize = "text-sm sm:text-base",
    bgColor: modalButtonBgColor = "bg-primary",
    textColor: modalButtonTextColor = "text-white",
    borderColor: modalButtonBorderColor = "border border-gray-300",
    hoverColor: modalButtonHoverColor = "hover:bg-secondary",
  } = buttonOptions;

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    if (modalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [modalOpen]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: "easeInOut" },
    }),
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className={`w-full container mx-auto p-4 py-spacing-3 ${componentBgColor}`}>
      {/* Título */}
      <h2 className={`text-center font-bold mb-spacing-2 ${componentTitleColor} ${componentTitleSize}`}>
        {componentTitle}
      </h2>
      {subtitle && (
        <h4 className="text-center text-size-2 sm:text-size-3 text-light font-semibold pb-spacing-3">
          {subtitle}
        </h4>
      )}

      {/* Galería */}
      <div className="flex flex-wrap justify-center gap-spacing-3 sm:gap-spacing-5">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className={`w-80 sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-spacing-4 cursor-pointer ${galleryItemBgColor} shadow-lg rounded-lg`}
            onClick={() => openModal(item)}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <Image
              src={item.type === "video" ? item.thumbnail : item.image}
              alt={item.title}
              width={250}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
            <h3 className={`${titleSize} ${titleTextColor} text-center font-semibold mt-spacing-2 mb-spacing-3`}>
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 z-[9999] bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div
              className={`relative mx-auto p-5 border w-11/12 sm:w-3/4 md:w-1/2 lg:w-1/3 shadow-lg rounded-md max-h-[80vh] overflow-y-auto ${modalBgColor}`}
            >
              <div className="mt-3 text-center flex flex-col">
                {/* Media */}
                {selectedItem.type === "video" ? (
                  <div className={`relative w-full aspect-${aspectRatio.replace(":", "-")} rounded-lg overflow-hidden`}>
                    <video controls className="w-full h-full object-contain">
                      <source src={selectedItem.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                ) : (
                  <div className="relative w-full flex justify-center">
                    <Image
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      width={600}
                      height={400}
                      className="object-contain w-auto h-auto max-w-full rounded-lg"
                    />
                  </div>
                )}

                {/* Título */}
                <h3 className={`${modalTitleTextColor} ${modalTitleSize} font-bold mt-3 py-spacing-2`}>
                  {selectedItem.title}
                </h3>

                {/* Descripción */}
                <ul className={`list-disc list-outside text-left pl-5 pb-spacing-2 ${descriptionTextColor} ${descriptionTextSize} mt-2`}>
                  {selectedItem.description?.map((desc, index) => (
                    <li className="py-1" key={index}>{desc}</li>
                  ))}
                </ul>

                {/* Frase destacada */}
                <p className={`${highlightTextColor} ${highlightTextSize} font-semibold mt-2 pb-spacing-2`}>
                  {selectedItem.highlight}
                </p>

                {/* Botones */}
                <div className="flex gap-4 pt-4 justify-center">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://wa.me/+${selectedItem.whatsappNumber || whatsappNumber}?text=Desearía%20saber%20más%20sobre%20${encodeURIComponent(
                      selectedItem.title
                    )}`}
                    className={`${modalButtonType} ${modalButtonBgColor} ${modalButtonTextColor} ${modalButtonBorderColor} ${modalButtonHoverColor} ${modalButtonTextSize} px-4 py-2 font-semibold rounded-md`}
                  >
                    {whatsAppButtonText}
                  </a>
                  <button
                    onClick={closeModal}
                    className={`${modalButtonType} ${modalButtonBgColor} ${modalButtonTextColor} ${modalButtonBorderColor} ${modalButtonHoverColor} ${modalButtonTextSize} px-4 py-2 font-semibold rounded-md`}
                  >
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryWithModal;
