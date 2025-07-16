import React from "react";
import Link from "next/link";

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
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Specialisms
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Industry
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">
              Technology jobs by location
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  London
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  New York
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Berlin
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Singapore
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-primary mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Email us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Call us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-gray-900 transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm">© 2025 Source Group International.</p>
            </div>

            <div className="flex flex-wrap gap-4">
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
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              Site by <span className="font-bold">SOURCEPLOT™</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
