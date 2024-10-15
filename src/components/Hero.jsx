import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section className="flex flex-wrap lg:flex-nowrap gap-5 justify-between w-full text-4xl font-bold text-white max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col mt-6 max-md:max-w-full lg:w-1/2">
        <h1 className="max-md:max-w-full">
          <span
            className="text-5xl"
            style={{
              background: "linear-gradient(90deg, #8176AF, #C0B7E8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Dive&nbsp;
          </span>
          Into The Depths
          <br />
          Of{" "}
          <span
            className="text-5xl"
            style={{
              background: "linear-gradient(90deg, #8176AF, #C0B7E8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Virtual Reality
          </span>
        </h1>
        <p className="mt-10 text-base max-md:mr-2.5 max-md:max-w-full leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          <br />
          sed do eiusmod tempor incididunt ut labore et dolore
          <br />
          nisl tincidunt eget. Lectus mauris eros in vitae.
        </p>
        <div className="flex gap-10 self-start mt-14 text-xs text-zinc-700 max-md:mt-10">
          <button
            className="px-10 py-4 rounded-[40px] bg-white max-md:px-5"
            style={{
              background: "linear-gradient(90deg, #8176AF, #C0B7E8)",
            }}
          >
            BUILD YOUR WORLD
          </button>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ebe8df660580b606428b8197f97c881fd212faa46f216a7ae306b8de69f2c3?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt="Arrow icon"
            className="object-contain shrink-0 my-auto aspect-[1.23] w-[42px]"
          />
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center max-md:max-w-full">
        <img
          loading="lazy"
          src={hero}
          alt="Virtual Reality Headset"
          className="object-contain w-[75%] rounded-none aspect-[1.15] max-md:max-w-full"
        />
      </div>
    </section>
  );
};

export default Hero;
