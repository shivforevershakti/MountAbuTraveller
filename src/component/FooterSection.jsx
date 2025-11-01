import React from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* ====== Main Footer ====== */}
      <footer className="bg-gray-900 text-white relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div>
            <a href="#" className="inline-block mb-4">
              <img
                src="https://besttaxiwala.com/wp-content/uploads/2023/08/logo-white.png"
                alt="Besttaxiwala Logo"
                width="238"
                height="70"
                className="w-48"
                loading="lazy"
              />
            </a>
            <h3 className="text-xl font-semibold mb-2">About Us</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Besttaxiwala.com provides the best taxi service in Lucknow for
              over 5 years. We have experienced drivers and 24/7 customer
              support. Vehicles include Dzire, Aura, Innova Crysta, Traveller,
              and more.
            </p>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Useful Links</h5>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/" className="hover:text-red-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-red-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-red-500 transition-colors"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:text-red-500 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://besttaxiwala.com/privacy-policy/"
                  className="hover:text-red-500 transition-colors"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact</h5>
            <p className="text-gray-300 text-sm">
              Call Us:{" "}
              <a
                href="tel:08922858321"
                className="text-red-500 hover:underline font-medium"
              >
                089228 58321
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              Mail Us:{" "}
              <a
                href="mailto:info@besttaxiwala.com"
                className="text-red-500 hover:underline font-medium"
              >
                info@besttaxiwala.com
              </a>
            </p>
            <p className="text-gray-300 text-sm mt-2 leading-relaxed">
              Address: Laxmi Market, near Sector A, Gomti Nagar, Lucknow, Uttar
              Pradesh 226010
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-800 py-4 text-center text-sm text-gray-400">
          © 2023 Besttaxiwala.com — All Rights Reserved.
        </div>
      </footer>

      {/* ====== Floating Buttons ====== */}
      {/* WhatsApp (Right) */}
      <a
        href="https://wa.me/918922858321"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 z-50"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call (Left) */}
      <a
        href="tel:08922858321"
        className="fixed bottom-5 left-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 z-50"
      >
        <FaPhoneAlt size={22} />
      </a>
    </>
  );
};

export default Footer;
