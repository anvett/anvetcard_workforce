import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Annabel Bailón - Jefa de Marca y Estrategia WorkForce",
  description:
    "Workforce: soluciones integrales de limpieza, mantenimiento, jardinería y alimentación corporativa.",
  keywords:
    "Workforce, limpieza, mantenimiento, jardinería, alimentación corporativa, servicios integrales, Quito",
  authors: [{ name: "Annabell Bailón" }],
  robots: "index, follow",
  openGraph: {
    title: "Annabel Bailón - Jefa de Marca y Estrategia WorkForce",
    description:
      "Confía en Workforce para limpieza, mantenimiento, jardinería y alimentación profesional.",
    url: "https://workforce-annabellbailon.anvetcard.com",
    images: [
      {
        url: "https://workforce-annabellbailon.anvetcard.com/assets/images/shared.png",
        alt: "Workforce - Annabell Bailón",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annabel Bailón - Jefa de Marca y Estrategia WorkForce",
    description:
      "Confía en Workforce para limpieza, mantenimiento, jardinería y alimentación profesional.",
    images: ["https://workforce-annabellbailon.anvetcard.com/assets/images/shared.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
    shortcut: "/assets/icons/favicon.ico",
    apple: "/assets/icons/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({ children }) {
  const menuConfig = [
    { label: "Inicio", href: "#inicio" },
    { label: "Equipo", href: "#equipo" },
    { label: "Contacto", href: "#contacto" },
  ];

  const footerLinks = [...menuConfig];

  return (
    <html lang="es">
      <body
        suppressHydrationWarning
        className={`${poppins.className} min-h-screen flex flex-col bg-primary text-light`}
      >
        <Navbar
          // 🎨 Estilos generales
          bgColor="bg-light"
          textColor="text-primary"
          borderColor="border-none"
          // 🖼️ Logo
          logoSrc="/assets/images/logo.png"
          // 📋 Menú
          menuItems={menuConfig}
          // 🅰️ Estilos de texto
          linkTextSize="text-size-2"
          navTextSize="text-size-4"
          // 📱 Mobile (menú)
          mobileMenuBg="bg-primary"
          mobileMenuTextColor="text-light"
          mobileIconColor="text-light"
          mobileIconSize="w-10 h-10"
          customMobileIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8 text-dark border-dark shadow-md shadow-primary"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          }
        />
        <main>{children}</main>
        <Footer
          // 🎨 Estilos visuales actuales
          bgColor="bg-gradient-secondary"
          bgSecondColor="bg-dark"
          textColor="text-light"
          borderColor="border-secondary"
          // 🔗 Enlaces del menú
          footerLinks={footerLinks}
          linkTextSize="text-size-1"
          // 🖼️ Logo
          footerLogo="/assets/images/logo.png"
          // 🔢 Contador de visitas (CountAPI)
          counterOptions={{
            namespace: "anvetcard",
            counterKey: "workforce_visitas",
            buttonLabel: "Contador de visitas",
            buttonStyles: "btn btn-rounded text-light border-light text-size-1",
            modalMessageText: "Actualmente {count} personas han visitado tu sitio.",
            modalBg: "bg-gradient-accent",
            modalTextColor: "text-dark",
            modalPadding: "p-6",
            modalRounded: "rounded-xl",
            modalShadow: "shadow-xl shadow-dark",
            buttonCloseText: "Cerrar",
            buttonCloseStyles: "main-button",
          }}
          // © Copyright
          copyrightText="© 2025 Anvetcorp SAS. Todos los derechos reservados."
          copyrightColor="text-light"
          copyrightSize="text-size-2"
        />
      </body>
    </html>
  );
}
