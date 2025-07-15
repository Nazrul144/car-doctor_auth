import Image from "next/image";
import React from "react";
import { FaRegStar } from "react-icons/fa";

const ProductsCard = ({product}) => {
    const {name, image, price,} = product;
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl badge-outline border border-gray-200 rounded-lg">
          <figure className="px-6 pt-6 w-full h-64">
            <Image className="rounded-lg" src={image} alt="Image" width={300} height={300} />
          </figure>
          <div className="card-body">
            <div className="flex gap-1 text-orange-600 justify-center">
            <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />
            </div>
           <div>
           <h2 className=" font-bold text-xl text-center">{name}</h2>
           <p className="text-primary text-center">${price}</p>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCard;
