import React, { useRef, useEffect } from "react";
import CategoryCard from "./CategoryCard";

const categoriesData = [
  {
    name: "Peach",
    items: 20,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4f2c48451aa725c319b6f661170ac24aefb79f31524381b0a8b67fbb68c40363?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-rose-100 ",
  },
  {
    name: "Vegetables",
    items: 220,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/08c8bb8d157af34e2b7ae6c678e2c563b0d2a8d28cd1f7caefffb3248bb5ccc9?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-fuchsia-100",
  },
  {
    name: "Strawberry",
    items: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9676578c8f1ff8570b0f91047f8a01285632ea3df903d76c8b2109e0b524fe8c?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-lime-100",
  },
  {
    name: "Apple",
    items: 40,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/ab46ac326bf04be50333d0dae5a788df2ada04966b65cdf80d671a368c90bf99?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-rose-100",
  },
  {
    name: "Orange",
    items: 23,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/b809cd29b09071106a8e29ace00bb1ede9c391c394bdcffad203c5efefb6bef6?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-green-100",
  },
  {
    name: "Potato",
    items: 3,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/4bf635bcf779c73abfd3751957dbd1e92d6a828d1d2143ae0a5e63440b9049ca?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-amber-100",
  },
  {
    name: "Carrot",
    items: 9,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/176dec02c2fc00efbaab5ce0e10bb98a062f4b3030972e7234995d3354f9a1d6?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    bgColor: "bg-green-100",
  },
];

function ExploreCategories() {
  const scrollRef = useRef(null);
  const categories = [...categoriesData, ...categoriesData]; // Duplicate for smooth looping

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -280,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 280,
        behavior: "smooth",
      });

      // Infinite scroll logic
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollLeft = 0; // Loop back to the start
      }
    }
  };

  useEffect(() => {
    const { scrollWidth, clientWidth } = scrollRef.current;
    if (scrollRef.current.scrollLeft + clientWidth >= scrollWidth) {
      scrollRef.current.scrollLeft = 0;
    }
  }, []);

  return (
    <section className="mt-24 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col md:flex-row md:justify-between text-slate-700 px-3 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Explore Categories
        </h2>
        <nav className="flex flex-wrap gap-3 md:gap-5 justify-start md:justify-between items-center p-1.5 text-sm md:text-base font-medium mt-4 md:mt-0">
          <a
            href="#all"
            className="font-bold text-emerald-400 hover:text-green-500 focus:text-green-500"
          >
            All
          </a>
          <a
            href="#vegetables"
            className="hover:text-green-500 focus:text-green-500"
          >
            Vegetables
          </a>
          <a
            href="#fruits"
            className="hover:text-green-500 focus:text-green-500"
          >
            Fruits
          </a>
          <a
            href="#coffee-teas"
            className="hover:text-green-500 focus:text-green-500"
          >
            Coffee & Teas
          </a>
          <a href="#meat" className="hover:text-green-500 focus:text-green-500">
            Meat
          </a>
        </nav>
      </div>

      {/* Scrollable Category Cards */}
      <div className="flex gap-5 justify-center items-center mt-9 w-full max-w-[1300px] max-md:max-w-full px-2 mx-auto">
        {/* Previous Button */}
        <button
          className="flex justify-center items-center bg-gray-100 h-[45px] w-[90px] max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-1 max-sm:px-1 rounded-full "
          aria-label="Previous category"
          onClick={scrollLeft}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/db155e38617208c7bb14e9b8e6a5134aabae7f2de391ffbc93fc8fe109f09249?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt="Previous"
            className="w-6"
          />
        </button>

        {/* Scrollable Container */}
        <div
          className="flex gap-4 overflow-x-auto scroll-smooth  scrollbar-hide "
          ref={scrollRef}
        >
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>

        {/* Next Button */}
        <button
          className="flex justify-center items-center bg-gray-100 h-[45px] w-[80px]  rounded-full max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-1 max-sm:px-1 "
          aria-label="Next category"
          onClick={scrollRight}
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/90bd8f30e78cead8445e648b73ecc9577f542d62fb603cb3a97f9d0ba3b0f82a?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt="Next"
            className="w-6"
          />
        </button>
      </div>
    </section>
  );
}

export default ExploreCategories;
