import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import logo from "../../assets/logo.png";
import { AiOutlineRight } from "react-icons/ai";

import Hero from "../hero/hero";
import AdminHero from "./AdminHero/AdminHero";

import Services from "../service/service";
import AdminService from "./AdminService/AdminService";

import New from "../new arrivals/new";
import AdminNewArrivals from "./AdminNewArrivals/AdminNewArrivals";

import Discount from "../discount/discount";
import AdminDiscount from "./AdminDiscount/AdminDiscount";

import Story from "../our story/story";
import AdminStory from "./AdminStory/AdminStory";

import Quality from "../quality/quality";
import AdminQuality from "./AdminQuality/AdminQuality";

import AboutUs from "../about us/AboutUs";
import AdminAbout from "./AdminAbout/AdminAbout";

import ShopNow from "../shop now/shopnow";
import AdminShopNow from "./AdminShopNow/AdminShopNow";

import AdminFaqs from "./AdminFaqs/AdminFaqs";

import Post from "../posts/post";
import AdminSocialMedia from "./AdminSocialMedia/AdminSocialMedia";
import { motion } from "framer-motion";

export default function AdminPanel() {
  const [page, setPage] = useState(
    <>
      <Hero /> <AdminHero />
    </>
  );
  const [hidemenu, sethidemenu] = useState(false);

  const li =
    " px-2 md:px-4 w-[90%] py-2 2xl:py-4 rounded-md hover:bg-gray-200 focus:bg-gray-200 hover:cursor-pointer text-[13.8px] md:text-[14px] 2xl:text-[24px] text-[#7c7d7c]";

  return (


    <div draggable='true' className="flex flex-col w-[100%] h-auto " id="admin" onDrag={()=>sethidemenu(!hidemenu)}>
      
      <motion.div
         initial={{ x: "100%" }}
         animate={{ x: "0%" }}
         transition={{ duration: 0.2, ease: "easeOut" }}
         exit={{ opacity: 0 }}
       className="flex   w-[100%] h-[70px] 2xl:h-[120px]  bg-gradient-to-r from-green-950  via-green-800 to-green-900 justify-between  items-center px-10 z-50 fixed ">
        <div className="flex w-[50%] h-[100%]  items-center ">
          <img
            src={logo}
            alt="logo"
            className="h-[80%] object-contain cursor-pointer"
          />
        </div>

        <div
          className="flex gap-2 2xl:gap-5  text-gray-100  font-poppins text-[13px]
        lg:text-[15px] 2xl:text-[26px] w-[50%] justify-end h-[100%]  items-center"
        >
          <p className="flex">welcome Admin </p>
          <div className="text-[14px] 2xl:text-[30px] border-[1px] rounded-full p-1  2xl:p-3 cursor-pointer">
            <BiSolidUser className="" />
          </div>
        </div>
      </motion.div>

      <div className="flex w-[100%] h-auto font-poppins mt-[70px] 2xl:mt-[120px]  ">

        {/* -------------------------- Arrow icon ---------------------- */}

        <div
          className="flex fixed z-[100] top-[150px]  rounded-full p-2 2xl:p-5 border-[1px] border-gray-400 text-gray-600 2xl:text-[30px] bg-gray-100 transition-all duration-300 ease-in-out"
          style={{
            left:
              window.innerWidth > 1536
                ? hidemenu
                  ? "10px"
                  : "366px"
                : hidemenu
                ? "10px"
                : "183px",
            rotate: hidemenu ? "0deg" : "180deg",
          }}
          onClick={() => sethidemenu(!hidemenu)}
        >
          <AiOutlineRight />
        </div>

        {/* --------------side menu's---------- */}

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="block overflow-auto fixed flex-col  w-[200px] bottom-0 pt-[70px] 2xl:pt-[120px] h-[100vh] shadow-[0px_0px_7px_0px_#c0c4c1] bg-gray-100 z-[10] transition-all duration-300"
          style={{
            width: window.innerWidth > 1536 ? "400px" : "200px",
            marginLeft:
              window.innerWidth > 1500
                ? hidemenu
                  ? "-500px"
                  : "0"
                : hidemenu
                ? "-300px"
                : "0",
          }}
          id="adminSideMenu"
        >
          <ul className=" flex py-10 flex-col gap-2 border-b-[2px] justify-center items-center">
            <li className={li} onClick={() => setPage(<AdminHero />)}>
              Sales
            </li>
            <li className={li} onClick={() => setPage(<AdminService />)}>
              Products
            </li>
            <li className={li} onClick={() => setPage(<AdminService />)}>
              Users
            </li>
          </ul>

          <ul className="flex py-10 flex-col gap-2 border-b-[2px] items-center">
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <Hero />
                    <AdminHero />
                  </>
                )
              }
            >
              Hero
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <Services />
                    <AdminService />
                  </>
                )
              }
            >
              Service
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <AboutUs />
                    <AdminAbout />
                  </>
                )
              }
            >
              About us
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <ShopNow/>
                    <AdminShopNow />
                  </>
                )
              }
            >
              Shop Now
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <New />
                    <AdminNewArrivals />
                  </>
                )
              }
            >
              New Arrivals
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <Quality />
                    <AdminQuality />
                  </>
                )
              }
            >
              Quality
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <Story />
                    <AdminStory />
                  </>
                )
              }
            >
              Story
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <Discount />
                    <AdminDiscount />
                  </>
                )
              }
            >
              Discount
            </li>
            <li
              className={li}
              onClick={() =>
                setPage(
                  <>
                    <Post />
                    <AdminSocialMedia />
                  </>
                )
              }
            >
              Social media
            </li>
            <li className={li} onClick={() => setPage(<AdminFaqs />)}>
              FAQs
            </li>
          </ul>
        </motion.div>
        {/* ---------------------end of side menu---------- */}

        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="  flex-1 flex-col justify-center items-center transition-all duration-300 "
          style={{
            width:
              window.innerWidth > 1536
                ? hidemenu
                  ? "100%"
                  : "calc(100% - 400px)"
                : hidemenu
                ? "100%"
                : "calc(100% - 200px)",
            marginLeft:
              window.innerWidth > 1536
                ? hidemenu
                  ? "0px"
                  : "400px"
                : hidemenu
                ? "0px"
                : "200px",
          }}
        >
          {page}
        </motion.div>
      </div>
    </div>
  );
}
