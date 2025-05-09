


// // client/pages/dashboard/page.jsx
// 'use client';

// import { useState } from "react";
// import Sidebar from "../../components/Sidebar";
// import BookList from "../../components/BookList";
// import AddBook from "../../components/AddBook";
// import Profile from "../../components/Profile";
// import Settings from "../../components/Settings";
// import IssuedBooks from "../../components/IssuedBooks";
// import FineConfigForm from "../../components/FineConfigForm";
// import ActivityLog from "../../components/ActivityLog"; // Import the ActivityLog component

// export default function DashboardPage() {
//   const [activeComponent, setActiveComponent] = useState("books");
//   const [isDarkMode, setIsDarkMode] = useState(false); // Theme state

//   return (
 
//     <div className={`flex min-h-screen py-15 lg:py-0 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
//       {/* Sidebar */}
//       <Sidebar
//         setActiveComponent={setActiveComponent}
//         isDarkMode={isDarkMode}
//         setIsDarkMode={setIsDarkMode} // Pass the theme state and setter to Sidebar
//       />

//       {/* Main Content */}
      
//       <div className="flex-1 overflow-y-auto h-screen p-4 md:p-8 lg:py-0">
//         <h1 className={`text-xl md:text-2xl font-bold lg:py-0 ${
//           isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
//         } mb-4 md:mb-6`}>
//           {activeComponent === "books"
//             ? "Book List"
//             : activeComponent === "add-book"
//             ? ""
//             : activeComponent === "profile"
//             ? "Profile"
//             : activeComponent === "settings"
//             ? "Settings"
//             : activeComponent === "issued"
//             ? "Issued Books"
//             : activeComponent === "fine-config"
//             ? "Fine Configuration"
//             : "Activity Log"}
//         </h1>

//         {/* Render Active Component */}
//         {activeComponent === "books" && <BookList isDarkMode={isDarkMode} />}
//         {activeComponent === "add-book" && <AddBook isDarkMode={isDarkMode} />}
//         {activeComponent === "profile" && <Profile />}
//         {activeComponent === "settings" && <Settings />}
//         {activeComponent === "issued" && <IssuedBooks isDarkMode={isDarkMode} />}
//         {activeComponent === "fine-config" && <FineConfigForm isDarkMode={isDarkMode} />}
//         {activeComponent === "activity-log" && <ActivityLog isDarkMode={isDarkMode} />} {/* Render ActivityLog */}
//       </div>
//     </div>
//   );
// }

'use client';

import { useState } from "react";
import Sidebar from "../../components/Sidebar";
import BookList from "../../components/BookList";
import AddBook from "../../components/AddBook";
// import Profile from "../../components/Profile";
// import Settings from "../../components/Settings";
import IssuedBooks from "../../components/IssuedBooks";
import FineConfigForm from "../../components/FineConfigForm";
import ActivityLog from "../../components/ActivityLog";

export default function DashboardPage() {
  const [activeComponent, setActiveComponent] = useState("books");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const mainBg = isDarkMode
    ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
    : "bg-gradient-to-br from-[#f5f0ff] via-[#edf2fa] to-[#e6f0ff]";

  const textHeading = isDarkMode ? "text-indigo-300" : "text-violet-700";

  return (
    <div className={`flex min-h-screen transition-all duration-500 ${mainBg}`}>
      {/* Sidebar */}
      <Sidebar
        setActiveComponent={setActiveComponent}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto p-5 md:p-8 ">
        <div className="pb-6">
          <h1
            className={`text-2xl md:text-3xl font-extrabold tracking-tight transition-colors duration-300 ${textHeading}`}
          >
            {activeComponent === "books"
              ? "📚 Book List"
              : activeComponent === "add-book"
              ? ""
              : activeComponent === "profile"
              ? "👤 Profile"
              : activeComponent === "settings"
              ? "⚙️ Settings"
              : activeComponent === "issued"
              ? "📖 Issued Books"
              : activeComponent === "fine-config"
              ? "💸 Fine Configuration"
              : "📜 Activity Log"}
          </h1>
        </div>

        <div className="animate-fade-in duration-500 ease-in-out">
          {activeComponent === "books" && <BookList isDarkMode={isDarkMode} />}
          {activeComponent === "add-book" && <AddBook isDarkMode={isDarkMode} />}
          {/* {activeComponent === "profile" && <Profile />}
          {activeComponent === "settings" && <Settings />} */}
          {activeComponent === "issued" && <IssuedBooks isDarkMode={isDarkMode} />}
          {activeComponent === "fine-config" && <FineConfigForm isDarkMode={isDarkMode} />}
          {activeComponent === "activity-log" && <ActivityLog isDarkMode={isDarkMode} />}
        </div>
      </main>
    </div>
  );
}
