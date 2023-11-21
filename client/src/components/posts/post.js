import React from 'react'
import "./post.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BsInstagram } from 'react-icons/bs'
import { Autoplay } from 'swiper/modules';

export default function Post() {
   /*const post_box="flex w-[100%] h-[20vh] overflow-hidden";
  const post_img="flex w-[100%] h-[100%] object-cover hover:scale-100";*/
  return (

    <div className='flex flex-col w-[100%] h-max px-10 2xl:px-60 justify-center items-center pt-[70px] pb-[50px]  border-b-[1.5px]'>
      

      <h1 className='flex font-libre text-2xl lg:text-3xl w-[100%] justify-center pb-3 lg:pb-4'>#bring<i className='text-green-800'>lifein</i></h1>
      <p className='font-poppins flex text-[12.5px] tracking-wide md:text-[13.5px] lg:text-[15px] text-gray-700  px-5 pb-[50px]  text-center '>Our community has a thing for plant styling. Get inspired.</p>
    
    

   
<Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
      
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,

        }}

        
        
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          }
         
        }}
        modules={[Autoplay]}
        
        className="w-[100%] h-auto flex "
      >


        <SwiperSlide>
          <div className='post_box'>
          <img src='https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1557256241-pot-plant-close-up-elevated-view-high-res-stock-photography-829464-001-1557256205.jpg?crop=1.00xw:0.801xh;0,0.103xh&resize=980:*' alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src='https://img.freepik.com/premium-photo/green-leaf-background-with-plant-it_791733-352.jpg' alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src='https://images.pexels.com/photos/1777813/pexels-photo-1777813.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src='https://img.freepik.com/free-photo/succulent-cactus-plants_658428-38.jpg' alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>


          <SwiperSlide>
          <div className='post_box'>
          <img src='https://images.pexels.com/photos/2253844/pexels-photo-2253844.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>

          
          <SwiperSlide>
          <div className='post_box'>
          <img src='https://bouqs.com/product_images/money-tree/Deluxe/613fca39b84ad30098718d88/detail.jpg?c=1631570489' alt="posts" className='post_img'/>
          <div className='post_overlay'><BsInstagram /></div>
          </div>
          </SwiperSlide>




      </Swiper>
    
    
    </div>
  )
}
