import React, { useState } from "react";
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
        "/img10.jpg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Image */}
            <div
                className="w-full h-full bg-center bg-cover transition-all duration-700 ease-in-out"
                style={{ backgroundImage: `url(${images[currentIndex]})` }}
            ></div>

            {/* Overlay for better visibility of buttons */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Left Button */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
            >
                <ChevronLeft size={30} />
            </button>

            {/* Right Button */}
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-6 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"
            >
                <ChevronRight size={30} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full border border-white transition ${index === currentIndex ? "bg-white" : "bg-transparent"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default FullScreenSlider;
