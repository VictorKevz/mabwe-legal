"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CTALink from "./CTALink";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "../contexts/ThemeContext";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="w-full sticky top-0 z-100">
      <nav className="w-full flex items-center justify-between relative h-[4.5rem] md:h-[5.5rem] bg-[var(--color-bg-secondary)] border-b border-[var(--border)] px-4 md:px-6 z-100">
        <Link href="/" className="flex items-center gap-1">
          <img
            src={`/logo-${theme}.svg`}
            alt="Mabwe Logo"
            className="min-w-8 w-10 h-auto"
          />
          <span className="text-lg lg:text-2xl min-w-max text-[var(--color-text-primary)] font-extrabold">
            Mabwe Legal
          </span>
        </Link>

        <ul
          className={`text-[var(--color-text-secondary)] ${
            isMenuOpen
              ? "w-full bg-[var(--color-bg-secondary)] px-4 py-6 flex flex-col gap-8 items-center absolute top-full mt-2 left-0 lg:relative"
              : "hidden lg:flex items-center gap-8"
          }`}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`nav-link relative min-w-max text-xl !font-bold md:text-base hover:text-[var(--color-accent)] cursor-pointer transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="w-full">
            <CTALink
              text="Book Appointment"
              href="/contact"
              variant="primary"
              className="lg:!hidden !h-12"
            />
          </li>
        </ul>
        <div className="flex items-center justify-end max-w-[15rem] w-full gap-3">
          <CTALink
            text="Book Appointment"
            href="/contact"
            variant="primary"
            className="!hidden lg:!flex min-h-12 w-fit lg:max-w-[12rem] lg:w-full"
          />

          <button
            type="button"
            onClick={toggleMenu}
            className="text-[var(--color-text-primary)] lg:!hidden"
          >
            <span>
              {isMenuOpen ? (
                <CloseIcon fontSize="large" />
              ) : (
                <MenuIcon fontSize="large" />
              )}
            </span>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-[var(--color-bg-secondary)] backdrop-blur-[.3rem] z-60"></div>
      )}
    </div>
  );
}
