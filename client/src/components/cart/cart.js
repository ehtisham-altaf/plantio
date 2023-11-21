import React,{useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import empty_cart from "../../assets/cart-empty.png"


export default function Cart() {
    const navigate = useNavigate()

const [total, setTotal] = useState(0)
const [totalItems, setTotalItems] = useState(0)
const CartChecker= (JSON.parse(localStorage.getItem("cart")))!=null ? true : false;
const carts=JSON.parse(localStorage.getItem("cart"))
 

  useEffect(() => {
    
      const total =carts!==null? carts.reduce((add, item) => {
      return add + (item.price * item.quantity)
     
    }, 0) :''

    const totalItems = CartChecker? carts.reduce((sum, item) => {
      return sum + (item.quantity)
     
    }, 0) :
     CartChecker?setTotal(total):setTotal(0)
    
    setTotalItems(totalItems)
    

  }, [carts])

//  ---------------------Increment function -------------------------- 
 
const handleInc = (id) => {
    const updatedCart = carts.map(item => {
      if(item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
     navigate('/cart')
  }

// --------------------- Decrement function -------------------

  const handleDec = (id) => {
    const updatedCart = carts.map(item => {
      if(item.id === id) {
       
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

// --------------------------Remove product function--------------------
  const removeProduct = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
   
}


  return (


<>
{
    CartChecker?
    carts.length<1 ?

    
    

    // --------------------------Empty cart area--------------------------------

    <div className='h-max   flex flex-col justify-center items-center font-poppins  border-b mt-[20px] lg:mt-[100px]'>
      <img src={empty_cart} alt='empty bag' className=''/>
      <div className='text-md w-[75%] text-center py-10 '>
        <h1 className='font-semibold text-xl  lg:text-3xl md:text-2xl  pb-3'>Your cart is empty</h1>
        <p className='font-[500] text-sm  md:text-lg lg:text-xl text-gray-600'>looks like you havn't added anything to your cart. Go ahead & explore top categories</p>
      </div>
      
      <Link to={'/shop'}   onClick={() =>  
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })}  className="flex font-[500] text-green-800 text-sm md:text-md lg:text-lg mb-10 mt-5">

            <svg className="fill-current mr-2 text-green-800 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
             explore products
          </Link>
    </div>


:

// ----------------------cart main section--------------------------------------
    <div className="w-[100%] px-5 md:px-10 lg:px-20 py-5  border-b mt-[20px] lg:mt-[100px] ">
      <div className="flex flex-col lg:flex-row shadow-md rounded-lg lg:rounded-lg my-10 justify-center items-center lg:justify-start lg:items-start">

{/* ----------------------------left-side---------- ---------------- */}

        <div className="w-[100%] lg:w-[75%] px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-xl lg:text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-xl lg:text-2xl">{CartChecker?carts.length :'0'} Items</h2>
          </div>
          <div className=" hidden lg:flex mt-10 mb-5 font-semibold text-center text-gray-600 text-xs uppercase">
            <h3 className=" w-[40%] text-left">Product Details</h3>
            <h3 className=" w-[20%]">Quantity</h3>
            <h3 className=" w-[20%] ">Price</h3>
            <h3 className=" w-[20%]">Total</h3>
          </div>
          {  
            carts?.map(cart => {
              return (

                <div className="flex flex-col lg:flex-row  hover:bg-gray-100 -mx-8 px-6 py-5 border-b lg:border-none lg:items-center ">
      {/* ---------------------product image -----------------------------    */}

                  <div className="flex w-[100%] lg:w-[40%]">
                    <div className=" w-[30%] lg:w-[5rem]">
                      <img className="h-[6rem] object-contain" src={cart.image} alt={cart.title} />
                    </div>

        {/* --------------------------Product Title area-----------------------------  */}

                    <div className="flex flex-col gap-3 lg:gap-0 lg:justify-between ml-4 w-max">
                      <span className="font-bold text-sm">{cart.title}</span>
                      <span className=" hidden lg:flex text-green-800 text-xs capitalize">{cart.category}</span>
                      <span className="text-green-800 text-sm font-semibold capitalize lg:hidden">${cart.price}</span>
                       <div className=" hidden lg:flex w-max font-semibold hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeProduct(cart.id)}>Remove</div> 
                    </div>
                  </div>


{/* ----------------------quantity area------------------------------- */}

                     
                  <div className="flex justify-between lg:justify-center w-[20%] py-5 lg:pt-0">
                    
    {/* ------------------- Decrement Area--------------------*/}

                    <svg className="fill-current text-gray-500 hover:text-gray-700 w-2 lg:w-3 cursor-pointer" viewBox="0 0 448 512" onClick={() =>cart.quantity>1? handleDec(cart.id): removeProduct(cart.id)}><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>

{/* ------------------------- Input field------------------------ */}

                    <input className="mx-2 border text-center w-9" type="text" value={cart.quantity} />
                            
 {/* ------------------- Increment Area--------------------*/}
                    <svg className="fill-current text-gray-500  hover:text-gray-700 w-2 lg:w-3 cursor-pointer" onClick={() => handleInc(cart?.id)} viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </div>
    {/* ------------------------------------------pirce----------------------   */}

                  <span className="hidden lg:flex justify-center gap-3 w-max  lg:w-[20%] font-semibold text-sm text-gray-700 lg:text-black pt-5 lg:py-0"> 
                  <div className='flex lg:hidden  mb-5 font-semibold text-gray-500'>Price:
                  </div>
                  ${cart.price}</span>

        {/* ------------------------------total price----------------------  */}
        <span className=" hidden lg:flex justify-start lg:justify-center gap-3 w-max  lg:w-[20%] font-semibold text-sm sm:text-gray-600 lg:text-black lg:py-0">
        <div className='flex lg:hidden  mb-5 font-semibold text-gray-900'>Total Price:
                  </div>
                   ${(cart.price * cart.quantity).toFixed(2)}

        </span>
        <div className="flex lg:hidden font-semibold font-poppins w-max hover:text-red-500 text-gray-500 text-xs cursor-pointer" onClick={() => removeProduct(cart.id)}>Remove</div>
                </div>
              )
            })
          }

          <Link to={'/shop'} className="flex w-max font-semibold text-green-800 text-sm mt-10">

            <svg className="fill-current mr-2 text-green-800 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </Link>
        </div>



{/* ------------------------right-side----------------------------- */}
        
        <div id="summary" className=" lg:flex bg-slate-50 rounded-t-[30px] rounded-b-lg lg:rounded-none lg:bg-white lg:flex-col   w-[100%] lg:w-[25%] px-8 py-10 ">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5 px-3 ">
            <span className="font-semibold text-sm uppercase">Items {totalItems}</span>
            <span className="font-semibold text-sm">{total.toFixed(2)}$</span>
          </div>
          
          {/* <div className="py-10">
            <label for="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>*/}



{/* ------------------------------- total amount area=------------- */}


          <div className="border-t mt-8"> 
            <div className="flex font-semibold justify-between py-6 text-sm uppercase px-3">
              <span>Total cost</span>
              <span>${(total).toFixed(2)}</span>
            </div>
            <button className="bg-green-900 font-semibold hover:bg-green-800 py-3 text-sm text-white uppercase w-full">Checkout</button>
          </div>
        </div>

      </div>
    </div>
    :

    
    // --------------------------Empty cart area--------------------------------

    <div className='h-max   flex flex-col justify-center items-center font-poppins  border-b mt-[20px] lg:mt-[100px]'>
      <img src={empty_cart} alt='empty bag' className=''/>
      <div className='text-md w-[75%] text-center py-10 '>
        <h1 className='font-semibold text-xl  lg:text-3xl md:text-2xl  pb-3'>Your cart is empty</h1>
        <p className='font-[500] text-sm  md:text-lg lg:text-xl text-gray-600'>looks like you havn't added anything to your cart. Go ahead & explore top categories</p>
      </div>
      
      <Link to={'/shop'}   onClick={() =>  
                          window.scroll({
                            top: 0,
                            left: 0,
                            behavior: "smooth",
                          })}  className="flex font-[500] text-green-800 text-sm md:text-md lg:text-lg mb-10 mt-5">

            <svg className="fill-current mr-2 text-green-800 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
             explore products
          </Link>
    </div>

    

   

}

    </>



  )
        
}
