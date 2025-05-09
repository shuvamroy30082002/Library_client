




// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal";

// const BookList = ({ isDarkMode }) => {
//   const [books, setBooks] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookToDelete, setBookToDelete] = useState(null);
//   const [filter, setFilter] = useState("All"); // NEW

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
//           params: { page: currentPage, limit: 6 },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);
//       } catch (err) {
//         setError("Failed to fetch books. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, [currentPage]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/delete/${bookToDelete._id}`);
//       if (response.data.success) {
//         setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookToDelete._id));
//         setIsModalOpen(false);
//         setBookToDelete(null);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   // Apply search filter
//   let filteredBooks = books.filter((book) =>
//     book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply prefix filter
//   if (filter === "P") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("P -"));
//   } else if (filter === "S") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("S -"));
//   }

//   if (loading) {
//     return <p className="text-center text-gray-600 text-lg">Loading books...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500 text-lg">{error}</p>;
//   }

//   return (
//     <div className={`p-8 rounded-2xl shadow-xl border transition-colors duration-300 ${
//       isDarkMode ? 'bg-[#1e1e2f] text-white border-gray-700' : 'bg-pink-100 text-gray-900 border-gray-200'
//     }`}>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="🔍 Search by Book No, Title, Author, or Medium"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm transition ${
//             isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//           }`}
//         />
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex gap-3 mb-6">
//         {["All", "P", "S"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               filter === type
//                 ? 'bg-indigo-600 text-white'
//                 : isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
//             }`}
//           >
//             {type === "All" ? "All Books" : `Books Starting with ${type}`}
//           </button>
//         ))}
//       </div>

//       {/* Total Count */}
//       <div className="mb-4 text-lg font-semibold">
//         📚 Displaying: <span className="text-indigo-600 font-bold">{filteredBooks.length}</span> books
//       </div>

//       {/* Table */}
//       <div className={`overflow-x-auto rounded-lg shadow-sm ${isDarkMode ? 'border border-gray-700' : 'border border-rose-200'}`}>
//         <table className="min-w-full table-auto text-sm">
//           <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-rose-100'} text-left`}>
//             <tr>
//               {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
//                 <th key={col} className="px-6 py-3 font-medium uppercase tracking-wide text-gray-500">
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book, index) => (
//                 <tr
//                   key={book._id}
//                   className={`transition ${
//                     index % 2 === 0
//                       ? isDarkMode ? 'bg-gray-800' : 'bg-rose-50'
//                       : isDarkMode ? 'bg-gray-900' : 'bg-rose-100'
//                   } hover:${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} ${
//                     book.isIssued ? 'opacity-70' : ''
//                   }`}
//                 >
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const [prefix, number] = book.bookNo.includes(" - ")
//                         ? book.bookNo.split(" - ")
//                         : ["", book.bookNo];
//                       return (
//                         <div className="flex items-center gap-2">
//                           <span
//                             className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                               prefix === "P"
//                                 ? "bg-purple-200 text-purple-800"
//                                 : prefix === "S"
//                                 ? "bg-pink-200 text-pink-800"
//                                 : "bg-gray-200 text-gray-800"
//                             }`}
//                           >
//                             {prefix}
//                           </span>
//                           <span className="text-sm font-medium">{number}</span>
//                         </div>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4">{book.nameOfBook}</td>
//                   <td className="px-6 py-4">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4">{book.medium}</td>
//                   <td className="px-6 py-4 flex gap-3">
//                     <button
//                       onClick={() => setSelectedBook(book)}
//                       className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
//                     >
//                       Issue
//                     </button>
//                     <button
//                       onClick={() => {
//                         setBookToDelete(book);
//                         setIsModalOpen(true);
//                       }}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center px-6 py-6 text-gray-500">
//                   No books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           ← Previous
//         </button>
//         <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Modals */}
//       {selectedBook && (
//         <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} />
//       )}
//       <ConfirmationModal
//         isOpen={isModalOpen}
//         onClose={() => {
//           setIsModalOpen(false);
//           setBookToDelete(null);
//         }}
//         onConfirm={handleDelete}
//         message={`Are you sure you want to delete the book "${bookToDelete?.nameOfBook}"?`}
//       />
//     </div>
//   );
// };

// export default BookList;


// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal";

// const BookList = ({ isDarkMode }) => {
//   const [books, setBooks] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookToDelete, setBookToDelete] = useState(null);
//   const [filter, setFilter] = useState("All");
//   const [totalAvailableBooks, setTotalAvailableBooks] = useState(0); // New

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
//           params: { page: currentPage, limit: 6 },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);

//         // Calculate total available (not issued) books
//         const availableBooksCount = response.data.books.filter((book) => !book.isIssued).length;
//         setTotalAvailableBooks(availableBooksCount);

//       } catch (err) {
//         setError("Failed to fetch books. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooks();
//   }, [currentPage]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/delete/${bookToDelete._id}`);
//       if (response.data.success) {
//         setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookToDelete._id));
//         setIsModalOpen(false);
//         setBookToDelete(null);
//         // Recalculate total available books
//         setTotalAvailableBooks((prev) => prev - (bookToDelete.isIssued ? 0 : 1));
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   // Apply search filter
//   let filteredBooks = books.filter((book) =>
//     book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply prefix filter
//   if (filter === "P") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("P -"));
//   } else if (filter === "S") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("S -"));
//   }

//   if (loading) {
//     return <p className="text-center text-gray-600 text-lg">Loading books...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500 text-lg">{error}</p>;
//   }

//   return (
//     <div className={`p-8 rounded-2xl shadow-xl border transition-colors duration-300 ${
//       isDarkMode ? 'bg-[#1e1e2f] text-white border-gray-700' : 'bg-pink-100 text-gray-900 border-gray-200'
//     }`}>

//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="🔍 Search by Book No, Title, Author, or Medium"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm transition ${
//             isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//           }`}
//         />
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex gap-3 mb-6">
//         {["All", "P", "S"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               filter === type
//                 ? 'bg-indigo-600 text-white'
//                 : isDarkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-700'
//             }`}
//           >
//             {type === "All" ? "All Books" : `Books Starting with ${type}`}
//           </button>
//         ))}
//       </div>

//       {/* Total Counts */}
//       <div className="mb-4 text-lg font-semibold space-y-1">
//         <div>📘 Total Available Books: <span className="text-indigo-600 font-bold">{totalAvailableBooks}</span></div>
//         <div>📚 Displaying (after filters): <span className="text-indigo-600 font-bold">{filteredBooks.length}</span> books</div>
//       </div>

//       {/* Table */}
//       <div className={`overflow-x-auto rounded-lg shadow-sm ${isDarkMode ? 'border border-gray-700' : 'border border-rose-200'}`}>
//         <table className="min-w-full table-auto text-sm">
//           <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-rose-100'} text-left`}>
//             <tr>
//               {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
//                 <th key={col} className="px-6 py-3 font-medium uppercase tracking-wide text-gray-500">
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book, index) => (
//                 <tr
//                   key={book._id}
//                   className={`transition ${
//                     index % 2 === 0
//                       ? isDarkMode ? 'bg-gray-800' : 'bg-rose-50'
//                       : isDarkMode ? 'bg-gray-900' : 'bg-rose-100'
//                   } hover:${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} ${
//                     book.isIssued ? 'opacity-70' : ''
//                   }`}
//                 >
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const [prefix, number] = book.bookNo.includes(" - ")
//                         ? book.bookNo.split(" - ")
//                         : ["", book.bookNo];
//                       return (
//                         <div className="flex items-center gap-2">
//                           <span
//                             className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                               prefix === "P"
//                                 ? "bg-purple-200 text-purple-800"
//                                 : prefix === "S"
//                                 ? "bg-pink-200 text-pink-800"
//                                 : "bg-gray-200 text-gray-800"
//                             }`}
//                           >
//                             {prefix}
//                           </span>
//                           <span className="text-sm font-medium">{number}</span>
//                         </div>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4">{book.nameOfBook}</td>
//                   <td className="px-6 py-4">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4">{book.medium}</td>
//                   <td className="px-6 py-4 flex gap-3">
//                     <button
//                       onClick={() => setSelectedBook(book)}
//                       className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
//                     >
//                       Issue
//                     </button>
//                     <button
//                       onClick={() => {
//                         setBookToDelete(book);
//                         setIsModalOpen(true);
//                       }}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center px-6 py-6 text-gray-500">
//                   No books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           ← Previous
//         </button>
//         <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Modals */}
//       {selectedBook && (
//         <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} />
//       )}
//       <ConfirmationModal
//         isOpen={isModalOpen}
//         onClose={() => {
//           setIsModalOpen(false);
//           setBookToDelete(null);
//         }}
//         onConfirm={handleDelete}
//         message={`Are you sure you want to delete the book "${bookToDelete?.nameOfBook}"?`}
//       />
//     </div>
//   );
// };

// export default BookList;


// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal";

// const BookList = ({ isDarkMode }) => {
//   const [books, setBooks] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookToDelete, setBookToDelete] = useState(null);
//   const [filter, setFilter] = useState("All");
//   const [totalAvailableBooks, setTotalAvailableBooks] = useState(0); // Total available books count

//   useEffect(() => {
//     const fetchBooksAndCounts = async () => {
//       try {
//         // Fetch paginated books
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
//           params: { page: currentPage, limit: 20 },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);

//         // Fetch total available books count using the /available/count API
//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       } catch (err) {
//         setError("Failed to fetch books or counts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooksAndCounts();
//   }, [currentPage]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/delete/${bookToDelete._id}`);
//       if (response.data.success) {
//         setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookToDelete._id));
//         setIsModalOpen(false);
//         setBookToDelete(null);

//         // Recalculate total available books after deletion
//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   // Apply search filter
//   let filteredBooks = books.filter(
//     (book) =>
//       book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Apply prefix filter
//   if (filter === "P") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("P -"));
//   } else if (filter === "S") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("S -"));
//   }

//   if (loading) {
//     return <p className="text-center text-gray-600 text-lg">Loading books...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500 text-lg">{error}</p>;
//   }

//   return (
//     <div
//       className={`p-8 rounded-2xl shadow-xl border transition-colors duration-300 ${
//         isDarkMode ? 'bg-[#1e1e2f] text-white border-gray-700' : 'bg-pink-100 text-gray-900 border-gray-200'
//       }`}
//     >
//       {/* Search Bar */}
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="🔍 Search by Book No, Title, Author, or Medium"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm transition ${
//             isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//           }`}
//         />
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex gap-3 mb-6">
//         {["All", "P", "S"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-4 py-2 rounded-full text-sm font-medium transition ${
//               filter === type
//                 ? 'bg-indigo-600 text-white'
//                 : isDarkMode
//                 ? 'bg-gray-700 text-white'
//                 : 'bg-white text-gray-700'
//             }`}
//           >
//             {type === "All" ? "All Books" : `Books Starting with ${type}`}
//           </button>
//         ))}
//       </div>

//       {/* Total Counts */}
//       <div className="mb-4 text-lg font-semibold space-y-1">
//         <div>
//           📚 Total Available Books (Not Issued):{" "}
//           <span className="text-indigo-600 font-bold">{totalAvailableBooks}</span>
//         </div>
//         <div>
//           📖 Displaying (after filters):{" "}
//           <span className="text-indigo-600 font-bold">{filteredBooks.length}</span> books
//         </div>
//       </div>

//       {/* Table */}
//       <div
//         className={`overflow-x-auto rounded-lg shadow-sm ${
//           isDarkMode ? 'border border-gray-700' : 'border border-rose-200'
//         }`}
//       >
//         <table className="min-w-full table-auto text-sm">
//           <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-rose-100'} text-left`}>
//             <tr>
//               {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
//                 <th
//                   key={col}
//                   className="px-6 py-3 font-medium uppercase tracking-wide text-gray-500"
//                 >
//                   {col}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book, index) => (
//                 <tr
//                   key={book._id}
//                   className={`transition ${
//                     index % 2 === 0
//                       ? isDarkMode
//                         ? 'bg-gray-800'
//                         : 'bg-rose-50'
//                       : isDarkMode
//                       ? 'bg-gray-900'
//                       : 'bg-rose-100'
//                   } hover:${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} ${
//                     book.isIssued ? 'opacity-70' : ''
//                   }`}
//                 >
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const [prefix, number] = book.bookNo.includes(" - ")
//                         ? book.bookNo.split(" - ")
//                         : ["", book.bookNo];
//                       return (
//                         <div className="flex items-center gap-2">
//                           <span
//                             className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                               prefix === "P"
//                                 ? "bg-purple-200 text-purple-800"
//                                 : prefix === "S"
//                                 ? "bg-pink-200 text-pink-800"
//                                 : "bg-gray-200 text-gray-800"
//                             }`}
//                           >
//                             {prefix}
//                           </span>
//                           <span className="text-sm font-medium">{number}</span>
//                         </div>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4">{book.nameOfBook}</td>
//                   <td className="px-6 py-4">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4">{book.medium}</td>
//                   <td className="px-6 py-4 flex gap-3">
//                     <button
//                       onClick={() => setSelectedBook(book)}
//                       className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
//                     >
//                       Issue
//                     </button>
//                     <button
//                       onClick={() => {
//                         setBookToDelete(book);
//                         setIsModalOpen(true);
//                       }}
//                       className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center px-6 py-6 text-gray-500">
//                   No books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-6">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           ← Previous
//         </button>
//         <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           Next →
//         </button>
//       </div>

//       {/* Modals */}
//       {selectedBook && (
//         <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} />
//       )}
//       <ConfirmationModal
//         isOpen={isModalOpen}
//         onClose={() => {
//           setIsModalOpen(false);
//           setBookToDelete(null);
//         }}
//         onConfirm={handleDelete}
//         message={`Are you sure you want to delete the book "${bookToDelete?.nameOfBook}"?`}
//       />
//     </div>
//   );
// };

// export default BookList;

'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import IssueBook from "./IssueBook";
import ConfirmationModal from "./ConfirmationModal";
import ViewBookDetails from "./ViewBookDetails"; // <-- Import the new component

const BookList = ({ isDarkMode }) => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [filter, setFilter] = useState("All");
  const [totalAvailableBooks, setTotalAvailableBooks] = useState(0);
  const [bookNoToView, setBookNoToView] = useState(null); // NEW

  useEffect(() => {
    const fetchBooksAndCounts = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
          params: { page: currentPage, limit: 20 },
        });
        setBooks(response.data.books);
        setTotalPages(response.data.totalPages);

        const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
        setTotalAvailableBooks(availableCountResponse.data.availableCount);
      } catch (err) {
        setError("Failed to fetch books or counts. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooksAndCounts();
  }, [currentPage]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/delete/${bookToDelete._id}`);
      if (response.data.success) {
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookToDelete._id));
        setIsModalOpen(false);
        setBookToDelete(null);

        const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
        setTotalAvailableBooks(availableCountResponse.data.availableCount);
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete the book.");
    }
  };

  let filteredBooks = books.filter(
    (book) =>
      book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.medium.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (filter === "P") {
    filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("P -"));
  } else if (filter === "S") {
    filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("S -"));
  }

  if (loading) return <p className="text-center text-gray-600 text-lg">Loading books...</p>;
  if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className={`p-8 rounded-2xl shadow-xl border ${isDarkMode ? 'bg-[#1e1e2f] text-white border-gray-700' : 'bg-pink-100 text-gray-900 border-gray-200'}`}>
      <div className="mb-6">
        <input
          type="text"
          placeholder="🔍 Search by Book No, Title, Author, or Medium"
          value={searchTerm}
          onChange={handleSearch}
          className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm ${
            isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
          }`}
        />
      </div>

      <div className="flex gap-3 mb-6">
        {["All", "P", "S"].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              filter === type
                ? 'bg-indigo-600 text-white'
                : isDarkMode
                ? 'bg-gray-700 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {type === "All" ? "All Books" : `Books Starting with ${type}`}
          </button>
        ))}
      </div>

      <div className="mb-4 text-lg font-semibold space-y-1">
        <div>📚 Total Available Books: <span className="text-indigo-600 font-bold">{totalAvailableBooks}</span></div>
        <div>📖 Displaying: <span className="text-indigo-600 font-bold">{filteredBooks.length}</span> books</div>
      </div>

      <div className={`overflow-x-auto rounded-lg shadow-sm ${isDarkMode ? 'border border-gray-700' : 'border border-rose-200'}`}>
        <table className="min-w-full table-auto text-sm">
          <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-rose-100'} text-left`}>
            <tr>
              {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
                <th key={col} className="px-6 py-3 font-medium uppercase tracking-wide text-gray-500">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr
                  key={book._id}
                  className={`transition ${index % 2 === 0 ? (isDarkMode ? 'bg-gray-800' : 'bg-rose-50') : (isDarkMode ? 'bg-gray-900' : 'bg-rose-100')} hover:${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} ${book.isIssued ? 'opacity-70' : ''}`}
                >
                  <td className="px-6 py-4">
                    {(() => {
                      const [prefix, number] = book.bookNo.includes(" - ") ? book.bookNo.split(" - ") : ["", book.bookNo];
                      return (
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                            prefix === "P" ? "bg-purple-200 text-purple-800" :
                            prefix === "S" ? "bg-pink-200 text-pink-800" :
                            "bg-gray-200 text-gray-800"
                          }`}>{prefix}</span>
                          <span className="text-sm font-medium">{number}</span>
                        </div>
                      );
                    })()}
                  </td>
                  <td className="px-6 py-4">{book.nameOfBook}</td>
                  <td className="px-6 py-4">{book.nameOfAuthor}</td>
                  <td className="px-6 py-4">{book.medium}</td>
                  <td className="px-6 py-4 flex gap-2 flex-wrap">
                    <button onClick={() => setSelectedBook(book)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-full text-sm font-medium">Issue</button>
                    <button onClick={() => setBookToDelete(book) || setIsModalOpen(true)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">Delete</button>
                    <button onClick={() => setBookNoToView(book.bookNo)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">View</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-6 py-6 text-gray-500">No books found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300">← Previous</button>
        <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300">Next →</button>
      </div>

      {/* View Book Modal */}
      {bookNoToView && (
        <ViewBookDetails
          bookNo={bookNoToView}
          isDarkMode={isDarkMode}
          onClose={() => setBookNoToView(null)}
        />
      )}

      {/* Delete Confirmation */}
      {isModalOpen && (
        <ConfirmationModal
          message={`Are you sure you want to delete "${bookToDelete?.nameOfBook}"?`}
          onConfirm={handleDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      {/* Issue Book */}
      {selectedBook && (
        <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

export default BookList;
