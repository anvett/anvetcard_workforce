
// import Image from "next/image";
// import { motion } from "framer-motion";

// const logos = [
//     { src: "/assets/images/team/mercedes.png", alt: "Mercedes Benz" },
//     { src: "/assets/images/team/bmw.jpeg", alt: "BMW" },
//     { src: "/assets/images/team/audi.jpeg", alt: "Audi" },
//     { src: "/assets/images/team/chevrolet.jpeg", alt: "Chevrolet" },
//     { src: "/assets/images/team/morgan.jpeg", alt: "Morgan" },
//     { src: "/assets/images/team/peugeot.jpeg", alt: "Peugeot" },
//     { src: "/assets/images/team/volkwagen.jpg", alt: "Volkswagen" },
//     { src: "/assets/images/team/volvo.png", alt: "Volvo" },
// ];

// const ClientLogos = () => {
//   return (
//     <div className="container mx-auto py-8">
//       <h2 className="section-title text-primary text-center mb-8">Nuestros Clientes</h2>
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
//         {logos.map((logo, index) => (
//           <motion.div
//             key={index}
//             initial={{ opacity: 0.5, width: "5rem" }}
//             whileInView={{ opacity: 1, width: "10rem" }}
//             transition={{
//               delay: 0.3,
//               duration: 0.8,
//               ease: "easeInOut",
//             }}
//             className="flex items-center justify-center"
//           >
//             <Image
//               src={logo.src}
//               alt={logo.alt}
//               width={100}
//               height={100}
//               className="object-contain"
//             />
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ClientLogos;

"use client";
import React from "react";
import Image from 'next/image';
import { motion } from 'framer-motion';

const ClientLogos = ({ logos = [], bgColor = "bg-white", textColor = "text-black", logoSize = 48, borderRadius = "rounded-none", shadow = "shadow-none" }) => {
  return (
    <motion.div className={`${bgColor} ${textColor} p-4 flex flex-wrap justify-center gap-4`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      {logos.map((logo, index) => (
        <motion.div key={index} className={`${borderRadius} ${shadow} p-2`} whileHover={{ scale: 1.1 }}>
          <Image src={logo.src} alt={logo.alt} width={logoSize} height={logoSize} className="object-contain" />
        </motion.div>
      ))}
    </motion.div>
  );
};