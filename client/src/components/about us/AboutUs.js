import React from "react";
import aboutImg from "../../assets/aboutimg2.png";
import { PiPottedPlantLight } from "react-icons/pi";
import { BsBoxSeam } from "react-icons/bs";
import { GiPlantWatering } from "react-icons/gi";
import arrow from "../../assets/arrow.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from 'swiper/modules';
import { FaStar, FaStarHalfStroke } from "react-icons/fa6";

export default function AboutUs() {
  const bg =
    "https://images.unsplash.com/photo-1623824505948-2938b8818e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";

  const work_box =
    "flex flex-col w-[100%] h-max px-10  items-center gap-3 md:gap-5 lg:gap-7 ";
  const work_box_heading =
    "flex  font-libre  capitalize text-sm md:text-base  lg:text-xl text-gray-700";

  return (
    <div className="border-b">
      {/* -----------about us heading----------------- */}

      <div
        className="flex  h-[250px] md:h-[300px] lg:h-[400px] justify-center items-center  font-libre text-5xl text-green-950  mt-[20px] lg:mt-[100px] mx-5 lg:mx-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        About Us
      </div>

      {/* ------------------------plant img---------------------------- */}

      <div className="flex w-[100%] px-5 mt-10 md:px-10 lg:px-20">
        <img
          src={aboutImg}
          alt="plant in pot"
          className="block  w-[100%] h-max md:h-[400px] lg:h-[600px] object-contain py-5 "
        />
      </div>

      {/* --------------------------heading section --------------- */}

      <div className="flex flex-col w-[100%] py-5 lg:py-10 ">
        <p className="uppercase font-poppins text-xs lg:text-base tracking-[1px]  text-slate-700 text-center">
          FLACIO PHOTOSYNTHESIS STORIES
        </p>
        <h1 className="font-libre  text-2xl md:text-4xl lg:text-[50px] text-gray-800 text-center px-5 md:px-32 py-3 lg:py-4 leading-normal md:leading-[45px] lg:leading-[55px]">
          We connect buyers and sellers with suitable, eco-friendly{"  "}
          <i>products</i>
        </h1>
        <p className=" w-[100%] px-5 md:px-[15%] flex text-center leading-relaxed tracking-[0.5px]  text-xs lg:text-sm text-slate-500 font-poppins">
          Nothing adds more beauty and comfort to our homes and offices than the
          lush flowers and foliage of indoor plants. Bedrooms, bathrooms,
          kitchens, cubicles… There really isn’t a space a houseplant can’t
          enliven. Just add light and water, and you’ve got a growing indoor
          oasis.
        </p>
      </div>

      {/* ----------------------------------3 imgs area------------------------- */}


      <div className="grid grid-cols-1 md:grid-cols-3 w-[100%] py-10  gap-5 lg:gap-10 px-5 md:px-10 lg:px-20 ">
        {/* ------------img no 1----------------- */}
        <img src="https://images.pexels.com/photos/8989514/pexels-photo-8989514.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="plant image" className=" block w-[100%] h-[500px] md:h-[350px] lg:h-[450px] object-cover duration-100  hover:animate-shake" />
      
 {/* ------------img no 2----------------- */}
      <img src="https://images.pexels.com/photos/9088036/pexels-photo-9088036.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="plant image" className=" block md:mt-[100px] w-[100%] h-[500px] md:h-[350px] lg:h-[450px] object-cover duration-100  hover:animate-shake " />
      
     
 {/* ------------img no 3----------------- */}

        <img src="https://cdn.create.vista.com/api/media/small/275829512/stock-photo-beautiful-green-plant-flowerpot-wooden" alt="plant image" className=" block w-[100%] h-[500px] md:h-[350px] lg:h-[450px] object-cover  duration-100  hover:animate-shake" />
           </div>

      {/* ----------------------hows it work area --------------- */}

      <div className="w-[100%] flex flex-col bg-pink-50 items-center  py-20 md:py-16 lg:py-24 md:px-[5%] lg:px-[10%] ">
        <h1 className="flex  text-2xl lg:text-4xl font-libre text-gray-800 mb-16 md:mb-16 lg:mb-24 gap-[6px] lg:gap-[8px] flex-wrap capitalize">
          Here's how it <i className="text-green-800">works</i>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 w-[100%]   gap-16 md:gap-0 ">
          <div className={work_box}>
            <PiPottedPlantLight className=" text-6xl text-green-900 hover:animate-shake duration-100 " />
            <h1 className={work_box_heading}>Pick a plant</h1>
          </div>

          <img
            src={arrow}
            alt="arrow"
            className="hidden md:flex opacity-[0.1] absolute md:w-[150px] lg:w-[200px] md:left-[26.5%] lg:left-[28%] md:mt-5 lg:mt-0 select-none "
          />

          <div className={work_box}>
            <BsBoxSeam className="text-6xl  text-green-900 hover:animate-shake duration-100 " />
            <h1 className={work_box_heading}>Have it shiped</h1>
          </div>

          <img
            src={arrow}
            alt="arrow"
            className=" hidden md:flex opacity-[0.1] absolute md:w-[150px] lg:w-[200px] md:left-[57.5%] lg:left-[57%] md:-mt-16  lg:-mt-20 rotate-180 -scale-x-[1]"
          />

          <div className={work_box}>
            <GiPlantWatering className="text-6xl text-green-900 hover:animate-shake duration-100 " />
            <h1 className={work_box_heading}>Watch it grow</h1>
          </div>
        </div>
      </div>
      {/* ------------------------------------Testimonial area--------------------------- */}

      <div>
        <Swiper 
        slidesPerView={1} 
        loop={true} 
        
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,

        }}

        modules={[Autoplay]}
        className="my-10">

          {/* -----------------------------------slide 1--------------------------- */}
          <SwiperSlide className="flex flex-col w-[100%] py-5 lg:py-10">
            {/* ----------------------stars area---------------------- */}

            <div className="flex  gap-2 text-green-900 text-sm  items-center w-[100%] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            {/* ---------------------------message area--------------------- */}
            <p
              className=" flex text-lg md:text-2xl lg:text-3xl 
   opacity-[0.8] font-libre px-[10%] md:px-[15%] text-center italic py-5 lg:py-10 leading-relaxed md:leading-normal tracking-[0.4px]"
            >
              "Green thumb, black thumb, doesn't matter thanks to Modern
              Sprout!"
            </p>

            {/* ------------------------image & name area --------------------   */}
            <div className="flex flex-col gap-2 lg:gap-5 w-[100%] items-center">
              <img
                src="https://img.freepik.com/free-photo/smiling-confident-businesswoman-posing-with-arms-folded_1262-20950.jpg"
                alt="a girl in blue dress coat smilling"
                className="block w-[100px] h-[100px] object-cover  rounded-full"
              />
              <p className="text-xs lg:text-base text-gray-700 font-[600] font-poppins capitalize">
                {" "}
                sara collen
              </p>
            </div>
          </SwiperSlide>

          {/* -----------------------------------slide 2--------------------------- */}
          <SwiperSlide className="flex flex-col w-[100%] py-5 lg:py-10">
            {/* ----------------------stars area---------------------- */}

            <div className="flex  gap-2 text-green-900 text-sm  items-center w-[100%] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
            </div>
            {/* ---------------------------message area--------------------- */}
            <p
             className=" flex text-lg md:text-2xl lg:text-3xl 
             opacity-[0.8] font-libre px-[10%] md:px-[15%] text-center italic py-5 lg:py-10 leading-relaxed md:leading-normal tracking-[0.4px]"
            >
              "Very happy with Plantio, plants arrived in excellent condition, were healthy looking with lot of growth and theriving!"
            </p>

            {/* ------------------------image & name area --------------------   */}
            <div className="flex flex-col gap-2 lg:gap-5 w-[100%] items-center">
              <img
                src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="a girl with pink background"
                className="block w-[100px] h-[100px] object-cover  rounded-full"
              />
              <p className="text-xs lg:text-base text-gray-700 font-[600] font-poppins capitalize">
                {" "}
                 alisa mark
              </p>
            </div>
          </SwiperSlide>

          {/* -----------------------------------slide 3--------------------------- */}
          <SwiperSlide className="flex flex-col w-[100%] py-5 lg:py-10">
            {/* ----------------------stars area---------------------- */}

            <div className="flex  gap-2 text-green-900 text-sm  items-center w-[100%] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
             
            </div>
            {/* ---------------------------message area--------------------- */}
            <p
              className=" flex text-lg md:text-2xl lg:text-3xl 
              opacity-[0.8] font-libre px-[10%] md:px-[15%] text-center italic py-5 lg:py-10 lead md:leading-normaliing-normal tracking-[0.4px]"
            >
              "Green thumb, black thumb, doesn't matter thanks to Modern
              Sprout!"
            </p>

            {/* ------------------------image & name area --------------------   */}
            <div className="flex flex-col gap-2 lg:gap-5 w-[100%] items-center">
              <img
                src="https://media.istockphoto.com/id/1200677760/photo/portrait-of-handsome-smiling-young-man-with-crossed-arms.jpg?b=1&s=612x612&w=0&k=20&c=t7Z7NBXf5t7jWqoFxsH7B3bgrO3_BznOOhqEXWywjOc="
                alt="a  young man  in gray T shirt  smilling"
                className="block w-[100px] h-[100px] object-cover  rounded-full"
              />
              <p className="text-xs lg:text-base text-gray-700 font-[600] font-poppins capitalize">
                {" "}
                peter jose
              </p>
            </div>
          </SwiperSlide>

          {/* -----------------------------------slide 4--------------------------- */}
          <SwiperSlide className="flex flex-col w-[100%] py-5 lg:py-10">
            {/* ----------------------stars area---------------------- */}

            <div className="flex  gap-2 text-green-900 text-sm  items-center w-[100%] justify-center">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
             
            </div>
            {/* ---------------------------message area--------------------- */}
            <p
              className=" flex text-lg md:text-2xl lg:text-3xl 
   opacity-[0.8] font-libre px-[10%] md:px-[15%] text-center italic py-5 lg:py-10 leading-relaxed md:leading-normal tracking-[0.4px]"
            >
              "Very happy with Plantio, plants arrived in excellent condition, were healthy looking with lot of growth and theriving!"
            </p>

            {/* ------------------------image & name area --------------------   */}
            <div className="flex flex-col gap-2 lg:gap-5 w-[100%] items-center">
              <img
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                className="block w-[100px] h-[100px] object-cover  rounded-full"
              />
              <p className="text-xs lg:text-base text-gray-700 font-[600] font-poppins capitalize">
                {" "}
                andrew one
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
