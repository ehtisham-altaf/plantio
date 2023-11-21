import React from "react";
import contactImg from "../../assets/hero2.jpg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  return (
    // --------------------------------contact-main-----------------------
    <div className="flex  flex-col w-[100%]  border-b ">

      {/* -----------------------------image heading-area--------------------- */}
      <div className="flex mt-[20px] lg:mt-[100px] justify-center items-center px-5 lg:px-20">
        <img
          src={contactImg}
          alt="phone and plants on the table"
          className="block w-[100%]  h-[250px] md:h-[320px] lg:h-[350px] object-cover "
        />
        <div
          className="flex absolute text-3xl lg:text-5xl
            font-libre  text-gray-800 "
        >
          <p>Contact </p>
        </div>
      </div>

      {/* --------------------------Contact section----------------- */}

      <div className="flex w-[100%] flex-col md:flex-row py-10 lg:py-20 gap-2 md:gap-5 lg:gap-10 px-5 lg:px-20">
        {/* -------------------------------left side----------------- */}

        <div className="flx flex-col w-[100%] md:w-[40%] lg:w-[30%]">
          <h1 className="text-2xl md:text-3xl  text-gray-800  font-libre capitalize pb-5 md:pb-10">
            Contact <i>details</i>
          </h1>
          {/* ------------------ Address area------------- */}
          <div className=" flex flex-col gap-2 lg:gap-3 pt-7 pb-5 border-b">
            <h1 className="font-libre text-lg md:text-xl  text-gray-800 capitalize">
              Address
            </h1>
            <p className="font-poppins text-xs lg:text-sm text-slate-500 capitalize">
              1192 johar town G1 market,lahore
            </p>
          </div>

          {/* ------------------ Phone area------------- */}
          <div className=" flex flex-col gap-2 lg:gap-3 pt-7 pb-5 border-b">
            <h1 className="font-libre text-lg md:text-xl  text-gray-800 capitalize">
              Phone
            </h1>
            <p className="font-poppins text-xs lg:text-sm text-slate-500">
              0544 285046
            </p>
          </div>

          {/* ------------------ Email area------------- */}
          <div className=" flex flex-col gap-2 lg:gap-3 pt-7 pb-5 border-b">
            <h1 className="font-libre text-lg md:text-xl  text-gray-800 capitalize">
              Email
            </h1>
            <p className="font-poppins text-xs lg:text-sm text-slate-500">
              support@plantio.com
            </p>
          </div>

          {/* ------------------ timming  area------------- */}
          <div className=" flex flex-col gap-2 lg:gap-3 pt-7 pb-5 border-b">
            <h1 className="font-libre text-lg md:text-xl  text-gray-800 capitalize">
              Opening Time
            </h1>
            <p className="font-poppins text-xs lg:text-sm text-slate-500 capitalize">
              8:00Am - 10:00Pm, sunday close
            </p>
          </div>

          {/* ------------------ Follow us area------------- */}
          <div className=" flex flex-col gap-2 lg:gap-3 pt-7 pb-1">
            <h1 className="font-libre text-lg md:text-xl  text-gray-800 capitalize">
              Follow us on
            </h1>
            <div className="flex gap-3 font-poppins text-sm lg:text-lg text-gray-600">
              <div className="p-2  rounded-full border cursor-pointer hover:text-black duration-300">
                <FaXTwitter />
              </div>
              <div className="p-2  rounded-full border cursor-pointer hover:text-black duration-300">
                <FaFacebookF />
              </div>

              <div className="p-2  rounded-full border cursor-pointer hover:text-black duration-300">
                <FaInstagram />
              </div>

              <div className="p-2  rounded-full border cursor-pointer hover:text-black duration-300">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>


  {/* -------------------------- Right-side---------------------------*/}

        <div className="flex w-[100%] md:w-[60%]lg:w-[70%]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3402.9993682625377!2d74.26685407485397!3d31.469203549669572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI4JzA5LjEiTiA3NMKwMTYnMDkuOSJF!5e0!3m2!1sen!2s!4v1698499579712!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            className="w-[100%] h-[300px] md:h-[100%] "
           
          />  
        </div>

{/* --------------------------end contact section------------------------- */}
      </div>

{/* -----------------------------form section------------------------ */}

        <div className="flex flex-col w-[100%] bg-gray-100 py-20 px-5">
          <div className="flex flex-col items-center gap-1 lg:gap-3">
            <h1 className="text-2xl lg:text-4xl font-libre capitalize ">Send us your <i>Questions</i></h1>
            <p className="text-xs lg:text-base text-gray-500 font-poppins ">We'll get back to you within two days.</p>
          </div>

          {/* ----------------------------form-area----------------------------- */}
          <form onSubmit={'/'}
          className="flex flex-col w-[100%] md:px-[15%] mt-16 justify-center-items-center gap-10  text-green-900" >

{/* ------------full name and email area----------------- */}
            <div className="flex flex-col md:flex-row w-[100%] gap-10 items-center">
 {/* -------------ful name---------------- */}
              <div className="w-[100%] md:w-[50%]">
              <label for='full_name'  className=" capitalize text-sm lg:text-md font-[500] text-gray-800 font-poppins flex mb-3" >full Name*</label>
              <input  id='full_name' type="text" required className="flex w-[100%] py-4 px-3 border border-black" />
              </div>
{/* ------------------ email------------------------ */}
              <div className="w-[100%] md:w-[50%]">
              <label for='email'  className="capitalize text-sm lg:text-md font-[500] text-gray-800 font-poppins flex mb-3" >Email* </label>
              <input id='email' type="email" required className="flex w-[100%] py-4 px-3  border border-black" />
              </div>

            </div>
{/* ---------------------message and button area------------------------ */}

            <div className="flex flex-col w-[100%] justify-center gap-10">
{/* -----------------message area---------------------- */}

            <div className="flex w-[100%]">
            <div className="w-[100%]">
              <label for='message'  className="capitalize text-sm lg:text-md font-[500] text-gray-800 font-poppins flex mb-3"> Full message* </label> 
              <textarea id='message'  required className="flex w-[100%] border overflow-y-visible  h-[300px] border-black" />
              </div>
            </div>
{/* ----------------------submit burron area--------------------------- */}
             <div className="w-[100%] flex justify-center">
             <input type="submit" className="block w-max py-4 px-20 bg-gray-600 hover:bg-green-800 duration-300 text-white text- uppercase tracking-[1px] font-poppins" value="submit" />

             </div>

             </div>
            
          </form>



        




      </div>

      {/* -----------------------end main container--------------------- */}
    </div>
  );
}
