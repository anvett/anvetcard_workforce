"use client";

import React, { useState } from "react";

const ContactForm = ({
  phoneNumber,
  titleOptions = {},
  inputOptions = {},
  buttonOptions = {},
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [linkReady, setLinkReady] = useState(false);
  const [whatsappLink, setWhatsappLink] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Nombre: ${formData.name}\nEmail: ${formData.email}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    setWhatsappLink(whatsappUrl);
    setLinkReady(true);
  };

  // 🎯 Título del formulario
  const {
    text: titleText = "Contáctanos",
    color: titleColor = "text-primary",
    size: titleSize = "text-size-3",
    margin: titleMargin = "mb-4",
    alignment: titleAlignment = "text-center",
  } = titleOptions;

  // 🧾 Estilos de inputs
  const {
    bgColor = "bg-light",
    textColor = "text-primary",
    border = "input input-bordered",
    width = "w-full max-w-xs",
    spacing = "space-y-4",
  } = inputOptions;

  // 🔘 Estilos de botones
  const {
    submitText = "Preparar Mensaje",
    submitStyles = "btn main-button w-full",
    whatsappText = "Enviar Mensaje a WhatsApp",
    whatsappStyles = "btn main-button w-full mt-4",
    confirmationTextColor = "text-light",
  } = buttonOptions;

  return (
    <div className={`max-w-lg mx-auto ${spacing} p-6 bg-light rounded-lg shadow-lg`}>
      <h2 className={`${titleAlignment} ${titleColor} ${titleSize} ${titleMargin}`}>
        {titleText}
      </h2>
      <form onSubmit={handleSubmit} className={spacing}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre"
          required
          className={`${border} ${width} ${bgColor} ${textColor}`}
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Correo electrónico"
          required
          className={`${border} ${width} ${bgColor} ${textColor}`}
        />
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Teléfono"
          className={`${border} ${width} ${bgColor} ${textColor}`}
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mensaje"
          required
          className={`textarea textarea-bordered ${width} ${bgColor} ${textColor}`}
        ></textarea>

        <button type="submit" className={submitStyles}>
          {submitText}
        </button>
      </form>

      {linkReady && (
        <div className="mt-4 text-center">
          <p className={`${confirmationTextColor}`}>
            Tu mensaje está listo para ser enviado:
          </p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={whatsappStyles}
          >
            {whatsappText}
          </a>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
