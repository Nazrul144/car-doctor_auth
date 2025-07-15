import Image from "next/image";
import React from "react";
import { SlCalender } from "react-icons/sl";

const Address = () => {
  return (
    <div className="container mx-auto mt-12 mb-12">
      <div className="grid lg:grid-cols-3 space-y-2 bg-black rounded-lg text-white lg:py-20 lg:px-12">
        <div className="flex items-center gap-2">
          <div>
            <SlCalender className="text-2xl text-red-400" />
          </div>
          <div>
            <h1>We are open monday-friday</h1>
            <h1 className="font-bold text-xl"> 7:00 am - 9:00 pm</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image src="/assets/images/address/Group 34.svg" alt="logo" width={40} height={30} />
          </div>
          <div>
            <h1>Have a question?</h1>
            <h1 className="font-bold text-white">+8801758752528</h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <Image src="/assets/images/address/Group 35.svg" alt="logo" width={40} height={30} />
          </div>
          <div>
            <h1>Need a repair? our address</h1>
            <h1 className="font-bold text-white">Liza Street, New York</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
