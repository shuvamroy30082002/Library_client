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

// // client/components/Sidebar.js
// 'use client';

// const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
//   const menuItems = [
//     { name: "Books", value: "books" },
//     { name: "Add Book", value: "add-book" },
//     { name: "Book Issued", value: "issued" },
//     { name: "Fine Configuration", value: "fine-config" },
//     { name: "Activity Log", value: "activity-log" },
//   ];

//   return (
//     <aside className={`w-full md:w-64 bg-white shadow-lg p-4 md:p-6 ${isDarkMode ? 'dark:bg-gray-800 dark:text-white' : ''}`}>
//       <h2 className="text-lg md:text-xl font-bold text-indigo-700 mb-6 dark:text-indigo-400">
//         Library Management
//       </h2>
//       <nav>
//         {menuItems.map((item) => (
//           <button
//             key={item.value}
//             onClick={() => setActiveComponent(item.value)}
//             className="block w-full py-2 px-4 rounded-md mb-2 text-left text-gray-700 transition duration-300 ease-in-out hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 dark:text-gray-500"
//           >
//             {item.name}
//           </button>
//         ))}
//       </nav>

//       {/* Theme Toggle Button */}
//       <div className="mt-4 flex items-center justify-between">
//         <span className="text-sm font-medium">
//           {isDarkMode ? "Dark Mode" : "Light Mode"}
//         </span>
//         <button
//           onClick={() => setIsDarkMode(!isDarkMode)} // Toggle theme
//           className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition duration-300 ease-in-out hover:bg-gray-300 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//         >
//           {isDarkMode ? (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-yellow-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//             </svg>
//           ) : (
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5 text-yellow-500"
//               viewBox="0 0 20 20"
//               fill="currentColor"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707-.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707a1 1 0 001.414 0zM10 18a8 8 0 100-16 8 8 0 000 16z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           )}
//         </button>
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// 'use client';

// import { useState } from 'react';

// const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false); // for mobile toggle

//   const menuItems = [
//     { name: "Books", value: "books" },
//     { name: "Add Book", value: "add-book" },
//     { name: "Book Issued", value: "issued" },
//     { name: "Fine Configuration", value: "fine-config" },
//     { name: "Activity Log", value: "activity-log" },
//   ];

//   return (
//     <>
//       {/* Mobile Sidebar Toggle Button */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`p-2 rounded-md transition ${
//             isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'
//           } shadow-md focus:outline-none`}
//           aria-label="Toggle Sidebar"
//         >
//           ☰
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`fixed md:static top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ease-in-out transform 
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}
//           shadow-lg p-6`}
//       >
//         <h2
//           className={`text-xl font-bold mb-6 ${
//             isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
//           }`}
//         >
//           Library Management
//         </h2>

//         {/* Navigation Links */}
//         <nav>
//           {menuItems.map((item) => (
//             <button
//               key={item.value}
//               onClick={() => {
//                 setActiveComponent(item.value);
//                 setIsOpen(false); // close on mobile
//               }}
//               className={`block w-full py-2 px-4 rounded-md mb-2 text-left transition duration-200
//                 ${
//                   isDarkMode
//                     ? 'text-gray-300 hover:bg-indigo-600 hover:text-white'
//                     : 'text-gray-700 hover:bg-indigo-100 hover:text-indigo-700'
//                 }`}
//             >
//               {item.name}
//             </button>
//           ))}
//         </nav>

//         {/* Theme Toggle */}
//         <div className="mt-6 flex items-center justify-between">
//           <span
//             className={`text-sm font-medium ${
//               isDarkMode ? 'text-gray-400' : 'text-gray-600'
//             }`}
//           >
//             {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//           </span>
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className={`p-2 rounded-full transition ${
//               isDarkMode
//                 ? 'bg-gray-700 hover:bg-gray-600'
//                 : 'bg-gray-200 hover:bg-gray-300'
//             }`}
//             aria-label="Toggle Dark Mode"
//           >
//             {isDarkMode ? (
//               <svg
//                 className="h-5 w-5 text-yellow-400"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
//               </svg>
//             ) : (
//               <svg
//                 className="h-5 w-5 text-yellow-500"
//                 viewBox="0 0 20 20"
//                 fill="currentColor"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414z"
//                   clipRule="evenodd"
//                 />
//               </svg>
//             )}
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


// 'use client';

// import { useState } from 'react';
// import { Moon, Sun, Menu } from 'lucide-react'; // Lucide icons (install via `npm i lucide-react`)

// const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: "Books", value: "books" },
//     { name: "Add Book", value: "add-book" },
//     { name: "Book Issued", value: "issued" },
//   ];

//   const settingsItems = [
//     { name: "Fine Configuration", value: "fine-config" },
//     { name: "Activity Log", value: "activity-log" },
//   ];

//   const toggleClass = isDarkMode ? 'dark' : '';

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className={`p-2 rounded-md shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white`}
//         >
//           <Menu size={22} />
//         </button>
//       </div>

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed md:static top-0 left-0 h-full w-64 z-40 transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           bg-gradient-to-br from-white/80 to-gray-100 dark:from-[#1e1e2f]/80 dark:to-[#12121c]
//           backdrop-blur-xl border-r border-gray-200 dark:border-gray-700
//           shadow-xl px-6 py-8 flex flex-col justify-between
//         `}
//       >
//         <div>
//           <h2 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8 tracking-wide">
//             Library Dashboard
//           </h2>

//           {/* Navigation */}
//           <div className="space-y-6">
//             <div>
//               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
//                 Book Management
//               </p>
//               <nav className="space-y-2">
//                 {menuItems.map((item) => (
//                   <button
//                     key={item.value}
//                     onClick={() => {
//                       setActiveComponent(item.value);
//                       setIsOpen(false);
//                     }}
//                     className={`
//                       w-full text-left px-4 py-2 rounded-lg font-medium
//                       bg-white dark:bg-gray-800/60 text-gray-700 dark:text-gray-200
//                       hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500 transition-all
//                       shadow-sm dark:shadow-none
//                     `}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
//               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
//                 Settings
//               </p>
//               <nav className="space-y-2">
//                 {settingsItems.map((item) => (
//                   <button
//                     key={item.value}
//                     onClick={() => {
//                       setActiveComponent(item.value);
//                       setIsOpen(false);
//                     }}
//                     className={`
//                       w-full text-left px-4 py-2 rounded-lg font-medium
//                       bg-white dark:bg-gray-800/60 text-gray-700 dark:text-gray-200
//                       hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500 transition-all
//                       shadow-sm dark:shadow-none
//                     `}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Theme Toggle */}
//         <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 flex items-center justify-between">
//           <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
//             {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//           </span>
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
//           >
//             {isDarkMode ? (
//               <Moon className="text-yellow-400 w-5 h-5" />
//             ) : (
//               <Sun className="text-yellow-500 w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


// 'use client';

// import { useState } from 'react';
// import { Moon, Sun, Menu } from 'lucide-react';

// const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const menuItems = [
//     { name: "Books", value: "books" },
//     { name: "Add Book", value: "add-book" },
//     { name: "Book Issued", value: "issued" },
//   ];

//   const settingsItems = [
//     { name: "Fine Configuration", value: "fine-config" },
//     { name: "Activity Log", value: "activity-log" },
//   ];

//   return (
//     <>
//       {/* Mobile Toggle Button */}
//       <div className="md:hidden fixed top-4 left-4 z-50">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="p-2 rounded-md shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
//         >
//           <Menu size={22} />
//         </button>
//       </div>

//       {/* Sidebar */}
//       {/* <aside
//         className={`
//           fixed md:static top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           bg-gradient-to-br from-white/80 to-gray-100 dark:from-[#1e1e2f]/80 dark:to-[#12121c]
//           backdrop-blur-xl border-r border-gray-200 dark:border-gray-700
//           shadow-xl px-6 py-8 flex flex-col justify-between
//         `}
//       > */}

// <aside
//   className={`
//     fixed md:static top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ease-in-out
//     ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//     ${isDarkMode
//       ? 'bg-gradient-to-br from-[#1e1e2f]/80 to-[#12121c] text-gray-200 border-gray-700'
//       : 'bg-gradient-to-br from-white to-gray-100 text-gray-800 border-gray-200'}
//     backdrop-blur-xl border-r shadow-xl px-6 py-8 flex flex-col justify-between
//   `}
// >
//         <div>
//           <h2 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8 tracking-wide">
//             Library Dashboard
//           </h2>

//           {/* Navigation */}
//           <div className="space-y-6">
//             <div>
//               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
//                 Book Management
//               </p>
//               <nav className="space-y-2">
//                 {menuItems.map((item) => (
//                   <button
//                     key={item.value}
//                     onClick={() => {
//                       setActiveComponent(item.value);
//                       setIsOpen(false);
//                     }}
//                     className="
//                       w-full text-left px-4 py-2 rounded-lg font-medium
//                       bg-white dark:bg-gray-800/60 text-gray-700 dark:text-gray-200
//                       hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-500
//                       transition-all shadow-sm dark:shadow-none
//                     "
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
//               <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
//                 Settings
//               </p>
//               <nav className="space-y-2">
//                 {settingsItems.map((item) => (
//                   <button
//                     key={item.value}
//                     onClick={() => {
//                       setActiveComponent(item.value);
//                       setIsOpen(false);
//                     }}
//                     className="
//                       w-full text-left px-4 py-2 rounded-lg font-medium
//                       bg-white dark:bg-gray-800/60 text-gray-700 dark:text-gray-200
//                       hover:bg-purple-600 hover:text-white dark:hover:bg-purple-500
//                       transition-all shadow-sm dark:shadow-none
//                     "
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Theme Toggle */}
//         <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 flex items-center justify-between">
//           <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
//             {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//           </span>
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
//           >
//             {isDarkMode ? (
//               <Moon className="text-yellow-400 w-5 h-5" />
//             ) : (
//               <Sun className="text-yellow-500 w-5 h-5" />
//             )}
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


'use client';

import { useState } from 'react';
import { Moon, Sun, Menu } from 'lucide-react';

const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Books", value: "books" },
    { name: "Add Book", value: "add-book" },
    { name: "Book Issued", value: "issued" },
  ];

  const settingsItems = [
    { name: "Fine Configuration", value: "fine-config" },
    { name: "Activity Log", value: "activity-log" },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-md shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          ${isDarkMode
            ? 'bg-gradient-to-br from-[#1e1e2f]/80 to-[#12121c] text-gray-200 border-gray-700'
            : 'bg-gradient-to-br from-[#fdfaf6] to-[#f2f0ec] text-neutral-900 border-neutral-200'}
          backdrop-blur-xl border-r shadow-xl px-6 py-8 flex flex-col justify-between
        `}
      >
        <div>
          <h2 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8 tracking-wide">
            Library Dashboard
          </h2>

          {/* Navigation */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                Book Management
              </p>
              <nav className="space-y-2">
                {menuItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setActiveComponent(item.value);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
                      ${isDarkMode
                        ? 'bg-gray-800/60 text-gray-200 hover:bg-indigo-500 hover:text-white'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white'}
                    `}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2 uppercase tracking-widest">
                Settings
              </p>
              <nav className="space-y-2">
                {settingsItems.map((item) => (
                  <button
                    key={item.value}
                    onClick={() => {
                      setActiveComponent(item.value);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
                      ${isDarkMode
                        ? 'bg-gray-800/60 text-gray-200 hover:bg-purple-500 hover:text-white'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-500 hover:text-white'}
                    `}
                  >
                    {item.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 flex items-center justify-between">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
            {isDarkMode ? 'Dark Mode' : 'Light Mode'}
          </span>
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
          >
            {isDarkMode ? (
              <Moon className="text-yellow-400 w-5 h-5" />
            ) : (
              <Sun className="text-yellow-500 w-5 h-5" />
            )}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
