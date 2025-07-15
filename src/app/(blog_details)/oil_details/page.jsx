import Image from "next/image";
import React from "react";

const OilDetailsPage = () => {
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Proper Oil Change</h1>
          <p className="text-lg text-gray-600 mt-4">
            Essential steps for maintaining your car’s engine and ensuring long-lasting performance.
          </p>
          <Image src="/assets/blog/oil/oil-hero.jpg" width={1000} height={800} alt="Oil Change Hero" className="w-full h-64 object-cover mt-6 rounded-lg" />
        </div>

        <div className="space-y-8">
          <p className="text-gray-700 text-lg">
            Regular oil changes are one of the most important aspects of vehicle maintenance. Engine oil lubricates the engine’s
            moving parts, reduces friction, and prevents overheating. Over time, oil can break down and become contaminated with
            dirt and debris, which is why changing it regularly is crucial to keeping your engine in good working condition.
          </p>

          <p className="text-gray-700 text-lg">Here’s a detailed step-by-step guide to performing a proper oil change:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil/1.jpg" width={500} height={400} alt="Step 1: Prepare Your Tools" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 1: Prepare Your Tools</h3>
                <p className="text-gray-600 mt-2">
                  Ensure you have all the necessary tools, such as a wrench, oil filter, drain pan, and fresh oil. Always wear
                  gloves for safety.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil/2.jpg" width={500} height={400} alt="Step 2: Lift the Car" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 2: Lift the Car</h3>
                <p className="text-gray-600 mt-2">
                  Use a jack to lift the front of the car safely and place it on jack stands. This allows you to easily access the
                  oil drain plug.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil/3.jpg" width={500} height={400} alt="Step 3: Drain the Old Oil" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 3: Drain the Old Oil</h3>
                <p className="text-gray-600 mt-2">
                  Locate the oil drain plug, unscrew it, and let the oil drain into the pan. Make sure the engine is warm to
                  ensure smooth draining.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil/4.jpg" width={500} height={400} alt="Step 4: Replace the Oil Filter" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 4: Replace the Oil Filter</h3>
                <p className="text-gray-600 mt-2">
                  Remove the old oil filter and install the new one. Be sure to apply a thin layer of fresh oil to the filter's
                  rubber seal before installation.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil/5.jpg" width={500} height={400} alt="Step 5: Add Fresh Oil" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 5: Add Fresh Oil</h3>
                <p className="text-gray-600 mt-2">
                  Pour the fresh oil into the engine using a funnel. Be sure to use the right type and amount of oil for your
                  vehicle.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/oil/6.jpg" width={500} height={400} alt="Step 6: Check the Oil Level" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 6: Check the Oil Level</h3>
                <p className="text-gray-600 mt-2">
                  Start the engine and let it run for a few minutes. Then, use the dipstick to check the oil level. Add more oil
                  if needed.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Why Regular Oil Changes Are Important</h2>
            <p className="text-gray-700 mt-4">
              Regular oil changes help prevent engine wear, improve gas mileage, reduce emissions, and ensure your vehicle runs
              smoothly. If you’re not comfortable performing an oil change yourself, don’t hesitate to visit a certified mechanic
              for professional service.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600">
            Book Your Oil Change Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default OilDetailsPage;
