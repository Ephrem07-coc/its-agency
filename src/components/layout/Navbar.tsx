"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Phone } from "lucide-react";

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Notre différence", href: "/notre-difference" },
  { label: "Méthodologie", href: "/notre-methodologie" },
  { label: "Contact", href: "/contact" },
];

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center">
      <div className="relative h-12 w-52 sm:h-14 sm:w-60">
        <Image
          src="/images/logo/logo2.jpeg"
          alt="ITS Agency"
          fill
          className="object-contain object-left"
          priority
        />
      </div>
    </Link>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={{
          backgroundColor: scrolled
            ? "rgba(255,255,255,0.92)"
            : "rgba(255,255,255,0)",
          boxShadow: scrolled
            ? "0 8px 30px rgba(11,31,58,0.08)"
            : "0 0 0 rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      >
        <nav className="mx-auto flex h-[84px] max-w-[1280px] items-center justify-between px-6 lg:px-10">
          <Logo />

          {/* Menu desktop */}
          <ul className="hidden items-center gap-1 xl:flex relative">
            {NAV_LINKS.map((link, index) => (
              <li key={link.href} className="relative">
                {/* Effet de fond animé */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-hover"
                    className="absolute inset-0 rounded-full bg-[#1F7A4D]/10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <Link
                  href={link.href}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className="relative z-10 block px-4 py-2 text-[13.5px] font-medium text-[#0B1F3A]/70 transition-colors duration-300 hover:text-[#1F7A4D]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Actions droite */}
          <div className="hidden items-center gap-4 xl:flex">
            <a
              href="tel:+2290156026967"
              className="hidden items-center gap-1.5 text-[13px] font-medium text-[#0B1F3A]/60 transition-colors hover:text-[#1F7A4D] lg:flex"
            >
              <Phone className="h-3.5 w-3.5" />
              +229 01 56 02 69 67
            </a>
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[#1F7A4D] px-5 py-2.5 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#175c3b] hover:shadow-[0_8px_24px_rgba(31,122,77,0.35)]"
            >
              Parlons de votre projet
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen(true)}
            className="flex items-center justify-center rounded-md p-2 text-[#0B1F3A] xl:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </motion.header>

      {/* Drawer mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[60] bg-[#0B1F3A]/40 backdrop-blur-sm xl:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed right-0 top-0 z-[70] flex h-full w-[82%] max-w-[360px] flex-col bg-white shadow-2xl xl:hidden"
            >
              <div className="flex h-[84px] items-center justify-between px-6">
                <Logo />
                <button
                  type="button"
                  aria-label="Fermer le menu"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md p-2 text-[#0B1F3A]"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <ul className="flex flex-col gap-1 px-6 pt-4">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block border-b border-[#0B1F3A]/8 py-4 text-[16px] font-medium text-[#0B1F3A]/80 transition-colors hover:text-[#1F7A4D]"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto flex flex-col gap-3 px-6 pb-10">
                <a
                  href="tel:+2290156026967"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-[#0B1F3A]/15 py-3 text-[14px] font-medium text-[#0B1F3A]"
                >
                  <Phone className="h-4 w-4" />
                  +229 01 56 02 69 67
                </a>
                <Link
                  href="/#contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex w-full items-center justify-center gap-1.5 rounded-full bg-[#1F7A4D] py-3 text-[14px] font-semibold text-white"
                >
                  Parlons de votre projet
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}