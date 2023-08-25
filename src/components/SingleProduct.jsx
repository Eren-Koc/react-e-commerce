import React,{useContext, useEffect, useState} from 'react'
import {AiFillStar} from 'react-icons/ai';
import {ShopContext} from '../context/shop-context';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {

  const {addToCart} = useContext(ShopContext);
  const url = "/product/"+ product.id;

  return (
    <div className='group relative duration-300 lg:w-1/5 sm:w-2/5 w-9/12   min-w-[250px] min-h-[350px] h-fit flex flex-col flex-wrap m-2 rounded-md shadow-md ' key={product.id}>
            <span className='absolute top-2 right-2 z-[2] shadow-lg py-1 px-2 bg-white rounded-lg flex justify-center items-center'>
               {product.rating.rate} 
              <AiFillStar className='text-app-orange ml-2 w-8 h-auto'/>
            </span>
            <img src={product.image} className='relative w-full mt-3 h-[200px] object-contain' alt="" />
           <div className='w-full flex flex-col px-3 mt-6'>
           <span className='text-app-dark text-base font-medium ' >{product.title}</span>
           <span className='text-app-gray mt-1 uppercase text-sm'>{product.category}</span>
           <span className='text-app-dark my-4 uppercase text-xl '>${product.price}</span>
           </div>
           
           <div className='bg-black/0 flex-col group-hover:bg-black/30 rounded-md z-[4] w-full h-full absolute duration-300  flex justify-center items-center'>
            
           <button className='text-app-white my-1 group-hover:block hidden bg-app-orange w-[180px] font-bold text-base py-2 px-4 opacity-100'><Link to={url}>Go Product Page</Link></button>
            <button className='bg-app-white my-1 group-hover:block hidden text-app-orange  w-[180px]  font-bold text-base py-2 px-4 opacity-100' onClick={()=>{addToCart(product)}}>Add To Card</button>

           </div>

          </div>
  )
}

export default SingleProduct