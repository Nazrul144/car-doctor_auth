
import Image from 'next/image';
import Link from 'next/link';
import 'animate.css';

const CarTips = () => {

    return (
        <div className="bg-gray-100 py-10 mt-[70px]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 animate__animated animate__tada animate__delay-1s	">
            <h2 className="text-3xl font-semibold text-gray-800 ">Car Maintenance Tips</h2>
            <p className="text-lg text-gray-600 mt-4">Essential tips to ensure your car runs smoothly and efficiently.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/pipe.jpg" width={1000} height={700} alt="Oil Change" className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Regular Engine Pipe Changes</h3>
                <p className="text-gray-600 mt-2">Changing your car's oil regularly is crucial for engine longevity. Learn why it's essential...</p>
                <Link href={'/engine_details'} className="text-blue-500 mt-4 inline-block">Read more</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire.jpg" width={1000} height={700} alt="Tire Check" className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Tire Maintenance</h3>
                <p className="text-gray-600 mt-2">Proper tire care is essential for road safety. Here's how to check and maintain your tires...</p>
                <Link href={"/tire_details"} className="text-blue-500 mt-4 inline-block">Read more</Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil.jpg" width={1000} height={700} alt="Tire Check" className="w-full h-40 object-cover"/>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Oil Change</h3>
                <p className="text-gray-600 mt-2">Proper Oil care is essential for engine safety. Here's how to check and maintain your oil...</p>
                <Link href={"/oil_details"} className="text-blue-500 mt-4 inline-block">Read more</Link>
              </div>
            </div>
            {/* <!-- Add more cards here --> */}
          </div>
        </div>
      </div>
      
    );
}

export default CarTips;
