import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProductShow({ product }) {
  const navigate = useNavigate();
  console.log(product.image);
  return (
<div class="rounded-xl overflow-y-scroll shadow-2xl max-w-sm p-1 h-90 border border-gray-300">
        <div class="relative h-60">
        <img class="w-full" src={product.image} alt="Product Image" className="absolute h-full w-full object-cover"/>
        <div class="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
          SALE
        </div>
      </div>
      <div class="p-4">
        <h3 class="text-lg font-medium mb-2">{product.title}</h3>
        <p class="text-gray-600 text-sm mb-4">{product.description}</p>
        <div class="flex items-center justify-between">
          <span class="font-bold text-lg">{product.prize}</span>
          <button
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/more", { state: { product: product } })}
          >
            View more
          </button>
        </div>
      </div>
    </div>
  );
}
