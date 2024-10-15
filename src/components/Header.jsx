import React from "react";

const Header = () => {
  return (
    <header className="flex overflow-hidden flex-col py-10 bg-slate-800 rounded-[70px]">
      <div className="flex flex-wrap gap-10 text-xs font-bold max-md:max-w-full justify-between items-center">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd34006e233c47555f80be3c34e462edef84a4fdd37eaeaf0d01b50ee2923f6?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
          alt="Company Logo"
          className="object-contain shrink-0 self-stretch my-auto aspect-[1.88] w-[194px]"
        />
        <nav className="flex gap-10 items-center justify-center text-white min-w-[240px] flex-1">
          {["ABOUT", "SERVICES", "TECHNOLOGIES", "HOW TO"].map(
            (item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="self-stretch my-auto"
              >
                {item}
              </a>
            )
          )}
        </nav>
        <div className="flex gap-9 items-center">
          <button className="px-8 py-4 border-2 border-white border-solid rounded-[40px] text-white">
            CONTACT US
          </button>
          <button
            className="px-8 py-4 rounded-[40px] bg-white text-zinc-700"
            style={{
              background: "linear-gradient(90deg, #8176AF, #C0B7E8)",
            }}
          >
            JOIN HYDRA
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
