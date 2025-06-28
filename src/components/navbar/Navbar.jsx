

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({
  bgColor = "bg-navbar",
  textColor = "text-light",
  borderColor = "border-light",
  logoSrc = "/assets/images/logo.jpg",
  menuItems = [],
  linkTextSize = "text-base",
  navTextSize = "text-lg",
  mobileMenuBg = "bg-light",
  mobileMenuTextColor = "text-primary",
  mobileIconColor = "text-light",
  mobileIconSize = "w-8 h-8",
  customMobileIcon = null,
}) => {
  const pathname = usePathname();

  return (
    <div className={`navbar ${bgColor} ${textColor} px-spacing-5 py-spacing-2 flex items-center justify-between  gap-spacing-2 relative z-50 border-b-2 ${borderColor}`}>
      <div className="flex justify-between gap-spacing-2 items-center w-80">
        {/* Botón mobile */}
        <div className="dropdown">
          <label tabIndex={0} className={`btn btn-ghost ${mobileIconColor} lg:hidden`}>
            {customMobileIcon ? (
              customMobileIcon
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 0 0"
                fill="currentColor"
                className={`${mobileIconSize}`}
              >
                <path
                  fillRule="evenodd"
                  d="M4 5h16M4 12h16M4 19h16"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </label>
          <ul className={`menu menu-sm dropdown-content mt-3 z-10 p-2 shadow ${mobileMenuBg} rounded-box w-64 gap-2`}>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link className={`${linkTextSize} ${mobileMenuTextColor}`} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Logo */}
        <Image className="justify-center shadow-lg shadow-secondary" src={logoSrc} width={130} height={130} alt="Logo" suppressHydrationWarning />
      </div>

      {/* Menú desktop */}
      <div className="hidden lg:flex">
        <ul className={`menu menu-horizontal ${navTextSize} font-semibold px-1 gap-2`}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                className={`nav-link ${pathname === item.href ? "text-light" : textColor} ${linkTextSize}`}
                href={item.href}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
