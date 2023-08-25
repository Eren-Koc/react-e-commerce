import React from 'react'
import banner from '../assets/pageBanner.jpg';
import {IoIosArrowForward} from 'react-icons/io';
import { Link } from 'react-router-dom';

const PageBanner = ({title}) => {
  return (
    <div className='w-full md:h-[350px] max-md:h-[300px] max-sm:h-[250px] flex justify-center items-center'>
        <img src={banner} className='relative h-full w-full  object-cover object-center ' alt="" />
        <div className='flex flex-col absolute w-full md:h-[350px] max-md:h-[300px] max-sm:h-[250px]  bg-app-white/30 z-10 justify-center items-center text-center'>
            <span className='text-black text-[40px] w-fit mb-2 font-semibold'>{title}</span>
            <div className='flex  justify-center items-center'>
            <span className='mx-1'><b><Link to="/">Home</Link></b></span>
            <span className='mx-1'><b><IoIosArrowForward className='w-4 h-auto text-black font-bold'/> </b></span>
            <span className='mx-1'>{title}</span>
            </div>  
        </div>
    </div>
  )
}

export default PageBanner