import React from "react";

function PromoBanners() {
  return (
    <section className="mt-28 w-full max-w-[1200px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col">
        {/* left container */}
        <div className="flex flex-col w-6/12 max-md:w-full">
          <div className="relative flex z-10 items-start justify-between py-10 pl-12 pr-5 rounded bg-yellow-100 min-h-[300px] max-md:flex-col max-md:pl-5 max-md:pr-5 max-md:min-h-[250px] w-full">
            <div className="relative flex flex-col justify-center w-full max-w-[60%] max-md:max-w-full max-md:items-start z-10 gap-2.5 items-start rounded max-md:px-5">
              <div className="flex flex-col justify-between min-h-[137px] max-md:text-center">
                <div className="self-start px-2 py-1.5 text-xs font-medium tracking-normal items-start text-white bg-amber-200 rounded min-h-[26px]">
                  Free delivery
                </div>
                <div className="mt-4 text-start w-full">
                  <h3 className="text-3xl font-semibold text-slate-700 max-md:text-2xl">
                    Free delivery over $50
                  </h3>
                  <p className="mt-4 text-lg font-medium tracking-normal text-zinc-500 max-md:text-base">
                    Shop $50 product and get free delivery anywhere.
                  </p>
                </div>
              </div>
              <a
                href="#shop-now"
                className="mt-9 flex items-center justify-center px-3.5 py-4 text-base font-semibold text-white bg-emerald-400  min-h-[52px] w-[153px] rounded-none max-md:mt-10"
              >
                <span>Shop Now</span>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d148ea42bc4b13d3a502b60c2017da9dafd71fdc566d4a07cad603bb2a6906d?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                  alt="icon"
                  className="object-contain w-[18px] aspect-square ml-2 "
                />
              </a>
            </div>

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/711042af4093cd959b5807a71a53086b80c87d43b71ea2e2503857320e722fdd?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt="Organic food"
              className="absolute bottom-0 right-0 w-[275px] max-w-full object-contain z-20 max-md:w-[200px]"
            />

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c25d86d0c0230faf9d4ec588f3b072f00b63cfc97fe90715e1cc0f49c5af8d36?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt="Promo background"
              className="absolute inset-0 h-full w-full object-cover rounded opacity-20"
              style={{ zIndex: "-1" }}
            />
          </div>
        </div>

        {/* Right Container  */}
        <div className="flex flex-col w-6/12 max-md:w-full">
          <div className="relative flex flex-col justify-between min-h-[300px] max-md:mt-5 rounded bg-yellow-100 max-md:flex-col w-full h-full">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center rounded"
              style={{
                backgroundImage:
                  "url('https://cdn.builder.io/api/v1/image/assets/TEMP/c25d86d0c0230faf9d4ec588f3b072f00b63cfc97fe90715e1cc0f49c5af8d36?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a')",
              }}
            ></div>

            <div className="relative z-10 flex gap-2.5 items-start px-12 py-9 rounded bg-emerald-100 bg-opacity-80 min-h-full max-md:px-10">
              <div className="flex flex-col min-w-[240px] w-[255px]">
                <div className="flex flex-col w-full max-w-[255px]">
                  <div className="self-start px-2 py-1.5 text-xs font-medium tracking-normal text-center text-white bg-emerald-400 rounded min-h-[26px] w-[87px]">
                    60% off
                  </div>
                  <div className="mt-4">
                    <h3 className="text-3xl font-semibold text-slate-700">
                      Organic Food
                    </h3>
                    <p className="mt-4 text-lg font-medium text-zinc-500">
                      Save up to 60% off on your first order
                    </p>
                  </div>
                </div>
                <a
                  href="#order-now"
                  className="mt-9 flex items-center justify-center px-3.5 py-4 text-base font-semibold text-white bg-emerald-400 min-h-[52px] w-[153px] rounded-none max-md:mt-10"
                >
                  <span>Order Now</span>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d148ea42bc4b13d3a502b60c2017da9dafd71fdc566d4a07cad603bb2a6906d?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                    alt="icon"
                    className="ml-2 w-[18px]"
                  />
                </a>
              </div>
            </div>

            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/711042af4093cd959b5807a71a53086b80c87d43b71ea2e2503857320e722fdd?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt="Organic food"
              className="absolute bottom-0 right-0 w-[275px] max-w-full object-contain z-20 max-md:w-[200px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PromoBanners;
