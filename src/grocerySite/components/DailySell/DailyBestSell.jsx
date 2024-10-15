import React from "react";
import ProductCard from "../FeaturedProducts/ProductCard";

const products = [
  {
    name: "Coffee 1kg",
    category: "Coffee & teas",
    rating: 4,
    seller: "Mr.food",
    price: 20,
    oldPrice: 25,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/46f5044fee873cb487f3035566022b51bff7678e27bd26159ff618ad597b1079?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    soldCount: 20,
    totalCount: 50,
  },
  {
    name: "Halal Sausage 350g",
    category: "Meat",
    rating: 4,
    seller: "Mr.food",
    price: 4,
    oldPrice: 10,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/e98c3b80d7866a0d2a033245646496316397f7a70c143a1deb509ff20b448439?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    soldCount: 7,
    totalCount: 20,
  },
  {
    name: "Green Tea 250g",
    category: "Coffee & Teas",
    rating: 4,
    seller: "Mr.food",
    price: 3,
    oldPrice: 7,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3823662ad0964602cd779e90a95d4a98757c3ba1a7533592630d4a221818d892?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    soldCount: 32,
    totalCount: 50,
  },
  {
    name: "Onion 1kg",
    category: "Vegetables",
    rating: 4,
    seller: "Mr.food",
    price: 0.5,
    oldPrice: 2,
    image:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/6b029a1eb2c0a2d6ec6bd2bdfaec80e1f58a1d813cecce73fe762561dc193cd4?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a",
    soldCount: 2,
    totalCount: 10,
  },
];

function DailyBestSells() {
  return (
    <section className="mt-28 w-full max-w-[1202px] max-md:mt-10 max-md:max-w-full">
      <div className="flex flex-wrap gap-10 justify-between items-start">
        <div className="flex flex-auto gap-6 my-auto text-slate-700 max-md:max-w-full">
          <h2 className="grow text-3xl font-semibold">Daily Best Sells</h2>
          <nav className="flex gap-6 justify-between items-center p-1.5 my-auto text-base font-medium whitespace-nowrap">
            <a
              href="#featured"
              className="self-stretch my-auto font-semibold text-emerald-400"
            >
              Featured
            </a>
            <a href="#popular" className="self-stretch my-auto">
              Popular
            </a>
            <a href="#new" className="self-stretch my-auto">
              New
            </a>
          </nav>
        </div>
        <div className="flex flex-wrap flex-auto gap-10 max-md:max-w-full">
          <div className="gap-2.5 self-stretch px-0.5 py-2.5 my-auto text-lg font-medium text-white bg-red-500 rounded">
            Expires in: 10 : 56 : 21
          </div>
          <div className="flex gap-3 justify-center items-center">
            <button
              className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-gray-100 h-[46px] min-h-[46px] rotate-[-3.1415925661670165rad] rounded-[1000px] w-[46px]"
              aria-label="Previous product"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/db155e38617208c7bb14e9b8e6a5134aabae7f2de391ffbc93fc8fe109f09249?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </button>
            <button
              className="flex gap-2.5 justify-center items-center self-stretch px-2.5 my-auto bg-gray-100 h-[46px] min-h-[46px] rounded-[1000px] w-[46px]"
              aria-label="Next product"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/90bd8f30e78cead8445e648b73ecc9577f542d62fb603cb3a97f9d0ba3b0f82a?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2.5 mt-14 w-full max-w-[1197px] max-md:mt-10 max-md:max-w-full">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col">
            <div className="z-10 gap-2.5 self-start px-2.5 py-1.5 text-xs font-medium text-white bg-amber-200 rounded">
              Save {Math.round((1 - product.price / product.oldPrice) * 100)}%
            </div>
            <ProductCard {...product} />
            <div className="flex flex-col p-2.5 w-full max-w-[224px]">
              <div className="flex flex-col w-full">
                <div className="flex flex-col w-full max-w-[204px]">
                  <div className="flex gap-2.5 justify-center items-center self-start whitespace-nowrap">
                    <div className="self-stretch my-auto text-lg font-semibold text-emerald-400">
                      ${product.price}
                    </div>
                    <div className="self-stretch my-auto text-sm font-medium text-zinc-400">
                      ${product.oldPrice}
                    </div>
                  </div>
                  <div className="flex flex-col mt-3 w-full">
                    <div className="flex overflow-hidden flex-col items-start w-full bg-slate-100 rounded-[1000px] max-md:pr-5">
                      <div
                        className="flex shrink-0 bg-emerald-400 h-[5px] rounded-[1000px]"
                        style={{
                          width: `${
                            (product.soldCount / product.totalCount) * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-1.5 text-sm font-medium text-slate-700">
                  Sold: {product.soldCount}/{product.totalCount}
                </div>
              </div>
              <button className="flex gap-1.5 justify-center items-center px-0.5 py-3 mt-5 w-full text-sm font-medium text-white bg-emerald-400 rounded-sm min-h-[40px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb80aabcea0a20862779fce0f9de174ec001efc3e2cc8ff50f82e75725fb91cc?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
                />
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DailyBestSells;
