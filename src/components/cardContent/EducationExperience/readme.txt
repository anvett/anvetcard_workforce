Documentación del Componente EducationExperience
Descripción
EducationExperience es un componente React diseñado para presentar información sobre la educación y experiencia profesional de una persona de manera organizada y accesible. Utiliza un acordeón para cada entrada, permitiendo a los usuarios expandir y colapsar la información relevante. Adicionalmente, puede mostrar imágenes relacionadas con los logros educativos o profesionales.

Props
El componente acepta una única prop:

entries: Un array de objetos, donde cada objeto representa una entrada de educación o experiencia y puede contener los siguientes campos:
date: Una cadena de texto que describe el rango de fechas de la experiencia o educación.
title: El título de la posición o grado educativo.
description: Una breve descripción o el nombre de la institución.
details: Un array de cadenas de texto que listan detalles importantes o logros específicos.
image: (opcional) Una cadena de texto que proporciona la URL de una imagen relacionada, como un certificado o título.
Estructura del Componente
javascript
Copiar código
import React from "react";
import Image from "next/image";

const EducationExperience = ({ entries }) => {
  return (
    <div className="container mx-auto p-4">
      {entries.map((entry, index) => (
        <div key={index} className="p-2">
          <div className="collapse collapse-arrow border border-base-300 rounded-box bg-primary">
            <input type="checkbox" className="peer" id={`toggle-${index}`} hidden />
            <label htmlFor={`toggle-${index}`} className="collapse-title text-xl font-medium block cursor-pointer accordion-title">
              {entry.title} - <strong>{entry.date}</strong> at {entry.description}
            </label>
            <div className="collapse-content peer-checked:block hidden bg-light text-primary accordion-detail">
              <ul className="list-disc pl-5">
                {entry.details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
              {entry.image && (
                <div className="flex justify-center">
                  <Image 
                    src={entry.image}
                    alt="Certificate"
                    width={600}
                    height={400}
                    className="mx-auto"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationExperience;
Estilos y Clases CSS
El componente utiliza varias clases de Tailwind CSS para estilizar el acordeón y su contenido:

.collapse-arrow: Agrega una flecha indicadora para el acordeón.
.bg-primary, .text-primary: Define los colores de fondo y texto utilizando la paleta de colores del proyecto.
.accordion-title, .accordion-detail: Clases personalizadas que pueden ser ajustadas para modificar el estilo de los títulos y detalles del acordeón.
Uso del Componente
Para usar el componente EducationExperience, provee un array de entries con la estructura adecuada:

javascript
Copiar código
const entries = [
  {
    date: "2014 - 2016",
    title: "Associate of Science in Computer Programming",
    description: "City College",
    details: [
      "Focused on learning multiple programming languages",
      "Participated in internships with tech startups",
      "Made Dean's List each semester"
    ],
    image: "/path/to/certificate.jpg"
  },
  // Otros objetos...
];

<EducationExperience entries={entries} />
Conclusión
Este componente proporciona una forma visual y funcional de presentar información educativa y profesional, adecuada para portfolios, CVs online, o perfiles corporativos. La incorporación de imágenes permite una validación visual de las credenciales mencionadas.