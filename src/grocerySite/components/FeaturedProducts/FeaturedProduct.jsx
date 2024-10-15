import React, { useRef } from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    name: "Redish 500g",
    category: "Vegetables",
    rating: 4,
    seller: "Mr.food",
    price: 2,
    oldPrice: 3.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7d2b0d8da6f867df7db7d56da82f5f67078e104ac11fa6172b606d2b5b44b348?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
  },
  {
    name: "Potatos 1kg",
    category: "Vegetables",
    rating: 4,
    seller: "Mr.food",
    price: 1,
    oldPrice: 1.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/0bd5ebda2137af72d6d206d74d33a2fc7eca7ef6a3738e801c7d87cb1ae74582?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
  },
  {
    name: "Tomatos 200g",
    category: "Fruits",
    rating: 4,
    seller: "Mr.food",
    price: 0.3,
    oldPrice: 0.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/146e4ae3e812a26b60b83328eb1e45679cd89f88d3c010afda0e4b927797ca8c?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
  },
  {
    name: "Broccoli 1kg",
    category: "Vegetables",
    rating: 4,
    seller: "Mr.food",
    price: 1.5,
    oldPrice: 2.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3f400424e240e2439252d204684f81b83d4188e5d5eebdd5dce1ed42cd3d9ca5?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
  },
  {
    name: "Green Beans 250g",
    category: "Vegetables",
    rating: 4,
    seller: "Mr.food",
    price: 1,
    oldPrice: 1.99,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/a9eab3d98e3fa519022e34c20ee2d78096ab5b069c36cb97b2f37729a9354189?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
  },
];

function FeaturedProducts() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });

      // Infinite scroll logic
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollLeft = 0; // Loop back to the start
      }
    }
  };
  return (
    <section className="mt-28 w-full max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-col md:flex-row md:justify-between text-slate-700 px-4 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Featured Products
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
      <div className="flex gap-5 justify-center items-center mt-9 w-full max-w-[1366px] max-md:max-w-full px-4 mx-auto">
        {/* Previous Button */}
        <button
          className="flex justify-center items-center bg-gray-100 h-[46px] w-[46px] rounded-full max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-1 max-sm:px-1 "
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
          className="flex gap-4 overflow-x-auto scroll-smooth px-4 mx-4 scrollbar-hide"
          ref={scrollRef}
        >
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>

        {/* Next Button */}
        <button
          className="flex justify-center items-center bg-gray-100 h-[46px] w-[46px] rounded-full max-sm:h-[40px] max-sm:w-[100px] max-sm:mx-1 max-sm:px-1 "
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

export default FeaturedProducts;
