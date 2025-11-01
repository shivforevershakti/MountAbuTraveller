import React from "react";
import { Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-600 to-red-600 py-20 flex flex-col items-center justify-center text-center text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Call Now For Booking</h1>

      <a
        href="tel:+919026814199"
        className="inline-flex items-center gap-3 bg-white text-pink-600 hover:bg-pink-100 font-semibold px-8 py-3 rounded-full text-lg transition-all duration-300 shadow-md"
      >
        <Phone size={22} />
        Book Now
      </a>
    </section>
  );
};

export default BookingSection;
