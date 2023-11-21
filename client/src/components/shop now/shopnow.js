import React from "react";
import shopnow from "../../assets/shopnow.jpg";
import { Link } from "react-router-dom";

export default function ShopNow() {
  return (
    <div className="grid grid-cols-1 w-[100%] h-max  md:grid-cols-2  2xl:px-60">
      {/* ----------------------left-side----------------------------- */}
      <div className="flex flex-col w-[100%] h-[100%] justify-center  items-center md:items-start text-center md:text-left px-[10%] py-[10%] bg-gray-100">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 md:text-black font-libre leading-8 md:leading-10 lg:leading-[50px]">
          More ways to find
        </h1>
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-gray-800 md:text-black font-libre">
          the <i className="text-green-800">perfect plant</i>
        </h1>
        <p className="mt-[5%] font-poppins text-[13.5px] lg:text-[15px] leading-[21px] md:leading-[23px] text-gray-700 font-[300]">
          Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus,
          mauris ipsum aliquam libero, non adipiscing dolor urna a orci.
        </p>
        {/* ---------------buton-------------------------- */}
        <Link
          to="/shop"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="flex bg-green-950 text-white text-[12px] tracking-widest w-max mt-[5%] font-poppins uppercase py-3 md:py-4 px-7 md:px-9 hover:bg-gray-950  "
        >
          Shop now
        </Link>
      </div>
      {/* -------------------------------Right side--------------------------- */}
      <img
        src={shopnow}
        alt="gardner"
        className="w-[100%] h-[100%] object-cover"
      />
    </div>
  );
}
