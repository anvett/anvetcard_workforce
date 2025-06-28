

// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const Testimonials = ({
//   testimonials = [],
//   titleOptions = {},
//   carouselOptions = {},
//   cardOptions = {},
//   textOptions = {}, // 🎯 Props para los textos internos
// }) => {
//   const {
//     text: titleText = "Testimonios",
//     color: titleSectionColor = "text-primary",
//     size: titleSectionSize = "text-size-5 sm:text-size-7",
//     alignment: titleAlignment = "text-center",
//   } = titleOptions;

//   const {
//     autoplay = true,
//     loop = true,
//     animationSpeed = 0.8,
//   } = carouselOptions;

//   const {
//     bgColor = "bg-light",
//     textColor = "text-dark",
//     borderRadius = "rounded-xl",
//     shadow = "shadow-lg shadow-secondary",
//   } = cardOptions;

//   const {
//     nameColor = "text-primary",
//     nameSize = "text-size-3",
//     titleColor = "text-accent",
//     titleSize = "text-size-1",
//     messageColor = "text-dark",
//     messageSize = "text-size-2",
//   } = textOptions;

//   return (
//     <section className="w-full py-spacing-4">
//       <motion.h2
//         initial={{ opacity: 0, y: -30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: animationSpeed }}
//         className={`${titleSectionColor} ${titleSectionSize} ${titleAlignment} font-bold pb-spacing-3`}
//       >
//         {titleText}
//       </motion.h2>

//       <div className="overflow-hidden">
//         <div
//           className={`flex gap-6 transition-transform duration-500 ease-in-out sm:flex-wrap sm:justify-center`}
//           style={{
//             animation: autoplay
//               ? `slide ${testimonials.length * 5}s linear infinite`
//               : "none",
//           }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={index}
//               className={`flex-shrink-0 w-80 sm:w-96 ${bgColor} ${textColor} ${borderRadius} ${shadow} p-6`}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: animationSpeed, delay: index * 0.2 }}
//             >
//               <div className="flex flex-col items-center text-center">
//                 <Image
//                   src={testimonial.image}
//                   alt={testimonial.name}
//                   width={100}
//                   height={100}
//                   className="rounded-full object-cover mb-4"
//                 />
//                 <h3 className={`${nameColor} ${nameSize} font-semibold`}>
//                   {testimonial.name}
//                 </h3>
//                 <p className={`${titleColor} ${titleSize}`}>
//                   {testimonial.title}
//                 </p>
//                 <p className={`${messageColor} ${messageSize} mt-4`}>
//                   {testimonial.message}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-${testimonials.length * 20}%);
//           }
//         }

//         @media (min-width: 640px) {
//           div[style*="slide"] {
//             animation: none !important;
//             transform: none !important;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default Testimonials;


"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Testimonials = ({
  testimonials = [],
  titleOptions = {},
  carouselOptions = {},
  cardOptions = {},
  textOptions = {},
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    text: titleText = "Testimonios",
    color: titleSectionColor = "text-primary",
    size: titleSectionSize = "text-size-5 sm:text-size-7",
    alignment: titleAlignment = "text-center",
  } = titleOptions;

  const {
    animationSpeed = 0.8,
  } = carouselOptions;

  const {
    bgColor = "bg-light",
    textColor = "text-dark",
    borderRadius = "rounded-xl",
    shadow = "shadow-lg shadow-secondary",
  } = cardOptions;

  const {
    nameColor = "text-primary",
    nameSize = "text-size-3",
    titleColor = "text-accent",
    titleSize = "text-size-1",
    messageColor = "text-dark",
    messageSize = "text-size-2",
  } = textOptions;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="w-full py-spacing-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: animationSpeed }}
        className={`${titleSectionColor} ${titleSectionSize} ${titleAlignment} font-bold mx-spacing-1  pb-spacing-3`}
      >
        {titleText}
      </motion.h2>

      {/* Desktop Grid */}
      <div className="hidden sm:flex sm:flex-wrap sm:justify-center gap-6">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`w-80 ${bgColor} ${textColor} ${borderRadius} ${shadow} p-6`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: animationSpeed, delay: index * 0.2 }}
          >
            <div className="flex flex-col items-center text-center">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={130}
                height={130}
                className="rounded-full object-cover mb-4"
              />
              <h3 className={`${nameColor} ${nameSize} font-semibold`}>
                {testimonial.name}
              </h3>
              <p className={`${titleColor} ${titleSize}`}>{testimonial.title}</p>
              <p className={`${messageColor} ${messageSize} mt-4`}>
                {testimonial.message}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="flex sm:hidden justify-center items-center gap-4 relative">
        <button
          onClick={handlePrev}
          className="btn-rounded bg-secondary text-dark hover:bg-dark hover:text-light"
        >
          ◀
        </button>
        <motion.div
          key={currentIndex}
          className={`w-80 ${bgColor} ${textColor} ${borderRadius} ${shadow} p-6`}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: animationSpeed }}
        >
          <div className="flex flex-col items-center text-center">
            <Image
              src={testimonials[currentIndex].image}
              alt={testimonials[currentIndex].name}
              width={100}
              height={100}
              className="rounded-full object-cover mb-4"
            />
            <h3 className={`${nameColor} ${nameSize} font-semibold`}>
              {testimonials[currentIndex].name}
            </h3>
            <p className={`${titleColor} ${titleSize}`}>
              {testimonials[currentIndex].title}
            </p>
            <p className={`${messageColor} ${messageSize} mt-4`}>
              {testimonials[currentIndex].message}
            </p>
          </div>
        </motion.div>
        <button
          onClick={handleNext}
          className="btn-rounded bg-secondary text-dark hover:bg-dark hover:text-light"
        >
          ▶
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
