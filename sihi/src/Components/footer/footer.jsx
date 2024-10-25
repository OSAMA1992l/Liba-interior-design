import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


function Footer() {
  return (
    <div className='flex px-5 flex-wrap gap-6 bg-gray-200 mt-10'>
      <div className='gap-2 flex flex-col px-3 py-3 border rounded'>
        <h1 className='sm:text-4xl font-bold text-2xl text-orange-500'>LIBA</h1>
        <p className='sm:text-3xl text-2xl font-medium'>Transform your space into a stunning masterpiece with LIBA – The best interior designer in Gurgaon. From concept to execution, our team of experts will bring your vision to life.</p>
      </div>
      <div className='border w-[90%] px-3 py-3 rounded'>
        <h1 className='sm:text-4xl font-bold text-2xl text-orange-500 mb-4'>Get In Touch</h1>
        <div className='flex flex-col sm:text-3xl font-semibold text-blue-600'>
        <div  className='flex items-center gap-3'>
        <a href="https://www.facebook.com/profile.php?id=100063752727165&mibextid=ZbWKwL">Facebook</a>
        <FaFacebook />
        </div>
        <div className='flex items-center gap-2 '>
        <a href="https://www.instagram.com/libainterior?igsh=czlibzBsYzQ1bzk1">Instagram</a>
        <FaInstagram  className='text-red-600'/>
        </div>
       <div className='flex items-center gap-4'>
       <a href="https://www.youtube.com/@libainteriorofficial">youtube</a>
       <IoLogoYoutube  className='text-red-600'/>
       </div>
        </div>
      </div>
      <div className='border py-3 px-2 rounded'>
       <h1 className='sm:text-4xl mt-3 font-bold text-2xl text-orange-500'>Contact Info</h1>
       <p className='sm:text-4xl text-1xl font-medium'>Address: Drawka express sec 84 warehouse  Village sihi.</p>
       <p className='sm:text-3xl mt-3 text-1xl font-medium'>Phone: +91 74669 28813 , +91 9543149595</p>
      </div>
    </div>
  )
}

export default Footer