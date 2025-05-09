



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

//       // Send a POST request to the backend API to add the book
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/addbooks`, {
//         ...bookData,
//         bookNo: formattedBookNo,
//       });

//       if (response.data.success) {
//         // Log the action
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
//           actionType: "add",
//           details: `New book '${bookData.nameOfBook}' added to the library`,
//         });

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
//     <div className={`p-6 rounded-lg shadow-md relative ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
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

// 'use client';

// import { useState } from "react";
// import axios from "axios";

// const AddBook = ({ isDarkMode }) => {
//   const [bookData, setBookData] = useState({
//     bookNo: "",
//     nameOfBook: "",
//     nameOfAuthor: "",
//     medium: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [prefix, setPrefix] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBookData({ ...bookData, [name]: value });
//   };

//   const handleMediumSelect = (selectedMedium) => {
//     setBookData({ ...bookData, medium: selectedMedium });
//   };

//   const handlePrefixSelect = (selectedPrefix) => {
//     setPrefix(selectedPrefix);
//     setBookData((prev) => ({ ...prev, bookNo: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       const formattedBookNo = `${prefix}${bookData.bookNo.trim()}`;
//       if (!formattedBookNo.startsWith("P -") && !formattedBookNo.startsWith("S -")) {
//         throw new Error("Invalid book number format. Please select a prefix.");
//       }

//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/addbooks`, {
//         ...bookData,
//         bookNo: formattedBookNo,
//       });

//       if (response.data.success) {
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
//           actionType: "add",
//           details: `New book '${bookData.nameOfBook}' added to the library`,
//         });

//         setSuccess(true);
//         setBookData({ bookNo: "", nameOfBook: "", nameOfAuthor: "", medium: "" });
//         setPrefix("");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || err.message || "Failed to add the book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const containerBg = isDarkMode ? "bg-gray-900 text-white" : "bg-zinc-100 text-gray-800";
//   const inputBg = isDarkMode ? "bg-gray-700 border-gray-600" : "bg-white border-gray-300";
//   const labelText = isDarkMode ? "text-gray-200" : "text-gray-700";

//   return (
//     <div className={`p-8 rounded-xl shadow-xl transition-all duration-300 ${containerBg}`}>
//       <h2 className="text-2xl font-bold mb-6 tracking-wide text-indigo-500">Add New Book</h2>

//       {success && <p className="text-green-500 font-medium mb-4">✅ Book added successfully!</p>}
//       {error && <p className="text-red-500 font-medium mb-4">⚠ {error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Prefix Selection */}
//         <div>
//           <label className={`block mb-2 text-sm font-medium ${labelText}`}>Book Number Prefix</label>
//           <div className="flex gap-4">
//             {["P - ", "S - "].map((pref) => (
//               <button
//                 key={pref}
//                 type="button"
//                 onClick={() => handlePrefixSelect(pref)}
//                 className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
//                   prefix === pref
//                     ? "bg-indigo-600 text-white border-indigo-600"
//                     : `border-gray-400 ${isDarkMode ? "text-white" : "text-gray-700"} hover:bg-indigo-100`
//                 }`}
//               >
//                 {pref}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Book Number Input */}
//         <div>
//           <label className={`block mb-2 text-sm font-medium ${labelText}`}>
//             Book Number (Numeric Part)
//           </label>
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">{prefix}</span>
//             <input
//               type="text"
//               name="bookNo"
//               value={bookData.bookNo}
//               onChange={(e) => {
//                 const numericValue = e.target.value.replace(/[^0-9]/g, "");
//                 setBookData({ ...bookData, bookNo: numericValue });
//               }}
//               required
//               disabled={!prefix}
//               placeholder={prefix ? "Enter numeric part" : "Select a prefix first"}
//               className={`pl-10 w-full py-2 px-3 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${inputBg}`}
//             />
//           </div>
//         </div>

//         {/* Name of Book */}
//         <div>
//           <label className={`block mb-2 text-sm font-medium ${labelText}`}>Name of Book</label>
//           <input
//             type="text"
//             name="nameOfBook"
//             value={bookData.nameOfBook}
//             onChange={handleChange}
//             required
//             className={`w-full py-2 px-3 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${inputBg}`}
//           />
//         </div>

//         {/* Name of Author */}
//         <div>
//           <label className={`block mb-2 text-sm font-medium ${labelText}`}>Name of Author</label>
//           <input
//             type="text"
//             name="nameOfAuthor"
//             value={bookData.nameOfAuthor}
//             onChange={handleChange}
//             required
//             className={`w-full py-2 px-3 rounded-lg shadow-sm text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none ${inputBg}`}
//           />
//         </div>

//         {/* Medium Selection */}
//         <div>
//           <label className={`block mb-2 text-sm font-medium ${labelText}`}>Medium</label>
//           <div className="flex gap-4">
//             {["Hindi", "English", "Bangla"].map((medium) => (
//               <button
//                 key={medium}
//                 type="button"
//                 onClick={() => handleMediumSelect(medium)}
//                 className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border ${
//                   bookData.medium === medium
//                     ? "bg-green-600 text-white border-green-600"
//                     : `border-gray-400 ${isDarkMode ? "text-white" : "text-gray-700"} hover:bg-green-100`
//                 }`}
//               >
//                 {medium}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Submit Button */}
//         <div>
//           <button
//             type="submit"
//             disabled={loading || !prefix || !bookData.bookNo}
//             className={`w-full py-3 rounded-lg text-sm font-semibold text-white transition-all ${
//               loading
//                 ? "bg-indigo-300 cursor-not-allowed"
//                 : "bg-indigo-600 hover:bg-indigo-700"
//             }`}
//           >
//             {loading ? "Adding..." : "Add Book"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBook;


'use client';

import { useState } from "react";
import axios from "axios";

const AddBook = ({ isDarkMode }) => {
  const [bookData, setBookData] = useState({
    bookNo: "",
    nameOfBook: "",
    nameOfAuthor: "",
    medium: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [prefix, setPrefix] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookData({ ...bookData, [name]: value });
  };

  const handleMediumSelect = (selectedMedium) => {
    setBookData({ ...bookData, medium: selectedMedium });
  };

  const handlePrefixSelect = (selectedPrefix) => {
    setPrefix(selectedPrefix);
    setBookData((prev) => ({ ...prev, bookNo: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const formattedBookNo = `${prefix}${bookData.bookNo.trim()}`;
      if (!formattedBookNo.startsWith("P -") && !formattedBookNo.startsWith("S -")) {
        throw new Error("Invalid book number format. Please select a prefix.");
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/addbooks`, {
        ...bookData,
        bookNo: formattedBookNo,
      });

      if (response.data.success) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
          actionType: "add",
          details: `New book '${bookData.nameOfBook}' added to the library`,
        });

        setSuccess(true);
        setBookData({ bookNo: "", nameOfBook: "", nameOfAuthor: "", medium: "" });
        setPrefix("");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to add the book. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const containerBg = isDarkMode
    ? "bg-gradient-to-br from-gray-800 to-gray-900 text-white"
    : "bg-gradient-to-br from-rose-50 to-emerald-50 text-gray-800";

  const cardStyles =
    "backdrop-blur-lg bg-white/70 dark:bg-white/5 rounded-2xl shadow-xl border border-white/30 p-8";

  return (
    <div className={`${containerBg} min-h-screen flex items-center justify-center px-4 py-1 `}>
      <div className={cardStyles + " w-full max-w-xl space-y-6"}>
        <h2 className="text-3xl font-extrabold text-center bg-gradient-to-r from-pink-500 to-violet-600 text-transparent bg-clip-text">
          📚 Add a New Book
        </h2>

        {success && <p className="text-green-600 text-center font-medium">🎉 Book added successfully!</p>}
        {error && <p className="text-red-500 text-center font-medium">❌ {error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Prefix Selection */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Select Prefix</label>
            <div className="flex gap-4">
              {["P - ", "S - "].map((pref, index) => (
                <button
                  key={pref}
                  type="button"
                  onClick={() => handlePrefixSelect(pref)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold shadow-md transition-all duration-200 ease-out hover:scale-105 ${
                    prefix === pref
                      ? "bg-gradient-to-r from-purple-500 to-indigo-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-indigo-50"
                  }`}
                >
                  {pref}
                </button>
              ))}
            </div>
          </div>

          {/* Book Number Input */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Book Number (numeric part)</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500 font-semibold">
                {prefix}
              </span>
              <input
                type="text"
                name="bookNo"
                value={bookData.bookNo}
                onChange={(e) => {
                  const numericValue = e.target.value.replace(/[^0-9]/g, "");
                  setBookData({ ...bookData, bookNo: numericValue });
                }}
                required
                disabled={!prefix}
                placeholder={prefix ? "Enter book number" : "Select a prefix first"}
                className="pl-12 w-full py-2 px-3 rounded-lg border border-gray-300 shadow-inner text-sm focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Book Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Name of Book</label>
            <input
              type="text"
              name="nameOfBook"
              value={bookData.nameOfBook}
              onChange={handleChange}
              required
              className="w-full py-2 px-3 rounded-lg border border-gray-300 shadow-inner text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Author Name */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Name of Author</label>
            <input
              type="text"
              name="nameOfAuthor"
              value={bookData.nameOfAuthor}
              onChange={handleChange}
              required
              className="w-full py-2 px-3 rounded-lg border border-gray-300 shadow-inner text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Medium Selection */}
          <div>
            <label className="block mb-2 text-sm font-semibold">Select Medium</label>
            <div className="flex gap-4">
              {["Hindi", "English", "Bangla"].map((medium) => (
                <button
                  key={medium}
                  type="button"
                  onClick={() => handleMediumSelect(medium)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-transform duration-200 shadow-md hover:scale-105 text-black ${
                    bookData.medium === medium
                      ? "bg-gradient-to-r from-green-500 to-lime-500 text-white"
                      : "bg-white border border-gray-300 hover:bg-lime-100"
                  }`}
                >
                  {medium}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading || !prefix || !bookData.bookNo}
              className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all transform hover:scale-105 ${
                loading
                  ? "bg-gradient-to-r from-gray-300 to-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-pink-500"
              }`}
            >
              {loading ? "Adding..." : "➕ Add Book"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBook;


// 'use client';

// import { useState } from "react";
// import axios from "axios";

// const AddBook = ({ isDarkMode }) => {
//   const [bookData, setBookData] = useState({
//     bookNo: "",
//     nameOfBook: "",
//     nameOfAuthor: "",
//     medium: "",
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const [prefix, setPrefix] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setBookData({ ...bookData, [name]: value });
//   };

//   const handleMediumSelect = (selectedMedium) => {
//     setBookData({ ...bookData, medium: selectedMedium });
//   };

//   const handlePrefixSelect = (selectedPrefix) => {
//     setPrefix(selectedPrefix);
//     setBookData((prev) => ({ ...prev, bookNo: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       const formattedBookNo = `${prefix}${bookData.bookNo.trim()}`;
//       if (!formattedBookNo.startsWith("P -") && !formattedBookNo.startsWith("S -")) {
//         throw new Error("Invalid book number format. Please select a prefix.");
//       }

//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/addbooks`, {
//         ...bookData,
//         bookNo: formattedBookNo,
//       });

//       if (response.data.success) {
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
//           actionType: "add",
//           details: `New book '${bookData.nameOfBook}' added to the library`,
//         });

//         setSuccess(true);
//         setBookData({ bookNo: "", nameOfBook: "", nameOfAuthor: "", medium: "" });
//         setPrefix("");
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || err.message || "Failed to add the book. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const containerBg = isDarkMode ? "bg-gradient-to-br from-purple-900 via-gray-900 to-indigo-900 text-white" : "bg-gradient-to-br from-pink-100 via-blue-100 to-purple-100 text-gray-800";
//   const inputBg = isDarkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-pink-300";
//   const labelText = isDarkMode ? "text-pink-200" : "text-purple-700";

//   return (
//     <div className={`p-8 rounded-2xl shadow-2xl ${containerBg}`}>
//       <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-pink-400 drop-shadow-md">
//         📚 Add a New Book
//       </h2>

//       {success && <p className="text-green-300 font-semibold mb-4">✅ Book added successfully!</p>}
//       {error && <p className="text-red-300 font-semibold mb-4">⚠ {error}</p>}

//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Prefix Buttons */}
//         <div>
//           <label className={`block mb-2 text-sm font-bold uppercase ${labelText}`}>Choose Prefix</label>
//           <div className="flex gap-4">
//             {["P - ", "S - "].map((pref) => (
//               <button
//                 key={pref}
//                 type="button"
//                 onClick={() => handlePrefixSelect(pref)}
//                 className={`rounded-full px-5 py-2 text-sm font-semibold transition-all border-2 shadow-md ${
//                   prefix === pref
//                     ? "bg-pink-500 text-white border-pink-500 scale-105"
//                     : "bg-white text-gray-700 border-pink-300 hover:bg-pink-100"
//                 }`}
//               >
//                 {pref}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Book Number */}
//         <div>
//           <label className={`block mb-2 text-sm font-bold ${labelText}`}>Book Number</label>
//           <div className="relative">
//             <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">{prefix}</span>
//             <input
//               type="text"
//               name="bookNo"
//               value={bookData.bookNo}
//               onChange={(e) => {
//                 const numericValue = e.target.value.replace(/[^0-9]/g, "");
//                 setBookData({ ...bookData, bookNo: numericValue });
//               }}
//               required
//               disabled={!prefix}
//               placeholder="Enter number"
//               className={`pl-10 w-full py-2 px-4 rounded-xl border ${inputBg} shadow-inner focus:ring-2 focus:ring-pink-400`}
//             />
//           </div>
//         </div>

//         {/* Name of Book */}
//         <div>
//           <label className={`block mb-2 text-sm font-bold ${labelText}`}>Book Title</label>
//           <input
//             type="text"
//             name="nameOfBook"
//             value={bookData.nameOfBook}
//             onChange={handleChange}
//             required
//             className={`w-full py-2 px-4 rounded-xl border ${inputBg} shadow-inner focus:ring-2 focus:ring-blue-300`}
//           />
//         </div>

//         {/* Author */}
//         <div>
//           <label className={`block mb-2 text-sm font-bold ${labelText}`}>Author</label>
//           <input
//             type="text"
//             name="nameOfAuthor"
//             value={bookData.nameOfAuthor}
//             onChange={handleChange}
//             required
//             className={`w-full py-2 px-4 rounded-xl border ${inputBg} shadow-inner focus:ring-2 focus:ring-purple-400`}
//           />
//         </div>

//         {/* Medium Buttons */}
//         <div>
//           <label className={`block mb-2 text-sm font-bold uppercase ${labelText}`}>Medium</label>
//           <div className="flex gap-4">
//             {["Hindi", "English", "Bangla"].map((medium) => (
//               <button
//                 key={medium}
//                 type="button"
//                 onClick={() => handleMediumSelect(medium)}
//                 className={`rounded-full px-5 py-2 text-sm font-semibold border-2 shadow-md transition-all ${
//                   bookData.medium === medium
//                     ? "bg-teal-500 text-white border-teal-500 scale-105"
//                     : "bg-white text-gray-700 border-teal-300 hover:bg-teal-100"
//                 }`}
//               >
//                 {medium}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Submit */}
//         <div>
//           <button
//             type="submit"
//             disabled={loading || !prefix || !bookData.bookNo}
//             className={`w-full py-3 rounded-xl font-semibold text-white text-lg shadow-lg transition-all ${
//               loading
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-purple-500 hover:to-pink-500"
//             }`}
//           >
//             {loading ? "Adding Book..." : "➕ Add Book"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AddBook;
