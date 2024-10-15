import React from "react";

function Logo() {
  return (
    <div className="flex gap-2 justify-center items-center self-stretch my-auto whitespace-nowrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0a6995e08c2f4d9979e9030c9ec984cf45e14045d6305785839d7c4851de30c?placeholderIfAbsent=true&apiKey=8f1f1da0e0e546e6bcbec8560981301a"
        alt="Groceyish logo"
        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[39px]"
      />
      <div className="flex flex-col justify-center self-stretch my-auto">
        <div className="text-xl font-bold text-emerald-400">Groceyish</div>
        <div className="text-sm font-medium text-zinc-400">GROCERY</div>
      </div>
    </div>
  );
}

export default Logo;
