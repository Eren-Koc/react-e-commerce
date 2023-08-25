import React, { useEffect, useState,useContext } from 'react'
import { Link, useParams } from 'react-router-dom';
import { updatedProducts} from '../data/Data';
import {AiFillStar} from 'react-icons/ai';
import { ShopContext } from '../context/shop-context';
import Footer from '../components/Footer';


const Product = () => {
const {cartItems,addToCart,removeFromCart} = useContext(ShopContext);
    const url = useParams();
    const [item,setItem]=useState({});
    const [count,setCount]=useState(1);
    const [isLoading,setIsLoading] = useState(false);
    const [inCart,setInCart]=useState("Add To Cart");
    const handleDecrease = () => {
        if (count > 1) {
          setCount(count - 1);
        }
      };
  
    useEffect(()=>{

        for(let i=0;i<updatedProducts.length;i++){
          
            if(updatedProducts[i].id==url.id){
     
                if(item!==updatedProducts[i]){
                    setItem(updatedProducts[i]);
                    
                }
            
            }
        }    
        
        
    },[url.id,cartItems])

    useEffect(()=>{
        setIsLoading(true);
    },[item])

    if(!isLoading){
        return <div>Page Loading...</div>
    }
    else{

    }

  return (
    <>
    <div className='product lg:pt-16 max-lg:pt-24 w-full min-h-screen justify-center items-center px-4  flex flex-col '>
        <div className='flex justify-center items-center lg:py-12 max-lg:flex-col w-full lg:gap-48 '>
        <img src={item.image} className='max-lg:w-52 lg:w-80 h-auto' alt="" />
        <div className='flex flex-col  max-lg:mt-12 max-w-[500px]'>
        <span className='uppercase text-app-gray-9F'>{item.category}</span>
            <span className='md:text-4xl max-md:text-2xl font-semibold mt-2 text-app-black'>{item.title}</span>
            <span className='text-xl text-app-gray mt-2'>${item.price}</span>
            <div className='flex h-[35px] mt-4 justify-start items-center'>
            
            <AiFillStar className='w-8 h-auto text-app-orange'/>
               <span className=' text-xl ml-2 text-app-orange'>{item.rating.rate}</span>   
            <div className='w-[1px] h-full bg-app-gray-9F ml-4'></div>
              <span className='text-app-gray-9F md:text-xl max-md:text-base ml-4'>{item.rating.count} Customer Review</span>
            </div>   
            <p className=' mt-4 font-[400]'>
                {item.description}
            </p>
            <div className='mt-8 flex gap-5 h-[55px]'>
                <div className='flex items-center justify-between w-[130px] rounded-lg border border-app-gray-9F'>
                    <button className='p-2' onClick={()=>{handleDecrease()}}>-</button>
                    <span className='text-xl'>{count}</span>
                    <button className='p-2' onClick={()=>{setCount(count+1)}}>+</button>
                </div>
                <button className='border px-4 rounded-lg duration-300 hover:bg-app-orange hover:text-app-white hover:border-app-orange border-app-dark' onClick={()=>{addToCart(item,count)}}>{inCart}</button>
            </div>
        </div>
        </div>
        <div className='w-full mt-32 flex flex-col justify-center items-center'>
            <span className='text-3xl max-sm:mb-4'>Related Products</span>
            <div className='flex justify-evenly flex-wrap items-center'>
               {updatedProducts.map(product=>{
            
                if(item.category==product.category){
                    if(item.id!=product.id){
                        const url="/product/"+product.id;
                        return(
                        
                        <div key={product.id} className='hover:shadow-xl items-center justify-center relative w-1/5 min-w-[300px] flex flex-col p-4 rounded-xl border shadow-sm  sm:m-4'>
                        <Link className='w-fit' to={url}>
                        <div className='absolute top-2 right-2 p-2 bg-app-white shadow-md flex justify-center items-center rounded-xl'>
                         <span className='mr-2'>{product.rating.rate}</span>  
                        <AiFillStar className='w-6 h-auto text-app-orange'/>                   
                        </div>
                        <img src={product.image} className='w-full h-[200px] object-contain' alt="" />
                        <div className='w-full text-center mt-2 flex flex-col'>
                        <span className='uppercase text-app-gray text-sm'>{product.category}</span>
                        <span className='w-full mt-1'>{product.title}</span>
                        <span className='w-full mt-4 text-app-orange font-semibold text-xl'>${product.price}</span>
                        </div>
                        </Link>
                    </div>
                   
                    )
                    }
                    else{
                        return null;
                    }
                   
                }
                else{
                    return null;
                }
               })}
                

                

                
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Product