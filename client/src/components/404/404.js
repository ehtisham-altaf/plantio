import React from 'react'

export default function NotFound() {
  return (
    <div className='w-[100%] flex  flex-col min-h-[100vh] justify-center items-center border-b'><h1 className='text-[10rem] lg:text-[10rem] font-libre'>404</h1>
    <p className='font-libre text-2xl lg:text-4xl w-[100%] text-center '>Oops! That page can't be found.</p>
    <p className='flex px-[20%]  md:px-[10%] lg:px-[15%] text-xs md:text-sm lg:text-base text-gray-700 font-poppins text-center mt-5'>We're really sorry but we can't seem to find the page you were looking for.</p></div>
  )
}
