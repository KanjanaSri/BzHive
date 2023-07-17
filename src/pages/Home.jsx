import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentCategory } from "../reducer/categorySlice";
import {
  getAllProducts,
  getStatus,
  fetchAsyncProducts,
} from "../reducer/productSlice";

import Product from "../components/Products";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Categories from "../components/Categories";

export default function Home() {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);
  const productStatus = useSelector(getStatus);
  const currentCategory = useSelector(getCurrentCategory);

  const allProducts = products?.filter((p) => p.category !== "electronics");

  useEffect(() => {
    dispatch(fetchAsyncProducts());
  }, []);

  // Filtered category
  useEffect(() => {
    const productByCategory = products?.filter(
      (p) => p.category === currentCategory
    );

    if (currentCategory === "all") setFilteredProducts(allProducts);
    else setFilteredProducts(productByCategory);
  }, [currentCategory]);

  return (
    <div>
      <Hero />
      <Categories />
      <section className="p-16">
        <div className="container mx-auto">
          {productStatus === "loading" && <Loader />}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.length
              ? filteredProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))
              : allProducts.map((product) => (
                  <Product key={product.id} product={product} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
}
