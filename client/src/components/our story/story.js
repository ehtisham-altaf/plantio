import React, { useState } from 'react'
import story from "../../assets/hero2.jpg"
import ReactPlayer from "react-player"
import { Link } from 'react-router-dom';
export default function Story() {
  const [Height,setHeight] =useState('100px');
  const height=()=>
  {
    if(window.innerWidth>250 && window.innerWidth<=640)
    {
      setHeight('280px')
    }
    else if(window.innerWidth>640 && window.innerWidth<=768)
    {
      setHeight('320px')
    }
    else if(window.innerWidth>768 && window.innerWidth<=1024)
    {
      setHeight('380px')
    }
    else if(window.innerWidth>1024 && window.innerWidth<=1200)
    {
      setHeight('450px')
    }
    else if(window.innerWidth>1200 && window.innerWidth<=1400)
    {
      setHeight('500px')
    }
    else if(window.innerWidth>1400 )
    {
      setHeight('530px')
    }
    else
    {
      setHeight('100%')
    }

  };
  window.addEventListener('scroll', height)
  
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 w-[100%] h-max px-10 2xl:px-60 py-[70px] gap-10 lg:gap-0'>

<div className=' flex w-[100%] h-[100%]'>
<ReactPlayer 
                    controls={true}
                    light={story}
                    width='100%'
                    height={Height}
                    pip={true}
                    className= 'w-[100%] h-[100%]' 
                    url='https://www.youtube.com/watch?v=dZnnytKdeIE' />
    
    </div>
<div className='flex flex-col w-[100%] lg:w-[90%]  h-[100%]  ml-0 py-4 lg:ml-[10%] justify-center items-center lg:items-start pl-[5%] lg:pl-[10%] pr-[5%] lg:pr-[0%] text-center lg:text-left'>
 
  <p className='font-poppoins  tracking-[2px] text-[11px] lg:text-sm text-green-900'>LIFE GATHERS AROUND PLANTS</p>
  <h1 className='text-2xl lg:text-4xl font-[400] lg:font-[600] font-libre mt-[18px] md:mt-[23px] lg:mt-[28px] leading-[32px]  tracking-[2px] text-gray-800'>A Houseplant’s Journey</h1>
  <i className='text-2xl lg:text-4xl font-[400] lg:font-[600] font-libre tracking-[2px] text-green-800 mt-1'>Home</i>
  <p className='flex font-poppins mt-[20px] md:mt-[28px] lg:mt-[36px] text-[13.5px] md:text-[14.5px]  font-[400] text-gray-600 tracking-[0.3px]'> Praesent egestas tristique nibh. Sed mollis, eros et ultrices tempus mauris ipsumaliquam libero, non adipiscing dolor urna a orci. Fusce convallis metus id felis luctus adipiscing. Integer tincidunt.</p>

  <Link to='/about-us'
  onClick={() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    })}}
   className='flex bg-green-950 text-white text-[11.5px]  tracking-[2px] w-max mt-[28px] md:mt-[38px] lg:mt-[44px] font-poppins uppercase py-4 md:py-4 px-7 md:px-9 hover:bg-gray-950 transition-[4.3s] transition-all-ease-in-out '>Our Stories</Link>

</div>



    </div>
  )
}
