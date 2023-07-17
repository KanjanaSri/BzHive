import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="h-[80vh] bg-hero bg-no-repeat bg-cover bg-center relative">
      <div className="container mx-auto flex justify-center h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-amber-400 mr-3"></div>Limited time
          </div>
          <h1 className="text-[70px] leading-[1] text-amber-600  mb-4 font-semibold italic">
            Super Sale <br />
            <span className="font-light text-4xl italic">Up To 70% Off</span>
          </h1>
          <Link
            to={"/"}
            className="self-start uppercase font-semibold border-b-2 border-primary"
          >
            Shop Now
          </Link>
        </div>
      </div>
      {/* background image by Freepik */}
      <p className=" text-sm font-thin text-gray-400 absolute right-3 bottom-2">
        Image by{" "}
        <a
          href="https://www.freepik.com/free-vector/white-abstract-background_11852424.htm#from_view=search&track=ais"
          target="_blank"
        >
          Freepik
        </a>
      </p>
    </section>
  );
}
