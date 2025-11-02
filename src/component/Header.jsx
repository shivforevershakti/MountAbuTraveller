export default function Header() {
  return (
    <header className="header sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      {/* === Top Bar === */}
      <div className="top-bar bg-gray-800 text-white hidden md:block py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:+918005603496"
              className="flex items-center hover:underline transition-all duration-200"
            >
              <img
                src="http://dummy.xtemos.com/woodmart2/wp-content/uploads/2021/08/groceryt-phone.svg"
                alt="phone-icon"
                className="w-4 h-4 mr-2"
              />
              8005603496
            </a>
          </div>

          {/* Right */}
          <div className="flex flex-col text-sm text-right space-y-1">
            <div className="flex items-center">
              <img
                src="http://dummy.xtemos.com/woodmart2/wp-content/uploads/2021/08/grocery-pointer.svg"
                alt="map-icon"
                className="w-4 h-4 mr-2"
              />
              <span className="leading-tight">
                 Shiv Shakti RTO office , Siyawa bus stand , near checkpost , aburoad , Sirohi , 307026
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="http://dummy.xtemos.com/woodmart2/wp-content/uploads/2021/08/grocery-envelope.svg"
                alt="email-icon"
                className="w-4 h-4 mr-2"
              />
              <a
                href="mailto:jatinmishra777@gmail.com"
                className="hover:underline transition-all duration-200"
              >
               jatinmishra777@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === Main Header === */}
      <div className="main-header bg-white py-3 border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <a href="https://mountabutraveller.netlify.app/" className="flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="Mountabu Traveller Logo"
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-gray-800 font-medium">
              {["Home", "About Us", "Services", "Contact Us"].map((item, i) => (
                <li key={i}>
                  <a
                    href={
                      item === "Home"
                        ? "/"
                        : item === "Services"
                        ? "#services"
                        : "#footer"
                    }
                    className="relative hover:text-yellow-600 transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-yellow-500 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
