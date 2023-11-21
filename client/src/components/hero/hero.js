import React from "react";

import "./hero.css";
import hero1 from "../../assets/hero6.png";
import hero2 from "../../assets/hero7.png";
import hero3 from "../../assets/hero8.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, EffectCreative } from "swiper/modules";
import { Link } from "react-router-dom";
export default function Hero() {
  const hero_h1 =
    "text-[1.3rem] md:text-4xl lg:text-6xl w-[80%] text-left font-libre leading-[30px]";
  const hero_heading =
    "flex flex-col lg:gap-2 w-[100%] h-[100%] px-4 md:px-24 lg:px-32 2xl:px-52 justify-center  text-green-800";
  const hero_paragraph =
    " w-auto hidden md:flex font-poppins font-200 text-gray-900 pr-[45%] py-6 text-[10px] md:text-[14px] 2xl:leading-[33px] 2xl:text-[20px]";
  const hero_button =
    "flex w-max px-5 md:px-6 py-3 2xl:py-4 2xl:px-8 border-[1px] md:border-[2px] border-green-900 uppercase font-poppins font-[500] mt-[30px] md:mt-0 tracking-widest text-[12px] md:text-[14px] 2xl:text-[18px] hover:bg-green-950 hover:text-white";
  const hero_img =
    "flex absolute w-[50%]  h-[100%] ml-[50%] 2xl:ml-[55%]  object-contain z-[11]";

  return (
    <div className="flex w-[100%] h-[400px] md:h-[450px] lg:h-[600px] justify-center items-center">
      <Swiper
        slidesPerView={1}
        spaceBetween={-10}
        loop={true}
        direction={"horizontal"}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
        className="w-[100%] h-[100%]"
      >
        <SwiperSlide>
          <div className="flex w-[100%] h-[100%] bg-pink-50">
            <div className={hero_heading}>
              <h1 className={hero_h1}>Buy a Planter.,</h1>

              <h1 className={hero_h1}>
                Get a <i>grow light free!</i>
              </h1>

              <p className={hero_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat, erat in porttitor ultricies, tortor ante gravida nunc,
                vitae scelerisque velit orci et orci.
              </p>

              <Link
                to="/shop"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={hero_button}
              >
                <button>Discover</button>
              </Link>
            </div>

            <img src={hero1} className={hero_img} alt="green plant" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] h-[100%] bg-green-50">
            <div className={hero_heading}>
              <h1 className={hero_h1}>Give the Gift</h1>

              <h1 className={hero_h1}>
                of <i>Greenery</i>
              </h1>

              <p className={hero_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat, erat in porttitor ultricies, tortor ante gravida nunc,
                vitae scelerisque velit orci et orci.
              </p>

              <Link
                to="/shop"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={hero_button}
              >
                <button>Discover</button>
              </Link>
            </div>

            <img src={hero2} className={hero_img} alt="green plant" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex w-[100%] h-[100%] bg-slate-50">
            <div className={hero_heading}>
              <h1 className={hero_h1}>Uncomplicate</h1>

              <h1 className={hero_h1}>
                indoor <i>gardening</i>
              </h1>

              <p className={hero_paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                placerat, erat in porttitor ultricies, tortor ante gravida nunc,
                vitae scelerisque velit orci et orci.
              </p>

              <Link
                to="/shop"
                onClick={() => {
                  window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });
                }}
                className={hero_button}
              >
                <button>Discover</button>
              </Link>
            </div>

            <img src={hero3} className={hero_img} alt="green plant" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
