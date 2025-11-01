const services = [
  {
    title: "Easy Online Booking",
    img: "https://besttaxiwala.com/wp-content/uploads/2023/08/booking-150x150.png",
  },
  {
    title: "Professional Drivers",
    img: "https://besttaxiwala.com/wp-content/uploads/2023/08/taxi-driver-150x150.png",
  },
  {
    title: "Big Fleet Of Vehicles",
    img: "https://besttaxiwala.com/wp-content/uploads/2023/08/car-wash-150x150.png",
  },
  {
    title: "Online Payment",
    img: "https://besttaxiwala.com/wp-content/uploads/2023/08/cashless-payment-150x150.png",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="w-full bg-gray-50 py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-3">
          Taxi Service in Mount Abu is Affordable
        </h1>
        <h2 className="text-base sm:text-lg md:text-xl text-gray-700">
          <a href="tel:+918005603496" className="text-blue-600 hover:underline">
            Book your Cab Now
          </a>
        </h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm hover:shadow-md hover:scale-105 p-6 sm:p-8 transition-all duration-300"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-20 sm:w-24 md:w-28 h-auto mb-4 object-contain"
              loading="lazy"
            />
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
              {service.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
