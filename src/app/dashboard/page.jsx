// // client/pages/dashboard/page.jsx
// 'use client'; // Mark this as a Client Component

// import { useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import BookList from "../../components/BookList";
// import AddBook from "../../components/AddBook";
// import Profile from "../../components/Profile";
// import Settings from "../../components/Settings";
// import IssuedBooks from "../../components/IssuedBooks";
// import FineConfigForm from "../../components/FineConfigForm"; // Import the FineConfigForm component

// export default function DashboardPage() {
//   const [activeComponent, setActiveComponent] = useState("books");

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
//       {/* Sidebar */}
//       <Sidebar setActiveComponent={setActiveComponent} />

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:p-8">
//         <h1 className="text-xl md:text-2xl font-bold text-indigo-700 mb-4 md:mb-6">
//           {activeComponent === "books"
//             ? "Book List"
//             : activeComponent === "add-book"
//             ? "Add New Book"
//             : activeComponent === "profile"
//             ? "Profile"
//             : activeComponent === "settings"
//             ? "Settings"
//             : activeComponent === "issued"
//             ? "Issued Books"
//             : "Fine Configuration"}
//         </h1>

//         {/* Render Active Component */}
//         {activeComponent === "books" && <BookList />}
//         {activeComponent === "add-book" && <AddBook />}
//         {activeComponent === "profile" && <Profile />}
//         {activeComponent === "settings" && <Settings />}
//         {activeComponent === "issued" && <IssuedBooks />}
//         {activeComponent === "fine-config" && <FineConfigForm />} {/* Render FineConfigForm */}
//       </div>
//     </div>
//   );
// }

// // client/pages/dashboard/page.jsx
// 'use client'; // Mark this as a Client Component

// import { useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import BookList from "../../components/BookList";
// import AddBook from "../../components/AddBook";
// import Profile from "../../components/Profile";
// import Settings from "../../components/Settings";
// import IssuedBooks from "../../components/IssuedBooks";
// import FineConfigForm from "../../components/FineConfigForm"; // Import the FineConfigForm component

// export default function DashboardPage() {
//   const [activeComponent, setActiveComponent] = useState("books");
//   const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

//   return (
//     <div className={`flex flex-col md:flex-row min-h-screen ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
//       {/* Sidebar */}
//       <Sidebar
//         setActiveComponent={setActiveComponent}
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode} // Pass the theme state and setter to Sidebar
//       />

//       {/* Main Content */}
//       <div className="flex-1 p-4 md:p-8">
//         <h1 className={`text-xl md:text-2xl font-bold ${
//           isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
//         } mb-4 md:mb-6`}>
//           {activeComponent === "books"
//             ? "Book List"
//             : activeComponent === "add-book"
//             ? "Add New Book"
//             : activeComponent === "profile"
//             ? "Profile"
//             : activeComponent === "settings"
//             ? "Settings"
//             : activeComponent === "issued"
//             ? "Issued Books"
//             : "Fine Configuration"}
//         </h1>

//         {/* Render Active Component */}
//         {activeComponent === "books" && <BookList isDarkMode={isDarkMode} />} {/* Pass isDarkMode to BookList */}
//         {activeComponent === "add-book" && <AddBook isDarkMode={isDarkMode} />}
//         {activeComponent === "profile" && <Profile />}
//         {activeComponent === "settings" && <Settings />}
//         {activeComponent === "issued" && <IssuedBooks isDarkMode={isDarkMode} />}
//         {activeComponent === "fine-config" && <FineConfigForm isDarkMode={isDarkMode}  />} {/* Render FineConfigForm */}
//       </div>
//     </div>
//   );
// }


// client/pages/dashboard/page.jsx
'use client';

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import BookList from "../../components/BookList";
import AddBook from "../../components/AddBook";
import Profile from "../../components/Profile";
import Settings from "../../components/Settings";
import IssuedBooks from "../../components/IssuedBooks";
import FineConfigForm from "../../components/FineConfigForm";
import ActivityLog from "../../components/ActivityLog"; // Import the ActivityLog component

export default function DashboardPage() {
  const [activeComponent, setActiveComponent] = useState("books");
  const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

  return (
 
    <div className={`flex min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <Sidebar
        setActiveComponent={setActiveComponent}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode} // Pass the theme state and setter to Sidebar
      />

      {/* Main Content */}
      
      <div className="flex-1 overflow-y-auto h-screen p-4 md:p-8">
        <h1 className={`text-xl md:text-2xl font-bold ${
          isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
        } mb-4 md:mb-6`}>
          {activeComponent === "books"
            ? "Book List"
            : activeComponent === "add-book"
            ? "Add New Book"
            : activeComponent === "profile"
            ? "Profile"
            : activeComponent === "settings"
            ? "Settings"
            : activeComponent === "issued"
            ? "Issued Books"
            : activeComponent === "fine-config"
            ? "Fine Configuration"
            : "Activity Log"}
        </h1>

        {/* Render Active Component */}
        {activeComponent === "books" && <BookList isDarkMode={isDarkMode} />}
        {activeComponent === "add-book" && <AddBook isDarkMode={isDarkMode} />}
        {activeComponent === "profile" && <Profile />}
        {activeComponent === "settings" && <Settings />}
        {activeComponent === "issued" && <IssuedBooks isDarkMode={isDarkMode} />}
        {activeComponent === "fine-config" && <FineConfigForm isDarkMode={isDarkMode} />}
        {activeComponent === "activity-log" && <ActivityLog isDarkMode={isDarkMode} />} {/* Render ActivityLog */}
      </div>
    </div>
  );
}