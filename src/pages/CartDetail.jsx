import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../reducer/cartSlice";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="w-[90vw] md:w-[70vw] lg:w-[50vw] mx-auto py-36 min-h-[100vh]">
        <div className="mb-4 uppercase font-semibold">{`Shopping Cart (${totalCartQuantity})`}</div>
        <div className="border-b">
          {cart.map((item) => {
            return <CartItem key={item.id} item={item} />;
          })}
        </div>
        <div className="my-10 flex justify-end items-center gap-10">
          <div className="text-sm sm:text-base uppercase font-semibold text-red-500">
            <span className="mr-2">Total: </span>${" "}
            {parseFloat(totalCartPrice).toFixed(2)}
          </div>
          {cart?.length > 0 && (
            <Link className="w-1/3 bg-primary flex p-4 justify-center items-center text-white font-medium">
              Checkout
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
