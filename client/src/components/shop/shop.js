import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiPlantFill } from "react-icons/ri";
import Navbar from "../navbar/navbar";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
export default function Shop() {
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const loadingArray = [...Array(20).keys()].map(index => index + 1);

  const filter_btn =
    "w-max py-3 px-5 text-black hover:bg-green-800 hover:text-white duration-300 border-2 border-green-800 cursor-pointer";

  const fetchData = () => {
    axios
      .all([
        axios.get("https://fakestoreapi.com/products/" + filter),
        axios.get("https://fakestoreapi.com/products/categories"),
      ])
      .then(
        axios.spread((product, category) => {
          setProducts(product.data);
          setCategory(category.data);
          setTimeout(() => {
            setLoading(false);
          }, "1000");
          
          
    
        })
 );
  };
 
  useEffect(() => {
    fetchData();
   
  },[filter]);


  return (
    <>
     {/* ------------shop-container ------------------ */}
    
    <div className=" border-b ">
     

{/* ----------------------------main shop section--------------------------- */}

      <div className=" flex flex-col  gap-5 lg:gap-10   mt-[20px] lg:mt-[100px]  w-[100%] px-5 lg:px-20 2xl:px-60">
    {/* --------------------------------shop top-image ------------------------------- */}
        <img
          src="https://images.pexels.com/photos/2239676/pexels-photo-2239676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="imgs"
          className="w-[100%] h-[250px] md:h-[320px] lg:h-[350px]    object-cover"
        />

{/* --------------------------------- filter and search section-------------------------- */}

        <div className="flex w-[100%] gap-2 justify-between ">

     {/* ------------------------------- category area------------------------------   */}
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            exit={{ opacity: 0 }}
            className="gap-2 lg:gap-4 hidden md:flex flex-wrap w-[80%] lg:w-[60%] h-max"
          >
            <p className={filter_btn} onClick={() => {setFilter("/");setLoading(true)}}>
              All
            </p>
            <p
              className={filter_btn}
              onClick={() => {setFilter("category/" + categories[0]);
              setLoading(true)}}
            >
              Electronics
            </p>
            <p
              className={filter_btn}
              onClick={() => {setFilter("category/" + categories[1]);setLoading(true)}}
            >
              Jewellery
            </p>
            <p
              className={filter_btn}
              onClick={() => {setFilter("category/" + categories[2]);setLoading(true)}}
            >
              men's Clothing
            </p>
            <p
              className={filter_btn}
              onClick={() => {setFilter("category/" + categories[3]);setLoading(true)}}
            >
              woman's Clothing
            </p>
          </motion.div>
{/* -------------------------drop-down area mobile------------------------------ */}
          <div className=" flex md:hidden w-max  ">
            <select
              id="categories"
              
              
              onChange={(e) => {setFilter(e.target.value);setLoading(true)} }
              className=" bg-white  text-gray-500 shadow-sm  text-sm rounded-md flex  font-poppins w-full px-2"
            >
              <option selected value={""}>
                All
              </option>
              {categories.map((data) => {
                return <option value={`category/${data}`}>{data}</option>;
              })}
            </select>
          </div>
{/* -------------------------------------search bar area------------------------- */}

          <div className="max-w-md w-max md:w-[20%] lg:w-[40%]  ">
            <div className="relative flex items-center w-full h-12 rounded-md 
            shadow-sm focus-within:shadow-lg bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
{/* ---------------------------------search bar-------------------- */}
              <input
                className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 placeholder:text-gray-400 "
                type="text"
                id="search"
                onChange={(e) => setSearch(e.target.value)}
                onClick={() => setFilter("")}
                placeholder="Search Product.."
              />
            </div>
          </div>
        </div>
      </div>
{/* --------------------------------------loading-area----------------------------- */}
      {
        loading ? (
         <div
           
            className="  grid  bg-gray-50 lg:bg-gray-100 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-[100%] px-5 lg:px-20 2xl:px-60 gap-3 lg:gap-5 h-max pt-20 pb-10  lg:pb-20 mt-5 border-b"
          >
            {loadingArray.map(() => {
                return (
                  <div
                   
                    className=" flex  odd:-mt-12 md:odd:mt-0 lg:even:mt-12 lg:odd:-mt-12 md:h-[330px] lg:h-[300px] items-start"
                  >
                
                    <div className=" bg-white p-3 md:p-5 lg:p-7 rounded-lg lg:rounded-xl flex flex-col w-[100%] duration-300 hover:-translate-y-1 lg:hover:-translate-y-4 cursor-pointer shadow-md">
                      <Skeleton
                       
                        className=" w-[100%] h-[170px] md:h-[200px]" />
                      <Skeleton className=" " />
                       
                      <Skeleton className=" "/>
                     
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          // -------------------------------------------shop  Section--------------------- 
          <div
           
            className="  grid  bg-gray-50 lg:bg-gray-100 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 w-[100%] px-5 lg:px-20 2xl:px-60 gap-3 lg:gap-5 h-max pt-20 pb-10  lg:pb-20 mt-5 border-b"
          >
            {products
              .filter((data) => {
                return search.toLowerCase() === ""
                  ? data
                  : data.title.toLowerCase().includes(search) ||
                      data.category.toLowerCase().includes(search) ||
                      data.title.includes(search) ||
                      data.category.includes(search);
              })
              .map((data) => {
                return (
                  <Link
                  key={data.id}
                    to={`${data.category}/${data.id}`}
                    className=" flex  odd:-mt-12 md:odd:mt-0 lg:even:mt-12 lg:odd:-mt-12 md:h-[330px] lg:h-[300px] items-start"
                  >
                
                    <div className=" bg-white p-3 md:p-5 lg:p-7 rounded-lg lg:rounded-xl flex flex-col w-[100%] duration-300 hover:-translate-y-1 lg:hover:-translate-y-4 cursor-pointer shadow-md">
                      <img
                        src={data.image}
                        alt="product image"
                        className="block w-[100%] h-[170px] md:h-[200px] object-contain"
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
        )
        //  ------------------loading-bracket
      }
     
    </div>
    </>
  );
}
