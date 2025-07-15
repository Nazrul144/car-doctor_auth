import Image from "next/image";
import React from "react";

const EngineDetails = () => {
  return (
    <div className="bg-gray-100 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">Proper Engine Overhauling</h1>
          <p className="text-lg text-gray-600 mt-4">
          Your car’s engine is a complex system that powers the vehicle by converting fuel into energy. Proper maintenance ensures longevity, efficiency, and smooth performance.
          </p>
          <Image src="/assets/blog/engine/cover.jpg" width={1000} height={800} alt="engine Change Hero" className="w-full h-64 object-cover mt-6 rounded-lg" />
        </div>

        <div className="space-y-8">
          <p className="text-gray-700 text-lg">
          Regular engine maintenance is one of the most important aspects of vehicle care. The engine consists of multiple moving parts that work together to generate power. Over time, components can wear down, accumulate dirt, and lose efficiency, which is why proper upkeep is essential. Regular inspections, timely engine changes, and maintaining the cooling and fuel systems help prevent breakdowns, reduce friction, and ensure optimal performance. Keeping the engine in good condition enhances fuel efficiency, extends its lifespan, and prevents costly repairs.
          </p>

          <p className="text-gray-700 text-lg">Here’s a detailed step-by-step guide to performing a proper engine overhauling:</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/engine/1.jpg" width={500} height={400} alt="Step 1: Prepare Your Tools" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 1: Engine Disassembly</h3>
                <p className="text-gray-600 mt-2">
                The engine is completely disassembled to inspect and clean all components. This includes removing parts like the cylinder head, pistons, crankshaft, valves, and camshaft.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/engine/2.jpg" width={500} height={400} alt="Step 2: Lift the Car" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 2: Inspection and Evaluation</h3>
                <p className="text-gray-600 mt-2">
                Each component is thoroughly inspected for wear and tear, cracks, or other damage. If any part is damaged beyond repair, it is replaced with a new or reconditioned one.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/engine/3.jpg" width={500} height={400} alt="Step 3: Drain the Old engine" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 3: Cleaning</h3>
                <p className="text-gray-600 mt-2">
                All parts are cleaned to remove any carbon buildup, sludge, or dirt that could affect engine performance. This is done using specialized cleaning agents or machines.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/engine/4.jpg" width={500} height={400} alt="Step 4: Replace the engine Filter" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 4: Machining</h3>
                <p className="text-gray-600 mt-2">
                Some engine parts, such as the cylinder head, block, and crankshaft, may need to be machined to restore them to their original specifications. This process ensures all surfaces are smooth and properly aligned.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/engine/5.jpg" width={500} height={400} alt="Step 5: Add Fresh engine" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 5: Reassembly</h3>
                <p className="text-gray-600 mt-2">
                Once the components are cleaned, repaired, and machined, the engine is carefully reassembled. New seals, gaskets, and other components may be used to ensure the engine functions optimally.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image src="/assets/blog/engine/6.jpg" width={500} height={400} alt="Step 6: Check the engine Level" className="w-full h-40 object-cover" />
              <div className="p-6">
                <h3 className="font-semibold text-lg text-gray-800">Step 6: Testing and Calibration</h3>
                <p className="text-gray-600 mt-2">
                After reassembly, the engine is tested to ensure it runs smoothly. This can involve compression testing, checking for leaks, and verifying that all components are working as they should. The engine may also undergo tuning to optimize performance.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Why Regular engine overhauling is Important</h2>
            <p className="text-gray-700 mt-4">
            Regular engine overhauling is crucial for maintaining performance and extending lifespan. It helps identify and fix minor issues before they become major problems, improving fuel efficiency, preventing overheating, and reducing the risk of breakdowns. Regular overhauls keep engine parts in optimal condition, saving money on future repairs and ensuring the engine runs smoothly.
            </p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a href="/contact" className="bg-blue-500 text-white py-2 px-6 rounded-full text-lg hover:bg-blue-600">
          Schedule Your Engine Overhaul Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default EngineDetails;

