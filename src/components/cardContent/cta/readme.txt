CallToAction Component
El componente CallToAction es un bloque de llamada a la acción diseñado para captar la atención del usuario y motivarlo a realizar una acción específica, como solicitar un servicio o contactar a la empresa. El componente utiliza animaciones sutiles y un fondo dinámico para mejorar la interactividad y la experiencia del usuario.

Props
ctaText: string (required)

El texto principal de la llamada a la acción, que suele ser una frase motivacional o una invitación a actuar.
Example: "¿Listo para dar el siguiente paso hacia tus metas financieras?"
buttonText: string (required)

El texto del botón de llamada a la acción, que indica claramente la acción que el usuario debe realizar.
Example: "Solicita tu Crédito Ahora"
buttonLink: string (required)

El enlace al que redirige el botón de llamada a la acción. Este suele ser un formulario de solicitud, una página de contacto, u otra URL relevante.
Example: "/solicitar-credito-consumo-ordinario"
Uso
javascript
Copiar código
import React from 'react';
import CallToAction from '../components/CallToAction'; // Asegúrate de que la ruta sea correcta

export default function CreditoConsumoCTA() {
  const ctaText = "¿Listo para dar el siguiente paso hacia tus metas financieras?";
  const buttonText = "Solicita tu Crédito Ahora";
  const buttonLink = "/solicitar-credito-consumo-ordinario"; // Ruta al formulario o página de solicitud

  return (
    <CallToAction
      ctaText={ctaText}
      buttonText={buttonText}
      buttonLink={buttonLink}
    />
  );
}
Component Structure
Contenedor Principal (section):

Clase CSS: relative py-spacing-8 bg-dark text-light text-center overflow-hidden
Este contenedor envuelve todo el componente, con un fondo oscuro y texto claro, centrado y con padding vertical (py-spacing-8). La clase overflow-hidden asegura que cualquier contenido que desborde no sea visible.
Canvas de Fondo (Canvas con Cloud):

Clase CSS: h-full w-full
El Canvas ocupa el 100% del ancho y la altura de la sección, y dentro de él, se renderiza un efecto de nube (Cloud). El color del Cloud se ha personalizado para usar el color primario de la marca (#0d6efd).
Texto del CTA (motion.h2):

Clase CSS: section-title text-primary
El texto principal del CTA está animado con framer-motion, apareciendo suavemente desde una posición más alta (y: -50) con una opacidad de 0 hasta su posición final (y: 0) y una opacidad de 1. La animación dura 1 segundo y utiliza un easeInOut para suavizar la transición.
Botón del CTA (motion.a):

Clase CSS: bg-primary text-light font-bold px-6 py-3 rounded-full btn-custom hover:bg-accent hover:text-primary
El botón también está animado, moviéndose desde una posición más baja (y: 50) y una opacidad de 0 hasta su posición final (y: 0) y opacidad de 1. La animación se retrasa medio segundo (delay: 0.5) para que aparezca después del texto del CTA.
Responsividad y Estilo
Responsivo: El componente está diseñado para ser completamente responsivo, adaptándose bien a diferentes tamaños de pantalla.
Centrado: Todo el contenido está centrado dentro del contenedor, lo que lo hace visualmente atractivo y fácil de leer.
Estilo Visual: Se utiliza un fondo oscuro con un efecto de nube en el color primario de la marca. El texto y los botones están diseñados para destacar sobre este fondo, asegurando que el CTA sea efectivo.
Integración del Hook useIntersectionObserver
Intersección Visible: El componente usa el hook useIntersectionObserver para detectar cuándo el componente entra en la vista del usuario. Las animaciones del texto y el botón se activan únicamente cuando el componente es visible en la pantalla, mejorando la experiencia de usuario.
Mejores Prácticas
Texto del CTA: Asegúrate de que el texto del CTA sea claro y motivador, alineado con la acción que deseas que el usuario realice.
Enlace del Botón: El enlace del botón debe dirigir al usuario a la siguiente acción lógica en su recorrido, como completar un formulario o contactar a la empresa.
Personalización del Fondo: El color del Cloud se puede ajustar para coincidir con la identidad visual de la marca.