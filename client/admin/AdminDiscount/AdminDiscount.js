import React, { useState } from 'react'
import {BiUpload} from 'react-icons/bi'


export default function AdminDiscount() {
  const[showForm,setShowForm]=useState(false);
  const[Amount,setAmount]=useState('');
  const[img,setimg]=useState(null);



const section_heading='text-md md:text-md font-poppins font-700 text-gray-800 pb-5';
const section_title_area='flex flex-col lg:flex-row w-[100%] mb-6  p-2 lg:p-10 gap-10 lg:gap-0  text-[#7c7d7c] font font-poppins';
const section_input='flex w-[100%] lg:w-[90%] px-5 py-3 rounded-md justify-center items-center';
const section_image_area='flex w-[100%] pt-7 pb-5 md:pb-10 px-2 text-[#7c7d7c] font font-poppins justify-center'


// -------------------------img   base64  functions----------------------

const uploadImage= async (e)=>
{
const file=e.target.files[0];

const base64=await convertBase64Img(file)
 
setimg(base64);

};
const convertBase64Img=(file)=>
{
return new Promise ((resolve,reject)=>
{
  const fileReader = new FileReader();

  fileReader.readAsDataURL(file)

  fileReader.onload=(()=>
{
   resolve(fileReader.result)
});
fileReader.onerror=((error)=>
{
reject(error);
});


});
}
console.log('Price is : ',Amount)
console.log('img  base64 value is : ',img)




const clearForm=()=>
{
  document.getElementById('form').reset();
  setimg(null);
 
}




  return (

    
    <div className='flex flex-col w-[100%] h-auto px-5 lg:px-10'>


      <div className='flex flex-wrap flex-row w-[100%]  font-libre text-xl leading-[24px] md:text-3xl pt-10   text-gray-800 gap-[5px]'>Dilivery Discount Section <i className='text-green-900'>Configuration</i></div> 


{/* ---------------------Edit section Button --------------------------- */}

<div className='flex w-[100%] py-10'>
  <button className=' w-max h-max px-6 md:px-7  py-3 md:py-3 bg-green-900 rounded-md text-[13px] md:text-md lg:text-lg hover:bg-green-800 text-white' onClick={()=>setShowForm(true)}>Edit section</button>
  </div>

  {/* -----------------form start---------- */}


      <form className='w-[100%] flex-col  px-2  py-2 lg:px-10  lg:py-10 mb-10  bg-gray-100 shadow-[0px_0px_10px_0px_#b9bdba] rounded-xl gap-5 trasition-all duration-1000 ease-in-out overflow-hidden ' id='form' style={{marginTop:showForm? '0':'-1000vh'}}>


  {/* ------------------------------section Data area  ------------------- */}

        <div className=' px-2 py-2 lg:px-10 lg:py-10 border-b-2 gap-5'>

  {/* -------------------------section  heading area----------------------- */}
        <div className={section_heading}>Edit  section </div>
        

{/* ------------------------section Amount area---------------------------- */}

        <div className={section_title_area}>

          <div className='flex flex-col gap-2 w-[100%] lg:w-[50%]'>
           <p className=' px-1 lg:px-5'>Amount </p>
          <input  type={'number'} min="0"  id='section_Discount' placeholder='Write delivery discount here' className={section_input}onChange={(e)=>setAmount(e.target.value)} />
          </div>

         </div>


 {/* --------------------------image area---------------------------- */}

        <div className={section_image_area}>
        <input type="file" id="img"className="hidden" onChange={(e)=>uploadImage(e)} />
        <label for="img" className='flex w-[100%] md:w-max flex-wrap justify-center items-center text-white text-[13px] md:text-lg bg-green-900  py-4 gap-3 md:gap-5 px-1 md:px-8 hover:bg-green-800 '><BiUpload className='text-lg md:text-3xl '/>Choose a Image</label>
        </div>
        {img!==null &&
        <div className='flex w-[100%]  px-3 pb-10 justify-center items-center'>
           <img src={img} alt="" className='w-[300px] h-[300px] object-cover' />
        </div>
       
  }






        </div>






{/* -------------------------form button area--------------------- */}


        <div className=' flex gap-1 md:gap-2 px-2 lg:px-10 w-[100%] justify-center md:justify-end items-center py-5 text-white'>
          <input type='submit' className=' px-6 md:px-7  py-3 md:py-3 bg-green-900 rounded-s-md text-[13px] md:text-md lg:text-lg hover:bg-green-800' value='Update'/>
          <div className=' px-6 md:px-7  py-3 md:py-3 bg-green-900 rounded-e-md text-[13px] md:text-md lg:text-lg hover:bg-green-800' onClick={clearForm}>Reset</div>
        </div>
       
       
          {/* -------------------end of form-------------- */}



      </form>


    
    
    </div>
  )
}
