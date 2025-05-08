


// // client/components/FineConfigForm.js
// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";

// const FineConfigForm = ({ isDarkMode }) => {
//   const [fineConfig, setFineConfig] = useState({
//     finePerDay: 10,
//     gracePeriod: 2,
//     maxFine: 100,
//   });

//   useEffect(() => {
//     const fetchFineConfig = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fine/fineconfig`);
//         setFineConfig(response.data.fineConfig);
//       } catch (err) {
//         console.error("Error fetching fine configuration:", err);
//       }
//     };

//     fetchFineConfig();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     // Ensure that empty values don't cause errors
//     const parsedValue = value === "" ? "" : parseFloat(value);

//     setFineConfig((prev) => ({ ...prev, [name]: parsedValue }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prevent submission if any field is empty or invalid
//     if (
//       fineConfig.finePerDay === "" ||
//       fineConfig.gracePeriod === "" ||
//       fineConfig.maxFine === ""
//     ) {
//       alert("Please fill in all fields with valid numbers.");
//       return;
//     }

//     try {
//       await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/fine/fine-config`, fineConfig);
//       alert("Fine configuration updated successfully!");
//     } catch (err) {
//       console.error("Error updating fine configuration:", err);
//       alert("Failed to update fine configuration.");
//     }
//   };

//   return (
//     <div className={` p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
//       <h2 className={`text-xl font-bold ${
//         isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
//       } mb-4`}>Fine Configuration</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Fine Per Day */}
//         <div>
//           <label htmlFor="finePerDay" className={`block text-sm font-medium ${
//             isDarkMode ? 'text-white' : 'text-gray-700'
//           }`}>
//             Fine Per Day (₹)
//           </label>
//           <input
//             type="number"
//             id="finePerDay"
//             name="finePerDay"
//             value={fineConfig.finePerDay}
//             onChange={handleChange}
//             className={`mt-1 block w-full px-3 py-2 border ${
//               isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//             } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//           />
//         </div>

//         {/* Grace Period */}
//         <div>
//           <label htmlFor="gracePeriod" className={`block text-sm font-medium ${
//             isDarkMode ? 'text-white' : 'text-gray-700'
//           }`}>
//             Grace Period (Days)
//           </label>
//           <input
//             type="number"
//             id="gracePeriod"
//             name="gracePeriod"
//             value={fineConfig.gracePeriod}
//             onChange={handleChange}
//             className={`mt-1 block w-full px-3 py-2 border ${
//               isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//             } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//           />
//         </div>

//         {/* Maximum Fine */}
//         <div>
//           <label htmlFor="maxFine" className={`block text-sm font-medium ${
//             isDarkMode ? 'text-white' : 'text-gray-700'
//           }`}>
//             Maximum Fine (₹)
//           </label>
//           <input
//             type="number"
//             id="maxFine"
//             name="maxFine"
//             value={fineConfig.maxFine}
//             onChange={handleChange}
//             className={`mt-1 block w-full px-3 py-2 border ${
//               isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//             } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           Save Configuration
//         </button>
//       </form>
//     </div>
//   );
// };

// export default FineConfigForm;

'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

const FineConfigForm = ({ isDarkMode }) => {
  const [fineConfig, setFineConfig] = useState({
    finePerDay: 10,
    gracePeriod: 2,
    maxFine: 100,
  });

  useEffect(() => {
    const fetchFineConfig = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/fine/fineconfig`);
        setFineConfig(response.data.fineConfig);
      } catch (err) {
        console.error("Error fetching fine configuration:", err);
      }
    };
    fetchFineConfig();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const parsedValue = value === "" ? "" : parseFloat(value);
    setFineConfig((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      fineConfig.finePerDay === "" ||
      fineConfig.gracePeriod === "" ||
      fineConfig.maxFine === ""
    ) {
      alert("Please fill in all fields with valid numbers.");
      return;
    }

    try {
      await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/fine/fine-config`, fineConfig);
      alert("Fine configuration updated successfully!");
    } catch (err) {
      console.error("Error updating fine configuration:", err);
      alert("Failed to update fine configuration.");
    }
  };

  const containerClass = `rounded-2xl p-6 shadow-lg transition-all duration-300 border ${
    isDarkMode
      ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-white border-gray-700'
      : 'bg-gradient-to-br from-[#ece3ff] to-[#e6f0ff] text-slate-800 border-violet-200'
  }`;

  const labelClass = `block text-sm font-medium mb-1 ${
    isDarkMode ? 'text-indigo-200' : 'text-violet-700'
  }`;

  const inputClass = `mt-1 block w-full rounded-md border px-4 py-2 text-sm transition-all shadow-sm focus:outline-none focus:ring-2 ${
    isDarkMode
      ? 'bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:ring-indigo-500'
      : 'bg-[#f4f0ff] text-slate-900 border-violet-300 placeholder-violet-500 focus:ring-violet-400'
  } focus:scale-[1.02]`;

  const headingClass = `text-2xl font-bold mb-6 tracking-tight ${
    isDarkMode ? 'text-indigo-300' : 'text-violet-700'
  }`;

  const buttonClass = `mt-4 inline-flex items-center justify-center px-6 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
    isDarkMode
      ? 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
      : 'bg-violet-600 hover:bg-violet-700 focus:ring-violet-400'
  }`;

  return (
    <motion.div
      className={containerClass}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <h2 className={headingClass}>📘 Fine Configuration</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Fine Per Day */}
        <div>
          <label htmlFor="finePerDay" className={labelClass}>
            Fine Per Day (₹)
          </label>
          <input
            type="number"
            id="finePerDay"
            name="finePerDay"
            value={fineConfig.finePerDay}
            onChange={handleChange}
            placeholder="e.g. 10"
            className={inputClass}
          />
        </div>

        {/* Grace Period */}
        <div>
          <label htmlFor="gracePeriod" className={labelClass}>
            Grace Period (Days)
          </label>
          <input
            type="number"
            id="gracePeriod"
            name="gracePeriod"
            value={fineConfig.gracePeriod}
            onChange={handleChange}
            placeholder="e.g. 2"
            className={inputClass}
          />
        </div>

        {/* Maximum Fine */}
        <div>
          <label htmlFor="maxFine" className={labelClass}>
            Maximum Fine (₹)
          </label>
          <input
            type="number"
            id="maxFine"
            name="maxFine"
            value={fineConfig.maxFine}
            onChange={handleChange}
            placeholder="e.g. 100"
            className={inputClass}
          />
        </div>

        <button type="submit" className={buttonClass}>
          💾 Save Configuration
        </button>
      </form>
    </motion.div>
  );
};

export default FineConfigForm;
