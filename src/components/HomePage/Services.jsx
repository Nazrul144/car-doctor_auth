import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import { getServicesAllData } from '@/services/getServicesAll';


const Services = async() => {

    const {services} = await getServicesAllData();

    return (
        <div >
            <div className='container mx-auto text-center mt-32 '>
                <h1 className='text-primary font-bold'>Service</h1>
                <h1 className='text-3xl text-black font-bold '> Our Service Area</h1>
                <p className='text-gray-700 lg:w-[800px] mx-auto  mt-8'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            </div>
            <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6'>
                {
                    services?.map((service)=> (
                        <ServiceCard service={service} key={service._id}/>
                    ))
                }
            </div>
            <div className='flex justify-center mt-8 mb-12'>
            <button className='btn btn-primary btn-outline flex justify-center hover:text-white'>More Services</button> 
            </div>
        </div>
    );
}

export default Services;
