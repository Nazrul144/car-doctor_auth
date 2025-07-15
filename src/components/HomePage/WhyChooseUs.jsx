import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="container mx-auto mb-28 mt-12">
      <div>
        <h1 className="text-[#FF3811] font-bold text-center mb-4 text-xl">Core Features</h1>
        <h1 className="text-center font-extrabold text-4xl mb-4">Why Choose Us</h1>
        <p className="text-center">
          The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even
          slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 mt-12 ">
      <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4">
          <Image width={100} height={100} alt="logo" src="/assets/icons/group.svg" />
          <p className="text-center mt-2">Expert Team</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4">
          <Image width={100} height={100} alt="logo" src="/assets/icons/deliveryt.svg" />
          <p className="text-center mt-2">Timely Delivery</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4">
          <Image width={100} height={100} alt="logo" src="/assets/icons/person.svg" />
          <p className="text-center mt-2">24/7 Support</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4">
          <Image width={100} height={100} alt="logo" src="/assets/icons/Wrench.svg" />
          <p className="text-center mt-2">Best Equipment</p>
        </div>

        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4">
          <Image width={100} height={100} alt="logo" src="/assets/icons/check.svg" />
          <p className="text-center mt-2">100% Guranty</p>
        </div>
       
        <div className="border-[1px] border-gray-300 rounded-lg flex flex-col items-center p-4">
          <Image width={100} height={100} alt="logo" src="/assets/icons/deliveryt.svg" />
          <p className="text-center mt-2">Timely Delivery</p>
        </div>
        
      </div>
    </div>
  );
};

export default WhyChooseUs;
