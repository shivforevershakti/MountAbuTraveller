export default function Header() {
  return (
    <header className="header sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      {/* === Top Bar === */}
      <div className="top-bar bg-gray-800 text-white hidden md:block py-2">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Left */}
          <div className="flex items-center space-x-3">
            <a
              href="tel:9026814199"
              className="flex items-center hover:underline transition-all duration-200"
            >
              <img
                src="http://dummy.xtemos.com/woodmart2/wp-content/uploads/2021/08/groceryt-phone.svg"
                alt="phone-icon"
                className="w-4 h-4 mr-2"
              />
              9026814199
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
                Laxmi Market, near Sector A, Gomti Nagar, Lucknow, Uttar Pradesh 226010
              </span>
            </div>
            <div className="flex items-center">
              <img
                src="http://dummy.xtemos.com/woodmart2/wp-content/uploads/2021/08/grocery-envelope.svg"
                alt="email-icon"
                className="w-4 h-4 mr-2"
              />
              <a
                href="mailto:info@besttaxiwala.com"
                className="hover:underline transition-all duration-200"
              >
                info@besttaxiwala.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* === Main Header === */}
      <div className="main-header bg-white py-3 border-b border-gray-200 transition-all duration-300">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <a href="https://besttaxiwala.com/" className="flex-shrink-0">
            <img
              src="/logo.jpg"
              alt="BestTaxiwala Logo"
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center text-gray-800 hover:text-yellow-600 transition-colors duration-300"
            aria-label="Open mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
