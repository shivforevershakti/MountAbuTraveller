import { Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-pink-600 to-red-600 py-12 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center text-white px-4">
      <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
        Call Now For Booking
      </h1>

      <a
        href="tel:+918005603496"
        className="
          inline-flex 
          items-center 
          gap-2 sm:gap-3 
          bg-white 
          text-pink-600 
          hover:bg-pink-100 
          font-semibold 
          px-6 sm:px-8 md:px-10 
          py-2.5 sm:py-3 
          rounded-full 
          text-base sm:text-lg 
          transition-all 
          duration-300 
          shadow-md
        "
      >
        <Phone size={20} className="sm:w-6 sm:h-6" />
        Book Now
      </a>
    </section>
  );
};

export default BookingSection;
