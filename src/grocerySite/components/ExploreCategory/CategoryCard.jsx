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

// import React from "react";

// function CategoryCard({ name, items, image, bgColor }) {
//   return (
//     <div className="flex flex-col pt-3.5">
//       <img
//         loading="lazy"
//         src={image}
//         alt={name}
//         className="object-contain z-10 self-center mt-3.5 max-w-full aspect-square w-[101px]"
//       />
//       <div
//         className={`flex flex-col items-center px-7 pt-32 pb-5 mt-0 ${bgColor} rounded min-h-[194px] max-md:px-5 max-md:pt-24`}
//       >
//         <div className="flex flex-col items-center">
//           <div className="text-lg font-semibold text-slate-700">{name}</div>
//           <div className="mt-1.5 text-sm font-medium text-zinc-400">
//             {items} Items
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CategoryCard;
