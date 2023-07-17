import React from "react";
import { useDispatch } from "react-redux";
import { updateCurrentCategory } from "../reducer/categorySlice";
import { NavLink } from "react-router-dom";

export default function Categories() {
  const dispatch = useDispatch();
  return (
    <div className="mx-auto mt-10 flex justify-center items-center text-lg text-neutral-500">
      <NavLink
        onClick={() => dispatch(updateCurrentCategory("all"))}
        className="mx-3 flex justify-center items-center cursor-pointer hover:border-b-2 hover:border-y-yellow-300 hover:duration-500"
      >
        All
      </NavLink>
      <NavLink
        onClick={() => dispatch(updateCurrentCategory("men's clothing"))}
        className="mx-3 flex justify-center items-center cursor-pointer hover:border-b-2 hover:border-y-yellow-300 focus:text-yellow-500 hover:duration-500"
      >
        Men
      </NavLink>
      <NavLink
        onClick={() => dispatch(updateCurrentCategory("women's clothing"))}
        className="mx-3 flex justify-center items-center cursor-pointer hover:border-b-2 hover:border-y-yellow-300 focus:text-yellow-500 hover:duration-500"
      >
        Women
      </NavLink>
      <NavLink
        onClick={() => dispatch(updateCurrentCategory("jewelery"))}
        className="mx-3 flex justify-center items-center cursor-pointer hover:border-b-2 hover:border-y-yellow-300 focus:text-yellow-500 hover:duration-500"
      >
        Jewelery
      </NavLink>
    </div>
  );
}
