// // client/components/Sidebar.js
// 'use client'; // Mark this as a Client Component

// const Sidebar = ({ setActiveComponent }) => {
//   const menuItems = [
//     { name: "Books", value: "books" },
//     { name: "Add Book", value: "add-book" },
//     { name: "book issued", value: "issued" },
//     { name: "Fine Configuration", value: "fine-config" }, // New menu item
//   ];

//   return (
//     <aside className="w-full md:w-64 bg-white shadow-lg p-4 md:p-6">
//       <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-6">Library Management</h2>
//       <nav>
//         {menuItems.map((item) => (
//           <button
//             key={item.value}
//             onClick={() => setActiveComponent(item.value)}
//             className="block w-full py-2 px-4 rounded-md mb-2 text-left text-gray-700 transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white"
//           >
//             {item.name}
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// };

// export default Sidebar;

// client/components/Sidebar.js
'use client';

const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
  const menuItems = [
    { name: "Books", value: "books" },
    { name: "Add Book", value: "add-book" },
    { name: "Book Issued", value: "issued" },
    { name: "Fine Configuration", value: "fine-config" },
    { name: "Activity Log", value: "activity-log" },
  ];

  return (
    <aside className={`w-full md:w-64 bg-white shadow-lg p-4 md:p-6 ${isDarkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
      <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-6 dark:text-indigo-400">
        Library Management
      </h2>
      <nav>
        {menuItems.map((item) => (
          <button
            key={item.value}
            onClick={() => setActiveComponent(item.value)}
            className="block w-full py-2 px-4 rounded-md mb-2 text-left text-gray-700 transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:text-gray-500"
          >
            {item.name}
          </button>
        ))}
      </nav>

      {/* Theme Toggle Button */}
      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm font-medium">
          {isDarkMode ? "Dark Mode" : "Light Mode"}
        </span>
        <button
          onClick={() => setIsDarkMode(!isDarkMode)} // Toggle theme
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isDarkMode ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-yellow-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM10 18a8 8 0 100-16 8 8 0 000 16z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;