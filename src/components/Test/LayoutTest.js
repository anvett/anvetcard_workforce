import "../../app/globals.css";
import FooterTest from "./footer/FooterTest";

import NavbarTest from "./navbar/NavbarTest";

export const metadata = {
  title: "AnvetCard Digital Card",
  description: "Tu tarjeta digital personalizada en AnvetCard.",
  keywords: "tarjeta digital, networking, QR, contacto",
  authors: [{ name: "AnvetCard" }],
  robots: "index, follow",
  openGraph: {
    title: "AnvetCard Digital Card",
    description: "Tu tarjeta digital personalizada en AnvetCard.",
    url: "https://anvetcard.com",
    images: [
      {
        url: "https://anvetcard.com/assets/images/default-image.jpeg",
        alt: "AnvetCard Logo",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AnvetCard - Tarjeta Digital",
    description: "Tu tarjeta digital interactiva en AnvetCard.",
    images: ["/assets/images/logo.png"],
  },
  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children, backgroundImage = "", overlay = true }) {
  //----------------------------------------------
  // Navbar configuration
  //----------------------------------------------

  const menuConfig = [
    { label: "Inicio", href: "#inicio" },
    { label: "Info. Pago", href: "#info_pago" },
    { label: "Productos y servicios", href: "#productos" },
    { label: "CV", href: "#curriculum" },
  ];

  //----------------------------------------------
  // Footer configuration
  //----------------------------------------------

  const footerLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Info. Pago", href: "#info_pago" },
    { label: "Productos y servicios", href: "#productos" },
    { label: "CV", href: "#curriculum" },
  ];

  //----------------------------------------------

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        backgroundImage: backgroundImage
          ? `${
              overlay ? "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))," : ""
            } url(${backgroundImage})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <NavbarTest
        bgColor="bg-blue-900"
        textColor="text-white"
        borderColor="border-gray-300"
        logoSrc="/assets/images/logo.jpg"
        menuItems={menuConfig}
        linkTextSize="text-size-3"
        navTextSize="text-size-4"
        mobileMenuBg="bg-gray-800"
        mobileMenuTextColor="text-yellow-500"
        mobileIconColor="text-red-500"
      />
      <main>{children}</main>
      <FooterTest
        bgColor="bg-gray-900"
        textColor="text-white"
        borderColor="border-gray-500"
        footerLinks={footerLinks}
        linkTextSize="text-lg"
        copyrightText="© 2024 Juan Pérez. Todos los derechos reservados."
        copyrightColor="text-light"
        copyrightSize="text-size-3"
        footerLogo="/assets/images/logo.jpg"
      />
      ;
    </div>
  );
}
