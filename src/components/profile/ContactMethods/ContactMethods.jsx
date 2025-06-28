"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const ContactMethods = ({
  contacts = [],
  variant = "with-text", // "with-text" | "icon-only"
  layoutOptions = {},
  buttonOptions = {},
  modalOptions = {},
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  // Layout
  const {
    bgColor: componentBgColor = "bg-transparent",
    gap = "gap-4",
    padding = "pt-spacing-4 p-1",
  } = layoutOptions;

  // Botones
  const {
    buttonType = "btn-solid",
    bgColor = "bg-primary",
    textColor = "text-white",
    borderColor = "",
    hoverColor = "",
    textSize = "text-base",
    iconSize = "w-6 h-6",
  } = buttonOptions;

  // Modal
  const {
    modalBgColor = "bg-gradient-secondary",
    modalTextColor = "text-light",
    modalTextSize = "text-base",
    modalTitle = "Ubicación y Horarios",
    modalButtonText = "Cerrar",
    animationDuration = 0.5,
  } = modalOptions;

  const sharedButtonClasses = `${buttonType} ${bgColor} ${textColor} ${borderColor} ${hoverColor} ${textSize}`;

  const handleClick = (contact) => {
    if (contact.type === "location") {
      setModalContent(contact);
      setShowModal(true);
    } else {
      window.location.href = contact.action;
    }
  };

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
    <div className={`flex flex-wrap justify-center ${gap} mx-4 ${padding} ${componentBgColor}`}>
      {contacts.map((contact, index) => (
        <motion.button
          key={contact.type}
          onClick={() => handleClick(contact)}
          className={`flex items-center justify-center gap-2 px-1 py-1 rounded-md ${sharedButtonClasses}`}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }}
          aria-label={`Contacto: ${contact.type}`}
        >
          <Image
            src={contact.icon}
            alt={`${contact.type} icon`}
            className={iconSize}
            width={32}
            height={32}
          />
          {variant === "with-text" && <span>{contact.text}</span>}
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
              <p className={`text-center pb-2 ${modalTextColor} ${modalTextSize}`}>
                {modalContent.address}
              </p>
              <p className={`text-center pb-2 ${modalTextColor} ${modalTextSize}`}>
                {modalContent.hours}
              </p>
              <div className="modal-action flex justify-center gap-4">
                <a
                  href={modalContent.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-md ${sharedButtonClasses}`}
                >
                  Google Maps
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

export default ContactMethods;
