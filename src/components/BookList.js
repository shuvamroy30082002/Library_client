

// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal";
// import ViewBookDetails from "./ViewBookDetails"; // <-- Import the new component

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
//   const [totalAvailableBooks, setTotalAvailableBooks] = useState(0);
//   const [bookNoToView, setBookNoToView] = useState(null); // NEW

//   useEffect(() => {
//     const fetchBooksAndCounts = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
//           params: { page: currentPage, limit: 20 },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);

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

//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   let filteredBooks = books.filter(
//     (book) =>
//       book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (filter === "P") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("P -"));
//   } else if (filter === "S") {
//     filteredBooks = filteredBooks.filter((book) => book.bookNo.startsWith("S -"));
//   }

//   if (loading) return <p className="text-center text-gray-600 text-lg">Loading books...</p>;
//   if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

//   return (
//     <div className={`p-8 rounded-2xl shadow-xl border ${isDarkMode ? 'bg-[#1e1e2f] text-white border-gray-700' : 'bg-pink-100 text-gray-900 border-gray-200'}`}>
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="🔍 Search by Book No, Title, Author, or Medium"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm ${
//             isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//           }`}
//         />
//       </div>

//       <div className="flex gap-3 mb-6">
//         {["All", "P", "S"].map((type) => (
//           <button
//             key={type}
//             onClick={() => setFilter(type)}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
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

//       <div className="mb-4 text-lg font-semibold space-y-1">
//         <div>📚 Total Available Books: <span className="text-indigo-600 font-bold">{totalAvailableBooks}</span></div>
//         <div>📖 Displaying: <span className="text-indigo-600 font-bold">{filteredBooks.length}</span> books</div>
//       </div>

//       <div className={`overflow-x-auto rounded-lg shadow-sm ${isDarkMode ? 'border border-gray-700' : 'border border-rose-200'}`}>
//         <table className="min-w-full table-auto text-sm">
//           <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-rose-100'} text-left`}>
//             <tr>
//               {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
//                 <th key={col} className="px-6 py-3 font-medium uppercase tracking-wide text-gray-500">{col}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book, index) => (
//                 <tr
//                   key={book._id}
//                   className={`transition ${index % 2 === 0 ? (isDarkMode ? 'bg-gray-800' : 'bg-rose-50') : (isDarkMode ? 'bg-gray-900' : 'bg-rose-100')} hover:${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} ${book.isIssued ? 'opacity-70' : ''}`}
//                 >
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const [prefix, number] = book.bookNo.includes(" - ") ? book.bookNo.split(" - ") : ["", book.bookNo];
//                       return (
//                         <div className="flex items-center gap-2">
//                           <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                             prefix === "P" ? "bg-purple-200 text-purple-800" :
//                             prefix === "S" ? "bg-pink-200 text-pink-800" :
//                             "bg-gray-200 text-gray-800"
//                           }`}>{prefix}</span>
//                           <span className="text-sm font-medium">{number}</span>
//                         </div>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4">{book.nameOfBook}</td>
//                   <td className="px-6 py-4">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4">{book.medium}</td>
//                   <td className="px-6 py-4 flex gap-2 flex-wrap">
//                     <button onClick={() => setSelectedBook(book)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-full text-sm font-medium">Issue</button>
//                     <button onClick={() => setBookToDelete(book) || setIsModalOpen(true)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">Delete</button>
//                     <button onClick={() => setBookNoToView(book.bookNo)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">View</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center px-6 py-6 text-gray-500">No books found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-6">
//         <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300">← Previous</button>
//         <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
//         <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300">Next →</button>
//       </div>

//       {/* View Book Modal */}
//       {bookNoToView && (
//         <ViewBookDetails
//           bookNo={bookNoToView}
//           isDarkMode={isDarkMode}
//           onClose={() => setBookNoToView(null)}
//         />
//       )}

//       {/* Delete Confirmation */}
//       {isModalOpen && (
//         <ConfirmationModal
//           message={`Are you sure you want to delete "${bookToDelete?.nameOfBook}"?`}
//           onConfirm={handleDelete}
//           onCancel={() => setIsModalOpen(false)}
//         />
//       )}

//       {/* Issue Book */}
//       {selectedBook && (
//         <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} isDarkMode={isDarkMode} />
//       )}
//     </div>
//   );
// };

// export default BookList;


// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal";
// import ViewBookDetails from "./ViewBookDetails";

// const BookList = ({ isDarkMode, defaultFilter = "All" }) => {
//   const [books, setBooks] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookToDelete, setBookToDelete] = useState(null);
//   const [filter, setFilter] = useState(defaultFilter);
//   const [totalAvailableBooks, setTotalAvailableBooks] = useState(0);
//   const [bookNoToView, setBookNoToView] = useState(null);

//   useEffect(() => {
//     const fetchBooksAndCounts = async () => {
//       try {
//         setLoading(true);
//         let endpoint = "/api/books/displaybooks"; // All books
//         if (filter === "P") {
//           endpoint = "/api/books/displaybooks/p";
//         } else if (filter === "S") {
//           endpoint = "/api/books/displaybooks/s";
//         }

//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
//           params: { page: currentPage, limit: 20 },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);

//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       } catch (err) {
//         setError("Failed to fetch books or counts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooksAndCounts();
//   }, [currentPage, filter]);

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

//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   const filteredBooks = books.filter(
//     (book) =>
//       book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) return <p className="text-center text-gray-600 text-lg">Loading books...</p>;
//   if (error) return <p className="text-center text-red-500 text-lg">{error}</p>;

//   return (
//     <div className={`p-8 rounded-2xl shadow-xl border ${isDarkMode ? 'bg-[#1e1e2f] text-white border-gray-700' : 'bg-pink-100 text-gray-900 border-gray-200'}`}>
//       <div className="mb-6">
//         <input
//           type="text"
//           placeholder="🔍 Search by Book No, Title, Author, or Medium"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={`w-full px-4 py-3 rounded-xl border text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none shadow-sm ${
//             isDarkMode ? 'bg-gray-800 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'
//           }`}
//         />
//       </div>

//       <div className="flex gap-3 mb-6">
//         {["All", "P", "S"].map((type) => (
//           <button
//             key={type}
//             onClick={() => { setFilter(type); setCurrentPage(1); }}
//             className={`px-4 py-2 rounded-full text-sm font-medium ${
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

//       <div className="mb-4 text-lg font-semibold space-y-1">
//         <div>📚 Total Available Books: <span className="text-indigo-600 font-bold">{totalAvailableBooks}</span></div>
//         <div>📖 Displaying: <span className="text-indigo-600 font-bold">{filteredBooks.length}</span> books</div>
//       </div>

//       <div className={`overflow-x-auto rounded-lg shadow-sm ${isDarkMode ? 'border border-gray-700' : 'border border-rose-200'}`}>
//         <table className="min-w-full table-auto text-sm">
//           <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-rose-100'} text-left`}>
//             <tr>
//               {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
//                 <th key={col} className="px-6 py-3 font-medium uppercase tracking-wide text-gray-500">{col}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book, index) => (
//                 <tr
//                   key={book._id}
//                   className={`transition ${index % 2 === 0 ? (isDarkMode ? 'bg-gray-800' : 'bg-rose-50') : (isDarkMode ? 'bg-gray-900' : 'bg-rose-100')} hover:${isDarkMode ? 'bg-gray-700' : 'bg-rose-200'} ${book.isIssued ? 'opacity-70' : ''}`}
//                 >
//                   <td className="px-6 py-4">
//                     {(() => {
//                       const [prefix, number] = book.bookNo.includes(" - ") ? book.bookNo.split(" - ") : ["", book.bookNo];
//                       return (
//                         <div className="flex items-center gap-2">
//                           <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
//                             prefix === "P" ? "bg-purple-200 text-purple-800" :
//                             prefix === "S" ? "bg-pink-200 text-pink-800" :
//                             "bg-gray-200 text-gray-800"
//                           }`}>{prefix}</span>
//                           <span className="text-sm font-medium">{number}</span>
//                         </div>
//                       );
//                     })()}
//                   </td>
//                   <td className="px-6 py-4">{book.nameOfBook}</td>
//                   <td className="px-6 py-4">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4">{book.medium}</td>
//                   <td className="px-6 py-4 flex gap-2 flex-wrap">
//                     <button onClick={() => setSelectedBook(book)} className="bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1.5 rounded-full text-sm font-medium">Issue</button>
//                     <button onClick={() => { setBookToDelete(book); setIsModalOpen(true); }} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">Delete</button>
//                     <button onClick={() => setBookNoToView(book.bookNo)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1.5 rounded-full text-sm font-medium">View</button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center px-6 py-6 text-gray-500">No books found.</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-6">
//         <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300">← Previous</button>
//         <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
//         <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="px-4 py-2 rounded-full text-sm font-medium border shadow-sm disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300">Next →</button>
//       </div>

//       {/* View Book Modal */}
//       {bookNoToView && (
//         <ViewBookDetails
//           bookNo={bookNoToView}
//           isDarkMode={isDarkMode}
//           onClose={() => setBookNoToView(null)}
//         />
//       )}

//       {/* Delete Confirmation */}
//       {isModalOpen && (
//         <ConfirmationModal
//           message={`Are you sure you want to delete "${bookToDelete?.nameOfBook}"?`}
//           onConfirm={handleDelete}
//           onCancel={() => setIsModalOpen(false)}
//         />
//       )}

//       {/* Issue Book Modal */}
//       {selectedBook && (
//         <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} isDarkMode={isDarkMode} />
//       )}
//     </div>
//   );
// };

// export default BookList;


'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import IssueBook from "./IssueBook";
import ConfirmationModal from "./ConfirmationModal";
import ViewBookDetails from "./ViewBookDetails";

const BookList = ({ isDarkMode, defaultFilter = "All" }) => {
  const [books, setBooks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBook, setSelectedBook] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [filter, setFilter] = useState(defaultFilter);
  const [totalAvailableBooks, setTotalAvailableBooks] = useState(0);
  const [bookNoToView, setBookNoToView] = useState(null);

  useEffect(() => {
    const fetchBooksAndCounts = async () => {
      try {
        setLoading(true);
        let endpoint = "/api/books/displaybooks"; // All books
        if (filter === "P") {
          endpoint = "/api/books/displaybooks/p";
        } else if (filter === "S") {
          endpoint = "/api/books/displaybooks/s";
        }

        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
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
  }, [currentPage, filter]);

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

  const filteredBooks = books.filter(
    (book) =>
      book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.medium.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 text-lg font-bold mt-10">
        <p>{error}</p>
      </div>
    );

  return (
    <div
      className={`min-h-screen p-8 rounded-3xl shadow-2xl transition-all duration-500 ${
        isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-700 text-white" : "bg-gradient-to-br from-pink-100 to-purple-200 text-gray-900"
      }`}
    >
      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="🔍 Search by Book No, Title, Author, or Medium"
          value={searchTerm}
          onChange={handleSearch}
          className={`w-full px-6 py-4 rounded-3xl border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-300 ${
            isDarkMode
              ? "bg-gray-800 text-white placeholder-gray-400 border-gray-600"
              : "bg-white text-gray-800 placeholder-gray-500 border-gray-300"
          }`}
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex gap-4 mb-8 justify-center">
        {["All", "P", "S"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setFilter(type);
              setCurrentPage(1);
            }}
            className={`px-6 py-3 rounded-3xl text-sm font-semibold transition-all duration-300 ${
              filter === type
                ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
                : isDarkMode
                ? "bg-gray-700 text-white hover:bg-gray-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            {type === "All" ? "All Books" : `Books Starting with ${type}`}
          </button>
        ))}
      </div>

      {/* Total Counts */}
      <div className="mb-6 text-xl font-bold space-y-2 text-center">
        <div>
          📚 Total Available Books:{" "}
          <span
            className={`font-extrabold text-transparent bg-clip-text ${
              isDarkMode ? "bg-gradient-to-r from-indigo-400 to-purple-400" : "bg-gradient-to-r from-indigo-600 to-purple-600"
            }`}
          >
            {totalAvailableBooks}
          </span>
        </div>
        <div>
          📖 Displaying:{" "}
          <span
            className={`font-extrabold text-transparent bg-clip-text ${
              isDarkMode ? "bg-gradient-to-r from-green-400 to-teal-400" : "bg-gradient-to-r from-green-600 to-teal-600"
            }`}
          >
            {filteredBooks.length}
          </span>{" "}
          books
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl shadow-2xl">
        <table className="min-w-full table-auto text-sm">
          <thead
            className={`text-left ${
              isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-100 text-gray-800"
            }`}
          >
            <tr>
              {["Book No", "Title", "Author", "Medium", "Actions"].map((col) => (
              <th key={col} className="px-6 py-4 font-bold uppercase tracking-wide">
                {col}
              </th>
            ))}
            </tr>
          </thead>
          <tbody>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book, index) => (
                <tr
                  key={book._id}
                  className={`transition-all duration-300 hover:scale-[1.02] ${
                    index % 2 === 0
                      ? isDarkMode
                        ? "bg-gray-800"
                        : "bg-gray-100"
                      : isDarkMode
                      ? "bg-gray-900"
                      : "bg-gray-200"
                  }`}
                >
                  <td className="px-6 py-4">
                    {(() => {
                      const [prefix, number] = book.bookNo.includes(" - ")
                        ? book.bookNo.split(" - ")
                        : ["", book.bookNo];
                      return (
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2 py-1 text-xs font-semibold rounded-full ${
                              prefix === "P"
                                ? "bg-purple-200 text-purple-800"
                                : prefix === "S"
                                ? "bg-pink-200 text-pink-800"
                                : "bg-gray-200 text-gray-800"
                            }`}
                          >
                            {prefix}
                          </span>
                          <span className="text-sm font-medium">{number}</span>
                        </div>
                      );
                    })()}
                  </td>
                  <td className="px-6 py-4">{book.nameOfBook}</td>
                  <td className="px-6 py-4">{book.nameOfAuthor}</td>
                  <td className="px-6 py-4">{book.medium}</td>
                  <td className="px-6 py-4 flex gap-3">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md"
                    >
                      Issue
                    </button>
                    <button
                      onClick={() => {
                        setBookToDelete(book);
                        setIsModalOpen(true);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md"
                    >
                      Delete
                    </button>
                    <button
                      onClick={() => setBookNoToView(book.bookNo)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center px-6 py-6 text-gray-500">
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
        >
          ← Previous
        </button>
        <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
        >
          Next →
        </button>
      </div>

      {/* View Book Modal */}
      {bookNoToView && (
        <ViewBookDetails
          bookNo={bookNoToView}
          isDarkMode={isDarkMode}
          onClose={() => setBookNoToView(null)}
        />
      )}

      {/* Delete Confirmation Modal */}
      {isModalOpen && (
        <ConfirmationModal
          message={`Are you sure you want to delete "${bookToDelete?.nameOfBook}"?`}
          onConfirm={handleDelete}
          onCancel={() => setIsModalOpen(false)}
        />
      )}

      {/* Issue Book Modal */}
      {selectedBook && (
        <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} isDarkMode={isDarkMode} />
      )}
    </div>
  );
};

export default BookList;

// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal";
// import ViewBookDetails from "./ViewBookDetails";

// const BookList = ({ isDarkMode, defaultFilter = "All" }) => {
//   const [books, setBooks] = useState([]);
//   const [totalPages, setTotalPages] = useState(1);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookToDelete, setBookToDelete] = useState(null);
//   const [filter, setFilter] = useState(defaultFilter);
//   const [totalAvailableBooks, setTotalAvailableBooks] = useState(0);
//   const [bookNoToView, setBookNoToView] = useState(null);

//   useEffect(() => {
//     const fetchBooksAndCounts = async () => {
//       try {
//         setLoading(true);
//         let endpoint = "/api/books/displaybooks"; // All books
//         if (filter === "P") {
//           endpoint = "/api/books/displaybooks/p";
//         } else if (filter === "S") {
//           endpoint = "/api/books/displaybooks/s";
//         }

//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, {
//           params: { page: currentPage, limit: 20 },
//         });
//         setBooks(response.data.books);
//         setTotalPages(response.data.totalPages);

//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       } catch (err) {
//         setError("Failed to fetch books or counts. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBooksAndCounts();
//   }, [currentPage, filter]);

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

//         const availableCountResponse = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/count`);
//         setTotalAvailableBooks(availableCountResponse.data.availableCount);
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   const filteredBooks = books.filter(
//     (book) =>
//       book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading)
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-indigo-500"></div>
//       </div>
//     );
//   if (error)
//     return (
//       <div className="text-center text-red-500 text-lg font-bold mt-10">
//         <p>{error}</p>
//       </div>
//     );

//   return (
//     <div
//       className={`min-h-screen p-8 rounded-3xl shadow-2xl transition-all duration-500 ${
//         isDarkMode ? "bg-gradient-to-br from-gray-900 to-gray-700 text-white" : "bg-gradient-to-br from-pink-100 to-purple-200 text-gray-900"
//       }`}
//     >
//       {/* Search Bar */}
//       <div className="mb-8">
//         <input
//           type="text"
//           placeholder="🔍 Search by Book No, Title, Author, or Medium"
//           value={searchTerm}
//           onChange={handleSearch}
//           className={`w-full px-6 py-4 rounded-3xl border-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-300 ${
//             isDarkMode
//               ? "bg-gray-800 text-white placeholder-gray-400 border-gray-600"
//               : "bg-white text-gray-800 placeholder-gray-500 border-gray-300"
//           }`}
//         />
//       </div>

//       {/* Filter Buttons */}
//       <div className="flex gap-4 mb-8 justify-center">
//         {["All", "P", "S"].map((type) => (
//           <button
//             key={type}
//             onClick={() => {
//               setFilter(type);
//               setCurrentPage(1);
//             }}
//             className={`px-6 py-3 rounded-3xl text-sm font-semibold transition-all duration-300 ${
//               filter === type
//                 ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg"
//                 : isDarkMode
//                 ? "bg-gray-700 text-white hover:bg-gray-600"
//                 : "bg-white text-gray-700 hover:bg-gray-100"
//             }`}
//           >
//             {type === "All" ? "All Books" : `Books Starting with ${type}`}
//           </button>
//         ))}
//       </div>

//       {/* Total Counts */}
//       <div className="mb-6 text-xl font-bold space-y-2 text-center">
//         <div>
//           📚 Total Available Books:{" "}
//           <span
//             className={`font-extrabold text-transparent bg-clip-text ${
//               isDarkMode ? "bg-gradient-to-r from-indigo-400 to-purple-400" : "bg-gradient-to-r from-indigo-600 to-purple-600"
//             }`}
//           >
//             {totalAvailableBooks}
//           </span>
//         </div>
//         <div>
//           📖 Displaying:{" "}
//           <span
//             className={`font-extrabold text-transparent bg-clip-text ${
//               isDarkMode ? "bg-gradient-to-r from-green-400 to-teal-400" : "bg-gradient-to-r from-green-600 to-teal-600"
//             }`}
//           >
//             {filteredBooks.length}
//           </span>{" "}
//           books
//         </div>
//       </div>

//       {/* Flip Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {filteredBooks.length > 0 ? (
//           filteredBooks.map((book) => (
//             <div
//               key={book._id}
//               className="group relative w-full h-64 rounded-3xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.05]"
//             >
//               {/* Front Side */}
//               <div
//                 className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex flex-col items-center justify-center transition-transform duration-500 group-hover:-rotate-y-180"
//               >
//                 <h3 className="text-xl font-bold">{book.nameOfBook}</h3>
//                 <p className="text-sm mt-2">Author: {book.nameOfAuthor}</p>
//               </div>

//               {/* Back Side */}
//               <div
//                 className="absolute inset-0 bg-gray-800 text-white flex flex-col items-center justify-center rotate-y-180 group-hover:rotate-y-0 transition-transform duration-500"
//               >
//                 <p className="text-sm">Medium: {book.medium}</p>
//                 <p className="text-sm">Book No: {book.bookNo}</p>
//                 <div className="flex gap-3 mt-4">
//                   <button
//                     onClick={() => setSelectedBook(book)}
//                     className="bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium"
//                   >
//                     Issue
//                   </button>
//                   <button
//                     onClick={() => {
//                       setBookToDelete(book);
//                       setIsModalOpen(true);
//                     }}
//                     className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium"
//                   >
//                     Delete
//                   </button>
//                   <button
//                     onClick={() => setBookNoToView(book.bookNo)}
//                     className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-medium"
//                   >
//                     View
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-span-full text-center text-gray-500">No books found.</div>
//         )}
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-8">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           ← Previous
//         </button>
//         <span className="text-sm text-gray-600">Page {currentPage} of {totalPages}</span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed bg-gray-200 hover:bg-gray-300"
//         >
//           Next →
//         </button>
//       </div>

//       {/* View Book Modal */}
//       {bookNoToView && (
//         <ViewBookDetails
//           bookNo={bookNoToView}
//           isDarkMode={isDarkMode}
//           onClose={() => setBookNoToView(null)}
//         />
//       )}

//       {/* Delete Confirmation Modal */}
//       {isModalOpen && (
//         <ConfirmationModal
//           message={`Are you sure you want to delete "${bookToDelete?.nameOfBook}"?`}
//           onConfirm={handleDelete}
//           onCancel={() => setIsModalOpen(false)}
//         />
//       )}

//       {/* Issue Book Modal */}
//       {selectedBook && (
//         <IssueBook book={selectedBook} onClose={() => setSelectedBook(null)} isDarkMode={isDarkMode} />
//       )}
//     </div>
//   );
// };

// export default BookList;