import React from "react";

const BannerSection = () => {
  return (
    <section className="w-full">
      <img
        src="./img6.jpg"
        alt="Taxi Service Banner"
        className="w-full h-[70vh] md:h-[80vh] object-cover"
        loading="lazy"
      />
    </section>
  );
};

export default BannerSection;
