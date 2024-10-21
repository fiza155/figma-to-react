import React from "react";

function CategoryCard({ name, items, image, bgColor }) {
  return (
    <div
      className={`flex flex-col ${bgColor} items-center text-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 max-sm:py-1`}
    >
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="object-cover w-24 h-24 mb-4 rounded-full"
      />
      <div className={`p-4 rounded w-28  max-w-full`}>
        <h3 className="text-lg font-semibold text-slate-700">{name}</h3>
        <p className="text-sm text-zinc-500">{items} Items</p>
      </div>
    </div>
  );
}

export default CategoryCard;

