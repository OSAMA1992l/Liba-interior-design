import React from 'react'
import bed from './Image/bed.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <Link href="/"></Link>
      <main className='flex flex-col'>
       <div className='flex  items-center text-center flex-col px-12'>
       <h1 className=' sm:text-5xl mt-10 text-2xl font-semibold'>Transform Your Space With The Best </h1>
       <h2 className='font-bold sm:text-4xl  text:2xl sm:mt-8 mt-2 text-orange-500'>Interior Designers In Gurgaon </h2>
       <p className='sm:mt-10 mt-3 sm:text-2xl '>Interior Designers In Gurgaon 
       Elevate every corner of your home or office with the unparalleled talent of finest interior designers. Our team of top-tier interior designers in Gurgaon is dedicated to exceeding your expectations, bringing passion, creativity, and expertise to every project. With a keen eye for detail and a commitment to excellence, we’ll work closely with you to understand your vision and transform it into a breathtaking reality. </p>
       </div>
       {/* bed area and text */}
       <div className='sm:mt-20 mt-6 flex-wrap flex justify-center shadow-lg  border bg-gray-200 rounded-md py-5 '>
        <div className='text-center shadow-md'>
         <img src={bed} alt="" className='rounded-[4%] px-3'/>
         
        </div>
        <div className=' w-[970px] text-center  py-4 px-4 mt-4'>
          <span className='font-bold text-2xl text-center text-orange-600 '>DESIGN & BUILD</span>
           <div className='sm:text-2xl text-xl mt-10 text-left'>
           <p >At Liba Interior, we understand that time is of the essence when it comes to transforming  your space.  That’s why we’re proud to introduce our exclusive On Time Commitment – An unparalleled promise to deliver exceptional interior design and build services within a swift and efficient timeframe.</p>
          <br />
         <p>  With our innovative approach and unwavering dedication, we ensure that your vision becomes a reality within a time frame. From concept to completion, our team of expert designers and skilled craftsmen work tirelessly to bring your dreams to life without compromising on quality or craftsmanship. </p>
         <br />

         <p> Whether you’re revamping your home, office, or commercial space, our streamlined process and attention to detail guarantee a seamless and stress-free experience from start to finish. Say goodbye to lengthy delays and endless waiting We ensure that you can enjoy your newly designed space sooner than you ever thought possible. </p>
           </div>
        </div>
       </div>
       
       
      </main>
    </div>
  )
}

export default Home