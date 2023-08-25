import React from 'react'
import PageBanner from '../components/PageBanner'
import {MdLocationOn} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {AiFillClockCircle} from 'react-icons/ai';
import Footer from '../components/Footer';
import Input from '../components/Input';


const Contact = () => {
  return (
    <div className='pt-16 w-full contact'>
      <PageBanner title={"Contact"}/>
      <div className='py-16 mt-12 px-4 text-center flex flex-col'>
        <span className='text-3xl text-app-black font-semibold'>Get In Touch With Us</span>
        <span className='text-app-gray-9F font-[400]  mt-4'>For More Information About Our Product & Services. Please Feel Free To Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</span>
      </div>
      <div className='flex w-full px-4  max-lg:flex-col-reverse justify-center max-lg:items-center lg:items-start lg:gap-56'>
        <div className='contact-information max-lg:justify-evenly  max-lg:flex-wrap flex lg:flex-col max-lg:mt-12'>

          <div className="adrress lg:mb-6 max-lg:m-4 flex items-start gap-6">
            <MdLocationOn className='w-10 h-auto'/>
            <div className='flex flex-col max-w-[200px] '>
              <span className='text-2xl font-[500]'>Address</span>
              <span className='mt-2 font-[400] text-base'>236 5th SE Avenue, New York NY10000, United States</span>
            </div>
          </div>

          <div className="phone lg:my-6 max-lg:m-4 flex items-start gap-6">
            <FaPhoneAlt className='w-10 h-auto'/>
            <div className='flex flex-col max-w-[200px] '>
              <span className='text-2xl font-[500]'>Phone</span>
              <span className='mt-2 font-[400] text-base'>Mobile: +(84) 546-6789
Hotline: +(84) 456-6789</span>
            </div>
          </div>

          <div className="adrress lg:mt-6 max-lg:m-4 flex items-start gap-6">
            <AiFillClockCircle className='w-10 h-auto'/>
            <div className='flex flex-col max-w-[200px] '>
              <span className='text-2xl font-[500]'>Working Time</span>
              <span className='mt-2 font-[400] text-base'>Monday-Friday: 9:00 - 22:00 <br />
Saturday-Sunday: 9:00 - 21:00</span>
            </div>
          </div>
        </div>
        <form className='flex w-1/3 lg:min-w-[350px] lg:max-w-[600px] max-lg:w-[100%] justify-start items-center flex-col'>

          <div className='sm:w-4/5 max-sm:w-full full'>
            <Input title={"Your Name"} placeholder={"Eren Koç"} name={"name"} inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"}/>
           <Input title={"Email Adrress"} placeholder={"contact.erenkoc@gmail.com"} name={"email"} containerStyle={"mt-8"} inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"} />
           <Input title={"Subject"} placeholder={"This is an optional"} name={"subject"} inputStyle={"font-[400] outline-none w-full py-6 pl-4 mt-4 border  border-app-gray-9F rounded-xl"} containerStyle={"mt-8"} />
          <p className='mt-8'>Message</p>
          <textarea name="message" id="" className='resize-none w-full outline-none py-6 h-[145px] pl-4 mt-4 border border-app-gray-9F rounded-xl' placeholder='Hi! i’d like to ask about'></textarea>
          <input type="submit" value="Submit" className='mt-16 max-sm:w-full py-4 px-24 cursor-pointer bg-app-orange rounded-lg text-app-white'  />
          </div>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact