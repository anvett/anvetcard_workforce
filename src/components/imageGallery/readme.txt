ImageGallery Component
The ImageGallery component is a responsive image gallery that displays images in a grid format. Upon clicking an image, it opens in a larger view with a title/description below it. The component uses framer-motion for smooth animations.

Props
title (string): The title of the image gallery.
images (array): An array of objects representing the images. Each object should have the following properties:
src (string): The source URL of the image.
alt (string): The alt text for the image.
title (string): The title or description of the image.
Usage
jsx
Copiar código
import ImageGallery from "@/components/ImageGallery";

const images = [
  {
    src: "/assets/images/gallery/image1.jpg",
    alt: "Description of Image 1",
    title: "Image 1 Title",
  },
  {
    src: "/assets/images/gallery/image2.jpg",
    alt: "Description of Image 2",
    title: "Image 2 Title",
  },
  // Add more images as needed
];

const MyComponent = () => (
  <ImageGallery title="My Image Gallery" images={images} />
);

export default MyComponent;
Example
jsx
Copiar código
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
Features
Responsive Design: The gallery adapts to different screen sizes using CSS grid layout.
Smooth Animations: The component uses framer-motion for fade-in and scale animations.
Image Enlargement: Clicking an image enlarges it with a backdrop, and clicking outside the image or on the close button closes the enlarged view.
Customizable: The component accepts props for the title and an array of images, making it reusable for different sets of images.
Customization
Image Sizes: Modify the className for the motion.img elements to adjust the sizes of the images in the grid and enlarged view.
Animations: Adjust the initial, animate, and transition properties in motion.div and motion.img for different animation effects.
Styling: Update the className properties and Tailwind CSS classes to fit your design requirements.