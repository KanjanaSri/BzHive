import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  getStatus,
  fetchAsyncProducts,
} from "../reducer/productSlice";

import Product from "../components/Products";
import Hero from "../components/Hero";
import Loader from "../components/Loader";

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);

  const filteredProducts = products.filter((p) => p.category !== "electronics");

  return (
    <div>
      <Hero />
      <section className="p-16">
        <div className="container mx-auto">
          {productStatus === "loading" && <Loader />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
