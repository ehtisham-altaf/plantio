import React from 'react'
import delivery from "../../assets/home-delivery.png"
import service from "../../assets/customer-service2.png"
import garentee from "../../assets/guarantee.png"

export default function Quality() {
  const quality_box="flex flex-col w-[100%] h-max px-10 py-[20px] justify-center items-center "
  const quality_box_heading="flex flex-wrap justify-center h-max mt-10 font-libre text-xl md:text-[1.3rem]  lg:text-[1.4rem] gap-[6px] text-gray-900";
  const quality_box_paragraph="flex mx-4 md:mx-0 mt-4 font-poppins text-[13.5px]  md:text-[14px] lg:text-[15px]  text-gray-500 text-center leading-[23px]  md:leading-[21px] lg:leading-[25px] ";
  return (


    <div className='grid grid-cols-1 md:grid-cols-3 py-[50px] 2xl:px-60  w-[100%] h-max bg-gray-100 justify-center items-center '>



<div className={quality_box}>
  <img src={garentee} className='w-[75px] md:w-[100px] hover:animate-shake duration-100 ' />
  <h1 className={quality_box_heading}>Unbeatable <i>quality</i></h1>
  <p className={quality_box_paragraph}>Unbeatable quality We source directly from top-rated growers, so we can sell the finest quality plants at the very best prices.</p>
</div>





<div className={quality_box}>
  <img src={delivery} className='w-[75px] md:w-[100px] hover:animate-shake duration-100 ' />
  <h1 className={quality_box_heading}>Delivery to <i>your door</i></h1>
  <p className={quality_box_paragraph}>Delivery to your door We’ll bring your plants to your door, anywhere in GB. If you’re not 100% happy, tell us within 30 days and we’ll sort it.</p>
</div>






<div className={quality_box}>
<img src={service} className='w-[75px] md:w-[100px] hover:animate-shake duration-100 ' />
  <h1 className={quality_box_heading}>All the help  <i>you need</i></h1>
  <p className={quality_box_paragraph}>All the help you need We’ll send you a free plant-parenting course and our plant doctors are always on call.</p>
</div>



    </div>
  )
}
