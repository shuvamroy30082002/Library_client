

// // client/components/IssuedBooks.js
// 'use client'; // Mark this as a Client Component

// import { useEffect, useState } from "react";
// import axios from "axios";

// const IssuedBooks = ({ isDarkMode }) => {
//   const [issuedBooks, setIssuedBooks] = useState([]); // State to store issued books
//   const [loading, setLoading] = useState(true); // State to track loading status
//   const [error, setError] = useState(null); // State to handle errors

//   useEffect(() => {
//     const fetchIssuedBooks = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/issued`);
//         setIssuedBooks(response.data.issuedBooks);
//       } catch (err) {
//         setError("Failed to fetch issued books. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchIssuedBooks();
//   }, []);

//   const handleMarkReturned = async (id, bookName) => {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/mark-returned/${id}`);
//       if (response.data.success) {
//         // Log the action
//         await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
//           actionType: "return",
//           details: `Book '${bookName}' marked as returned`,
//         });

//         // Update the local state to reflect the change
//         setIssuedBooks((prevBooks) => prevBooks.filter((book) => book._id !== id));
//         alert("Book marked as returned successfully!");
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to mark the book as returned.");
//     }
//   };

//   if (loading) {
//     return <p className="text-center text-gray-700">Loading issued books...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <div className={`p-4 sm:p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
//       <h1 className={`text-xl sm:text-2xl font-bold ${
//         isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
//       } mb-4 sm:mb-6`}>Issued Books</h1>

//       {/* Table Container */}
//       <div className="overflow-x-auto">
//         <table className={`min-w-full divide-y divide-${isDarkMode ? 'gray-600' : 'gray-200'} text-sm sm:text-base`}>
//           <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
//             <tr>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Book No
//               </th>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Name of Book
//               </th>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Issue Date
//               </th>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Return Date
//               </th>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Days Passed (After Return Date)
//               </th>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Fine (₹)
//               </th>
//               <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               } uppercase tracking-wider`}>
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className={`divide-y divide-${isDarkMode ? 'gray-600' : 'gray-200'}`}>
//             {issuedBooks.length > 0 ? (
//               issuedBooks.map((book) => (
//                 <tr key={book._id} className={book.isIssued ? "bg-yellow-100" : ""}>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-900'
//                   }`}>{book.bookNo}</td>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-500'
//                   }`}>{book.nameOfBook}</td>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-500'
//                   }`}>{new Date(book.dateOfIssue).toLocaleDateString()}</td>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-500'
//                   }`}>{new Date(book.dateOfReturn).toLocaleDateString()}</td>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-500'
//                   }`}>
//                     {book.daysPassed - 1} day{book.daysPassed > 1 ? "s" : ""}
//                   </td>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-500'
//                   }`}>₹{book.fine}</td>
//                   <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
//                     isDarkMode ? 'text-gray-300' : 'text-gray-500'
//                   }`}>
//                     {!book.isReturned && (
//                       <button
//                         onClick={() => handleMarkReturned(book._id, book.nameOfBook)}
//                         className={`py-1 px-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//                           isDarkMode ? 'bg-green-500 text-white' : 'bg-green-500 text-black'
//                         }`}
//                       >
//                         Mark as Returned
//                       </button>
//                     )}
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="7" className={`px-3 sm:px-6 py-4 text-center ${
//                   isDarkMode ? 'text-gray-300' : 'text-gray-700'
//                 }`}>
//                   No issued books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Fallback Layout for Very Small Screens */}
//       <div className="block sm:hidden mt-4">
//         {issuedBooks.length > 0 ? (
//           issuedBooks.map((book) => (
//             <div
//               key={book._id}
//               className={`bg-gray-50 p-4 mb-4 rounded-lg shadow-sm border border-${isDarkMode ? 'gray-600' : 'gray-200'} ${
//                 isDarkMode ? 'bg-gray-700 text-white' : ''
//               }`}
//             >
//               <p className={`text-sm font-medium ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-700'
//               }`}>Book No: {book.bookNo}</p>
//               <p className={`text-sm ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               }`}>Name: {book.nameOfBook}</p>
//               <p className={`text-sm ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               }`}>
//                 Issue Date: {new Date(book.dateOfIssue).toLocaleDateString()}
//               </p>
//               <p className={`text-sm ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               }`}>
//                 Return Date: {new Date(book.dateOfReturn).toLocaleDateString()}
//               </p>
//               <p className={`text-sm ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               }`}>
//                 Days Passed (After Return Date): {book.daysPassed} day{book.daysPassed > 1 ? "s" : ""}
//               </p>
//               <p className={`text-sm ${
//                 isDarkMode ? 'text-gray-300' : 'text-gray-500'
//               }`}>Fine (₹): ₹{book.fine}</p>
//               {!book.isReturned && (
//                 <button
//                   onClick={() => handleMarkReturned(book._id, book.nameOfBook)}
//                   className={`mt-2 py-1 px-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
//                     isDarkMode ? 'bg-green-500 text-white' : 'bg-green-500 text-black'
//                   }`}
//                 >
//                   Mark as Returned
//                 </button>
//               )}
//             </div>
//           ))
//         ) : (
//           <p className={`text-center ${
//             isDarkMode ? 'text-gray-300' : 'text-gray-700'
//           }`}>No issued books found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default IssuedBooks;

'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const IssuedBooks = ({ isDarkMode }) => {
  const [issuedBooks, setIssuedBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssuedBooks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/issued`);
        setIssuedBooks(response.data.issuedBooks);
      } catch (err) {
        setError("Failed to fetch issued books.");
      } finally {
        setLoading(false);
      }
    };

    fetchIssuedBooks();
  }, []);

  const handleMarkReturned = async (id, bookName) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/mark-returned/${id}`);
      if (response.data.success) {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
          actionType: "return",
          details: `Book '${bookName}' marked as returned`,
        });

        setIssuedBooks((prev) => prev.filter((book) => book._id !== id));
        alert("Book marked as returned.");
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to mark as returned.");
    }
  };

  const wrapperClass = `rounded-2xl p-6 shadow-xl transition-all ${
    isDarkMode
      ? 'bg-gradient-to-br from-gray-800 to-gray-900 text-white'
      : 'bg-gradient-to-br from-[#f0f4ff] to-[#ffffff] text-gray-800'
  }`;

  const tableHeader = `px-4 py-3 text-left text-sm font-semibold tracking-wide ${
    isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-indigo-50 text-indigo-900'
  }`;

  const cellClass = `px-4 py-3 ${
    isDarkMode ? 'text-gray-200' : 'text-gray-700'
  }`;

  const headingClass = `text-3xl font-bold mb-6 tracking-tight ${
    isDarkMode ? 'text-indigo-300' : 'text-indigo-700'
  }`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={wrapperClass}
    >
      <h1 className={headingClass}>Issued Books</h1>

      {loading ? (
        <p className="text-center text-gray-400 animate-pulse">Loading books...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : issuedBooks.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">No issued books.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
            <thead>
              <tr>
                {["Book No", "Name of Book","Person Issued", "Issue Date", "Return Date", "Days Passed", "Fine (₹)", "Actions"].map((title) => (
                  <th key={title} className={tableHeader}>{title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {issuedBooks.map((book) => (
                <tr key={book._id} className={`${isDarkMode ? 'odd:bg-gray-800' : 'odd:bg-white even:bg-indigo-50'}`}>
                  <td className={cellClass}>{book.bookNo}</td>
                  <td className={cellClass}>{book.nameOfBook}</td>
                  <td className={cellClass}>{book.issuedTo}</td>
                  <td className={cellClass}>{new Date(book.dateOfIssue).toLocaleDateString()}</td>
                  <td className={cellClass}>{new Date(book.dateOfReturn).toLocaleDateString()}</td>
                  <td className={cellClass}>{book.daysPassed - 1} day{book.daysPassed > 1 ? 's' : ''}</td>
                  <td className={cellClass}>₹{book.fine}</td>
                  <td className={cellClass}>
                    {book.isReturned ? (
                      <span className="text-green-500 flex items-center">
                        <FaCheckCircle className="mr-1" /> Returned
                      </span>
                    ) : (
                      <button
                        onClick={() => handleMarkReturned(book._id, book.nameOfBook)}
                        className="bg-emerald-500 text-white px-4 py-1.5 rounded-md shadow hover:bg-emerald-600 transition focus:outline-none focus:ring-2 focus:ring-emerald-300"
                      >
                        Mark as Returned
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </motion.div>
  );
};

export default IssuedBooks;
