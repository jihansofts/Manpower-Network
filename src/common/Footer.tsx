import React from "react";
import Link from "next/link";
import { Industries } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-heading text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main description */}
        <p className="text-lg mb-8 max-w-2xl">
          SGI are an international workforce solutions partner, delivering
          technology talent to future-focused organizations.
        </p>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-bold text-primary mb-4">Quick links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Industries</h3>
            <ul className="space-y-2">
              {Industries.map((industry) => (
                <li key={industry.id}>
                  <Link
                    href={industry.href}
                    className="hover:text-primary transition-colors">
                    {industry.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Contact Info</h3>
            <ul className="space-y-2 text-white font-medium">
              <li>
                <Link
                  href="mailto:contact@hydraaesthetics.com"
                  className="hover:text-primary transition-colors">
                  contact@hydraaesthetics.com
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+1234567890"
                  className="hover:text-primary transition-colors">
                  +1 (234) 567-890
                </Link>
              </li>
              <li>
                <Link
                  href="https://maps.google.com/?q=8205+Santa+Monica+Blvd,+Santa+Monica,+CA+90046"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors">
                  8205 Santa Monica Blvd, Santa Monica, CA
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-[20px]">
                © 2025 Manpower Network International.
              </p>
            </div>

            {/* <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                Terms of Business
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                Cookie Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                Diversity Policy
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                Candidate Terms
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                Modern Slavery
              </Link>
              <Link
                href="#"
                className="text-sm hover:text-gray-900 transition-colors">
                EAA Statement
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
