import React from 'react'
import { MdEmail } from "react-icons/md"
import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa"
import {FaXTwitter} from 'react-icons/fa6' 
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';
export default function Footer() {
const footer_box="flex flex-col w-[100%]  font-poppins";
const footer_box_heading="text-md  uppercase  tracking-[2px] text-gray-600 font-[500]";
const footer_ul="flex flex-col pt-5 md:pt-6 lg:pt-8 gap-[18px] text-gray-400 text-[14.5px] font-[400]";
const footer_Link="w-max cursor-pointer hover:text-gray-600 ease-in-out duration-300 capitalize";
const footer_social="flex  justify-center items-center text-gray-800  text-[16px] h-max  border-gray border-[0.5px] py-3 px-3  rounded-full overflow-viible duration-300 ease-in-out hover:bg-green-900 hover:text-white"

  return (
    <div className='flex flex-col pb-[60px] border-b lg:pb-0'>
{/* -------------------------footer section---------------------- */}

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-[100%] h-max  py-[50px] px-5 md:px-10 lg:px-20 2xl:px-60 gap-10'>

{/* ----------------------company area------------------------ */}

      <div className={footer_box}>
          <h1 className={footer_box_heading}>
            conpamy
            </h1>

          <ul className={footer_ul}>

            <Link to='/about-us'
             onClick={() =>  
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })}  className={footer_Link}>
              About
            </Link>
            <HashLink smooth={true} to='/#services' className={footer_Link}>
              Services
            </HashLink>
            <Link to='/shop'
             onClick={() =>  
              window.scroll({
                top: 0,
                left: 0,
                behavior: "smooth",
              })}  className={footer_Link}>
              our Products
            </Link>
            <Link to='/contact' 
             onClick={() =>  
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })}  
            className={footer_Link}>
              Contact
            </Link>
            
          </ul>
          
        </div>


{/* --------------------------------------Support area---------------------- */}


        <div className={footer_box}>
          <h1 className={footer_box_heading}>
            support
            </h1>

          <ul className={footer_ul}>

            <Link  to='/faqs'
              onClick={() =>  
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })} 
              className={footer_Link}>
            Help + FAQs
            </Link>
            <HashLink smooth={true} to='/faqs/#returns' className={footer_Link}>
            Returns
            </HashLink>
            <Link to='/contact'
              onClick={() =>  
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })} 
             className={footer_Link}>
            Contact Support
            </Link>
            <HashLink smooth={true} to='/faqs/#shipping' className={footer_Link}>
            Shipping
            </HashLink>
            
          </ul>
          
        </div>


{/* -----------------------plant questions area-------------------------- */}

        <div className={footer_box}>
          <h1 className={footer_box_heading}>
            plant questions?
            </h1>

          <ul className={footer_ul}>

            <a href='https://bioadvanced.com/tips-healthy-houseplants' target='_blank' className={footer_Link}>
            Plant Life Blog
            </a>
            <a href='https://www.plantlife.org.uk/about-us/blog/' target='_blank' className={footer_Link}>
            Plant Care Tips
            </a>
            <a href='https://theplantmother.com/blog/' target='_blank' className={footer_Link}>
            Meet Plant Mom
            </a>
            <a href='https://bloomscape.com/vera/#download' target='_blank'>
            Vera Plant Care App
            </a>
            <Link to='/contact'
              onClick={() =>  
                window.scroll({
                  top: 0,
                  left: 0,
                  behavior: "smooth",
                })} 
            
            className={footer_Link}>
            Contact the Grow-How™ Team
            </Link>
            
          </ul>
          
        </div>


{/* ---------------------------------stay in loop area-------------------- */}

        <div className='flex flex-col w-[100%]  h-[100%]  '>
          <h1 className={footer_box_heading}>
            Stay in loop
            </h1>

          <p className='flex  flex-col font-poppins text-gray-400 text-[14.5px] font-[400] pb-4 pt-8 leading-[23px] '>
          Stay in the loop with special offers, plant-parenting tips, and more.
          </p>
          {/* -----------------input--------------------- */}
           <div className='w-[100%] h-max flex items-end  py-2 border-b-2 border-black text-poppins  text-sm'>

               <input style={{border:'none'}}type='email' className='flex w-[100%] pr-2  bg-transparent' placeholder='Enter your email'/>
              <MdEmail className='flex h-max items-center cursor-pointer text-3xl lg:text-2xl text-green-800 ' /> 
       
            </div>
            {/* -----------social icons------------------ */}
            <div className='flex w-[100%] h-max gap-5 pt-10'>
             <a href='/' target='_blank'  className={footer_social}> <FaXTwitter /></a> 
             <a href='/' target='_blank'  className={footer_social}>  <FaFacebookF /></a> 
             <a href='/' target='_blank'  className={footer_social}>   <FaInstagram /></a> 
             <a href='/' target='_blank'  className={footer_social}>   <FaLinkedinIn /></a> 

            </div>

        </div>


      </div>


{/* ----------------------copyright & terms area------------------------ */}


      <div className='flex  flex-col md:flex-row md:text-left w-[100%] h-max font-poppins text-gray-400 gap-2 py-3 md:py-5 border-t-[1px] px-5 md:px-10 lg:px-20 2xl:px-60 justify-between ease-in-out duration-300'>

{/* ------------copyight-------- */}
        <h1 className='text-[12px] md:text-sm flex w-[100%] md:w-max justify-center'>©{new Date().getFullYear()} Plantio Store</h1>


        {/* ------------------terms-------------------- */}
        <ul className=' w-[100%] flex-wrap  md:w-max justify-center flex gap-4 md:gap-8 lg:gap-10 text-[12px] md:text-[13px]'>

          <Link className='hover:text-gray-900 cursor-pointer '>
            Terms of Use
          </Link>

          <Link className='hover:text-gray-900 cursor-pointer '>
          Copyright & Trademark
          </Link>

          <Link className='hover:text-gray-900 cursor-pointer '>
            Policy
          </Link>

          <Link className='hover:text-gray-900 cursor-pointer '>
            Sitemap
          </Link>
          
        </ul>
      </div>



          


    </div>
  )
}
