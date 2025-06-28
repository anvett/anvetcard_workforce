


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ImageGallery({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="section-title text-primary text-center mb-8">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={() => handleImageClick(image)}
          >
            <motion.img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            />
            <p className="mt-2 text-center text-light">{image.title}</p>
          </motion.div>
        ))}
      </div>

      {selectedImage && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-3xl p-4 bg-dark rounded-lg shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <motion.img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-2 text-center text-light">{selectedImage.title}</p>
            <button
              className="absolute top-2 right-2 bg-primary text-light font-bold px-3 py-1 rounded-full"
              onClick={handleClose}
            >
              X
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
