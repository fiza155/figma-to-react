import React from "react";

function HeroBanner() {
  return (
    <section className="flex relative flex-col self-stretch w-full min-h-[477px] max-md:max-w-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5c36db909a5565483ee5ef8df97bbeab84179b8f1ccb48cc44cb65065c961a92?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
        alt="Hero background"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="relative pl-20 w-full bg-green-200 bg-opacity-80 max-md:pl-5 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex relative flex-col items-start mt-24 w-full max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col justify-center max-w-full w-[532px]">
                <h1 className="text-6xl font-bold tracking-tight text-slate-700 max-md:max-w-full max-md:text-4xl">
                  Don't miss our daily amazing deals.
                </h1>
                <p className="mt-7 text-xl font-medium tracking-normal text-zinc-500">
                  Save up to 60% off on your first order
                </p>
              </div>
              <form className="flex items-start mt-14 max-md:mt-10 max-md:max-w-full">
                <label htmlFor="emailInput" className="sr-only">
                  Enter your email address
                </label>
                <input
                  type="email"
                  id="emailInput"
                  placeholder="Enter your email address"
                  className="flex gap-3 items-center px-3 py-4 text-sm font-medium bg-white rounded-sm min-h-[52px] min-w-[240px] text-zinc-400 w-[39px] md:w-[319px]"
                  aria-label="Enter your email address"
                />
                <button
                  type="submit"
                  className="gap-2.5 self-stretch px-3.5 py-4 text-base font-semibold text-white whitespace-nowrap bg-emerald-400 rounded-none min-h-[52px] w-[108px] sm:px-2"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/83b044bd8cfdd32304efd7ded788134bf2a6a7e969218c6b20cb6221c10acd86?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt="Featured product"
              className="object-contain w-full aspect-[1.25] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
        <div className="flex gap-1.5 justify-center items-center  md:self-end self-center mt-14 mb-3 max-md:mt-10 ">
          <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 bg-emerald-400 rounded-full fill-emerald-400" />
          <div className="flex shrink-0 self-stretch my-auto w-2.5 h-2.5 rounded-full border border-solid border-zinc-400 stroke-[1px] stroke-zinc-400" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
