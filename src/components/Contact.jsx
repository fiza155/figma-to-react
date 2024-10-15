import React from "react";

const ContactItem = ({ icon, title, content }) => (
  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
    <div className="flex self-stretch  text-white max-md:mt-10">
      <img
        loading="lazy"
        src={icon}
        alt={`${title} icon`}
        className="object-contain shrink-0 aspect-square w-[70px]"
      />
      <div className="flex flex-col grow shrink-0 self-start mt-1 basis-0 w-fit">
        <h2 className="self-start text-2xl font-bold">{title}</h2>
        <p className="mt-2 text-sm">{content}</p>
      </div>
    </div>
  </div>
);

const Contact = () => {
  const contactItems = [
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc30a00cdedb8b123957b3c8cc9003df230b46e66e329438ee04071ca32e0f5d?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
      title: "Pay Us a Visit",
      content: "Union St, Seattle, WA 98101, United States",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/9fc7b0d5728fd084cf98c0fa01a52295aca4a19474a4db316be30e03dc168e59?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
      title: "Give Us a Call",
      content: "(110) 1111-1010",
    },
    {
      icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/ce03c91d8e0603cb529b500a8f4ba1869df6bd1319cd016fb33e2ed9578a4985?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
      title: "Send Us a Message",
      content: "Contact@HydraVTech.com",
    },
  ];

  return (
    <section
      className="px-10 py-6 my-20 rounded-[90px] shadow-[0px_4px_10px_rgba(192,183,232,0.2)] max-md:px-5 max-md:mt-10 max-md:max-w-full"
      style={{
        background: "linear-gradient(90deg, #3A3456, #211E2E)",
      }}
    >
      <div className="flex gap-5 max-md:flex-col">
        {contactItems.map((item, index) => (
          <ContactItem key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Contact;
