import React from "react";

const ExpertAdvice = () => {
  return (
    <div className="bg-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">Expert Advice</h2>
          <p className="text-lg text-gray-600 mt-4">Insights from professionals in the automotive field.</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <blockquote className="italic text-xl text-gray-800">
            "Regular maintenance not only saves you money but also prevents unexpected breakdowns on the road."
            <footer className="mt-4 text-gray-600">— John Doe, Auto Mechanic Expert</footer>
          </blockquote>
          <p className="text-gray-600 mt-6">Here are some additional expert tips for keeping your car in top condition:</p>
          <ul className="list-disc list-inside text-gray-700 mt-4">
            <li>Check fluids regularly to avoid engine damage.</li>
            <li>Inspect belts and hoses for wear and tear.</li>
            <li>Use high-quality parts for repairs and replacements.</li>
            <li>Pay attention to unusual sounds or vibrations from your car.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExpertAdvice;
