import { getServicesDetails } from "@/services/getServicesAll";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Service Details",
  description: "Service Details page",
};

const Page = async ({ params }) => {
  const details = await getServicesDetails(params.id);
  const { title, img, price, description, facility, _id } = details.service;
  return (
    <div className="container mx-auto">
      {/*Banner Section*/}
      <div className="bg-red-400 rounded-lg h-60 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }}>
        <h1 className="pt-24 px-24 font-bold text-white text-2xl lg:text-4xl">Service Details of {title}</h1>
        <div className="flex justify-center mt-[55px] lg:mt-[85px] p-1  bg-[#FF3811] rounded-t-full font-bold text-xl text-white w-56 mx-auto ">
          <Link href={"/"}>Home/</Link>
          <Link href={"#"}>Service Details</Link>
        </div>
      </div>
      {/**Service Section */}
      <div className="flex flex-col md:flex-row justify-between mt-24 gap-4">
        <div className="lg:w-[1300px] h-96 ">
          <Image className="rounded-lg object-cover w-full h-full" src={img} alt="Image" width={800} height={500} />
        </div>
        <div className="w-[500px]">
          <div className="flex flex-col gap-4 px-6 bg-gray-300 rounded-lg p-12">
            <h1 className="font-bold text-xl ml-2">Services</h1>
            <div className=" flex justify-between items-center bg-gray-200 w-full px-4 py-2 rounded-lg">
              <div>Full Car Repair</div>
              <div>
                <Link href={"#"}>
                  <Image src="/Vector.png" alt="Image" width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className=" flex justify-between items-center bg-gray-200 w-full px-4 py-2 rounded-lg">
              <div>Engine Repair</div>
              <div>
                <Link href={"#"}>
                  <Image src="/Vector.png" alt="Image" width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className=" flex justify-between items-center bg-gray-200 w-full px-4 py-2 rounded-lg">
              <div>Automatic Services</div>
              <div>
                <Link href={"#"}>
                  <Image src="/Vector.png" alt="Image" width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className=" flex justify-between items-center bg-gray-200 w-full px-4 py-2 rounded-lg">
              <div>Engine Oil Change</div>
              <div>
                <Link href={"#"}>
                  <Image src="/Vector.png" alt="Image" width={20} height={20} />
                </Link>
              </div>
            </div>
            <div className=" flex justify-between items-center bg-gray-200 w-full px-4 py-2 rounded-lg">
              <div>Battery Charge</div>
              <div>
                <Link href={"#"}>
                  <Image src="/Vector.png" alt="Image" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Engine Service*/}
      <div>
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div className="lg:w-[80%] ">
            <h1 className="px-4 text-justify"> {description}</h1>

            <div className="grid lg:grid-cols-2 gap-2 mt-4">
              {facility?.map((demo) => (
                <div key={demo.name} className="card bg-orange-50 border-2 border-t-[#FF3811] w-96 shadow-xl">
                  <div className="card-body">
                    <h2>{demo.name}</h2>
                    <p>{demo.details}</p>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <p className="mt-4 px-4 text-justify ">{description}</p>
            </div>
          </div>
          <div className="lg:w-[30%] bg-black h-56 rounded-lg mt-6">
            <h1 className="font-bold text-white ml-6 mt-6 text-xl">Download</h1>
            <div className="flex justify-between items-center px-8 text-white">
              <div className="flex items-center gap-2">
                <div>
                  <Image src="/Vectors.png" alt="Image" width={20} height={20} />
                </div>
                <div>
                  <h1>Our Brochure</h1>
                  <h1>Download</h1>
                </div>
              </div>
              <div>
                <Link href={"#"}>
                  <div className="bg-[#FF3811] rounded-lg p-2">
                    <Image className="brightness-0 invert" src="/Vector.png" alt="Image" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="flex justify-between items-center px-8 text-white mt-8">
              <div className="flex items-center gap-2">
                <div>
                  <Image src="/Vectors.png" alt="Image" width={20} height={20} />
                </div>
                <div>
                  <h1>Our Brochure</h1>
                  <h1>Download</h1>
                </div>
              </div>
              <div>
                <Link href={"#"}>
                  <div className="bg-[#FF3811] rounded-lg p-2">
                    <Image className="brightness-0 invert" src="/Vector.png" alt="Image" width={20} height={20} />
                  </div>
                </Link>
              </div>
            </div>
            <div className="mt-12 bg-black px-4 rounded-lg ">
              <Image src="/proceed.png" alt="Image" width={400} height={600} />
            </div>
          </div>
        </div>
      </div>
      {/*Three Simple steps:*/}
      <div className="lg:flex lg:justify-between gap-4 lg:gap-32 mt-12">
        <div className="lg:w-[70%] mt-[600px] lg:mt-0">
          <h1 className="text-2xl font-bold px-2">3 Simple Steps to Process</h1>
          <p className="text-justify px-2">{description}</p>
          <div className="grid lg:grid-cols-3 gap-6 rounded-lg mt-6">
            {demoNumber?.map((card, index) => (
              <div
                key={card.number}
                className="bg-base-100 w-40 h-40 shadow-xl flex flex-col items-center justify-center  rounded-lg p-2 mx-auto"
              >
                <h1 className="bg-red-500 text-white font-bold text-lg rounded-full w-12 h-12 flex items-center justify-center">
                  {String(index + 1).padStart(2, "0")}
                </h1>
                <p className="font-bold">{card.name}</p>
                <p>{card.description.slice(0, 20)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-[30%]">
          <h1 className="font-bold lg:text-2xl text-black mb-2">Price $ {price}</h1>
          <Link className="btn btn-primary text-white lg:w-full" href={`/checkout/${_id}`}>
            Proceed Checkout
          </Link>
        </div>
      </div>
      <div className="mt-10 lg:w-[90%]">
        <Image className="rounded-lg object-cover object-top h-96" src={img} alt="Banner" width={800} height={600} />
      </div>
    </div>
  );
};

export default Page;

const demoNumber = [
  {
    name: "Step One",
    number: "01",
    description: "A passionate web developer specializing in MERN stack.",
  },
  {
    name: "Step Two",
    number: "02",
    description: "An online platform for buying and selling books.",
  },
  {
    name: "Step Three",
    number: "03",
    description: "A hybrid intrusion detection system using CNN and RNN.",
  },
];
