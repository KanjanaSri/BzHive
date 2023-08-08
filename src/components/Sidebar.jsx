import React from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../reducer/cartSlice";
import { getSidebarStatus, closeSidebar } from "../reducer/sidebarSlice";
import {
  getCart,
  getTotalCartPrice,
  getTotalCartQuantity,
} from "../reducer/cartSlice";
import CartItem from "../components/CartItem";

export default function Sidebar() {
  const dispatch = useDispatch();
  const isSidebarOpen = useSelector(getSidebarStatus);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  return (
    <div
      className={`${
        isSidebarOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-700 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">{`Shopping Cart (${totalCartQuantity})`}</div>
        <div
          onClick={() => dispatch(closeSidebar())}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 h-[50vh] overflow-y-auto overflow-x-hidden border-b">
        {cart.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </div>

      {/* sidebar bottom */}
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        <div className="flex w-full justify-between items-center">
          <div className="uppercase font-semibold">
            <span className="mr-2">Total: </span>${" "}
            {parseFloat(totalCartPrice).toFixed(2)}
          </div>
          <div
            onClick={() => dispatch(clearCart())}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/cart"}
          onClick={() => dispatch(closeSidebar())}
          className="bg-gray-200 flex p-4 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link className="bg-primary flex p-4 justify-center items-center text-white w-full font-medium">
          Checkout
        </Link>
      </div>
    </div>
  );
}
