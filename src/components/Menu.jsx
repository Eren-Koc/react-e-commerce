import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai';
const Menu = () => {

    const menuClose=()=>{
        const menu=document.getElementById("menu");
        menu.style.display="none";
        }

  return (
    <div id='menu' className='hidden fixed z-50 top-0 right-0 p-4 h-screen shadow-md bg-app-white w-1/2 min-w-[270px]'>
        <div className='flex justify-between items-center'>
            <span className='text-3xl font-semibold'>Menu</span>
            <AiOutlineClose onClick={()=>{menuClose()}} className='w-10 rounded-md duration-300 hover:text-app-white h cursor-pointer p-2 hover:bg-app-orange h-auto'/>
        </div>
        <div className='flex mt-4  flex-col'>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F w-fit text-app-dark duration-300 hover:text-app-orange' to="/">Home</Link>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F text-app-dark w-fit duration-300 hover:text-app-orange' to="/shop/all">Shop | All Categories</Link>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F text-app-dark w-fit duration-300 hover:text-app-orange' to="/shop/Electronics">Shop | Electronics</Link>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F text-app-dark w-fit duration-300 hover:text-app-orange' to="/shop/Jewelery">Shop | Jewelery</Link>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F text-app-dark w-fit duration-300 hover:text-app-orange' to="/shop/Men's Clothing">Shop | Men's Clothing</Link>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F text-app-dark w-fit duration-300 hover:text-app-orange' to="/shop/Women's Clothing">Shop | Women's Clothing</Link>
            <Link onClick={()=>{menuClose()}} className='text-base font-[300] my-3 border-b border-app-gray-9F w-fit text-app-dark duration-300 hover:text-app-orange' to="/contact">Contact</Link>
        </div>
    </div>
  )
}

export default Menu