// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';

// const BookEditForm = ({ book, onUpdated }) => {
//   const [formData, setFormData] = useState(book);
//   const [updating, setUpdating] = useState(false);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setUpdating(true);
//     try {
//       const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${formData.bookNo}`, formData);
//       setMessage("Updated successfully!");
//       onUpdated(response.data);
//     } catch (err) {
//       setMessage("Update failed.");
//     } finally {
//       setUpdating(false);
//     }
//   };

//   return (
//     <motion.div 
//       className="w-full md:w-1/2 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
//       initial={{ x: 50, opacity: 0 }}
//       animate={{ x: 0, opacity: 1 }}
//     >
//       <h3 className="text-lg font-semibold mb-4">✏️ Edit Book</h3>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block text-sm font-medium">Title</label>
//           <input type="text" name="nameOfBook" value={formData.nameOfBook} onChange={handleChange}
//             className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border" />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Author</label>
//           <input type="text" name="nameOfAuthor" value={formData.nameOfAuthor} onChange={handleChange}
//             className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border" />
//         </div>
//         <div>
//           <label className="block text-sm font-medium">Medium</label>
//           <input type="text" name="medium" value={formData.medium} onChange={handleChange}
//             className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border" />
//         </div>
//         <div className="flex items-center">
//           <input type="checkbox" name="isIssued" checked={formData.isIssued} onChange={handleChange} />
//           <label className="ml-2">Issued</label>
//         </div>
//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" disabled={updating}>
//           {updating ? 'Updating...' : 'Update'}
//         </button>
//         {message && <p className="text-sm mt-2">{message}</p>}
//       </form>
//     </motion.div>
//   );
// };

// export default BookEditForm;


// components/EditBookForm.jsx
'use client';

import { useState } from 'react';
import axios from 'axios';

const EditBookForm = ({ book, onSuccess }) => {
  const [form, setForm] = useState({
    nameOfBook: book.nameOfBook,
    nameOfAuthor: book.nameOfAuthor,
    medium: book.medium,
    isIssued: book.isIssued,
  });

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const response = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/api/books/${book.bookNo}`, form);
      onSuccess(response.data);
    } catch (err) {
      setError("Failed to update book. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-sm font-medium">
      <div>
        <label className="block mb-1 text-violet-400">Title</label>
        <input
          type="text"
          name="nameOfBook"
          value={form.nameOfBook}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border text-violet-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 text-violet-400">Author</label>
        <input
          type="text"
          name="nameOfAuthor"
          value={form.nameOfAuthor}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border text-violet-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div>
        <label className="block mb-1 text-violet-400">Medium</label>
        <input
          type="text"
          name="medium"
          value={form.medium}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded-lg border text-violet-300 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="flex items-center space-x-2 text-violet-400">
        <input
          type="checkbox"
          name="isIssued"
          checked={form.isIssued}
          onChange={handleChange}
          className="accent-indigo-600"
        />
        <label className="text-sm">Is Issued?</label>
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        disabled={saving}
        className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-200"
      >
        {saving ? 'Updating...' : 'Update Book'}
      </button>
    </form>
  );
};

export default EditBookForm;
