import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import { Link } from 'react-router-dom';
import { MdOutlineMarkEmailUnread } from "react-icons/md";


function Contact() {
  return (
    <>
    <Link to="/contatc"></Link>
      <div className='mt-10 px-10 bg-gray-300 py-5'>
      
        <div>
        <h1 className='text-center sm:text-4xl text-2xl font-bold text-orange-500'>Contact Us</h1>
        <p className='text-center mt-2 sm:text-3xl text-1xl mb-3'>We Love to Hear from You! </p>
          <div className='flex bg-white rounded-xl'>
           <div className='flex justify-center items-center'>
          
           <h3 className='uppercase flex  sm:text-[100px] font-bold text-center'><span className='text-orange-500 text-center '>LIBA</span> Interior Design</h3>
           </div>
          </div>
         <div className=' '>
         <div className='flex justify-center items-center flex-col border text-center gap-14 rounded-xl py-5 shadow-xl px-5 mt-5 bg-white'>
          <FaLocationDot className='sm:text-9xl text-4xl text-orange-500'/>
            <h1 className='font-bold text-4xl text-1xl text-1xl'>Address</h1>
            <p className='sm:text-4xl '>Dwarka expressway sector-84 warehouse Village sihi  (Near Manesar Toll Plaza) Gurugram, Haryana 122015</p>
          </div>
         <div className='flex justify-center items-center flex-col border text-center gap-14 px-5 py-5 shadow-xl rounded-xl mt-5 bg-white'>
          <MdOutlineMarkEmailUnread  className='sm:text-9xl text-4xl text-orange-500'/>
            <h1 className='font-bold text-4xl text-1xl '>Email Us</h1>
            <p className='sm:text-4xl text-1xl'>shaveshali744@gmail.com</p>
          </div>
         <div className='flex justify-center items-center flex-col border text-center gap-14 rounded-xl py-5 shadow-xl px-5 mt-5 bg-white'>
          <MdAddCall className='sm:text-9xl text-4xl text-orange-500'/>
            <h1 className='font-bold text-4xl text-1xl '>Call Us</h1>
            <p className='sm:text-4xl text-1xl underline'>+91 74669 28813</p>
            <p className='sm:text-4xl text-1xl underline'>+91 9543149595</p>
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Contact