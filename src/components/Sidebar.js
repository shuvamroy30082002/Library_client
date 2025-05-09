
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
//       {/* Mobile Menu Button */}
//       <div className="md:hidden fixed top-5 left-5 z-50">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-200"
//         >
//           <Menu className="text-white w-6 h-6" />
//         </button>
//       </div>

//       {/* Overlay for small screen */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed md:static top-0 left-0 h-screen w-64 z-50 transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           ${isDarkMode
//             ? 'bg-gradient-to-br from-[#1e1e2f]/80 to-[#12121c] text-gray-200 border-gray-700'
//             : 'bg-gradient-to-br from-[#fdfaf6] to-[#f2f0ec] text-neutral-900 border-neutral-200'}
//           backdrop-blur-xl border-r shadow-xl px-6 py-8 flex flex-col justify-between
//         `}
//       >
//         {/* Sidebar Content */}
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
//                     className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
//                       ${isDarkMode
//                         ? 'bg-gray-800/60 text-gray-200 hover:bg-indigo-500 hover:text-white'
//                         : 'bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white'}`}
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
//                     className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
//                       ${isDarkMode
//                         ? 'bg-gray-800/60 text-gray-200 hover:bg-purple-500 hover:text-white'
//                         : 'bg-purple-100 text-purple-800 hover:bg-purple-500 hover:text-white'}`}
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

//   const handleLogout = async () => {
//     try {
//       await fetch('/api/auth/logout', { method: 'POST' });
//       window.location.href = '/'; // redirect after logout
//     } catch (err) {
//       console.error('Logout failed', err);
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div className="md:hidden fixed top-5 left-5 z-50">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-pink-500 shadow-lg hover:scale-105 transition-transform duration-200"
//         >
//           <Menu className="text-white w-6 h-6" />
//         </button>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/40 md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar Panel */}
//       <aside
//         className={`
//           fixed md:static top-0 left-0 h-screen w-64 z-50 transition-transform duration-300 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           ${isDarkMode
//             ? 'bg-gradient-to-br from-[#1e1e2f]/80 to-[#12121c] text-gray-200 border-gray-700'
//             : 'bg-gradient-to-br from-[#fdfaf6] to-[#f2f0ec] text-neutral-900 border-neutral-200'}
//           backdrop-blur-xl border-r shadow-xl px-6 py-8 flex flex-col justify-between
//         `}
//       >
//         {/* Header */}
//         <div>
//           <h2 className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 mb-8 tracking-wide">
//             Library Dashboard
//           </h2>

//           {/* Navigation Section */}
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
//                     className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
//                       ${isDarkMode
//                         ? 'bg-gray-800/60 text-gray-200 hover:bg-indigo-500 hover:text-white'
//                         : 'bg-blue-100 text-blue-800 hover:bg-blue-500 hover:text-white'}`}
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
//                     className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all shadow-sm
//                       ${isDarkMode
//                         ? 'bg-gray-800/60 text-gray-200 hover:bg-purple-500 hover:text-white'
//                         : 'bg-purple-100 text-purple-800 hover:bg-purple-500 hover:text-white'}`}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-4 space-y-4">
//           {/* Theme Toggle */}
//           <div className="flex items-center justify-between">
//             <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
//               {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//             </span>
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-105 transition-transform"
//             >
//               {isDarkMode ? (
//                 <Moon className="text-yellow-400 w-5 h-5" />
//               ) : (
//                 <Sun className="text-yellow-500 w-5 h-5" />
//               )}
//             </button>
//           </div>

//           {/* Logout Button */}
//           <div>
//             <button
//               onClick={handleLogout}
//               className="w-full text-center py-2 rounded-lg font-semibold shadow-md transition-all
//                 bg-red-100 text-red-700 hover:bg-red-600 hover:text-white dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-600 dark:hover:text-white"
//             >
//               🚪 Logout
//             </button>
//           </div>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


// 'use client';

// import { useState } from 'react';
// import { Moon, Sun, Menu, LogOut } from 'lucide-react';
// import axios from 'axios';

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

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/logout`);
//       window.location.href = '/login'; // redirect to login page
//     } catch (err) {
//       console.error("Logout failed:", err);
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div className="md:hidden fixed top-5 left-5 z-50">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-pink-500 shadow-xl hover:scale-110 transition-transform duration-300"
//         >
//           <Menu className="text-white w-6 h-6" />
//         </button>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar Panel */}
//       <aside
//         className={`
//           fixed md:static top-0 left-0 h-screen w-72 z-50 transform transition-transform duration-500 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           ${isDarkMode
//             ? 'bg-gradient-to-br from-[#1c1c28] to-[#12121c] text-gray-200'
//             : 'bg-gradient-to-br from-[#f0ebf8] to-[#e6e3ef] text-neutral-900'}
//           border-r border-gray-200 dark:border-gray-700 px-6 py-8 flex flex-col justify-between shadow-2xl
//         `}
//       >
//         {/* Header */}
//         <div>
//           <h2 className="text-3xl font-extrabold tracking-tight text-indigo-600 dark:text-indigo-400 mb-8">
//             📚 MyLibrary
//           </h2>

//           {/* Navigation Groups */}
//           <div className="space-y-8">
//             {/* Book Management */}
//             <div>
//               <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
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
//                       w-full text-left px-4 py-2 rounded-xl font-medium shadow-md transform transition-all
//                       ${isDarkMode
//                         ? 'bg-gray-800/70 text-gray-100 hover:bg-indigo-500 hover:scale-[1.02]'
//                         : 'bg-purple-100 text-purple-900 hover:bg-purple-500 hover:text-white hover:scale-[1.02]'}
//                     `}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             {/* Settings */}
//             <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
//               <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-2">
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
//                       w-full text-left px-4 py-2 rounded-xl font-medium shadow-md transform transition-all
//                       ${isDarkMode
//                         ? 'bg-gray-800/70 text-gray-100 hover:bg-purple-500 hover:scale-[1.02]'
//                         : 'bg-blue-100 text-blue-900 hover:bg-blue-500 hover:text-white hover:scale-[1.02]'}
//                     `}
//                   >
//                     {item.name}
//                   </button>
//                 ))}
//               </nav>
//             </div>
//           </div>
//         </div>

//         {/* Footer Controls */}
//         <div className="space-y-4 mt-10 pt-6 border-t border-gray-300 dark:border-gray-700">
//           {/* Theme Toggle */}
//           <div className="flex items-center justify-between">
//             <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
//               {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//             </span>
//             <button
//               onClick={() => setIsDarkMode(!isDarkMode)}
//               className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
//             >
//               {isDarkMode ? (
//                 <Moon className="text-yellow-300 w-5 h-5" />
//               ) : (
//                 <Sun className="text-yellow-500 w-5 h-5" />
//               )}
//             </button>
//           </div>

//           {/* Logout Button */}
//           <button
//             onClick={handleLogout}
//             className={`
//               w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl font-semibold
//               transition-all shadow-md transform
//               ${isDarkMode
//                 ? 'bg-red-600 hover:bg-red-700 text-white'
//                 : 'bg-red-100 text-red-700 hover:bg-red-600 hover:text-white'}
//             `}
//           >
//             <LogOut className="w-4 h-4" />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;



// 'use client';

// import { useState } from 'react';
// import { Moon, Sun, Menu, LogOut } from 'lucide-react';
// import axios from 'axios';

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

//   const handleLogout = async () => {
//     try {
//       await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`);
//       window.location.href = "/login"; // Redirect after logout
//     } catch (error) {
//       console.error("Logout failed:", error);
//     }
//   };

//   return (
//     <>
//       {/* Mobile Menu Button */}
//       <div className="md:hidden fixed top-5 left-5 z-50">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 to-pink-500 shadow-xl animate-pulse hover:scale-105 transition-transform duration-300"
//         >
//           <Menu className="text-white w-6 h-6" />
//         </button>
//       </div>

//       {/* Overlay */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
//           onClick={() => setIsOpen(false)}
//         />
//       )}

//       {/* Sidebar */}
//       <aside
//         className={`
//           fixed md:static top-0 left-0 h-screen w-72 z-50 transition-all duration-500 ease-in-out
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
//           ${isDarkMode
//             ? 'bg-gradient-to-b from-[#0d0d15] to-[#1a1a2e] text-gray-200'
//             : 'bg-gradient-to-b from-[#f8f4f0] to-[#f1ebe6] text-gray-900'}
//           shadow-2xl border-r border-transparent md:border-r-2 border-opacity-10 px-6 py-8 flex flex-col justify-between
//         `}
//       >
//         <div>
//           {/* Logo */}
//           <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-pink-400 dark:to-purple-400 mb-10 tracking-tight animate-fade-in">
//             📚 LibMaster
//           </h2>

//           {/* Book Management */}
//           <div className="mb-6">
//             <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
//               Book Management
//             </p>
//             <div className="space-y-2">
//               {menuItems.map((item) => (
//                 <button
//                   key={item.value}
//                   onClick={() => {
//                     setActiveComponent(item.value);
//                     setIsOpen(false);
//                   }}
//                   className={`w-full text-left px-5 py-2.5 rounded-lg font-medium transition-all duration-300
//                     bg-opacity-40 hover:bg-opacity-100 transform hover:scale-[1.03] backdrop-blur
//                     ${
//                       isDarkMode
//                         ? 'bg-gray-800 hover:bg-indigo-500 text-gray-100 hover:text-white shadow hover:shadow-indigo-700/50'
//                         : 'bg-purple-100 hover:bg-purple-500 text-purple-800 hover:text-white shadow hover:shadow-purple-500/40'
//                     }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Settings */}
//           <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
//             <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 mt-4">
//               Settings
//             </p>
//             <div className="space-y-2">
//               {settingsItems.map((item) => (
//                 <button
//                   key={item.value}
//                   onClick={() => {
//                     setActiveComponent(item.value);
//                     setIsOpen(false);
//                   }}
//                   className={`w-full text-left px-5 py-2.5 rounded-lg font-medium transition-all duration-300
//                     bg-opacity-40 hover:bg-opacity-100 transform hover:scale-[1.03] backdrop-blur
//                     ${
//                       isDarkMode
//                         ? 'bg-gray-800 hover:bg-fuchsia-500 text-gray-100 hover:text-white shadow hover:shadow-fuchsia-600/50'
//                         : 'bg-fuchsia-100 hover:bg-fuchsia-500 text-fuchsia-800 hover:text-white shadow hover:shadow-fuchsia-500/40'
//                     }`}
//                 >
//                   {item.name}
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Footer: Theme & Logout */}
//         <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-5 flex items-center justify-between">
//           <button
//             onClick={() => setIsDarkMode(!isDarkMode)}
//             className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
//             title="Toggle Theme"
//           >
//             {isDarkMode ? (
//               <Moon className="text-yellow-300 w-5 h-5" />
//             ) : (
//               <Sun className="text-yellow-500 w-5 h-5" />
//             )}
//           </button>
//           <button
//             onClick={handleLogout}
//             className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition duration-300
//               ${
//                 isDarkMode
//                   ? 'bg-red-600 text-white hover:bg-red-700'
//                   : 'bg-red-100 text-red-700 hover:bg-red-500 hover:text-white'
//               }`}
//           >
//             <LogOut className="w-4 h-4" />
//             Logout
//           </button>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;


'use client';

import { useState } from 'react';
import { Moon, Sun, Menu, LogOut } from 'lucide-react';
import axios from 'axios';

const Sidebar = ({ setActiveComponent, isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Books", value: "books" },
    { name: "Add Book", value: "add-book" },
    { name: "Book Issued", value: "issued" },
  ];

  const userItems = [
    { name: "View Users", value: "users" },
    // Add more items here if needed like { name: "Add User", value: "add-user" }
  ];

  const settingsItems = [
    { name: "Fine Configuration", value: "fine-config" },
    { name: "Activity Log", value: "activity-log" },
  ];

  const handleLogout = async () => {
    try {
      await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/logout`);
      window.location.href = "/login";
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-5 left-5 z-50">
        <button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-tr from-fuchsia-600 to-pink-500 shadow-xl animate-pulse hover:scale-105 transition-transform duration-300"
        >
          <Menu className="text-white w-6 h-6" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static top-0 left-0 h-screen w-72 z-50 transition-all duration-500 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          ${isDarkMode
            ? 'bg-gradient-to-b from-[#0d0d15] to-[#1a1a2e] text-gray-200'
            : 'bg-gradient-to-b from-[#f8f4f0] to-[#f1ebe6] text-gray-900'}
          shadow-2xl border-r border-transparent md:border-r-2 border-opacity-10 px-6 py-8 flex flex-col justify-between
        `}
      >
        <div>
          {/* Logo */}
          <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500 dark:from-pink-400 dark:to-purple-400 mb-10 tracking-tight animate-fade-in">
            📚 LibMaster
          </h2>

          {/* Book Management */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              Book Management
            </p>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setActiveComponent(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-2.5 rounded-lg font-medium transition-all duration-300
                    bg-opacity-40 hover:bg-opacity-100 transform hover:scale-[1.03] backdrop-blur
                    ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-indigo-500 text-gray-100 hover:text-white shadow hover:shadow-indigo-700/50'
                        : 'bg-purple-100 hover:bg-purple-500 text-purple-800 hover:text-white shadow hover:shadow-purple-500/40'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Users Section */}
          <div className="mb-6">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
              Users
            </p>
            <div className="space-y-2">
              {userItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setActiveComponent(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-2.5 rounded-lg font-medium transition-all duration-300
                    bg-opacity-40 hover:bg-opacity-100 transform hover:scale-[1.03] backdrop-blur
                    ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-teal-500 text-gray-100 hover:text-white shadow hover:shadow-teal-600/50'
                        : 'bg-teal-100 hover:bg-teal-500 text-teal-800 hover:text-white shadow hover:shadow-teal-500/40'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Settings */}
          <div className="pt-4 border-t border-gray-300 dark:border-gray-700">
            <p className="text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2 mt-4">
              Settings
            </p>
            <div className="space-y-2">
              {settingsItems.map((item) => (
                <button
                  key={item.value}
                  onClick={() => {
                    setActiveComponent(item.value);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-5 py-2.5 rounded-lg font-medium transition-all duration-300
                    bg-opacity-40 hover:bg-opacity-100 transform hover:scale-[1.03] backdrop-blur
                    ${
                      isDarkMode
                        ? 'bg-gray-800 hover:bg-fuchsia-500 text-gray-100 hover:text-white shadow hover:shadow-fuchsia-600/50'
                        : 'bg-fuchsia-100 hover:bg-fuchsia-500 text-fuchsia-800 hover:text-white shadow hover:shadow-fuchsia-500/40'
                    }`}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer: Theme & Logout */}
        <div className="mt-6 border-t border-gray-300 dark:border-gray-700 pt-5 flex items-center justify-between">
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform"
            title="Toggle Theme"
          >
            {isDarkMode ? (
              <Moon className="text-yellow-300 w-5 h-5" />
            ) : (
              <Sun className="text-yellow-500 w-5 h-5" />
            )}
          </button>
          <button
            onClick={handleLogout}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition duration-300
              ${
                isDarkMode
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-red-100 text-red-700 hover:bg-red-500 hover:text-white'
              }`}
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
