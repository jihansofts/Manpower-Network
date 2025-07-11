"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

export default function Navbar() {
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // 1) Get scrollY and map it from [0, 100] → [transparent, secondaryColor]
  const { scrollY } = useScroll();
  const bgColor: MotionValue<string> = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255,255,255,0)", "#0064ff"]
  );

  // 2) Mobile menu slide-in (we'll still use CSS + state here)
  React.useEffect(() => {
    if (menuOpen) {
      mobileMenuRef.current!.style.transform = "translateX(0%)";
    } else {
      mobileMenuRef.current!.style.transform = "translateX(-100%)";
    }
  }, [menuOpen]);

  return (
    <motion.nav
      style={{ backgroundColor: bgColor }}
      className="fixed top-0 left-0 w-full z-[999] py-4 transition-colors duration-300">
      <div className="flex container mx-auto items-center justify-between px-6 md:px-12">
        <Image src="/logo.png" alt="logo" width={80} height={80} />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          <h3 className="text-[18px] font-semibold text-white">Home</h3>
          <h3 className="text-[18px] font-semibold text-white">About</h3>
          <h3 className="text-[18px] font-semibold text-white">Contact</h3>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden cursor-pointer z-50">
          {menuOpen ? (
            <FiX size={28} onClick={() => setMenuOpen(false)} />
          ) : (
            <FiMenu size={28} onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-xl font-semibold z-40 transition-transform duration-500"
        style={{ transform: "translateX(-100%)" }}>
        <h3 onClick={() => setMenuOpen(false)}>Home</h3>
        <h3 onClick={() => setMenuOpen(false)}>About</h3>
        <h3 onClick={() => setMenuOpen(false)}>Contact</h3>
      </div>
    </motion.nav>
  );
}
