// client/components/DashboardContent.js
'use client'; // Mark this as a Client Component

const DashboardContent = ({ activeSection }) => {
  const renderContent = () => {
    switch (activeSection) {
      case "home":
        return <div className="text-lg font-medium text-gray-800">Welcome to the Library Management Dashboard!</div>;
      case "books":
        return <div className="text-lg font-medium">List of Books will be displayed here.</div>;
      case "profile":
        return <div className="text-lg font-medium">Your profile information will be displayed here.</div>;
      case "settings":
        return <div className="text-lg font-medium">Settings options will be displayed here.</div>;
      default:
        return <div className="text-lg font-medium">No content available for this section.</div>;
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {renderContent()}
    </div>
  );
};

export default DashboardContent;