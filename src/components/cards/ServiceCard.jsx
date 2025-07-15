import Image from "next/image";
import Link from "next/link";
import React from "react";

const ServiceCard = ({service}) => {
  const {title, img, price, _id} = service;
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-xl badge-outline border border-gray-200 rounded-lg">
        <figure className="px-6 pt-6 w-full h-64">
          <Image className="rounded-lg"
            src={img}
            alt="Image"
            width={400}
            height={400}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
         <div className="flex items-center">
         <p className="text-primary">${price}</p>
         <Link href={`services/${_id}`}><Image src='/Vector.png' alt="Arrow" width={20} height={20}/></Link>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
