import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GoHome } from "react-icons/go";

import { openSidebar } from "../reducer/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartQuantity } from "../reducer/cartSlice";

export default function Header() {
  // header state
  const [isActive, setIsActive] = useState(false);
  const quantity = useSelector(getTotalCartQuantity);

  const dispatch = useDispatch();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } py-3 sm:px-10 fixed w-full z-10 transition-all`}
    >
      <div className="container md:px-10 mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img
              className="w-[50px] sm:w-[80px]"
              src={"/logo.png"}
              alt="logo"
            />
          </div>
        </Link>
        <div className="flex justify-center items-center gap-4">
          <Link to={"/"}>
            <GoHome className="text-2xl sm:text-3xl" />
          </Link>

          <div
            onClick={() => dispatch(openSidebar())}
            className="cursor-pointer flex relative"
          >
            <PiShoppingCartSimpleLight className="text-2xl sm:text-3xl" />
            <div className="bg-red-500 absolute -right-3 -bottom-1 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
              {quantity}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
