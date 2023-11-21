import React from 'react'
import fast_delivery from "../../assets/fast-delivery.png"

export default function Discount() {
  return (
    <div className='flex flex-col md:flex-row py-10  md:py-16 lg:py-20 w-[100%] h-max justify-center items-center bg-pink-100 lg:bg-pink-50 gap-5 lg:gap-10 2xl:px-60'>
        <img src={fast_delivery} className='w-[70px] md:w-[100px] hover:animate-shake' />
        <div className=' flex flex-wrap  justify-center  font-libre gap-[5px]  md:gap-[7px] lg:gap-[8px] px-1 text-gray-950'>
            <h1 className='text-[1.2rem] md:text-2xl lg:text-4xl'>Free standard delivery</h1>
            <i className='text-[1.2rem] md:text-2xl lg:text-4xl text-green-800'><u>on orders over $30</u></i>
        </div>
    </div>
  )
}
