import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FcCallback } from "react-icons/fc";
import { IoLocationOutline } from "react-icons/io5";

const Location = () => {
  return (
    <div className="container mx-auto mb-12">
      <div>
        <h1 className="font-semibold text-center text-xl text-[#D1A054]">~~~~ Visit Us ~~~~</h1>
        <h1 className="border-t-2 border-b-2 border-cyan-700 text-center font-extrabold w-40 text-xl mx-auto mt-2 ">
          OUR LOCATION </h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-base-100 w-96 shadow-xl">
            <div >
              <div className="bg-[#D1A054] flex justify-center items-center ">
              <FcCallback className="text-2xl font-extrabold mt-2 mb-2 " />
              </div>
                <div className="bg-gray-200 w-[450px] mx-auto mb-3">
                     <h1 className="font-extrabold text-xl text-center pt-12">Phone</h1>
                     <h1 className="text-center pb-12">+8801758752528</h1>
                </div>
              
            </div>
          </div>
          <div className="bg-base-100 w-96 shadow-xl">
            <div >
              <div className="bg-[#D1A054] flex justify-center items-center ">
              <IoLocationOutline className="text-2xl font-extrabold mt-2 mb-2 "/>
              </div>
                <div className="bg-gray-300 w-[450px] mx-auto mb-3">
                     <h1 className="font-extrabold text-xl text-center pt-12">Address</h1>
                     <h1 className="text-center pb-12">Sutrapur, Dhaka</h1>
                </div>      
            </div>
          </div>
          <div className="bg-base-100 w-96 shadow-xl">
            <div >
              <div className="bg-[#D1A054] flex justify-center items-center ">
              <FaRegClock className="text-2xl font-extrabold mt-2 mb-2 " />
              </div>
                <div className="bg-gray-200 w-[450px] mx-auto mb-3">
                     <h1 className="font-extrabold text-xl text-center pt-12">Working Hours</h1>
                     <h1 className="text-center pb-12">Sun - Fri: 08:00 - 22:00 || Sat - Sun: 10:00 - 23:00</h1>
                </div>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
