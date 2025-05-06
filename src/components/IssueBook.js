// // client/components/IssueBook.js
// 'use client'; // Mark this as a Client Component

// import { useState } from "react";
// import axios from "axios";

// const IssueBook = ({ book, onClose }) => {
//   const [formData, setFormData] = useState({
//     bookNo: book.bookNo,
//     nameOfBook: book.nameOfBook,
//     dateOfIssue: "",
//     dateOfReturn: "",
//     noOfDays: 0,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const calculateNoOfDays = () => {
//     if (!formData.dateOfIssue || !formData.dateOfReturn) return 0;
//     const d1 = new Date(formData.dateOfIssue);
//     const d2 = new Date(formData.dateOfReturn);
//     const diffTime = Math.abs(d2 - d1);
//     return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
//   };

//   const handleSubmit = async () => {
//     try {
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/issue`, {
//         ...formData,
//         noOfDays: calculateNoOfDays(),
//       });

//       if (response.data.success) {
//         alert("Book issued successfully!");
//         onClose(); // Close the modal after successful submission
//       }
//     } catch (err) {
//       const errorMessage = err.response?.data?.message || "Failed to issue the book.";
//       alert(errorMessage); // Display the error message
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Issue Book</h2>
//         <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
//           <div>
//             <label htmlFor="nameOfBook" className="block text-sm font-medium text-gray-700">
//               Name of Book
//             </label>
//             <input
//               type="text"
//               id="nameOfBook"
//               value={formData.nameOfBook}
//               readOnly
//               className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label htmlFor="dateOfIssue" className="block text-sm font-medium text-gray-700">
//               Date of Issue
//             </label>
//             <input
//               type="date"
//               id="dateOfIssue"
//               name="dateOfIssue"
//               value={formData.dateOfIssue}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label htmlFor="dateOfReturn" className="block text-sm font-medium text-gray-700">
//               Date of Return
//             </label>
//             <input
//               type="date"
//               id="dateOfReturn"
//               name="dateOfReturn"
//               value={formData.dateOfReturn}
//               onChange={handleChange}
//               required
//               className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div>
//             <label htmlFor="noOfDays" className="block text-sm font-medium text-gray-700">
//               No. of Days
//             </label>
//             <input
//               type="text"
//               id="noOfDays"
//               value={calculateNoOfDays()}
//               readOnly
//               className="mt-1 block w-full px-3 py-2 border  text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//           </div>
//           <div className="flex justify-end space-x-2">
//             <button
//               type="button"
//               onClick={onClose}
//               className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
//             >
//               Cancel
//             </button>
//             <button
//               type="button"
//               onClick={handleSubmit}
//               className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default IssueBook;


// client/components/IssueBook.js
'use client'; // Mark this as a Client Component

import { useState } from "react";
import axios from "axios";

const IssueBook = ({ book, onClose }) => {
  const [formData, setFormData] = useState({
    bookNo: book.bookNo,
    nameOfBook: book.nameOfBook,
    dateOfIssue: "",
    dateOfReturn: "",
    noOfDays: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const calculateNoOfDays = () => {
    if (!formData.dateOfIssue || !formData.dateOfReturn) return 0;
    const d1 = new Date(formData.dateOfIssue);
    const d2 = new Date(formData.dateOfReturn);
    const diffTime = Math.abs(d2 - d1);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Difference in days
  };

  const handleSubmit = async () => {
    try {
      // Send a POST request to issue the book
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/books/issue`, {
        ...formData,
        noOfDays: calculateNoOfDays(),
      });

      if (response.data.success) {
        // Log the action
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/log/New-Log`, {
          actionType: "issue",
          details: `Book '${book.nameOfBook}' issued with return date ${formData.dateOfReturn}`,
        });

        alert("Book issued successfully!");
        onClose(); // Close the modal after successful submission
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || "Failed to issue the book.";
      alert(errorMessage); // Display the error message
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Issue Book</h2>
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label htmlFor="nameOfBook" className="block text-sm font-medium text-gray-700">
              Name of Book
            </label>
            <input
              type="text"
              id="nameOfBook"
              value={formData.nameOfBook}
              readOnly
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="dateOfIssue" className="block text-sm font-medium text-gray-700">
              Date of Issue
            </label>
            <input
              type="date"
              id="dateOfIssue"
              name="dateOfIssue"
              value={formData.dateOfIssue}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="dateOfReturn" className="block text-sm font-medium text-gray-700">
              Date of Return
            </label>
            <input
              type="date"
              id="dateOfReturn"
              name="dateOfReturn"
              value={formData.dateOfReturn}
              onChange={handleChange}
              required
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="noOfDays" className="block text-sm font-medium text-gray-700">
              No. of Days
            </label>
            <input
              type="text"
              id="noOfDays"
              value={calculateNoOfDays()}
              readOnly
              className="mt-1 block w-full px-3 py-2 border text-gray-700 border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-700 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IssueBook;