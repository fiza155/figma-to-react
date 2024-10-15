import React from "react";

function NavIcons() {
  return (
    <>
      <nav className="flex gap-10 justify-between items-center self-stretch my-auto text-xs font-medium w-[231px]">
        <a
          href="#wishlist"
          className="flex gap-1.5 justify-center items-center self-stretch my-auto text-black whitespace-nowrap"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4d61b1eb0538f64d7ea4ebf6e7bf09217588ff873b4f4cd97fb320b975c4b28?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-7 aspect-[0.93]"
          />
          <span>Wishlist</span>
        </a>
        <div className="flex gap-1.5 justify-center items-center self-stretch my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d34dbe9f517fac1a0cd4601d28a492f401b9b16cc9b8d7f86634fd8b052ecbf8?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-8 aspect-[1.03]"
          />
          <div className="flex gap-1 items-center self-stretch my-auto">
            <div className="flex flex-col self-stretch my-auto">
              <div className="text-slate-700">My cart</div>
              <div className="text-emerald-400">$21</div>
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7524762f34487e3641a8ec29b43bae14f1b8d200a05177353601902753b31d?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
            />
          </div>
        </div>
      </nav>
      <div className="flex gap-1.5 justify-center items-center self-stretch my-auto text-base font-semibold text-slate-700">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/97c86fcd4e4811298d85f7b17c0700378090f8a79c48d3b339ae1ac300c1ec85?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
          alt="User profile"
          className="object-contain shrink-0 self-stretch my-auto w-10 rounded-full aspect-square"
        />
        <div className="self-stretch my-auto">Ramzi Cherif</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/80c61ce247ac7b7a6150bae79d19a8314c49313d14ad1529dbae96ac3b73f211?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
          alt=""
          className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
        />
      </div>
    </>
  );
}

export default NavIcons;
