// dimport React from 'react'
import logo from './Image/logo.jpg'
import { FiAlignRight } from "react-icons/fi";
import { useState } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import BedDesign from '../Components2/BedDesign';

function Navbar() {

  function showhide(){
    settoggle(true)
    
  }

  function close(){
    settoggle(false)
  }
 
  const [toggle,settoggle]=useState(false)

  return (
    <>
    
<div className='h-full w-full fixed  border bg-gray-400  m-0 duration-500'
onClick={close}
style={{
  right: toggle? "-0%":"100%"
}}
>
<div className='flex justify-center items-center '>
  <div>
  <div>
    <h1 className='text-4xl font-semibold hover:text-white hover:bg-black px-4 py-4 rounded-xl'>DASHBORD</h1>
  </div>
  <ul className=' justify-center  items-center text-3xl gap-12  flex flex-col font-bold'>
               <Link to='/' className='hover:text-white mt-5'>Home</Link> 
              
              <Link to='/Service' className='hover:text-white'>Service</Link>
              <Link to='/Contact' className='hover:text-white t'>Contact</Link>
              <span>+91 9543149595</span>
            </ul>
  </div>
</div>
</div>
   
    
    {/*  */}
      <header>
        <div className='flex border w-full justify-between items-center px-12 shadow-xl '>
          <div>
           <img src={logo} alt=""  className='h-16'/>
           
          </div>
          <div className=' hidden sm:block'>
          
            <ul className=' justify-center sm:flex items-center gap-10 text-xl uppercase '>
              <Link to='/' className='hover:border-b-4 border-orange-800'>Home</Link>
             
              <Link to='/Contact' className='hover:border-b-4 border-orange-800'>Contact</Link>
              <Link to='/Service' className='hover:border-b-4 border-orange-800'>Service</Link>
            </ul>
          </div>
          <div className='block sm:hidden'>
          <FiAlignRight className='text-3xl' onClick={showhide}/>
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar