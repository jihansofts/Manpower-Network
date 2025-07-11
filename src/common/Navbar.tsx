"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

type Sublink = {
  name: string;
  href: string;
};

interface NavLink {
  name: string;
  href?: string;
  sublinks?: Sublink[];
}

const navLinks: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Industries",
    href: "/industries",
    sublinks: [
      {
        name: "Healthcare Industries",
        href: "/healthcare-industries",
      },
      {
        name: "Oil and Gas Industries",
        href: "/oil-and-gas-industries",
      },
      {
        name: "Manufacturing Industries",
        href: "/manufacturing-industries",
      },
      {
        name: "Retail Industries",
        href: "/retail-industries",
      },
    ],
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // ✅ Scroll listener to toggle background
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="relative z-50 overflow-hidden">
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}>
        <div className="flex container justify-between items-center mx-auto py-4 px-6 ">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={40} />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 items-center relative">
            {navLinks.map((link) => (
              <li
                key={link.name}
                onMouseEnter={() =>
                  setHoveredMenu(link.sublinks ? link.name : null)
                }
                onMouseLeave={() => setHoveredMenu(null)}
                className="relative">
                <button
                  className={`flex  items-center gap-1 font-medium text-gray-800 hover:text-secendary transition ${
                    scrolled ? "text-gray-800" : "text-white"
                  }`}>
                  {link.name}
                  {link.sublinks && <FiChevronDown size={16} />}
                </button>

                {/* Hover Dropdown */}
                <AnimatePresence>
                  {hoveredMenu === link.name && link.sublinks && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute left-[-100%] top-full w-[400px] bg-white shadow-lg border-t border-primary">
                      <div className="container mx-auto px-10 py-6 grid grid-cols-2 gap-4">
                        {link.sublinks.map((sublink) => (
                          <Link
                            key={sublink.name}
                            href={sublink.href}
                            className="text-sm text-heading font-semibold hover:text-secendary">
                            {sublink.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Mobile Icon */}
          <div
            className={`md:hidden md:pl-10 z-50 ${
              scrolled ? "text-gray-800" : "text-heading"
            }`}>
            {mobileOpen ? (
              <FiX size={28} onClick={() => setMobileOpen(false)} />
            ) : (
              <FiMenu size={28} onClick={() => setMobileOpen(true)} />
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 max-w-[300px] w-full h-screen bg-white z-40 p-6 pt-24 overflow-y-auto">
            <ul className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <li
                  key={link.name}
                  className="text-lg font-medium text-gray-800">
                  {link.sublinks ? (
                    <details className="group">
                      <summary className="flex justify-between cursor-pointer items-center">
                        {link.name}
                        <FiChevronDown size={18} />
                      </summary>
                      <ul className="mt-2 pl-4 text-sm space-y-2">
                        {link.sublinks.map((sublink: Sublink) => (
                          <li key={sublink.name}>
                            <Link href={sublink.href}>{sublink.name}</Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link href={link.href ?? "#"}>{link.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
