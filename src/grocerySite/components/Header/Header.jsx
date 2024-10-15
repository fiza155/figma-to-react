import React, { useState, useEffect, useRef } from "react";
import Logo from "./Logo";
import NavIcons from "./NavIcons";
import SearchBar from "./SearchBar";

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const menuRef = useRef(null); // Create a ref for the menu

  // Function to handle closing the menu
  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  // Handle clicks outside the menu
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to close menu on outside click
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener on unmount
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="overflow-hidden flex flex-wrap justify-between items-center px-32 py-4 w-full bg-white bg-opacity-90 max-md:px-5 max-md:max-w-full">
      <Logo />

      {/* Show NavIcons and SearchBar on large screens */}
      <div className="hidden md:flex items-center gap-4">
        <SearchBar />
        <NavIcons />
      </div>

      {/* Show NavIcons on mobile screens */}
      <div className="flex items-center gap-5 md:hidden">
        {/* Profile picture for mobile screens */}
        <img
          onClick={() => setMenuOpen(!isMenuOpen)} // Toggle menu on profile pic click
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c86fcd4e4811298d85f7b17c0700378090f8a79c48d3b339ae1ac300c1ec85?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
          alt="User profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>

      {/* Mobile dropdown menu for profile click */}
      {isMenuOpen && (
        <nav
          ref={menuRef}
          className="absolute top-16 right-5 w-48 bg-green-100 rounded-md shadow-lg z-20 md:hidden"
        >
          <ul className="flex flex-col p-2">
            <li
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleMenuItemClick}
            >
              Wishlist
            </li>
            <li
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleMenuItemClick}
            >
              My Cart
            </li>
            <li
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleMenuItemClick}
            >
              Login
            </li>
            <li
              className="py-1 px-2 hover:bg-gray-100 cursor-pointer"
              onClick={handleMenuItemClick}
            >
              Sign Up
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
