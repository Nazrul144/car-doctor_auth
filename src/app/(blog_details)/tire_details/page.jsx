import Image from "next/image";
import React from "react";

const TireDetailsPage = () => {
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Tire Maintenance</h1>
          <p className="text-lg text-gray-600 mt-4">
            Essential steps for maintaining your car’s engine and ensuring long-lasting performance.
          </p>
          <Image src="/assets/blog/tire/cover.jpg" width={1000} height={800} alt="tire Change Hero" className="w-full h-64 object-cover mt-6 rounded-lg" />
        </div>

        <div className="space-y-8">
          <p className="text-gray-700 text-lg">
          Regular tire maintenance is one of the most important aspects of vehicle care. Properly maintained tires ensure safety, improve fuel efficiency, and provide better handling. Over time, tires can wear out, lose pressure, or develop punctures, which is why checking and replacing them as needed is crucial to keeping your vehicle in top condition.
          </p>

          <p className="text-gray-700 text-lg">Here’s a detailed step-by-step guide to performing a proper tire change:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire/1.jpg" width={500} height={400} alt="Step 1: Prepare Your Tools" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 1: Gather Your Tools</h3>
                <p className="text-gray-600 mt-2">
                Ensure you have all the necessary tools, including a jack, lug wrench, spare tire, and wheel wedges. Always wear gloves for safety.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire/2.jpg" width={500} height={400} alt="Step 2: Lift the Car" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 2: Secure the Vehicle</h3>
                <p className="text-gray-600 mt-2">
                Park on a flat surface, engage the parking brake, and place wheel wedges around the opposite tires to prevent movement.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire/3.jpg" width={500} height={400} alt="Step 3: Drain the Old tire" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 3: Loosen the Lug Nuts</h3>
                <p className="text-gray-600 mt-2">
                Before lifting the car, use a lug wrench to slightly loosen the lug nuts on the tire you’re replacing.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire/4.jpg" width={500} height={400} alt="Step 4: Replace the tire Filter" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 4: Lift the Car</h3>
                <p className="text-gray-600 mt-2">
                Use a jack to lift the car safely and ensure it's securely positioned before removing the lug nuts completely.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire/5.jpg" width={500} height={400} alt="Step 5: Add Fresh tire" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 5: Remove the Old Tire and Install the Spare</h3>
                <p className="text-gray-600 mt-2">
                Carefully remove the old tire, align the spare tire with the lug bolts, and hand-tighten the lug nuts.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/tire/6.jpg" width={500} height={400} alt="Step 6: Check the tire Level" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 6: Lower the Car and Tighten the Lug Nuts</h3>
                <p className="text-gray-600 mt-2">
                Lower the car back to the ground and fully tighten the lug nuts in a crisscross pattern to ensure even pressure.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Why Regular tire Changes Are Important</h2>
            <p className="text-gray-700 mt-4">
              Regular tire changes help prevent engine wear, improve gas mileage, reduce emissions, and ensure your vehicle runs
              smoothly. If you’re not comfortable performing an tire change yourself, don’t hesitate to visit a certified mechanic
              for professional service.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600">
            Book Your tire Change Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default TireDetailsPage;
