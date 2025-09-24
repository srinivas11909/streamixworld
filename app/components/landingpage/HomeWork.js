// const HowWeWork = () => {
//   return (
//     <section className="w-full py-16 bg-[#0b0d17] text-white">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
//           How We Work
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="flex flex-col items-center text-center">
//             <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
//               <span className="text-xl">1</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Consultation</h3>
//             <p>Understand brand goals and audience.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
//               <span className="text-xl">2</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Strategy & Planning</h3>
//             <p>Build a tailored promotional or production roadmap.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
//               <span className="text-xl">3</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Execution</h3>
//             <p>Manage influencers, campaigns, or production logistics.</p>
//           </div>
//           <div className="flex flex-col items-center text-center">
//             <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center mb-4">
//               <span className="text-xl">4</span>
//             </div>
//             <h3 className="text-xl font-semibold mb-2">Delivery</h3>
//             <p>Provide impactful results and transparent reporting.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HowWeWork;

"use client";

import React from "react";
import { FaHandshake, FaChartLine, FaCogs, FaFlagCheckered } from "react-icons/fa"; // Icons from react-icons

const HowWeWork = () => {
  return (
    <section className="w-full py-16 bg-[#0b0d17] text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">How We Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Step 1 */}
          <div className="bg-[#2a2f42] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-4xl mb-4 text-blue-500">
              <FaHandshake />
            </div>
            <h3 className="text-xl font-semibold mb-4">Consultation</h3>
            <p className="text-sm text-gray-300">
              We start by understanding your brand’s goals and audience. Our focus is to craft a personalized approach that aligns with your vision.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-[#2a2f42] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-4xl mb-4 text-yellow-500">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-semibold mb-4">Strategy & Planning</h3>
            <p className="text-sm text-gray-300">
              Together, we build a tailored promotional or production roadmap that drives measurable results for your brand.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-[#2a2f42] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-4xl mb-4 text-green-500">
              <FaCogs />
            </div>
            <h3 className="text-xl font-semibold mb-4">Execution</h3>
            <p className="text-sm text-gray-300">
              We manage influencers, campaigns, and production logistics to ensure everything runs smoothly and efficiently.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-[#2a2f42] p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="text-4xl mb-4 text-red-500">
              <FaFlagCheckered />
            </div>
            <h3 className="text-xl font-semibold mb-4">Delivery</h3>
            <p className="text-sm text-gray-300">
              We provide impactful results and transparent reporting, ensuring you have all the information to track success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
