// // components/ViewBookDetails.jsx
// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const ViewBookDetails = ({ bookNo, onClose, isDarkMode }) => {
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!bookNo) return;

//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookNo}`);
//         setBook(response.data);
//       } catch (err) {
//         setError("Failed to load book details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [bookNo]);

//   if (!bookNo) return null;

//   return (
//     <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-gray-800 bg-opacity-40'}`}>
//       <div className={`w-full max-w-md mx-auto rounded-lg shadow-lg p-6 relative ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//         <button onClick={onClose} className="absolute top-2 right-2 text-lg font-bold text-red-500 hover:text-red-700">✖</button>
//         {loading ? (
//           <p className="text-center">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500">{error}</p>
//         ) : (
//           <>
//             <h2 className="text-xl font-bold mb-4">📖 Book Details</h2>
//             <div className="space-y-2 text-sm">
//               <p><strong>Book No:</strong> {book.bookNo}</p>
//               <p><strong>Title:</strong> {book.nameOfBook}</p>
//               <p><strong>Author:</strong> {book.nameOfAuthor}</p>
//               <p><strong>Medium:</strong> {book.medium}</p>
//               <p><strong>Issued:</strong> {book.isIssued ? "Yes" : "No"}</p>
//               {/* Add more fields here if needed */}
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewBookDetails;


// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import BookEditForm from './BookEditForm';
// import { motion } from 'framer-motion';

// const ViewBookDetails = ({ bookNo, onClose, isDarkMode }) => {
//   const [book, setBook] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!bookNo) return;

//     const fetchBook = async () => {
//       try {
//         const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookNo}`);
//         setBook(response.data);
//       } catch (err) {
//         setError("Failed to load book details.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBook();
//   }, [bookNo]);

//   if (!bookNo) return null;

//   return (
//     <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isDarkMode ? 'bg-black bg-opacity-70' : 'bg-gray-800 bg-opacity-40'}`}>
//       <div className={`w-full max-w-4xl mx-auto rounded-lg shadow-lg p-4 relative flex flex-col md:flex-row gap-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
//         <button onClick={onClose} className="absolute top-2 right-2 text-lg font-bold text-red-500 hover:text-red-700">✖</button>
        
//         {loading ? (
//           <p className="text-center w-full">Loading...</p>
//         ) : error ? (
//           <p className="text-center text-red-500 w-full">{error}</p>
//         ) : (
//           <>
//             <motion.div 
//               className="w-full md:w-1/2 space-y-2 text-sm"
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//             >
//               <h2 className="text-xl font-bold mb-4">📖 Book Details</h2>
//               <p><strong>Book No:</strong> {book.bookNo}</p>
//               <p><strong>Title:</strong> {book.nameOfBook}</p>
//               <p><strong>Author:</strong> {book.nameOfAuthor}</p>
//               <p><strong>Medium:</strong> {book.medium}</p>
//               <p><strong>Issued:</strong> {book.isIssued ? "Yes" : "No"}</p>
//             </motion.div>
//             <BookEditForm book={book} onUpdated={(updatedBook) => setBook(updatedBook)} />
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewBookDetails;


// components/ViewBookDetails.jsx
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import EditBookForm from './BookEditForm';
import { motion, AnimatePresence } from 'framer-motion';

const ViewBookDetails = ({ bookNo, onClose, isDarkMode }) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookNo) return;

    const fetchBook = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${bookNo}`);
        setBook(response.data);
      } catch (err) {
        setError("Failed to load book details.");
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [bookNo]);

  const handleBookUpdated = (updatedBook) => {
    setBook(updatedBook);
    setEditing(false);
  };

  if (!bookNo) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${isDarkMode ? 'bg-black bg-opacity-80' : 'bg-gray-800 bg-opacity-50'}`}>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full max-w-5xl mx-auto rounded-2xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-red-500 hover:text-red-700 transition"
        >
          ✖
        </button>

        {loading ? (
          <div className="w-full p-8 text-center text-lg">Loading...</div>
        ) : error ? (
          <div className="w-full p-8 text-center text-red-500">{error}</div>
        ) : (
          <>
            {/* Left Panel: Book Details */}
            <div className="w-full md:w-1/2 p-6 md:p-8 border-r border-gray-300 dark:border-gray-700 space-y-4 bg-gradient-to-br from-indigo-50 via-white to-purple-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
              <h2 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-300">📘 Book Details</h2>
              <div className="space-y-3 text-base font-medium text-indigo-300">
                <p><span className="font-semibold text-indigo-500">Book No:</span> {book.bookNo}</p>
                <p><span className="font-semibold text-indigo-500">Title:</span> {book.nameOfBook}</p>
                <p><span className="font-semibold text-indigo-500">Author:</span> {book.nameOfAuthor}</p>
                <p><span className="font-semibold text-indigo-500">Medium:</span> {book.medium}</p>
                <p><span className="font-semibold text-indigo-500">Issued:</span> {book.isIssued ? "✅ Yes" : "❌ No"}</p>
              </div>
              <button
                onClick={() => setEditing(!editing)}
                className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-200"
              >
                {editing ? 'Cancel Edit' : 'Edit Details'}
              </button>
            </div>

            {/* Right Panel: Edit Form */}
            <AnimatePresence>
              {editing && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="w-full md:w-1/2 p-6 md:p-8 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900"
                >
                  <h2 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-300">✏️ Edit Book</h2>
                  <EditBookForm book={book} onSuccess={handleBookUpdated} />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default ViewBookDetails;
