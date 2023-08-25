import React, { useEffect } from 'react'
import Header from '../components/Header'
import PageBanner from '../components/PageBanner'
import {IoIosArrowDown} from 'react-icons/io';
import {updatedProducts} from '../data/Data';
import SingleProduct from '../components/SingleProduct';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';


// import fetchInfo from '../data/Data';

const Shop = () => {
  const params=useParams();


  useEffect(()=>{

    

    const activeCategory=document.getElementById("active-category");
    const mens=document.getElementById("mens-clothing-category");
    const womens=document.getElementById("womens-clothing-category");
    const jewelery=document.getElementById("jewelery-category");
    const electronics=document.getElementById("electronics-category");
    const all=document.getElementById("all-category");

    mens.style.display="block";
    womens.style.display="block";
    jewelery.style.display="block";
    electronics.style.display="block";
    all.style.display="block";

    if(params.category.toUpperCase()==="MEN'S CLOTHING"){
      
      activeCategory.innerHTML="Men's Clothing";
      mens.style.display="none";
    }
    else if(params.category.toUpperCase()==="WOMEN'S CLOTHING"){
     
      activeCategory.innerHTML="Women's Clothing";
      womens.style.display="none";
    }
    else if(params.category.toUpperCase() ==="JEWELERY"){
     
      activeCategory.innerHTML="Jewelery";
      jewelery.style.display="none";
    }
    else if(params.category.toUpperCase()==="ELECTRONICS"){
     
      activeCategory.innerHTML="Electronics";
      electronics.style.display="none";
    }
    else{
      activeCategory.innerHTML="All Categories";
      all.style.display="none";
    }
  },[params.category])

  

  return (

    <div className='shop pt-16 w-full'>

   <PageBanner title={"Shop"}/>
   <div className='filter-menu flex px-8 py-4 bg-app-cream z-[-5]'>
   <span className='categories-filter mr-3 group z-[5] flex justify-between w-[220px] py-3 px-2 bg-app-white relative'>
    <span id='active-category'>All Categories</span> 
    
    <IoIosArrowDown className='w-4 h-auto float-right'/> 
    <ul className='hidden group-hover:flex w-full  shadow-md absolute rounded-b-md pt-12 top-0-0 z-[-1] left-0 px-2 bg-app-white flex-col'>
      <li id='all-category' className='underline-offset-2 hover:underline cursor-pointer mb-2 hover:text-app-orange duration-300'><Link to="/shop/All">All Categories</Link></li>
      <li id='electronics-category' className='underline-offset-2 hover:underline cursor-pointer my-2 hover:text-app-orange duration-300'><Link to="/shop/Electronics">Electronics</Link></li>
      <li id='jewelery-category' className='underline-offset-2 hover:underline cursor-pointer my-2 hover:text-app-orange duration-300'><Link to="/shop/Jewelery">Jewelery</Link></li>
      <li id='mens-clothing-category' className='underline-offset-2 hover:underline cursor-pointer my-2 hover:text-app-orange duration-300'><Link to="/shop/Men's Clothing">Men's Clothing</Link></li>
      <li id='womens-clothing-category' className='underline-offset-2 hover:underline cursor-pointer my-2 hover:text-app-orange duration-300'><Link to="/shop/Women's Clothing">Women's Clothing</Link></li>
    </ul>
   </span>
 
   </div>
   <div className='w-full flex justify-center flex-wrap items-start'>
{
  updatedProducts.map(product =>{
  
    let parameter=(params.category).toUpperCase();
    let productCategory=(product.category).toUpperCase();
    if(parameter==="ALL"){
      return <SingleProduct product={product} key={product.id}/>
    }
    else{
    if(parameter === productCategory){
      return <SingleProduct product={product} key={product.id}/>
    }
    else{
      return null;
    }
  } 
    // <SingleProduct product={product} key={product.id}/>
  })
}
</div>
   <Footer/>
   </div>

  )
}

export default Shop