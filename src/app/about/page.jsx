import About from '@/components/HomePage/About';
import Link from 'next/link';
import React from 'react';

export const metadata = {
    title: "About"
}

const AboutPage = () => {
    return (
        <div>
            <About/>
            <div className='bg-orange-600 px-2 lg:px-32 py-32'>
            <h1 className='text-center text-4xl text-white font-bold'>Do you have any issue?</h1>
            <p className='text-center text-white mt-2'>We believe in client satisfaction and we deliver service that can successfully meet or exceed the prospects of the stakeholders.</p>
            <div className='mx-auto text-center text-white border-[1px] rounded-lg lg:w-32 p-2 mt-8'>
            <Link href={'/contact'}>Contact Us</Link>
            </div>
            </div>
        </div>
    );
}

export default AboutPage;
