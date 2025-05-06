// // client/components/FineConfigForm.js
// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";

// const FineConfigForm = () => {
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
//     setFineConfig((prev) => ({ ...prev, [name]: parseFloat(value) }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/fine/fine-config`, fineConfig);
//       alert("Fine configuration updated successfully!");
//     } catch (err) {
//       console.error("Error updating fine configuration:", err);
//       alert("Failed to update fine configuration.");
//     }
//   };

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold text-indigo-700 mb-4">Fine Configuration</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="finePerDay" className="block text-sm font-medium text-gray-700">
//             Fine Per Day (₹)
//           </label>
//           <input
//             type="number"
//             id="finePerDay"
//             name="finePerDay"
//             value={fineConfig.finePerDay}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="gracePeriod" className="block text-sm font-medium text-gray-700">
//             Grace Period (Days)
//           </label>
//           <input
//             type="number"
//             id="gracePeriod"
//             name="gracePeriod"
//             value={fineConfig.gracePeriod}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
//         <div>
//           <label htmlFor="maxFine" className="block text-sm font-medium text-gray-700">
//             Maximum Fine (₹)
//           </label>
//           <input
//             type="number"
//             id="maxFine"
//             name="maxFine"
//             value={fineConfig.maxFine}
//             onChange={handleChange}
//             className="mt-1 block w-full px-3 py-2 border text-gray-800 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           />
//         </div>
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


// client/components/FineConfigForm.js
'use client';

import { useEffect, useState } from "react";
import axios from "axios";

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

    // Ensure that empty values don't cause errors
    const parsedValue = value === "" ? "" : parseFloat(value);

    setFineConfig((prev) => ({ ...prev, [name]: parsedValue }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevent submission if any field is empty or invalid
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

  return (
    <div className={` p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h2 className={`text-xl font-bold ${
        isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
      } mb-4`}>Fine Configuration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Fine Per Day */}
        <div>
          <label htmlFor="finePerDay" className={`block text-sm font-medium ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          }`}>
            Fine Per Day (₹)
          </label>
          <input
            type="number"
            id="finePerDay"
            name="finePerDay"
            value={fineConfig.finePerDay}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        </div>

        {/* Grace Period */}
        <div>
          <label htmlFor="gracePeriod" className={`block text-sm font-medium ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          }`}>
            Grace Period (Days)
          </label>
          <input
            type="number"
            id="gracePeriod"
            name="gracePeriod"
            value={fineConfig.gracePeriod}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        </div>

        {/* Maximum Fine */}
        <div>
          <label htmlFor="maxFine" className={`block text-sm font-medium ${
            isDarkMode ? 'text-white' : 'text-gray-700'
          }`}>
            Maximum Fine (₹)
          </label>
          <input
            type="number"
            id="maxFine"
            name="maxFine"
            value={fineConfig.maxFine}
            onChange={handleChange}
            className={`mt-1 block w-full px-3 py-2 border ${
              isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
            } rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Save Configuration
        </button>
      </form>
    </div>
  );
};

export default FineConfigForm;