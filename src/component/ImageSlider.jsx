import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const FullScreenSlider = () => {
  const images = [
    "/img1.jpg",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img5.png",
    "/img6.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img9.jpg",
    "/img10.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(0);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const handleNext = () =>
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-black"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ✅ Image */}
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="
          block
          sm:w-full sm:h-full sm:object-cover sm:object-center
          w-auto h-auto max-w-full max-h-full
        "
        loading="lazy"
      />

      {/* ✅ Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

      {/* ✅ Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-3 sm:left-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition active:scale-95 z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 right-3 sm:right-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition active:scale-95 z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* ✅ Dots */}
      <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full border border-white transition ${
              index === currentIndex ? "bg-white" : "bg-transparent"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FullScreenSlider;
