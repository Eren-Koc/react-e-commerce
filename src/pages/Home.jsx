import React, { useContext } from 'react'
import Header from '../components/Header'
import landing from '../assets/landing.jpg';

import women from '../assets/women.png';
import men from '../assets/men.png';
import jewelery from '../assets/jewelery.png';
import electronics from '../assets/electronics.png';
import Footer from '../components/Footer';
import {updatedProducts} from '../data/Data';
import SingleProduct from '../components/SingleProduct';
import { Link } from 'react-router-dom';
import Cart from '../components/Cart';


const Home = () => {



  return (
    <div id='home' className="home w-full min-h-screen h-fit">
      <img src={landing} className='relative top-0 left-0 max-h-screen w-full object-cover' alt="" />
      <div className='lg:absolute max-lg:mt-4 max-lg:m-auto static right-0 top-[38%] py-6 px-8 bg-app-light-orange tracking-wider mr-[10%] rounded-md flex flex-col sm:w-full max-w-[600px]' >
        <span className=''>New Arrial</span>
        <span className='text-app-orange sm:text-4xl text-2xl my-3 font-bold flex flex-col'>Discover Our <span>New Collection</span></span>
        <span className='w-full text-app-dark'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</span>
       
        <Link to="/shop/all"><button className='outline-none cursor-pointer bg-app-orange  mt-12 text-white py-4 font-bold sm:w-[230px]  w-fit px-8'>BUY NOW</button></Link>
      </div>
      <div className='browse-range w-full md:px-8 px-2 mt-12 flex flex-col justify-center items-center'>
        <span className='text-app-dark text-3xl font-bold'>Browse The Range</span>
        <span className='text-app-gray font-medium mt-1 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        <div className='categories mt-12 w-full flex flex-wrap justify-evenly flex-row'>
            <Link className='contents' to="/shop/electronics"><img src={electronics} className='sm:w-1/5 w-2/5 max-sm:my-1 rounded-md h-auto object-cover'  alt="" /></Link>
            <Link className='contents' to="/shop/jewelery"><img src={jewelery} className='sm:w-1/5 w-2/5 max-sm:my-1 rounded-md h-auto object-cover'  alt="" /></Link>
            <Link className='contents' to="/shop/Men's Clothing"><img src={men} className='sm:w-1/5 w-2/5 max-sm:my-1 rounded-md h-auto object-cover'  alt="" /></Link>
            <Link className='contents' to="/shop/Women's Clothing"><img src={women} className='sm:w-1/5 w-2/5 max-sm:my-1 rounded-md h-auto object-cover'  alt="" /></Link>      
        </div>
      </div>
      <div className='text-3xl font-bold text-app-dark m-auto text-center mt-16'>Our Products </div>
      <div className='w-full flex justify-center flex-wrap items-start'>
{
  updatedProducts.map(product =>{
    if(product.id<9){
    return <SingleProduct product={product} key={product.id}/>
    }
    else{
      return null;
    }
    
  })
}

 </div>    

      <Link to="/shop/all" className='w-fit'>
        <button className='block m-auto mt-8 border border-app-orange py-2 hover:bg-app-orange hover:text-app-white duration-300 px-16 font-semibold text-app-orange'>Show More</button>
        </Link>
      <Footer/>
    </div>
  )
}

export default Home