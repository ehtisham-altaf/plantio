import React from "react";
import "./service.css";
import service1 from "../../assets/service1.jpg";
import service2 from "../../assets/service2.jpg";
import service3 from "../../assets/service3.jpg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Service() {
  const service_box =
    "flex flex-col w-[100%] h-auto overflow-hidden items-center md:items-start";
  const service_img =
    "flex  w-[100%] h-[500px] md:h-[300px] lg:h-[450px] 2xl:h-[550px] cursor-pointer object-cover mb-3 hover:animate-shake";
  return (
    // -------------------------------services main container---------------------
    <div
      id="services"
      className="grid grid-cols-1 md:grid-cols-3 items-center w-[100%] px-5 md:px-10 lg:px-20 2xl:px-60 h-auto pt-[70px] gap-2 md:gap-5 lg:gap-10 pb-[50px] "
    >
      {/* ----------------------------1st service---------------------------- */}

      <Link
        to="/shop"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className={service_box}
      >
        <img src={service1} className={service_img} alt="service 1 img" />

        <div className="service_title">
          <div className="flex items-center  w-[100%] gap-[5px] md:gap-[6.5px] lg:gap-[8px]  h-max">
            Live <i className="text-green-800">plants </i>
            <BsArrowRight className="arrow" />
          </div>
          <div className="line"> </div>
        </div>
      </Link>

      {/* -------------------------------2nd service---------------------------- */}

      <Link
        to="/shop"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className={service_box}
      >
        <img src={service2} className={service_img} alt="service 2 img" />

        <div className="service_title">
          <div className="flex items-center gap-[5px] md:gap-[6.5px] lg:gap-[8px]   h-max">
            plant <i className="text-green-800">care </i>
            <BsArrowRight className="arrow" />
          </div>
          <div className="line"> </div>
        </div>
      </Link>

      {/* -------------------------3rd service-----------------------  */}

      <Link
        to="/shop"
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        className={service_box}
      >
        <img src={service3} className={service_img} alt="service 3 img" />

        <div className="service_title">
          <div className="flex items-center gap-[5px] md:gap-[6.5px] lg:gap-[8px]   h-max">
            fall <i className="text-green-800">collection </i>
            <BsArrowRight className="arrow" />
          </div>
          <div className="line"> </div>
        </div>
      </Link>
    </div>
  );
}
