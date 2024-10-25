import React from "react";
import bedroom from './Image/images/bedroom.jpg'
import almari from './Image/images/almari.jpg'
import drawing from './Image/images/drawing room.jpg'
import kitchen from './Image/images/mkitchen.jpg'
import tv from './Image/images/tv pannel.jpg'
import { Link } from "react-router-dom";

function Service() {
  return (
    <div>
    <Link to="./Service"></Link>
      <div>
      <h1 className="text-center mt-10 sm:text-4xl text-2xl font-bold underline py-">Services</h1>
        <div>
          <div className="flex justify-center items-center flex-wrap mt-10 text-center mx-3 gap-2 "> 

          <div className="">
          <span className="text-3xl text-orange-500  rounded mb-2">Bed Design</span>
            <img
              src={bedroom}
              alt=""
              className=" sm:h-[700px] sm:w-[500px] rounded-xl shadow-lg  duration-300 mt-3"
            />
          </div>
          <div >
          <span className="text-3xl text-orange-500 rounded mb-2"> Wardrobe Design</span>
            <img src={almari}  alt="" className=" sm:h-[700px] sm:w-[500px] rounded-xl shadow-lg  duration-300 mt-3" />
          </div>
          <div>
          <span className="text-3xl text-orange-500 rounded mb-2"> Drawing Room  Design</span>
            <img src={drawing}  alt="" className=" sm:h-[700px] sm:w-[500px] rounded-xl shadow-lg  duration-300 mt-3 hover:shadow-gray-600 "/>
          </div>
          <div>
          <span className="text-3xl text-orange-500 rounded mb-2">Modular Kitchen </span>
            <img src={kitchen}  alt="" className=" sm:h-[700px] sm:w-[500px] rounded-xl shadow-lg  duration-300 mt-3"/>
          </div>
          <div>
          <span className="text-3xl text-orange-500 rounded mb-2">Tv Unit Design </span>
            <img src={tv} alt="" className=" sm:h-[700px] sm:w-[500px] rounded-xl shadow-lg  duration-300 mt-3"/>
          </div>
          </div>
          
        </div>
      </div>
      {/* us */}
      <div className="mt-5 mx-3">
        <p className="text-center sm:text-4xl font-bold  text-2xl">Why Choose <span className="text-orange-500">Liba Interior Design </span> For Your <br />
        Office and Home Interior Design</p>
        <div>
          <p className="text-center leading-17 mt-4 sm:text-3xl text-1xl">We offer a compelling blend of expertise and creativity to transform both office and home interiors into spaces of unmatched beauty and functionality. With a keen eye for detail and a dedication to personalized service, we tailor each project to our clients’ unique tastes and requirements. Our commitment to using quality materials and delivering superior craftsmanship ensures lasting results that exceed expectations. </p>
        </div>
      </div>
    
    </div>
  );
}

export default Service;
