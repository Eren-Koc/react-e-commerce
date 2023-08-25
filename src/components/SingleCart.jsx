import React,{useContext} from 'react'
import {ShopContext} from '../context/shop-context';
import { Link } from 'react-router-dom';

const SingleCart = ({incart}) => {

  const CartClose=()=>{
    const cart=document.getElementById("cart");
    cart.style.display="none";
    }

    const {addToCart,removeFromCart} = useContext(ShopContext);
  return (
    <div className=' flex max-md:flex-col p-4 rounded-lg border border-app-light-gray my-1' key={incart.id}>
       
         <Link onClick={()=>{CartClose()}} to={"/product/" + incart.id} ><img src={incart.image} className='w-20 h-20 object-contain object-center' alt="" /> </Link>
        <div className='flex-col w-full flex md:ml-2 max-md:mt-2'>
        <Link onClick={()=>{CartClose()}} to={"/product/" + incart.id} >   
        <span className=''>{incart.title}</span>
        </Link>
        <span className='uppercase text-sm text-app-gray mt-1'>{incart.category}</span>
        <div className='w-full max-md:mt-4 mt-2 flex justify-between'>
        <div className='flex justify-center items-center'>
        <button className='mr-1' onClick={()=>{removeFromCart(incart)}}>-</button>
        <span className='mx-1'>{incart.count}</span>
        <button className='ml-1' onClick={()=>{addToCart(incart)}}>+</button>
        </div>
        <span>Total: <span className='ml-2'>${(incart.price*incart.count).toFixed(2)}</span> </span>
        </div>
        </div>
        </div>
  )
}

export default SingleCart