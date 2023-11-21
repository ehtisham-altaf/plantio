import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../assets/logo.png";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineShop,
} from "react-icons/ai";

import { BsBag } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  const [scrolled, setscrolled] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchclick, setSearchClick] = useState(false);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");


  
  const linkStyle =
    "py-2 px-4  font-poppins font-[300] cursor-pointer hover:text-white  hover:rounded-full hover:bg-green-800  duration-300 ";
  const linkStyle2 = "flex text-2xl w-[100%] justify-center cursor-pointer hover:text-3xl lg:hover:text-5xl";
  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products/")

      .then((res) => {
        setProducts(res.data);
      
      });
  };
  const CartChecker= (JSON.parse(localStorage.getItem("cart")))!=null ? true : false;
  const cartitems = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    fetchData();
  }, [cartitems]);


 

  // ------------------------checker function-------------------------
  const ClickChecker = () => {
    setClicked(!clicked);
  };
  const changeNavbar = () => {
    if (window.scrollY >= 100) {
      setscrolled(true);
    } else {
      setscrolled(false);
    }
    if (window.scrollY <= 100 && window.innerWidth >= 1024) {
      setClicked(false);
    }
  };
  window.addEventListener("scroll", changeNavbar);


  return (
    <>
      {/* ------------------------------------Search area----------------------------------- */}

      {searchclick ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          exit={{ opacity: 0 }}
          className="flex flex-col  fixed pt-20  min-h-[100vh] h-[100vh] w-[100%] bg-[#ffffffb9] items-center backdrop-blur z-[999]"
        >
          <div className="flex w-[100%] justify-between items-center px-5 py-1">
            <p className="font-libre text-xl lg:text-3xl ">
              What are you looking for?{" "}
            </p>
            <div
              className="flex group w-max font-poppins text-sm gap-1 lg:gap-2 items-center cursor-pointer "
              onClick={() => {
                setSearchClick(false);
                setSearch("");
              }}
            >
              <p>Close</p>
              <AiOutlineClose className="group-hover:rotate-90 duration-300 " />
            </div>
          </div>

          {/* -----------search bar  area--------------------- */}

          <div className=" flex w-[95%] font-poppins items-center border-b-2 border-black  text-2xl lg:text-5xl mt-10">
            <input
              id="nav_search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="w-[100%] py-2 px-2   bg-transparent"
            />
            <AiOutlineSearch className=" text-gray-700 cursor-pointer" />
          </div>
          {/* ----------------------Search product area--------------------------- */}

          <div
            id="nav_product_area"
            className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-[100%] px-5 gap-3 lg:gap-5 py-10 mt-2  h-auto overflow-y-scroll mb-[50px]  "
          >
            {products
              .filter((data) => {
                return search.toLowerCase() === "" ||
                  search.toLowerCase() === " "
                  ? ""
                  : data.title.toLowerCase().includes(search) ||
                      data.category.toLowerCase().includes(search) ||
                      data.title.includes(search) ||
                      data.category.includes(search);
              })

              .map((data) => {
                return (
                  <Link
                    key={data.id}
                    to={`/shop/${data.category}/${data.id}`}
                    className=" flex  items-center"
                   onClick={()=>{setSearchClick(false);setSearch("");window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                  });}}>
                    <div className=" bg-white p-3 md:p-5 lg:p-7 rounded-md flex flex-col w-[100%] duration-300 hover:-translate-y-1 lg:hover:-translate-y-4 cursor-pointer shadow-md">
                      <img
                        src={data.image}
                        alt="product image"
                        className="block w-[100%] h-[180px] md:h-[200px] object-contain"
                      />
                      <p className=" flex text-xs md:text-sm  font-poppins px-4 mt-5  max-h-[2rem] md:min-h-[2.5rem] lg:max-h-[2.7rem] overflow-hidden leading-[16px] text-center justify-center text-[#696969]">
                        {data.title}
                      </p>
                      <p className=" flex text-xs  md:text-sm l:text-md font-libre px-5 mt-2   overflow-hidden  justify-center text-[#696969]">
                        ${data.price}
                      </p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </motion.div>
      ) : (
        <div className="hidden"></div>
      )}


      {/* ----------------------------------mian nav container----------------------------- */}
      <div className="flex top-0 relative md:relative lg:absolute w-[100%] px-4 md:px-12 lg:px-20  2xl:px-60 py-3   justify-between h-[75px]  lg:h-[100px] items-center z-[100] shadow-md lg:shadow-none ">
        {/* -----------------------------------------hamburber menu for mobile--------------------------    */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="w-[20%] z-[99] lg:hidden"
        >
          <div
            className=" flex w-max h-max text-3xl md:text-4xl   cursor-pointer text-green-800  linear duration-300"
            onClick={() => setClicked(!clicked)}
            style={{ rotate: clicked ? "90deg" : "0deg" }}
          >
            {clicked ? <AiOutlineClose /> : <HiOutlineBars3BottomRight />}
          </div>
        </motion.div>

        {/* ----------------------------------------nav logo section------------------------------------ */}

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="flex w-max lg:w-[20%] h-[100%] "
        >
          {/* ---------------------------------logo image ----------------------------------- */}
          <Link to="/" 
           onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          >
            <img
              src={logo}
              alt="logo"
              className="w-[100%] h-[100%] object-contain cursor-pointer"
            />
          </Link>
        </motion.div>
        {/* -------------------------------------------nav link side --------------------------------------- */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="hidden lg:flex  h-auto w-[60%] justify-center items-center"
        >
          <ul className="flex gap-10  text-green-800  capitalize font-poppins font-[500] tracking-wide">
            <Link to="/">
              <li className={linkStyle}>home</li>
            </Link>
            <Link to="/about-us">
              <li className={linkStyle}>about</li>
            </Link>
            <Link to="/shop">
              <li className={linkStyle}>shop</li>
            </Link>
            <Link to="/contact">
              <li className={linkStyle}>contact</li>
            </Link>

          </ul>
        </motion.div>

        {/* -------------------------------------------nav user side------------------------------------------ */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          exit={{ opacity: 0 }}
          className="hidden  w-[20%] lg:flex  gap-5 items-center   text-white text-xl justify-end "
        >
          {/* --------------------------------------Search icon -------------------------    */}
          <div className="flex  text-green-900 w-max ">
            <AiOutlineSearch
              className="text-2xl cursor-pointer"
              onClick={() => setSearchClick(true)}
            />
          </div>

          {/* --------------------------------------account icon -------------------------    */}
          <Link to="/sign-up" 
           onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
           className="flex  text-green-900  ">
            <AiOutlineUser className="text-2xl" />
          </Link>
          {/* ---------------------------------------------admin icon -----------------------------  
          <Link to="/admin"
           onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
           className=" flex text-green-900   ">
            <RiAdminFill className="text-2xl" />
          </Link> */}

          {/* ----------------------------------------cart icon ------------------------------- */}
          <Link to="/cart"
           onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
           className="flex  text-green-900 pr-3 py-3 ">
            <BsBag className="text-2xl" />
          
              <div className="absolute  w-2 h-2 p-2 bg-black rounded-full top-0 right-0 justify-center items-center text-white text-xs" style={{display:CartChecker? 'flex':'none'}}>
                {CartChecker?cartitems.length: ''}
              </div>
            
          </Link>
        </motion.div>

        {/* --------------------------------cart icon  mobile-----------------------------------   */}
        <Link
          to="/cart"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          className="flex lg:hidden  w-[20%] text-green-900 rounded-full  p-3  justify-end "
        >
          <BsBag className="text-2xl  lg:text-4xl" />
         
            <div className=" absolute  w-2 h-2 p-2.5  bg-black rounded-full top-3 right-3 justify-center items-center text-white text-xs" style={{display:CartChecker? "flex" :'none'}}>
              {CartChecker? cartitems.length : ''}
            </div>
       
        </Link>

        {/* --------------------------------Scrolled menu-------------------------------*/}

        <div className="z-50 fixed flex-col " onClick={ClickChecker}>
          <div
            className="flex fixed right-5  w-[50px] h-[50px] bg-green-700 rounded-[100%] text-white text-xl justify-center items-center z-50  linear duration-300 "
            style={{
              top: scrolled ? "40px" : "-100px",
              rotate: clicked ? "90deg" : "0deg",
            }}
          >
            {clicked ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

          <div
            className=" flex  flex-col items-center fixed  w-[100vw] max-h-auto  top-[0] right-[0] overflow-hidden  backdrop-blur duration-300 overflow-y-visible"
            style={{ 
              height: clicked ? "100vh" : "0px",
            
            }}
          >
            <ul
              className=" flex font-libre uppercase h-[80%] text-green-800 flex-col  justify-center items-center bg-[#ffffffb6] overflow-hidden  backdrop-blur  py-10 px-4 gap-10 linear duration-500 border-b-4 border-green-900"
              style={{
                width: clicked ? "70vw" : "80vw",
                color: clicked ? "rgb(22 101 52 )" : "white",
               
              }}
            >
              <Link to="/"
               onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
               className={linkStyle2}>
               
                <li >home</li>
              </Link>
              <Link to="/about-us"
               onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
               className={linkStyle2}>
                
                <li >About</li>
              </Link>
              <Link to="/shop"
               onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
               className={linkStyle2}>
                
                <li >Shop</li>
              </Link>
              <Link to="/contact"
               onClick={() => {
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                });
              }}
               className={linkStyle2}>
                
                <li >Contact</li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex fixed lg:hidden bottom-0 w-[100%] bg-gray-200 h-[60px] text-[#636363] z-[999] text-2xl justify-evenly items-center">
        {scrolled ? (
          <Link to="/cart"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          >
            <div className="flex w-max">
              <BsBag />
              
                <div
                  className="absolute  w-2 h-2 p-2  rounded-full top-2
         left-[20%]  bg-black justify-center items-center text-white text-xs"
               style={{display:CartChecker? 'flex':'none'}}  >
                  {CartChecker? cartitems.length :''}
                </div>
             
            </div>
          </Link>
        ) : (
          <Link to="/"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
          >
            <AiOutlineHome />{" "}
          </Link>
        )}
        <Link to="/shop"
         onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        >
          <AiOutlineShop />
        </Link>
        <AiOutlineSearch
          className="cursor-pointer"
          onClick={() => setSearchClick(true)}
        />

        <Link to="/sign-up"
         onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
        >
          <AiOutlineUser />
        </Link>
      </div>
    </>
  );
}
