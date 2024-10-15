import React from "react";

function ProductCard({
  name,
  category,
  rating,
  seller,
  price,
  oldPrice,
  image,
}) {
  return (
    <div className="flex flex-col justify-center self-stretch p-0.5 my-auto bg-white rounded border border-solid border-zinc-400 border-opacity-30 w-[228px]">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="object-contain w-56 max-w-full aspect-[1.56]"
      />
      <div className="flex flex-col justify-center p-2.5 w-full bg-white max-w-[224px] min-h-[154px]">
        <div className="flex flex-col flex-1 justify-center py-2 w-full">
          <div className="text-xs text-zinc-400">{category}</div>
          <div className="mt-2 text-base font-semibold text-slate-700">
            {name}
          </div>
        </div>
        <div className="flex flex-col mt-4 w-full h-[34px]">
          <div className="flex gap-1 items-center max-w-full w-[107px]">
            <div className="flex gap-0.5 items-center self-stretch my-auto">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  loading="lazy"
                  src={
                    i < rating
                      ? "https://cdn.builder.io/api/v1/image/assets/TEMP/2f263a75840fc613c0d602cf43a1441de011bb6b1c711cafc511d24ef2fe0075?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                      : "https://cdn.builder.io/api/v1/image/assets/TEMP/364a566e353f0d2219bfd1e4cb54f16f811851f8ea3c5374800ad8e78656b3af?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
                  }
                  alt=""
                  className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                />
              ))}
            </div>
            <div className="self-stretch my-auto text-xs font-medium text-zinc-400">
              ({rating})
            </div>
          </div>
          <div className="text-xs text-emerald-400">
            By <span className="text-emerald-400">{seller}</span>
          </div>
        </div>
        <div className="flex gap-6 justify-between mt-4 w-full max-w-[202px] min-h-[34px]">
          <div className="flex gap-2.5 items-center h-full whitespace-nowrap w-[90px]">
            <div className="self-stretch my-auto text-lg font-semibold text-emerald-400">
              ${price}
            </div>
            <div className="self-stretch my-auto text-sm font-medium text-zinc-400">
              ${oldPrice}
            </div>
          </div>
          <button className="flex gap-1.5 justify-center items-center p-0.5 h-full text-sm font-medium text-emerald-400 bg-green-100 rounded-sm w-[90px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b15133df11574a62ebad703705600d70ae98c2a7fdde193bd5e8e5827f5ae9af?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
              alt=""
              className="object-contain shrink-0 self-stretch my-auto w-3 aspect-square"
            />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
