import React from "react";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="mt-16 w-full max-w-full max-md:mt-10 max-md:max-w-full items-center px-28">
      <div className="flex flex-wrap gap-8 justify-center md:justify-between items-start">
        <div className="flex flex-col justify-between  sm:min-w-full md:min-w-[300px]">
          <div className="flex gap-2 items-center self-start">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/be0da7794022c8c6cb6997ba5794b8c27e0ca022bd82763747b0c7774acd35d1?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt="Groceyish logo"
              className="object-contain shrink-0 self-stretch my-auto w-12 sm:w-10 md:w-14 aspect-square"
            />
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-400">
                Groceyish
              </div>
              <div className="text-xs sm:text-sm md:text-base font-medium text-zinc-400">
                GROCERY
              </div>
            </div>
          </div>

          <address className="flex flex-col justify-between items-start mt-6 sm:mt-8 md:mt-9 w-full text-sm sm:text-base md:text-lg max-w-[363px] min-h-[167px] text-slate-700 not-italic">
            <div className="flex gap-2 max-w-full w-full sm:w-[250px] md:w-[276px] whitespace-nowrap">
              <div className="flex gap-1 items-center font-semibold whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3000766f2b0c5e8150e1badb398f6fb30215558cb5f07e9b9b7edaebfc0f43dd?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-4 sm:w-[16px] md:w-[18px]"
                />
                <span>Address:</span>
              </div>
              <div className="grow shrink font-medium w-[140px] sm:w-[166px] px-2">
                1762 School House Road
              </div>
            </div>

            <div className="flex gap-2 mt-5 sm:mt-6 md:mt-7 max-w-full w-[120px] sm:w-[148px] whitespace-nowrap">
              <div className="flex gap-1 self-stretch font-semibold whitespace-nowrap">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-4 sm:w-[16px] md:w-[18px] text-green-200"
                />{" "}
                Call Us:
              </div>
              <div className="font-medium whitespace-nowrap px-2">1233-777</div>
            </div>

            <div className="flex gap-2 mt-5 sm:mt-6 md:mt-7 w-48 sm:w-60 md:w-64 max-w-full whitespace-nowrap">
              <div className="flex gap-1 items-center font-semibold whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/346abc2a3ec3068c7e90e6b08d7e4d21c312df0c77037861af026f99069e24c0?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-4 sm:w-[16px] md:w-[18px]"
                />
                <span>Email:</span>
              </div>
              <div className="grow shrink font-medium w-[130px] sm:w-[150px] md:w-[169px] whitespace-nowrap px-2 sm:px-2 ">
                groceyish@contact.com
              </div>
            </div>

            <div className="flex gap-2 self-stretch mt-5 sm:mt-6 md:mt-7 w-full whitespace-nowrap">
              <div className="flex gap-1 items-center font-semibold whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e4a0a9d8faf239ffd55f2a588ad1bf6f74d644ade901477f5687849647a6a3c?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto aspect-square w-4 sm:w-[16px] md:w-[18px]"
                />
                <span>Work hours:</span>
              </div>
              <div className="grow shrink font-medium w-[180px] sm:w-[200px] md:w-[220px] whitespace-nowrap px-3">
                8:00 - 20:00, Sunday - Thursday
              </div>
            </div>
          </address>
        </div>

        <nav className="flex flex-col justify-between min-h-[191px] text-slate-700">
          <h3 className="text-2xl font-semibold text-center md:text-start">
            Account
          </h3>
          <ul className="flex flex-col justify-between mt-9 text-base font-medium min-h-[125px] items-center md:items-start">
            <li>
              <a href="#wishlist">Wishlist</a>
            </li>
            <li>
              <a href="#cart" className="mt-4">
                Cart
              </a>
            </li>
            <li>
              <a href="#track-order" className="mt-4">
                Track Order
              </a>
            </li>
            <li>
              <a href="#shipping-details" className="mt-4">
                Shipping Details
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col justify-between min-h-[226px] text-slate-700">
          <h3 className="text-2xl font-semibold text-center md:text-start">
            Useful links
          </h3>
          <ul className="flex flex-col justify-between self-start mt-9 text-base font-medium min-h-[160px] items-center md:items-start">
            <li>
              <a href="#about-us">About Us</a>
            </li>
            <li>
              <a href="#contact" className="mt-4">
                Contact
              </a>
            </li>
            <li>
              <a href="#hot-deals" className="mt-4">
                Hot deals
              </a>
            </li>
            <li>
              <a href="#promotions" className="mt-4">
                Promotions
              </a>
            </li>
            <li>
              <a href="#new-products" className="mt-4">
                New products
              </a>
            </li>
          </ul>
        </nav>
        <nav className="flex flex-col justify-between min-h-[261px] text-slate-700">
          <h3 className="text-2xl font-semibold text-center md:text-start">
            Help Center
          </h3>
          <ul className="flex flex-col justify-between self-start mt-9 text-base font-medium min-h-[195px] items-center md:items-start">
            <li>
              <a href="#payments">Payments</a>
            </li>
            <li>
              <a href="#refund" className="mt-4">
                Refund
              </a>
            </li>
            <li>
              <a href="#checkout" className="mt-4">
                Checkout
              </a>
            </li>
            <li>
              <a href="#shipping" className="mt-4">
                Shipping
              </a>
            </li>
            <li>
              <a href="#q-and-a" className="mt-4">
                Q&A
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="mt-4">
                Privacy Policy
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <hr className="mt-20 border-t-2 border-gray-200 max-md:mt-10" />
      <div className="flex flex-wrap gap-10 lg:md:justify-between justify-center items-center mt-7 w-full  max-md:max-w-full">
        <p className="self-stretch my-auto text-base font-medium text-slate-700">
          © 2024, All rights reserved
        </p>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/6be2a9965ede7a002708d4eaab5cdb4209b92523e41b502091ff9bb041c1f631?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
          alt="Payment methods"
          className="object-contain shrink-0 self-stretch my-auto w-56 aspect-[6.99]"
        />
        <div className="flex gap-4 justify-between items-start self-stretch p-1.5 my-auto w-[237px]">
          <a href="#facebook" aria-label="Facebook">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/022a0b3bdf559e9d30c0dfd69c36e6a0f2b3f13cc040de378c069c095a2cb2d8?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt=""
              className="object-contain shrink-0 w-11 aspect-square"
            />
          </a>
          <a href="#twitter" aria-label="Twitter">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/54ea821c90ec03e32bde09f113c65eeeeac28597eab738097ed80c8e3ce82370?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt=""
              className="object-contain shrink-0 w-11 aspect-square"
            />
          </a>
          <a href="#instagram" aria-label="Instagram">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4724a7c78e90dff721796cef525101ed3e174f0291b591b8a36edb7fef6e26b?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt=""
              className="object-contain shrink-0 w-11 aspect-square"
            />
          </a>
          <a href="#linkedin" aria-label="LinkedIn">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/154a0e1dcd68e4ca1a0c1c1d64af0bd077a67d79079937eaf8bac4d401a0c4b1?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt=""
              className="object-contain shrink-0 w-11 aspect-square"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
