

// // client/components/BookList.js
// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";

// const BookList = () => {
//   const [books, setBooks] = useState([]); // State to store the list of books
//   const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
//   const [currentPage, setCurrentPage] = useState(1); // Current page
//   const [loading, setLoading] = useState(true); // State to track loading status
//   const [error, setError] = useState(null); // State to handle errors
//   const [searchTerm, setSearchTerm] = useState(""); // State for search input
//   const [selectedBook, setSelectedBook] = useState(null); // State to manage the issue modal

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
//           params: { page: currentPage, limit: 7 }, // Fetch 6 books per page
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
//   }, [currentPage, searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   const filteredBooks = books.filter((book) =>
//     book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return <p className="text-center text-gray-700">Loading books...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search by Book No, Title, Author, or Medium"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="w-full px-3 py-2 mb-4 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Book No
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Author
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Medium
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book) => (
//                 <tr key={book._id} className={book.isIssued ? "bg-yellow-100" : ""}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {book.bookNo}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.nameOfBook}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.medium}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                     <button
//                       onClick={() => setSelectedBook(book)}
//                       className="py-1 px-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Issue Book
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-gray-700">
//                   No books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="py-2 px-4 border border-gray-300 rounded-md text-black bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="py-2 px-4 border border-gray-300 text-black rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>

//       {/* IssueBook Modal */}
//       {selectedBook && (
//         <IssueBook
//           book={selectedBook}
//           onClose={() => setSelectedBook(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default BookList;

// // client/components/BookList.js
// 'use client';

// import { useEffect, useState } from "react";
// import axios from "axios";
// import IssueBook from "./IssueBook";
// import ConfirmationModal from "./ConfirmationModal"; // Import the ConfirmationModal

// const BookList = () => {
//   const [books, setBooks] = useState([]); // State to store the list of books
//   const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
//   const [currentPage, setCurrentPage] = useState(1); // Current page
//   const [loading, setLoading] = useState(true); // State to track loading status
//   const [error, setError] = useState(null); // State to handle errors
//   const [searchTerm, setSearchTerm] = useState(""); // State for search input
//   const [selectedBook, setSelectedBook] = useState(null); // State to manage the issue modal

//   // State for confirmation modal
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [bookToDelete, setBookToDelete] = useState(null);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
//           params: { page: currentPage, limit: 7 }, // Fetch 7 books per page
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
//   }, [currentPage, searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1); // Reset to the first page when searching
//   };

//   const handleDelete = async () => {
//     try {
//       const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/delete/${bookToDelete._id}`);
//       if (response.data.success) {
//         // Remove the deleted book from the local state
//         setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookToDelete._id));
//         setIsModalOpen(false); // Close the modal
//         setBookToDelete(null); // Reset the book to delete
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to delete the book.");
//     }
//   };

//   const filteredBooks = books.filter((book) =>
//     book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.medium.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   if (loading) {
//     return <p className="text-center text-gray-700">Loading books...</p>;
//   }

//   if (error) {
//     return <p className="text-center text-red-500">{error}</p>;
//   }

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md relative">
//       {/* Search Input */}
//       <input
//         type="text"
//         placeholder="Search by Book No, Title, Author, or Medium"
//         value={searchTerm}
//         onChange={handleSearch}
//         className="w-full px-3 py-2 mb-4 border border-gray-300 text-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//       />

//       {/* Display Total Available Books */}
//       <div className="mb-4">
//         <p className="text-lg font-medium text-gray-700">
//           Total Available Books:{" "}
//           <span className="text-indigo-600 font-bold">
//             {books.filter((book) => !book.isIssued).length}
//           </span>
//         </p>
//       </div>

//       {/* Table */}
//       <div className="overflow-x-auto">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-gray-50">
//             <tr>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Book No
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Title
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Author
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Medium
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-gray-200">
//             {filteredBooks.length > 0 ? (
//               filteredBooks.map((book) => (
//                 <tr key={book._id} className={book.isIssued ? "bg-yellow-100" : ""}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                     {book.bookNo}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.nameOfBook}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.nameOfAuthor}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{book.medium}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
//                     <button
//                       onClick={() => setSelectedBook(book)}
//                       className="py-1 px-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Issue Book
//                     </button>
//                     <button
//                       onClick={() => {
//                         setBookToDelete(book);
//                         setIsModalOpen(true);
//                       }}
//                       className="py-1 px-2 bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="px-6 py-4 text-center text-gray-700">
//                   No books found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-between items-center mt-4">
//         <button
//           onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//           disabled={currentPage === 1}
//           className="py-2 px-4 border border-gray-300 rounded-md text-black bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//         >
//           Previous
//         </button>
//         <span className="text-gray-700">
//           Page {currentPage} of {totalPages}
//         </span>
//         <button
//           onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//           disabled={currentPage === totalPages}
//           className="py-2 px-4 border border-gray-300 text-black rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
//         >
//           Next
//         </button>
//       </div>

//       {/* IssueBook Modal */}
//       {selectedBook && (
//         <IssueBook
//           book={selectedBook}
//           onClose={() => setSelectedBook(null)}
//         />
//       )}

//       {/* Confirmation Modal */}
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

// client/components/BookList.js
'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import IssueBook from "./IssueBook";
import ConfirmationModal from "./ConfirmationModal"; // Import the ConfirmationModal

const BookList = ({ isDarkMode }) => {
  const [books, setBooks] = useState([]); // State to store the list of books
  const [totalPages, setTotalPages] = useState(1); // Total pages for pagination
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors
  const [searchTerm, setSearchTerm] = useState(""); // State for search input
  const [selectedBook, setSelectedBook] = useState(null); // State to manage the issue modal

  // State for confirmation modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/displaybooks`, {
          params: { page: currentPage, limit: 6 }, // Fetch 6 books per page
        });
        setBooks(response.data.books);
        setTotalPages(response.data.totalPages);
      } catch (err) {
        setError("Failed to fetch books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [currentPage, searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to the first page when searching
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/api/books/delete/${bookToDelete._id}`);
      if (response.data.success) {
        // Remove the deleted book from the local state
        setBooks((prevBooks) => prevBooks.filter((book) => book._id !== bookToDelete._id));
        setIsModalOpen(false); // Close the modal
        setBookToDelete(null); // Reset the book to delete
      }
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete the book.");
    }
  };

  const filteredBooks = books.filter((book) =>
    book.bookNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.nameOfBook.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.nameOfAuthor.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.medium.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p className="text-center text-gray-700">Loading books...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className={`p-6 rounded-lg shadow-md relative ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Book No, Title, Author, or Medium"
        value={searchTerm}
        onChange={handleSearch}
        className={`w-full px-3 py-2 mb-4 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm ${
          isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-700 border-gray-300'
        }`}
      />

      {/* Display Total Available Books */}
      <div className="mb-4">
        <p className="text-lg font-medium">
          Total Available Books:{" "}
          <span className="font-bold">
            {books.filter((book) => !book.isIssued).length}
          </span>
        </p>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className={`min-w-full divide-y ${isDarkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
          <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <tr>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Book No
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Title
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Author
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Medium
              </th>
              <th className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y ${isDarkMode ? 'divide-gray-600' : 'divide-gray-200'}`}>
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <tr key={book._id} className={book.isIssued ? "bg-yellow-100" : ""}>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-900'
                  }`}>
                    {book.bookNo}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {book.nameOfBook}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {book.nameOfAuthor}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {book.medium}
                  </td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm space-x-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    <button
                      onClick={() => setSelectedBook(book)}
                      className={`py-1 px-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isDarkMode ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'
                      }`}
                    >
                      Issue Book
                    </button>
                    <button
                      onClick={() => {
                        setBookToDelete(book);
                        setIsModalOpen(true);
                      }}
                      className={`py-1 px-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isDarkMode ? 'bg-red-500 text-white' : 'bg-red-600 text-white'
                      }`}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className={`px-6 py-4 text-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  No books found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`py-2 px-4 border rounded-md ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'
          }`}
        >
          Previous
        </button>
        <span className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`py-2 px-4 border rounded-md ${
            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-black'
          }`}
        >
          Next
        </button>
      </div>

      {/* IssueBook Modal */}
      {selectedBook && (
        <IssueBook
          book={selectedBook}
          onClose={() => setSelectedBook(null)}
        />
      )}

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setBookToDelete(null);
        }}
        onConfirm={handleDelete}
        message={`Are you sure you want to delete the book "${bookToDelete?.nameOfBook}"?`}
      />
    </div>
  );
};

export default BookList;