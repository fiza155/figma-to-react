import React from "react";

function AppPromotion() {
  return (
    <section className="flex relative flex-col self-stretch mt-28 w-full max-md:mt-10">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c74a846192217bf9e491bbdb7661fd107ebcac26b022fce91d2b0dff3b7f038b?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
        alt="App promotion background"
        className="object-cover absolute inset-0 w-full h-full"
      />
      <div className="flex relative flex-col justify-center items-center px-8 py-10 w-full bg-green-200 bg-opacity-80 md:px-16">
        <div className="w-full max-w-[1200px]">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="flex flex-col w-full md:w-[44%]">
              <div className="flex flex-col justify-center my-auto w-full">
                <h2 className="text-4xl font-bold tracking-tight text-slate-700 sm:text-5xl md:text-6xl">
                  Shop Faster With Groceyish App
                </h2>
                <p className="mt-4 text-lg font-medium tracking-normal text-zinc-500 md:mt-7 md:text-xl">
                  Available on both IOS & Android
                </p>
                <div className="flex self-start mt-10 gap-5">
                  <a href="#ios-app" aria-label="Download on the App Store">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/08d976bf8f5eeb089944b886a006341c4f7e81c2725529baa9f06cc9c6eb64d7?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                      alt="Download on the App Store"
                      className="object-contain max-w-full aspect-[3.47] w-[140px] sm:w-[180px] md:w-[219px]"
                    />
                  </a>
                  <a
                    href="https://play.google.com/store/apps?hl=en"
                    aria-label="Get it on Google Play"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e4797b4170a8204f8f6f79da682f4b97a9dae8845807b9372c905e9cd074f99?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                      alt="Get it on Google Play"
                      className="object-contain max-w-full aspect-[3.48] w-[140px] sm:w-[180px] md:w-fit"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[56%]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1db32a1d1c18c43151575ff2dc4dcf9e3a5027024df5a50fb1ac342f2d91f2c8?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                alt="Groceyish App Screenshot"
                className="object-contain w-full aspect-[0.93] rounded-[37px] max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppPromotion;
