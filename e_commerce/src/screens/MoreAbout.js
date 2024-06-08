import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function MoreAbout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;
  useEffect(() => {
    if (!product) {
      navigate("/login");
      sessionStorage.removeItem("token");
    }
  });
  const handleBuy = () => {
    navigate("/gateway", { state: { product: product } });
  };
  console.log(product);
  return (
    <div>
      {product && (
        <div>
          <div class="bg-gray-100 dark:bg-gray-800 py-8">
            <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div class="flex flex-col md:flex-row -mx-4">
                <div class="md:flex-1 px-4">
                  <div class="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                    <img
                      class="w-full h-full object-contain"
                      src={product.image}
                      alt="image"
                    />
                  </div>
                  <div class="flex justify-center">
                    <div class="w-1/2 px-2">
                        <button onClick={handleBuy} class="w-full bg-blue-900 dark:bg-blue-600 text-white py-2 px-4 rounded-full font-bold hover:bg-blue-800 dark:hover:bg-blue-700">Buy Now</button>
                    </div>
                </div>
                </div>
                <div class="md:flex-1 px-4">
                  <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {product.title}
                  </h2>
                  <p class="text-gray-600 dark:text-gray-300 text-sm mb-4">
                    {product.category}
                  </p>
                  <div class="flex mb-4">
                    <div class="mr-4">
                      <span class="font-bold text-gray-700 dark:text-gray-300">
                        Price:{" "}
                      </span>
                      <span class="text-gray-600 dark:text-gray-300">
                        {product.price}
                      </span>
                    </div>
                    <div>
                      <span class="font-bold text-gray-700 dark:text-gray-300">
                        Availability:{" "}
                      </span>
                      <span class="text-gray-600 dark:text-gray-300">
                        In Stock
                      </span>
                    </div>
                  </div>
                  <div>
                    <span class="font-bold text-gray-700 dark:text-gray-300">
                      Product Description:
                    </span>
                    <p class="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {product.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
