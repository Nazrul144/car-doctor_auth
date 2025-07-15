import Image from 'next/image';
import React from 'react';

const About = () => {
    return (
        <div className='container mx-auto mt-40 mb-14'>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-20 px-2'>
                <div className='relative'>
                    <div>
                    <Image className='rounded-lg' src='/assets/images/about_us/person.jpg' alt='Person' width={400} height={500}/>
                    </div>
                    <div className='absolute top-20 left-36'>
                    <Image className='border-8 border-white rounded-lg top-20' src='/assets/images/about_us/parts.jpg' alt='Parts' width={300} height={300}/>
                    </div>
                </div>
                <div className='text-justify'>
                    <h1 className='text-primary mb-2 font-bold mt-8 lg:mt-0'>About Us</h1>
                    <h1 className='font-bold text-2xl w-56 mb-2'>We are qualified & of experience in this field</h1>
                    <p className='text-sm text-gray-500'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className='text-sm text-gray-500'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                </div>
            </div>
        </div>
    );
}

export default About;
