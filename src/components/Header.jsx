import React,{useState,useEffect, useContext,} from 'react'
import logo from '../assets/logo.png'
import { AiOutlineMenu,AiOutlineShoppingCart } from 'react-icons/ai';
import { ShopContext } from '../context/shop-context';

import { Link } from 'react-router-dom';
const Header = () => {   
const [countInProduct,setCountInProduct] = useState(0);
const {cartItems} = useContext(ShopContext);

const ProductInCart=()=>{
    let count=0;
for(let i=0;i<cartItems.length;i++){
count+=cartItems[i].count;
}
return count;
}

useEffect(()=>{
    setCountInProduct(ProductInCart());
},[cartItems])

 const CartOpen=(length)=>{
    if(length>0){   
    const cart=document.getElementById("cart");
    cart.style.display="block";
}
    }

    const menuOpen=()=>{
        const menu=document.getElementById("menu");
        menu.style.display="block";
        }

    // useEffect(()=>{
    //     setBasket(OrderList.length);
    // },[OrderList])

  return (
   <header className='w-full shadow-sm flex justify-between items-center h-16 py-4 sm:px-8 px-2 fixed top-0 left-0 z-50 bg-white'>
    
        <Link to="/" className='logo flex items-center'>
        <img src={logo} className='w-14 h-auto' alt="" />
        <span className="text-app-black font-bold text-3xl">Furniro</span>
        </Link>
    <div className='flex'>
    <ul className='list-none sm:flex hidden'>
        
        <li><Link to="/home" className='hover:text-app-orange duration-300 text-base mx-4'>Home</Link></li>
       
            <div className=' relative group duration-300 text-base mx-4 '>
                <span className='cursor-default'>Shop</span>
            <div className='absolute group-hover:block hidden text-center w-[200px] py-2 px-4 left-[-80px] z-10 bg-white rounded-md shadow-md'>
            <ul>
            <li className='my-3'><Link to="/shop/All" className='hover: hover:text-app-orange duration-300'>All Categories</Link></li>
            
                <li className='my-3'><Link to="/shop/Electronics" className='hover: hover:text-app-orange duration-300'>Electronics</Link></li>
                <li className='my-3'><Link to="/shop/Jewelery" className='hover: hover:text-app-orange duration-300'>Jewelery</Link></li>
                <li className='my-3'><Link to="/shop/Men's Clothing" className='hover: hover:text-app-orange duration-300'>Men's Clothing</Link></li>
                <li className='my-3'><Link to="/shop/Women's Clothing" className='hover: hover:text-app-orange duration-300'>Women's Clothing</Link></li>
            </ul>
            </div>
            </div>     
        <li> <Link to="/contact" className='hover:text-app-orange duration-300 text-base mx-4'>Contact</Link></li>    
    </ul>
    <div className='menu icons sm:ml-8 flex'>
        
    <AiOutlineShoppingCart className='cursor-pointer w-6 h-auto ' onClick={()=>{CartOpen(cartItems.length)}} />
   <span className='ml-1 max-sm:mr-2'> {countInProduct}</span>

        <AiOutlineMenu onClick={()=>{menuOpen()}} className='cursor-pointer hidden max-sm:block w-6 h-auto sm:mx-0 mx-3'/>
        
    </div>
    </div>
   </header>
  )
}

export default Header