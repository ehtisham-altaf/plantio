import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaArrowLeft, FaXTwitter } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { RxCross2 } from "react-icons/rx";

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { category } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState([]);
  const [categoryData, setCategoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const [productnotFound, setProductNotFound] = useState(false);

  const pm_button =
    "px-4 py-2 text-2xl text-gray-500 hover:text-black font-poppins";

  const AddProductToCart = (cartProduct) => {
   
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const isProductExist = cart.find((item) => item.id === cartProduct.id);
    if (isProductExist) {
      const updatedCart = cart.map((item) => {
        if (item.id === cartProduct.id) {
          return {
            ...item,
            quantity: item.quantity + qty,
          };
        }
        return item;
      });
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...cartProduct, quantity: qty }])
      );
    }
  };

  const ProductData = async () => {
    axios
      .all([
        axios.get("https://fakestoreapi.com/products/" + id),
        axios.get("https://fakestoreapi.com/products/category/" + category),
      ])
      .then(
        axios.spread((product, category) => {
          setProduct(product.data);
          setCategoryData(category.data);
          setLoading(false);
        })
      );
  };

  setTimeout(() => {
    setProductNotFound(true);
  }, "3000");

  useEffect(() => {
    ProductData();
  }, [id]);


 

  const removeProduct = (id) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    navigate("/shop");
  };

  return (
    <>
      {product.length < 1 ? (
        <>
          {/* -----------------------------------product-not
          found-area---------------------- */}
          {productnotFound ? (
            <div className="flex flex-col fixed top-0 h-[100vh] w-[100%] bg-white justify-center items-center z-[1000] gap-5">
              <h1 className="font-libre text-3xl lg:5xl ">
                Product not found :{"("}
              </h1>
              <Link
                to="/shop"
                className=" flex justify-center items-center text-sm gap-3 lg:text-base text-gray-500 font-semibold font-poppins "
              >
                <FaArrowLeft /> Discover products{" "}
              </Link>
            </div>
          ) : (
             <></>
          )}
          {/* ----------------------Skeleton area---------------------------- */}
          <div className="flex w-[100%]  mt-[20px] lg:[120px] flex-col lg:flex-row h-auto py-10 lg:py-10 px-5 md:px-10 lg:px-32">
            {/* -------------------------left-side-------------- */}

            <div className="w-[100%] lg:w-[50%] h-auto bg-white p-5 lg:p-10">
              <Skeleton className="w-[100%] h-[300px] md:h-[400px] lg:h-[600px] " />
            </div>

            {/* ---------------------------Right Side---------------------------- */}

            <div className=" w-[100%] lg:w-[50%] pt-10 px-5 py-5 lg:px-10">
              <div className="flex flex-col gap-4 md:gap-5 pb-5 ">
                <Skeleton className="w-[100%] h-[100px]" />
                <Skeleton className="w-[50px]" />
              </div>

              <div className=" flex flex-col font-poppins py-5 lg:py-10">
                <Skeleton className="h-[170px]" />
              </div>
              <Skeleton className=" w-[100%] h-[30px]" />
            </div>

            {/* --------------------------End of Detail Area-------------------- */}
          </div>
        </>
      ) : (
        <>
          {showModal ? (
            <>
              {/* -----------------------------------Modal area---------------------------------- */}
              <div className="justify-center items-center flex fixed inset-0 z-50 ">
                <div className="relative my-6 mx-auto w-[90%]">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      {/* -----------------------title---------------- */}
                      <h3 className="text-3xl font-semibold">Added to cart</h3>
                      {/* --------------------------------------modal cross Button ----------------------- */}
                      <button
                        className="p-1 ml-auto   text-black  text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <RxCross2 className=" text-gray-900 opacity-[0.8] h-6 w-6 text-xl block " />
                      </button>
                    </div>

                    {/*body*/}
                    {/* ---------------------------Modal product-area------------------------------------- */}
                    <div className="flex flex-col p-6">
                      <div className="relative  flex justify-between items-center">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-[100px] h-[100px] object-contain"
                        />

                        <p className="my-4 w-[70%] text-blueGray-500 text-sm lg:text-lg leading-relaxed  px-5">
                          {product.title}
                        </p>
                        <p className="flex  w-[10%] font-semibold justify-end items-center text-gray-900">
                          X {qty}
                        </p>
                      </div>
                      {/* ------------------------------remove-buton----------------------------- */}
                      <div className="text-xs font-poppins pt-5  flex w-[100%] justify-end right-0 ">
                        <p
                          className="cursor-pointer hover:text-red-500 w-max"
                          onClick={() => removeProduct(product.id)}
                        >
                          Remove
                        </p>
                      </div>
                    </div>
                    {/*footer*/}
                    {/* ----------------------------modal Buttons------------------------------- */}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-300"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="text-green-800 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {navigate("/cart"); 
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })}}
                      >
                        goto cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : (
            <>
              <div className="mt-10 md:mt-0 lg:mt-24 border-b-[1px] border-gray-300">
                {/* ------------------------------loading-area----------------    */}

                {loading ? (
                  <div className="flex w-[100%]  mt-[20px] lg:[120px] flex-col lg:flex-row h-auto py-10 lg:py-10 px-5 md:px-10 lg:px-32">
                  {/* -------------------------left-side-------------- */}
      
                  <div className="w-[100%] lg:w-[50%] h-auto bg-white p-5 lg:p-10">
                    <Skeleton className="w-[100%] h-[300px] md:h-[400px] lg:h-[600px] " />
                  </div>
      
                  {/* ---------------------------Right Side---------------------------- */}
      
                  <div className=" w-[100%] lg:w-[50%] pt-10 px-5 py-5 lg:px-10">
                    <div className="flex flex-col gap-4 md:gap-5 pb-5 ">
                      <Skeleton className="w-[100%] h-[100px]" />
                      <Skeleton className="w-[50px]" />
                    </div>
      
                    <div className=" flex flex-col font-poppins py-5 lg:py-10">
                      <Skeleton className="h-[170px]" />
                    </div>
                    <Skeleton className=" w-[100%] h-[30px]" />
                  </div>
      
                  {/* --------------------------End of Detail Area-------------------- */}
                </div>
                ) : (
                  // ------------------------------product detail Section start ------------------
                  <div  key={product.id} className="flex w-[100%] flex-col lg:flex-row h-auto py-10 lg:py-10 px-5 md:px-10 lg:px-32 border-b-[1px] border-gray-200">
                    {/* -------------------------left-side-------------- */}

                    <div className="w-[100%] lg:w-[50%] h-auto bg-white p-5 lg:p-10">
                      <img
                        src={product.image}
                        alt="product image"
                        className="w-[100%] h-[300px] md:h-[400px] lg:h-[600px] object-contain overflow-hidden"
                      />
                    </div>

                    {/* ---------------------------Right Side---------------------------- */}

                    <div className=" shadow-md md:shadow-lg rounded-xl w-[100%] lg:w-[50%] pt-10 px-5 py-5 lg:px-10">
                      <div className="flex flex-col gap-4 md:gap-5 pb-5 font-libre text-2xl leading-tight text-gray-900 border-b-[1px] border-gray-200">
                        <h1 className="">{product.title}</h1>
                        <p className="text-gray-700">${product.price}</p>
                      </div>

                      <div className=" flex flex-col font-poppins py-5 lg:py-10">
                        <p className="text-[13.5px] md:text-sm lg:text-[16px] text-gray-500 font-[300] md:font-[400]  leading-6 lg:leading-7">
                          {product.description}
                        </p>
                      </div>

                      {/* ------------------------ Add to cart area-------------------- */}

                      <div
                        className="flex flex-col w-[100%] gap-2 pb-5 lg:py-10
                border-b-[1px] border-gray-200"
                      >
                        <div className="flex w-[100%] gap-1 ">
                          {/* ------------------------counter buttons--------------------------- */}
                          <div className=" flex border-[1px]  border-gray-300 w-[35%] lg:w-[30%]   justify-between items-center">
                            {/* ---------------------Minus Button----------------------   */}

                            <button
                              className={pm_button}
                              onClick={() =>
                                qty > 1 ? setQty(qty - 1) : setQty(1)
                              }
                            >
                              -
                            </button>

                            {/* ---------------------input field--------------- */}

                            <input
                              type={"number"}
                              value={qty}
                              onChange={(e) => setQty(parseInt(e.target.value))}
                              className="flex w-[100%] h-max  items-center bg-transparent text-center font-[600] font-poppins"
                            />

                            {/* ------------------------Plus Button ---------------------- */}

                            <button
                              className={pm_button}
                              onClick={() => setQty(parseInt(qty) + 1)}
                            >
                              +
                            </button>
                          </div>

                          {/* ------------------Add to cart Buton---------------- */}

                          <button
                            className="flex w-[65%] lg:w-[70%] bg-gray-500 px-6 lg:py-3 justify-center items-center text-white font-poppins text-md lg:text-lg duration-300 hover:bg-green-800 "
                            onClick={() => {
                              AddProductToCart(product);
                              setShowModal(true);
                            }}
                          >
                            Add to cart
                          </button>

                          {/* -----------------End of Add of cart Button----------------- */}
                        </div>

                        {/* -----------------------Buy Now Button------------------  */}

                        <button className="flex  w-[100%] bg-green-950 px-6 py-3  justify-center items-center text-white duration-300 hover:bg-green-800 text-md: lg:text-lg font-poppins">
                          Buy Now
                        </button>

                        {/* ----------------------End of Add to Cart Area------------------- */}
                      </div>

                      {/* ------------------------More information area-----------------  */}

                      <div className="flex flex-col font-poppins text-sm  text-gray-500 gap-4 md:gap-6 py-10 font-[400] tracking-[0.2px]">
                        <p className="flex gap-2 ">
                          Sku:{" "}
                          <span className="text-black font-[500]">
                            {product.id}
                          </span>
                        </p>

                        <p className="flex gap-2 ">
                          Category:{" "}
                          <span className="text-black font-[500] capitalize">
                            {product.category}
                          </span>
                        </p>

                        <p className="flex gap-5 ">
                          Share:{" "}
                          <span className="text-black text-sm flex gap-3 justify-center items-center">
                            <FaXTwitter className="cursor-pointer hover:text-gray-700" />
                            <FaFacebookF className="cursor-pointer hover:text-gray-700" />
                            <FaLinkedinIn className="cursor-pointer hover:text-gray-700" />
                          </span>
                        </p>
                      </div>

                      {/* ------------------------End of left Side-------------------- */}
                    </div>

                    {/* --------------------------End of Detail Area-------------------- */}
                  </div>
                )}

                {/* --------------------------more products area----------------------- */}
                <div className="flex text-2xl lg:text-3xl text-gray-700 w-[100%] font-libre justify-center items-center py-16">
                  Related&nbsp; <i className="text-green-800">products</i>
                </div>

                <Swiper
                  slidesPerView={2}
                  spaceBetween={10}
                  loop={true}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  breakpoints={{
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  modules={[Pagination]}
                  className="w-[90%] mx-[5%] px-10    h-[300px] md:h-[350px] lg:h-[450px] flex mb-10"
                >
                  {categoryData
                    .filter((item) => {
                      return item.id != id;
                    })
                    .map((cat) => {
                      return (
                        <SwiperSlide key={cat.id}>
                          <Link
                            onClick={() => {
                              setProduct([""]);
                              setLoading(true);
                              setQty(1);

                              window.scroll({
                                top: 0,
                                left: 0,
                                behavior: "smooth",
                              });
                            }}
                            to={`/shop/${cat.category}/${cat.id}`}
                          >
                            <div className="px-5 shadow-md rounded-lg py-5 cursor-pointer flex flex-col w-[100%]">
                              <img
                                src={cat.image}
                                alt="same category products"
                                className="block w-[100%] h-[150px] md:h-[200px] lg:h-[280px] object-contain"
                              />
                              <div className="flex flex-col justify-center items-center pt-5 gap-3 font-poppins text-[#9b9c9e] text-sm lg:text-[15.5px]">
                                <h1 className=" h-[1rem] md:h-[1.2rem] text-center overflow-hidden leading-2 md:leading-5">
                                  {cat.title}
                                </h1>
                                <h1 className="text-gray-400">${cat.price}</h1>
                              </div>
                            </div>
                          </Link>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </div>
              {/* --------------------------modal fragment close ---------------------- */}
            </>
          )}
          {/* -------------------------------produt not found fragement close---------------- */}
        </>
      )}
      {/* --------------------------main fragement close----------------------    */}
    </>
  );
}
