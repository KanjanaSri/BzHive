import React from "react";
import { useParams } from "react-router-dom";
import { getAllProducts } from "../reducer/productSlice";
import { addToCart } from "../reducer/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const products = useSelector(getAllProducts);

  //get the signgle product base on id
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading...
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="py-5 lg:py-32 h-screen flex items-center">
      <div className="container md:px-20 mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img
              className="max-w-[200px] lg:max-w-xs"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl text-red-500 font-medium mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-primary py-4 px-8 text-white uppercase"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
