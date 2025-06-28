"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ContactButtons = ({
  contacts = [],
  layoutOptions = {},
  buttonOptions = {},
  modalOptions = {},
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const {
    bgColor: componentBgColor = "bg-transparent",
    gap = "gap-4",
    padding = "pt-spacing-4 p-1",
  } = layoutOptions;

  const {
    buttonType = "btn-solid",
    bgColor = "",
    textColor = "",
    borderColor = "",
    hoverColor = "",
    textSize = "text-sm sm:text-base md:text-lg",
    iconSize = "w-6 h-6",
  } = buttonOptions;

  const {
    modalBgColor = "bg-white",
    modalTextColor = "text-black",
    modalTextSize = "text-base sm:text-lg",
    modalTitle = "Dirección y Horarios",
    modalButtonText = "Cerrar",
    animationDuration = 0.5,
  } = modalOptions;

  const handleContactClick = (contact) => {
    if (contact.type === "location") {
      setModalContent(contact);
      setShowModal(true);
    } else {
      window.location.href = contact.action;
    }
  };

  // Animaciones
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

  const sharedButtonClasses = `${buttonType} ${bgColor} ${textColor} ${borderColor} ${hoverColor} ${textSize}`;

  return (
    <div className={`flex flex-wrap justify-center ${gap} mx-4 ${padding} ${componentBgColor}`}>
      {contacts.map((contact, index) => (
        <motion.button
          key={contact.type}
          onClick={() => handleContactClick(contact)}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${sharedButtonClasses}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
          aria-label={`Botón de contacto: ${contact.type}`}
        >
          <Image src={contact.icon} alt={`${contact.type} icon`} className={iconSize} width={24} height={24} />
          <span>{contact.text}</span>
        </motion.button>
      ))}

      {/* ✅ Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal modal-open"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className={`modal-box ${modalBgColor}`}>
              <h3 className={`font-bold text-center text-xl ${modalTextColor}`}>{modalTitle}</h3>
              <p className={`text-center pb-2 ${modalTextColor} ${modalTextSize}`}>{modalContent.address}</p>
              <p className={`text-center pb-2 ${modalTextColor} ${modalTextSize}`}>{modalContent.hours}</p>
              <div className="modal-action flex justify-center gap-4">
                <a
                  href={modalContent.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-md ${sharedButtonClasses}`}
                >
                  Ver en Google Maps
                </a>
                <button
                  onClick={() => setShowModal(false)}
                  className={`px-4 py-2 rounded-md ${sharedButtonClasses}`}
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

export default ContactButtons;
