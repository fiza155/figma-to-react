import React from "react";

function SearchBar() {
  return (
    <form className="flex justify-between items-start self-stretch my-auto min-w-[240px] w-[497px] max-md:max-w-full">
      <div className="flex overflow-hidden gap-3 items-center p-3 text-sm rounded-sm bg-zinc-100 min-w-[240px] w-[455px] max-md:max-w-full">
        <div className="flex gap-px justify-center items-center self-stretch my-auto font-semibold text-slate-700">
          <div className="self-stretch my-auto">All Categories</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe7524762f34487e3641a8ec29b43bae14f1b8d200a05177353601902753b31d?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[18px]"
          />
        </div>
        <div className="flex gap-3 justify-center items-center self-stretch my-auto font-medium text-zinc-400">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c18e3c67fe3c3c4bfe27b681241d01569d04ce1d1e1b92fc1d1e6dca250660b9?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto w-px aspect-[0.07] stroke-[1px] stroke-zinc-400"
          />
          <label htmlFor="searchInput" className="sr-only">
            Search for items
          </label>
          <input
            id="searchInput"
            type="text"
            placeholder="Search for items..."
            className="bg-transparent border-none outline-none"
          />
        </div>
      </div>
      <button
        type="submit"
        className="flex gap-2.5 justify-center items-center py-2.5 pr-4 pl-4 bg-emerald-400 rounded-none min-h-[42px] w-[55px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/06ad52e303f1f033738b31427dce517087d4b39b683c3bfce703968e256c7d63?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
          alt="Search"
          className="object-contain self-stretch my-auto w-6 aspect-square"
        />
      </button>
    </form>
  );
}

export default SearchBar;
