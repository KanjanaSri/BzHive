import React, { useState, useEffect } from "react";
import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { openSidebar } from "../reducer/sidebarSlice";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartQuantity } from "../reducer/cartSlice";

export default function Header() {
  const dispatch = useDispatch();
  // header state
  const [isActive, setIsActive] = useState(false);
  const quantity = useSelector(getTotalCartQuantity);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white shadow-md" : "bg-none"
      } py-3 px-10 fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[80px]" src={"/logo.png"} alt="logo" />
          </div>
        </Link>
        <div
          onClick={() => dispatch(openSidebar())}
          className="cursor-pointer flex relative right-2"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {quantity}
          </div>
        </div>
      </div>
    </header>
  );
}
