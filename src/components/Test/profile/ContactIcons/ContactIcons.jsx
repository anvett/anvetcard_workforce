"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ContactIcons = ({
  contacts,
  bgColor = "",
  textColor = "",
  borderColor = "",
  hoverColor = "",
  iconSize = "w-10 h-10", // Tamaño de los íconos
  buttonType = "btn-solid",
  modalBgColor = "",
  modalTextColor = "",
  modalTextSize = "text-base sm:text-lg",
  modalTitle = "Dirección y Horarios",
  modalButtonText = "Cerrar",
  animationDuration = 0.5,
  componentBgColor = "bg-transparent",
  gap = "gap-4", // Espaciado entre íconos
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleContactClick = (contact) => {
    if (contact.type === "location") {
      setModalContent(contact);
      setShowModal(true);
    } else {
      window.location.href = contact.action;
    }
  };

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: animationDuration, ease: "easeInOut" },
    }),
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: animationDuration, ease: "easeInOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div className={`flex flex-wrap justify-center ${gap} p-4 pb-spacing-3 ${componentBgColor}`}>
      {contacts.map((contact, index) => (
        <motion.button
          key={contact.type}
          onClick={() => handleContactClick(contact)}
          className={`${buttonType} ${bgColor} ${textColor} ${borderColor} ${hoverColor}`.trim()}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
        >
          <Image src={contact.icon} alt={`${contact.type} icon`} className={iconSize} width={40} height={40} />
        </motion.button>
      ))}

      {/* Modal con animación */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal modal-open"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className={`modal-box ${modalBgColor}`.trim()}>
              <h3 className={`font-bold text-center ${modalTextColor} text-xl`.trim()}>{modalTitle}</h3>
              <p className={`text-center pb-2 ${modalTextColor} ${modalTextSize}`.trim()}>{modalContent.address}</p>
              <p className={`text-center pb-2 ${modalTextColor} ${modalTextSize}`.trim()}>{modalContent.hours}</p>
              <div className="modal-action flex justify-center gap-4">
                <a
                  href={modalContent.googleMapsLink}
                  className={`${buttonType} ${bgColor} ${textColor} ${borderColor} ${hoverColor}`.trim()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className={`${buttonType} ${bgColor} ${textColor} ${borderColor} ${hoverColor}`.trim()}
                >
                  {modalButtonText}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactIcons;

