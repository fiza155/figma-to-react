import React, { useState, useEffect, useRef } from "react";

function CategoryNav() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = [
    {
      href: "#home",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/dc51bb9376b7d08009002a6548ba3699b6d5f6ede5b9f19a80e1c2af7293a82f",
      text: "Home",
    },
    {
      href: "#hot-deals",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/daa44e32a7620c8c868bcafb5d88bd2c0d01db0fa495fd305be53331cdef157c",
      text: "Hot deals",
    },
    {
      href: "#promotions",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8234f78609dd3630b47890ef8997cf689e0ba9beccf1889f7cc348be1684f553",
      text: "Promotions",
    },
    {
      href: "#new-products",
      imgSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/5a5fda31bb4a5989ed6bc00c82757a68184b0565ffc03c65142f11e5243d9a79",
      text: "New products",
    },
  ];

  // Close dropdown when clicking outside or on a list item
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleItemClick = () => {
    setDropdownOpen(false); // Close dropdown when clicking on a list item
  };

  return (
    <nav className="flex  items-center gap-6 justify-between py-2.5 px-32 w-full bg-white bg-opacity-90 relative z-10">
      {/* Button to browse all categories */}
      <div className="relative">
        <button
          className="flex gap-3 max-sm:w-52 items-center py-3 px-2 h-full text-base font-semibold text-white bg-emerald-400 rounded-sm"
          onClick={() => setDropdownOpen(!isDropdownOpen)}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c1ceebe4e70569124683ef8099e41925d94b8e427ac0167b96d1e33d76b3770"
            alt="Category icon"
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <span>All Categories</span>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7524762f34487e3641a8ec29b43bae14f1b8d200a05177353601902753b31d"
            alt="Dropdown icon"
            className="object-contain   shrink-0 w-[18px] text-white aspect-square"
          />
        </button>

        {/* Dropdown for smaller screens */}
        {isDropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute mt-2 bg-white border rounded-md shadow-lg w-48 z-50"
            style={{ top: "100%", left: "0" }} // Adjust positioning
          >
            {navItems.map(({ href, text }) => (
              <a
                key={href}
                href={href}
                className="block px-4 py-2 text-sm text-slate-700 hover:bg-gray-100"
                onClick={handleItemClick} // Close dropdown when clicking any list item
              >
                {text}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Show nav items on larger screens */}
      <div className="hidden md:flex gap-4 justify-center items-center text-base font-medium text-slate-700">
        {navItems.map(({ href, imgSrc, text }) => (
          <a
            key={href}
            href={href}
            className="flex gap-1.5 items-center p-2.5 whitespace-nowrap"
          >
            <img
              loading="lazy"
              src={imgSrc}
              alt={`${text} icon`}
              className="object-contain shrink-0 w-5 aspect-square"
            />
            <span>{text}</span>
          </a>
        ))}
      </div>

      {/* Phone Support section */}
      <div className="flex items-center gap-2.5 ">
        <button onClick={() => setShowPhoneNumber(!showPhoneNumber)}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef1ba6b5a181b9fdf24f9e61e2a7b1b958009171936444830f812c0f124e5869"
            alt="Support icon"
            className="object-contain shrink-0 w-6 aspect-square  mx-3"
          />
        </button>
        {showPhoneNumber && (
          <div className="text-wrap font-semibold text-emerald-400">
            1233-7777
          </div>
        )}
        <div className="hidden md:block text-sm font-medium text-slate-700">
          24/7 support center
        </div>
      </div>
    </nav>
  );
}

export default CategoryNav;
