"use client";

import React from "react";
import ProfileCard from "@/components/profile/ProfileCard/ProfileCard";
import ContactMethods from "@/components/profile/ContactMethods/ContactMethods";
import SocialMediaLinks from "@/components/profile/SocialMediaLinks/SocialMediaLinks";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal";
import Slider from "@/components/cardContent/Slider/Slider";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDisplay";
import CallToAction from "@/components/cardContent/cta/cta";
import VideoPlayer from "@/components/cardContent/VideoPlayer/VideoPlayer";
import Testimonials from "@/components/cardContent/Testimonials/Testimonials";

import { servicesItems } from "@/data/products";
import { educationEntries } from "@/data/education";
import { slidesData } from "@/data/slides";
import { contactsData } from "@/data/contact";
import { socialLinks } from "@/data/socialLinks";
import { profileData } from "@/data/profile";
import { profileGalleryItems } from "@/data/profileGallery";
import { testimonialsData } from "@/data/testimonial";

export default function WorkforcePage() {
  return (
    <main className="min-h-screen flex flex-col bg-gradient-light">
      {/* Perfil */}
      <section id="inicio" className="w-full bg-gradient-primary text-light">
        <ProfileCard
          profile={profileData}
          layoutOptions={{
            bgColor: "bg-transparent",
            textColor: "text-light",
            borderColor: "border-secondary",
            nameSize: "text-size-6 sm:text-size-9",
            titleSize: "text-size-3 sm:text-size-4",
            descriptionSize: "text-size-2 sm:text-size-3",
          }}
          imageOptions={{
            width: 300,
            height: 300,
            size: "w-[260px] h-[350px] sm:w-[360px] sm:h-[500px]",
            rounded: "rounded-xl",
            shadow: "shadow-md shadow-accent",
          }}
          animationOptions={{
            duration: 0.8,
          }}
          buttonOptions={{
            type: "btn-rounded",
            bgColor: "bg-primary shadow-lg shadow-dark",
            textColor: "text-light",
            textSize: "text-size-2 sm:text-3",
            saveLabel: "Guardar Contacto",
            whatsappLabel1: "Asesor 1",
            whatsappLabel2: "Asesor 2",
            vcfLink: "/assets/vcards/workforce.vcf",
            whatsappMessage1:
              "Hola, estoy interesado en los servicios de Workforce",
            whatsappMessage2:
              "Hola, estoy interesado en los servicios de Workforce",
          }}
          useSliderAsProfile={false}
          profileSliderItems={profileGalleryItems}
        />
        <ContactMethods
          contacts={contactsData}
          variant="with-text"
          layoutOptions={{
            bgColor: "bg-transparent",
            gap: "gap-4",
            padding: "pt-spacing-4 pb-spacing-2",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-primary shadow-lg shadow-dark",
            textColor: "text-light",
            textSize: "text-size-2",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
        />
        <SocialMediaLinks
          socialLinks={socialLinks}
          variant="icon-only"
          layoutOptions={{
            layout: "row",
            gap: "gap-2",
            componentBgColor: "bg-transparent",
            padding: "p-4 pb-spacing-3",
          }}
          buttonOptions={{
            buttonType: "btn-rounded",
            bgColor: "bg-primary shadow-lg shadow-dark",
            hoverColor: "hover:bg-accent hover:text-dark",
            iconSize: "w-9 h-9 sm:w-12 sm:h-12",
          }}
          animate={true}
        />
      </section>

      {/* Beneficios y experiencia */}
      <section className="bg-gradient-contrast ">
        <EducationExperience
          entries={educationEntries}
          componentTitle="¿Por qué elegir Workforce?"
          titleOptions={{
            text: "Ventajas y Beneficios",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
          }}
          blockOptions={{ gap: "gap-6", bgColor: "bg-transparent" }}
          accordionOptions={{
            bgColor: "bg-light",
            borderColor: "border border-gray-300",
            contentBgColor: "bg-gradient-secondary",
          }}
          textOptions={{
            titleColor: "text-primary",
            titleSize: "text-size-2 sm:text-3",
            detailColor: "text-light",
            detailSize: "text-size-1 sm:text-2",
          }}
          behaviorOptions={{ useBulletPoints: true, animate: true }}
        />
      </section>

      {/* Servicios */}
      <section id="services" className="bg-gradient-subtle ">
        <GalleryWithModal
          items={servicesItems}
          whatsappNumber="593998347039"
          titleOptions={{
            text: "Servicios Workforce",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            subtitle:
              "Descubre todo lo que Workforce puede ofrecerte. Haz clic en cada imagen para más información.",
          }}
          galleryOptions={{
            bgColor: "bg-transparent",
            itemBg: "bg-light shadow-lg shadow-dark",
            titleColor: "text-light",
            titleSize: "text-size-2 sm:text-3",
          }}
          modalOptions={{
            bgColor: "bg-gradient-secondary",
            titleColor: "text-light",
            titleSize: "text-size-4 sm:text-size-5",
            descriptionColor: "text-light",
            descriptionSize: "text-base sm:text-lg",
            highlightColor: "text-light",
            highlightSize: "text-size-4 sm:text-size-5",
            aspectRatio: "4/3",
          }}
          buttonOptions={{
            text: "Solicitar Información",
            type: "btn-rounded",
            size: "text-base sm:text-lg",
            bgColor: "bg-primary shadow-lg shadow-dark",
            textColor: "text-light",
            hoverColor: "hover:bg-light hover:text-dark",
          }}
        />
      </section>

      {/* Slider de imágenes */}
      <section id="equipo" className="bg-gradient-contrast ">
        <Slider
          slides={slidesData}
          titleOptions={{
            text: "Nuestro Equipo y Servicios",
            color: "text-light",
            size: "text-size-5 sm:text-size-7",
            weight: "font-semibold",
          }}
          carouselOptions={{
            bgColor: "bg-transparent",
            borderColor: "border border-light",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            imageSize: "w-3/4 sm:w-1/2",
            gap: "gap-6",
          }}
          buttonOptions={{
            bgColor: "bg-dark",
            textColor: "text-light",
            hoverColor: "hover:bg-light hover:text-dark",
            activeBgColor: "bg-primary",
            activeTextColor: "text-light",
          }}
          behaviorOptions={{
            animationSpeed: 1.0,
            loop: true,
            autoplay: true,
            autoplaySpeed: 4000,
            showIndicators: false,
          }}
        />
      </section>

      {/* Testimonios */}
      <section className="bg-light ">
        <Testimonials
          testimonials={testimonialsData}
          titleOptions={{
            text: "Lo que dicen nuestros clientes",
            color: "text-primary",
            size: "text-size-5 sm:text-size-7",
            alignment: "text-center",
          }}
          carouselOptions={{
            autoplay: true,
            loop: true,
            animationSpeed: 0.8,
          }}
          cardOptions={{
            bgColor: "bg-gradient-light",
            textColor: "text-dark",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl shadow-dark",
          }}
          textOptions={{
            nameColor: "text-light",
            nameSize: "text-size-3",
            titleColor: "text-dark",
            titleSize: "text-size-1",
            messageColor: "text-dark",
            messageSize: "text-size-1 sm:text-size-2",
          }}
        />
      </section>

      {/* QR para contacto */}
      <section className="bg-gradient-contrast">
        <QRDisplay
          titleOptions={{
            text: "Escanea y contáctanos",
            color: "text-light",
            size: "text-size-4 sm:text-size-5",
            weight: "font-semibold",
          }}
          qrOptions={{
            image: "/assets/images/qrcode.png",
            size: "w-52 h-52",
            alt: "Código QR para contacto",
            borderColor: "border border-none",
            borderRadius: "rounded-xl",
            shadow: "shadow-lg shadow-dark",
            bgColor: "bg-gradient-primary",
            gap: "gap-6",
          }}
        />
      </section>

      {/* Contacto y llamada a la acción */}
      <section id="contacto" className="bg-gradient-primary ">
        <CallToAction
          titleOptions={{
            text: "Contacta con Workforce hoy mismo",
            color: "text-light",
            size: "text-3xl sm:text-4xl",
            weight: "font-extrabold",
          }}
          buttonOptions={{
            text: "Solicitar Servicios",
            phoneNumber: "+593998347039",
            type: "btn-rounded",
            bgColor: "bg-primary shadow-lg shadow-dark",
            textColor: "text-light",
            hoverColor: "hover:bg-light hover:text-dark",
            borderColor: "border border-transparent",
            textSize: "text-lg sm:text-xl",
          }}
          layoutOptions={{
            bgColor: "bg-transparent",
            borderColor: "border-none",
            borderRadius: "rounded-xl",
            shadow: "shadow-xl",
            backgroundImage: "/assets/images/cta-back.jpg",
          }}
        />
      </section>
    </main>
  );
}
