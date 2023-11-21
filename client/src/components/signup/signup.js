import React, { useState } from 'react'
import bg from "../../assets/signupbg.jpg"

import signupImage from "../../assets/signup.jpg"
import {PiEyeLight,PiEyeSlashLight} from"react-icons/pi"
import {motion} from "framer-motion"



export default function Signup() {
    const [signup,setSignup]=useState(false);
    const [showpassword,setshowPassword]=useState(false);
    const right_side_section='flex flex-col w-[100%] duration-700  px-5 md:px-7 lg:px-10 '
    const right_side_h1='text-4xl  font-libre   pb-5 md:pb-5 lg:pb-8  px-1 md:px-2 lg:px-5 '
    const right_side_form='flex flex-col  px-1 md:px-3 lg:px-5  gap-8 lg:gap-10'
    const password_section='flex w-[100%] items-center border-b-[1px] border-white py-3  px-1 gap-2'

    const form_inputs='border-b-[1px]  border-white bg-transparent py-3 px-1'

   
  return (
    <>
    
    <motion.div
    initial={{ x: '-100%' }}
    animate={{ x: '0%' }}
    transition={{ duration: 0.1, ease: 'easeIn' }}
    exit={{ opacity: 0 }} className='flex min-h-[90vh]  py-10 mt-[20px] lg:mt-[100px] items-center  justify-center   duration-700' style={{backgroundImage:`url(${bg}`,backgroundSize:window.innerWidth>960?'120% 140%':'cover',backgroundRepeat:'no-repeat',backgroundPosition:signup? 'left':'center'}}>



            {/* ----------------------form section--------------------- */}

         <div className='flex  flex-col md:flex-row  w-[80%] md:w-[70%]  gap-0 md:gap-1 overflow-hidden pb-5 '>


{/* -------------------------left-side------------------------- */}

                <div className=' flex  w-[100%] md:w-[40%] h-[250px] md:h-auto md:flex    md:rounded-l-xl  md:border-[1px] md:border-r-0 overflow-hidden'>
               
                    <img src='https://cdn.shopify.com/s/files/1/0150/6262/products/the_sill-variant-white_gloss-money_tree.jpg?v=1680542101' alt="flower image" className='flex w-[100%] 
                    h-max md:h-auto
               object-cover bg-gray-100 md:rounded-l-xl  duration-700' style={{marginLeft: window.innerWidth>768? signup?'-100%':'0' : signup?'100%' :'0'}} />

                <img src={signupImage} alt="flower image" className=' flex bg-gray-100   w-[100%] 
                h-max md:h-auto
                  md:rounded-l-xl object-cover   duration-700 'style={{marginLeft:window.innerWidth<768? '-200%':'0'}} />
               

                     </div>



                     {/* ----------------------right-side----------------------- */}

      

                     <div className='flex w-[100%] md:w-[60%] md:border-[1px] md:border-l-0   py-10 2xl:py-24 md:rounded-r-xl text-white font-poppins  backdrop-blur-[2px] 
                     md:backdrop-blur-[3px] 2xl:backdrop-blur-[8px] backdrop-brightness-[0.7] overflow-hidden '>



           {/* -------------------------------login area ------------------------- */}

                        <div className={right_side_section} style={{marginLeft:signup?'-100%':'0'}}>

                        <h1 className={right_side_h1}>Login</h1>

                        <form  className={right_side_form}>
                               

                              {/* ----------------------login email area--------------  */}

                               <div className='flex flex-col w-[100%]'>
                            
                            <input id='signup-form' type="email" placeholder='Email here' className={form_inputs} required />
                            </div>

                            
                            {/* ------------------------------login password area------------- */}
                            <div className={password_section}>

                            <input id='signup-form' type={showpassword ? "text" :"password"} placeholder='Password here' className=' w-[95%] 2xl:text-[30px]  bg-transparent ' required />

                             <div className=' flex text-xl md:text-2xl  2xl:text-[45px] w-max justify-center items-center' onClick={()=>setshowPassword(!showpassword)}>
                            {
                            showpassword? 
                            <PiEyeLight  />:
                            <PiEyeSlashLight/>
                            } 
                            </div>

                            </div>
                            

              {/* -------------------------login button -------------------------                */}

                            <div className='flex flex-col w-[100%] gap-3 2xl:gap-7 justify-center items-center mt-20 '>
                            <button className='flex w-[100%] py-3 2xl:py-6 justify-center items-center  2xl:text-[30px] bg-green-900 uppercase hover:bg-green-800 duration-300'>Login</button>
                            <p className='text-[13px]  2xl:text-3xl md:text-sm'>Don't have an account ? <u className='cursor-pointer font-[600]' onClick={()=>setSignup(true)}>create one</u></p>
                            </div>
                           

                        </form>


                        </div>



{/* -----------------------------------sign up area--------------------------- */}
                      


                     <div className={right_side_section} style={{marginRight:signup?'0':'-100%'}}>

                     <h1 className={right_side_h1}>SignUp</h1>
                        


                        <form id='signup-form' className={right_side_form}>


{/* ----------------------------------- sign up name area ------------------------- */}
                               
                           <div className='flex flex-col w-[100%]'>
                           
                            <input id='signup-form' type="text" placeholder='Name here' className={form_inputs} required />
                            </div>

{/* ------------------------------- sign up email area------------------------------------ */}
            
                               
                            <div className='flex flex-col w-[100%]'>
                            
                            <input id='signup-form' type="email" placeholder='Email here' className={form_inputs}  required/>
                            </div>

 {/* ------------------------- sign up password area----------------------- */}

                            <div className='flex flex-col w-[100%]'>
                            <label className='hidden'> Password</label>

                            <div className={password_section}>
                            <input id='signup-form' type={showpassword ? "text" :"password"} placeholder='Password here' className=' w-[95%]  2xl:text-[30px]  bg-transparent  ' required />

                             <div className=' flex text-xl md:text-2xl w-max justify-center items-center 2xl:text-[45px] ' onClick={()=>setshowPassword(!showpassword)}>
                            {
                            showpassword? 
                            <PiEyeLight  />:
                            <PiEyeSlashLight/>
                            } 
                            </div>

                            </div>

                            </div>
                        

    {/* ----------------------------sign up buton area ------------------------ */}

                            <div className='flex flex-col w-[100%] gap-3 justify-center items-center'>
                            <button className='flex w-[100%] py-3 2xl:py-6  2xl:text-[30px] justify-center items-center  bg-green-900 uppercase hover:bg-green-800 duration-300'>Signup</button>
                            <p className=' text-[13px] 2xl:text-3xl text-sm'>Already have a account ? <u className='cursor-pointer font-[700]' onClick={()=>setSignup(false) }>Login</u></p>
                            </div>
                           

                        </form>

                        </div>
                      
{/* ----------------------------- end of right side------------------------- */}
                     </div>
                     
   {/* ---------------------end of form section--------------- */}

            </div>
    

       
    </motion.div>
    </>

  )
}
