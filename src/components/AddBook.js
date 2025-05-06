



// // client/components/AddBook.js
// 'use client'; // Mark this as a Client Component

// import { useState } from "react";
// import axios from "axios";

// const AddBook = ({ isDarkMode }) => {
//   const [bookData, setBookData] = useState({
//     bookNo: "",
//     nameOfBook: "",
//     nameOfAuthor: "",
//     medium: "", // Default medium is empty
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   // State for the prefix selection
//   const [prefix, setPrefix] = useState(""); // "P -" or "S -"

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBookData({ ...bookData, [name]: value });
//   };

//   const handleMediumSelect = (selectedMedium) => {
//     setBookData({ ...bookData, medium: selectedMedium });
//   };

//   const handlePrefixSelect = (selectedPrefix) => {
//     setPrefix(selectedPrefix);
//     // Reset the book number when the prefix changes
//     setBookData((prev) => ({ ...prev, bookNo: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       // Combine the prefix with the numeric book number
//       const formattedBookNo = `${prefix}${bookData.bookNo.trim()}`;
//       if (!formattedBookNo.startsWith("P -") && !formattedBookNo.startsWith("S -")) {
//         throw new Error("Invalid book number format. Please select a prefix.");
//       }

//       // Send a POST request to the backend API
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/addbooks`, {
//         ...bookData,
//         bookNo: formattedBookNo,
//       });

//       if (response.data.success) {
//         setSuccess(true); // Indicate success
//         setBookData({ bookNo: "", nameOfBook: "", nameOfAuthor: "", medium: "" }); // Reset form
//         setPrefix(""); // Reset prefix
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || err.message || "Failed to add the book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className={` p-6 rounded-lg shadow-md relative ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
//       {success && <p className="text-green-500 mb-4">Book added successfully!</p>}
//       {error && <p className="text-red-500 mb-4">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         {/* Prefix Selection */}
//         <div>
//           <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Book Number Prefix</label>
//           <div className="flex space-x-2 mt-1">
//             {["P - ", "S - "].map((pref) => (
//               <button
//                 key={pref}
//                 type="button"
//                 onClick={() => handlePrefixSelect(pref)}
//                 className={`py-2 px-4 rounded-md text-sm font-medium transition duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : ''} ${
//                   prefix === pref
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-${isDarkMode ? 'white' : 'gray-700'} hover:bg-gray-300"
//                 }`}
//               >
//                 {pref}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Numeric Input for Book Number */}
//         <div>
//           <label htmlFor="bookNo" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
//             Book Number (Numeric Part)
//           </label>
//           <div className="relative mt-1">
//             <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-${isDarkMode ? 'white' : 'gray-500'}">
//               {prefix}
//             </span>
//             <input
//               type="text"
//               id="bookNo"
//               name="bookNo"
//               value={bookData.bookNo}
//               onChange={(e) => {
//                 // Allow only numeric input
//                 const numericValue = e.target.value.replace(/[^0-9]/g, "");
//                 setBookData({ ...bookData, bookNo: numericValue });
//               }}
//               required
//               placeholder={prefix ? "Enter numeric part" : "Select a prefix first"}
//               disabled={!prefix}
//               className={`block w-full pl-10 pr-3 py-2 border text-${isDarkMode ? 'white' : 'gray-600'} border-${isDarkMode ? 'gray-600' : 'gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//                 isDarkMode ? 'bg-gray-700' : 'bg-white'
//               }`}
//             />
//           </div>
//         </div>

//         {/* Name of Book */}
//         <div>
//           <label htmlFor="nameOfBook" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
//             Name of Book
//           </label>
//           <input
//             type="text"
//             id="nameOfBook"
//             name="nameOfBook"
//             value={bookData.nameOfBook}
//             onChange={handleChange}
//             required
//             className={`mt-1 block w-full px-3 py-2 border text-${isDarkMode ? 'white' : 'gray-600'} border-${isDarkMode ? 'gray-600' : 'gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//               isDarkMode ? 'bg-gray-700' : 'bg-white'
//             }`}
//           />
//         </div>

//         {/* Name of Author */}
//         <div>
//           <label htmlFor="nameOfAuthor" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
//             Name of Author
//           </label>
//           <input
//             type="text"
//             id="nameOfAuthor"
//             name="nameOfAuthor"
//             value={bookData.nameOfAuthor}
//             onChange={handleChange}
//             required
//             className={`mt-1 block w-full px-3 py-2 border text-${isDarkMode ? 'white' : 'gray-600'} border-${isDarkMode ? 'gray-600' : 'gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
//               isDarkMode ? 'bg-gray-700' : 'bg-white'
//             }`}
//           />
//         </div>

//         {/* Medium Selection */}
//         <div>
//           <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
//             Medium
//           </label>
//           <div className="flex space-x-2 mt-1">
//             {["Hindi", "English", "Bangla"].map((medium) => (
//               <button
//                 key={medium}
//                 type="button"
//                 onClick={() => handleMediumSelect(medium)}
//                 className={`py-2 px-4 rounded-md text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-white' : ''} ${
//                   bookData.medium === medium
//                     ? "bg-indigo-600 text-white"
//                     : "bg-gray-200 text-${isDarkMode ? 'white' : 'gray-700'} hover:bg-gray-300"
//                 }`}
//               >
//                 {medium}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           disabled={loading || !prefix || !bookData.bookNo}
//           className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
//         >
//           {loading ? "Adding..." : "Add Book"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default AddBook;

// client/components/AddBook.js
'use client'; // Mark this as a Client Component

import { useState } from "react";
import axios from "axios";

const AddBook = ({ isDarkMode }) => {
  const [bookData, setBookData] = useState({
    bookNo: "",
    nameOfBook: "",
    nameOfAuthor: "",
    medium: "", // Default medium is empty
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // State for the prefix selection
  const [prefix, setPrefix] = useState(""); // "P -" or "S -"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleMediumSelect = (selectedMedium) => {
    setBookData({ ...bookData, medium: selectedMedium });
  };

  const handlePrefixSelect = (selectedPrefix) => {
    setPrefix(selectedPrefix);
    // Reset the book number when the prefix changes
    setBookData((prev) => ({ ...prev, bookNo: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Combine the prefix with the numeric book number
      const formattedBookNo = `${prefix}${bookData.bookNo.trim()}`;
      if (!formattedBookNo.startsWith("P -") && !formattedBookNo.startsWith("S -")) {
        throw new Error("Invalid book number format. Please select a prefix.");
      }

      // Send a POST request to the backend API to add the book
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/addbooks`, {
        ...bookData,
        bookNo: formattedBookNo,
      });

      if (response.data.success) {
        // Log the action
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
          actionType: "add",
          details: `New book '${bookData.nameOfBook}' added to the library`,
        });

        setSuccess(true); // Indicate success
        setBookData({ bookNo: "", nameOfBook: "", nameOfAuthor: "", medium: "" }); // Reset form
        setPrefix(""); // Reset prefix
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to add the book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-6 rounded-lg shadow-md relative ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      {success && <p className="text-green-500 mb-4">Book added successfully!</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Prefix Selection */}
        <div>
          <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>Book Number Prefix</label>
          <div className="flex space-x-2 mt-1">
            {["P - ", "S - "].map((pref) => (
              <button
                key={pref}
                type="button"
                onClick={() => handlePrefixSelect(pref)}
                className={`py-2 px-4 rounded-md text-sm font-medium transition duration-300 ${isDarkMode ? 'bg-gray-800 text-white' : ''} ${
                  prefix === pref
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-${isDarkMode ? 'white' : 'gray-700'} hover:bg-gray-300"
                }`}
              >
                {pref}
              </button>
            ))}
          </div>
        </div>

        {/* Numeric Input for Book Number */}
        <div>
          <label htmlFor="bookNo" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Book Number (Numeric Part)
          </label>
          <div className="relative mt-1">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-${isDarkMode ? 'white' : 'gray-500'}">
              {prefix}
            </span>
            <input
              type="text"
              id="bookNo"
              name="bookNo"
              value={bookData.bookNo}
              onChange={(e) => {
                // Allow only numeric input
                const numericValue = e.target.value.replace(/[^0-9]/g, "");
                setBookData({ ...bookData, bookNo: numericValue });
              }}
              required
              placeholder={prefix ? "Enter numeric part" : "Select a prefix first"}
              disabled={!prefix}
              className={`block w-full pl-10 pr-3 py-2 border text-${isDarkMode ? 'white' : 'gray-600'} border-${isDarkMode ? 'gray-600' : 'gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              }`}
            />
          </div>
        </div>

        {/* Name of Book */}
        <div>
          <label htmlFor="nameOfBook" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Name of Book
          </label>
          <input
            type="text"
            id="nameOfBook"
            name="nameOfBook"
            value={bookData.nameOfBook}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border text-${isDarkMode ? 'white' : 'gray-600'} border-${isDarkMode ? 'gray-600' : 'gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            }`}
          />
        </div>

        {/* Name of Author */}
        <div>
          <label htmlFor="nameOfAuthor" className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Name of Author
          </label>
          <input
            type="text"
            id="nameOfAuthor"
            name="nameOfAuthor"
            value={bookData.nameOfAuthor}
            onChange={handleChange}
            required
            className={`mt-1 block w-full px-3 py-2 border text-${isDarkMode ? 'white' : 'gray-600'} border-${isDarkMode ? 'gray-600' : 'gray-300'} rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
              isDarkMode ? 'bg-gray-700' : 'bg-white'
            }`}
          />
        </div>

        {/* Medium Selection */}
        <div>
          <label className={`block text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-700'}`}>
            Medium
          </label>
          <div className="flex space-x-2 mt-1">
            {["Hindi", "English", "Bangla"].map((medium) => (
              <button
                key={medium}
                type="button"
                onClick={() => handleMediumSelect(medium)}
                className={`py-2 px-4 rounded-md text-sm font-medium ${isDarkMode ? 'bg-gray-800 text-white' : ''} ${
                  bookData.medium === medium
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 text-${isDarkMode ? 'white' : 'gray-700'} hover:bg-gray-300"
                }`}
              >
                {medium}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || !prefix || !bookData.bookNo}
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
    </div>
  );
};

export default AddBook;