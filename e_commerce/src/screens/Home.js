import React, { useEffect, useState } from "react";
import ProductShow from "../components/ProductShow";
import Skeleton from "../components/Skeleton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json()) //Main cause a unable to read properties map
      .then((res) => {
        setProducts(res);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  // console.log(products)
  return (
    <div className="p-4">
      <div className="flex flex-wrap -mx-4">
        {loading ? (
          <Skeleton />
        ) : (
          products.map((product, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8"
            >
              <ProductShow product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
}
