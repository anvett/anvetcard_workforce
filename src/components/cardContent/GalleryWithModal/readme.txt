Documentación del Componente GalleryWithModal
Descripción
GalleryWithModal es un componente React diseñado para mostrar una galería de imágenes y videos. Cada elemento de la galería puede ser seleccionado para abrir un modal que muestra detalles adicionales, incluyendo una descripción y una opción para contactar via WhatsApp. Es ideal para portafolios, exhibiciones de productos, o cualquier lugar donde se necesite mostrar contenido visual de manera interactiva.

Props
El componente acepta una prop:

items: Un array de objetos, donde cada objeto representa un elemento de la galería y contiene los siguientes campos:
type: El tipo de elemento, que puede ser 'image' o 'video'.
image: La URL de la imagen principal o del video.
thumbnail: (opcional para videos) La URL de la imagen de miniatura para videos.
title: El título del elemento.
description: Un array de cadenas de texto que describe el elemento.
highlight: Un mensaje destacado o el precio del elemento.
Estructura del Componente
javascript
Copiar código
import React, { useState } from "react";
import Image from "next/image";

const GalleryWithModal = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer" onClick={() => openModal(item)}>
            <div className="shadow-lg">
              <Image
                src={item.type === 'video' ? item.thumbnail : item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <h3 className="gallery-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center flex flex-col">
              {selectedItem.type === "video" ? (
                <video controls width="500">
                  <source src={selectedItem.image} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  width={500}
                  height={300}
                  className="object-cover"
                />
              )}
              <h3 className="text-primary section-h4 pt-spacing-1">{selectedItem.title}</h3>
              <ul className="text-left list-disc list-inside text-primary">
                {selectedItem.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
              <p className="modal-highlight">{selectedItem.highlight}</p>
              <div className="flex gap-spacing-1 pt-spacing-2">
                <a
                  href={`https://wa.me/yournumber?text=Desearía%20saber%20más%20sobre%20${encodeURIComponent(selectedItem.title)}`}
                  className="main-button text-sm"
                >
                  Contactar por WhatsApp
                </a>
                <button onClick={closeModal} className="main-button text-sm">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryWithModal;
Estilos y Clases CSS
El componente utiliza varias clases de Tailwind CSS para estilizar la galería y el modal:

.gallery-title: Personaliza el estilo del título en la galería.
.modal-highlight: Estilo para el mensaje destacado en el modal.
.main-button: Clase personalizada para los botones en el modal.
Uso del Componente
Para usar GalleryWithModal, simplemente proporciona un array de items con la estructura adecuada:

javascript
Copiar código
const galleryItems = [
  {
    type: "image",
    image: "/path/to/image.jpg",
    title: "Imagen Ejemplo",
    description: ["Descripción detallada del elemento"],
    highlight: "Precio o mensaje destacado"
  },
  // Otros objetos...
];

<GalleryWithModal items={galleryItems} />
Conclusión
Este componente proporciona una manera interactiva y visual de presentar información detallada sobre productos o proyectos, con la funcionalidad adicional de contactar directamente via WhatsApp para más detalles o compras. Su diseño responsivo y la capacidad de manejar tanto imágenes como videos lo hacen versátil para una variedad de aplicaciones web.