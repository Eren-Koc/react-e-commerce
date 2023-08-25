import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full flex-col py-16 mt-12 px-2 border-t border-app-black/17'>
    <div className='lg:justify-left flex max-lg:flex-col max-lg:justify-center w-full'>
            <div className='lg:mx-16 md:mx-4 max-lg:my-4  flex flex-col'>
                <span className='text-black font-bold text-2xl'>Funiro.</span>
                <span className='lg:mt-12 text-app-gray'>400 University Drive Suite 200 Coral Gables, <br />
FL 33134 USA</span>
            </div>
            <div className='lg:mx-16 md:mx-4 max-lg:my-4 max-lg:mx-0  flex flex-col'>
                <span className='text-app-gray'>Links</span>
                
                <Link className='lg:mt-12 text-app-black hover:underline underline-offset-2' to="/">Home</Link>
                <Link className='lg:mt-12 text-app-black hover:underline underline-offset-2' to="/shop/all">Shop</Link>
                <Link className='lg:mt-12 text-app-black hover:underline underline-offset-2' to="/contact">Contact</Link>
            </div>
            <div className='lg:mx-16 flex max-lg:my-4  md:mx-4 flex-col'>
                <span className='text-app-gray'>Help</span>
                <Link className='lg:mt-12 text-app-black' to="/">Payment Option</Link>
                <Link className='lg:mt-12 text-app-black' to="/">Returns</Link>
                <Link className='lg:mt-12 text-app-black' to="/">Privacy Policies</Link>
            </div>
            <div className='lg:mx-16 flex max-lg:my-4  md:mx-4 flex-col'>
                <span className='text-app-gray'>Newsletter</span>
                <div className='flex lg:mt-12 max-lg:flex-col'>
                    <input type="text" className='border-b border-black w-[240px] outline-none' placeholder='Enter Your Email Address' />
                    <button className='border-b border-black w-fit max-lg:mt-4 max-lg:ml-0 text-app-black ml-2'>SUBSCRIBE</button>
                </div>
            </div>
            </div>
            <div className=' mt-8 lg:ml-16 pt-8 border-t border-app-black/17'>2023 furino. All rights reverved</div>
    </footer>
  )
}

export default Footer