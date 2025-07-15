import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLongArrowAltLeft } from 'react-icons/fa';

const NotFound = () => {
    return (
        <div className='container mx-auto flex justify-center items-center min-h-screen'>
            <div>
              <div>
              <Image className='object-cover flex justify-center items-center' src={'/assets/NotFound.png'} alt='NotFound' width={600} height={500}/>
              </div>
                <Link className='flex justify-center items-center border-[1px] border-red-400 py-2 rounded-md w-44 font-bold mx-auto hover:bg-orange-400 bg-transparent duration-300 mt-8' href={'/'}> <FaLongArrowAltLeft /> Back to home</Link>
            </div>
        </div>
    );
}

export default NotFound;
