
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
//       <aside
//         className={`
//           fixed md:static top-0 left-0 h-screen w-64 z-40 transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           ${isDarkMode
//             ? 'bg-gradient-to-br from-[#1e1e2f]/80 to-[#12121c] text-gray-200 border-gray-700'
//             : 'bg-gradient-to-br from-[#fdfaf6] to-[#f2f0ec] text-neutral-900 border-neutral-200'}
//           backdrop-blur-xl border-r shadow-xl px-6 py-8 flex flex-col justify-between
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
//                       w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
//                       ${isDarkMode
//                         ? 'bg-gray-800/60 text-gray-200 hover:bg-indigo-500 hover:text-white'
//                         : 'bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white'}
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
//                       w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
//                       ${isDarkMode
//                         ? 'bg-gray-800/60 text-gray-200 hover:bg-purple-500 hover:text-white'
//                         : 'bg-purple-100 text-purple-800 hover:bg-purple-500 hover:text-white'}
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
//           <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
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
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-200"
        >
          <Menu className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Overlay for small screen */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-64 z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          ${isDarkMode
            ? 'bg-gradient-to-br from-[#1e1e2f]/80 to-[#12121c] text-gray-200 border-gray-700'
            : 'bg-gradient-to-br from-[#fdfaf6] to-[#f2f0ec] text-neutral-900 border-neutral-200'}
          backdrop-blur-xl border-r shadow-xl px-6 py-8 flex flex-col justify-between
        `}
      >
        {/* Sidebar Content */}
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
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
                      ${isDarkMode
                        ? 'bg-gray-800/60 text-gray-200 hover:bg-indigo-500 hover:text-white'
                        : 'bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white'}`}
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
                    className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
                      ${isDarkMode
                        ? 'bg-gray-800/60 text-gray-200 hover:bg-purple-500 hover:text-white'
                        : 'bg-purple-100 text-purple-800 hover:bg-purple-500 hover:text-white'}`}
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
