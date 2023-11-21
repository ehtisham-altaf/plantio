import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function New() {
  

  const [products,setProducts]=useState([])
  
  
  const fetchData=()=>
  {
    axios.get('https://fakestoreapi.com/products?limit=7')
    .then((res)=> setProducts(res.data) )
    
  }
  useEffect(()=>
  { 
    fetchData()

  },[])
 
  
  
  
  
  return (
    <div className='flex flex-col w-[100%] h-max px-5 md-px-10 lg:px-20 2xl:px-60 py-[70px] justify-center items-center'>
      <h1 className='font-libre gap-5 text-2xl md:text-3xl capitalize mb-10 text-gray-800'>new <i className='text-green-800'>Arrivals </i></h1>

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
            spaceBetween: 20,
          }
         
        }}
        modules={[Pagination]}
        className="w-[100%] h-[300px] md:h-[350px] lg:h-[450px]"
      >


          {products.map((data)=>
          (  <SwiperSlide key={data.id}>
            <Link to={`/shop/${data.category}/${data.id}`}
            onClick={() => {
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
            
             >
               <div className="px-5 shadow-md rounded-lg py-5 cursor-pointer flex flex-col w-[100%]">
                <img
                  src={data.image}
                  alt="same category products"
                  className="block w-[100%] h-[150px] md:h-[200px] lg:h-[280px] object-contain"
                />
                <div className="flex flex-col justify-center items-center pt-5 gap-2  md:gap-3  font-poppins text-[#9b9c9e] text-xs md:text-sm lg:text-[15.5px]">
                  <h1 className=" h-[1rem] md:h-[1.2rem] text-center overflow-hidden leading-2 md:leading-5">{data.title}</h1>
                  <h1 className="text-gray-400 font-semibold">${data.price}</h1>
                </div>
              </div>
              </Link>
            </SwiperSlide>
          ))}
          
      </Swiper>


    </div>
  )
}
