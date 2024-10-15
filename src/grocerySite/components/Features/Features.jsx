import React from "react";

const features = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/46f5044fee873cb487f3035566022b51bff7678e27bd26159ff618ad597b1079?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    title: "Best Prices & Deals",
    description: "Don't miss our daily amazing deals and prices",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e98c3b80d7866a0d2a033245646496316397f7a70c143a1deb509ff20b448439?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    title: "Refundable",
    description: "If your items have damage we agree to refund it",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/3823662ad0964602cd779e90a95d4a98757c3ba1a7533592630d4a221818d892?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    title: "Free delivery",
    description: "Do purchase over $50 and get free delivery anywhere",
  },
];

function Features() {
  return (
    <section className="mt-14 w-full max-w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex gap-2.5 self-stretch p-5 my-auto rounded min-w-[240px] "
          >
            <div className="flex gap-4 items-center h-full min-w-[240px] ">
              <img
                loading="lazy"
                src={feature.icon}
                alt=""
                className="object-contain shrink-0 self-stretch my-auto aspect-square "
              />
              <div className="flex flex-col justify-center self-stretch my-auto w-[250px]">
                <h3 className="text-lg font-semibold text-slate-700">
                  {feature.title}
                </h3>
                <p className="mt-2.5 text-base font-medium text-zinc-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b029a1eb2c0a2d6ec6bd2bdfaec80e1f58a1d813cecce73fe762561dc193cd4?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
        alt=""
        className="object-contain mt-7 w-full items-center aspect-[500] mx-auto max-w-[1202px] max-md:max-w-full"
      />
    </section>
  );
}

export default Features;
