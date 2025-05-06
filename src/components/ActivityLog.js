// client/components/ActivityLog.js
'use client'; // Mark this as a Client Component

import { useEffect, useState } from "react";
import axios from "axios";

const ActivityLog = ({ isDarkMode }) => {
  const [logs, setLogs] = useState([]); // State to store activity logs
  const [loading, setLoading] = useState(true); // State to track loading status
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/log/latest`);
        setLogs(response.data.logs);
      } catch (err) {
        setError("Failed to fetch activity logs. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchLogs();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-700">Loading activity logs...</p>;
  }

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }

  return (
    <div className={` p-4 sm:p-6 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h1 className={`text-xl sm:text-2xl font-bold ${
        isDarkMode ? 'text-indigo-400' : 'text-indigo-700'
      } mb-4 sm:mb-6`}>Activity Log</h1>

      {/* Table Container */}
      <div className="overflow-x-auto">
        <table className={`min-w-full divide-y divide-${isDarkMode ? 'gray-600' : 'gray-200'} text-sm sm:text-base`}>
          <thead className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
            <tr>
              <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Action Type
              </th>
              <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Details
              </th>
              <th className={`px-3 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              } uppercase tracking-wider`}>
                Timestamp
              </th>
            </tr>
          </thead>
          <tbody className={`divide-y divide-${isDarkMode ? 'gray-600' : 'gray-200'}`}>
            {logs.length > 0 ? (
              logs.map((log) => (
                <tr key={log._id}>
                  <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-900'
                  }`}>{log.actionType}</td>
                  <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>{log.details}</td>
                  <td className={`px-3 sm:px-6 py-4 whitespace-nowrap ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-500'
                  }`}>
                    {new Date(log.timestamp).toLocaleString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className={`px-3 sm:px-6 py-4 text-center ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  No activity logs found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Fallback Layout for Very Small Screens */}
      <div className="block sm:hidden mt-4">
        {logs.length > 0 ? (
          logs.map((log) => (
            <div
              key={log._id}
              className={`bg-gray-50 p-4 mb-4 rounded-lg shadow-sm border border-${isDarkMode ? 'gray-600' : 'gray-200'} ${
                isDarkMode ? 'bg-gray-700 text-white' : ''
              }`}
            >
              <p className={`text-sm font-medium ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>Action: {log.actionType}</p>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>Details: {log.details}</p>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-500'
              }`}>
                Timestamp: {new Date(log.timestamp).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className={`text-center ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>No activity logs found.</p>
        )}
      </div>
    </div>
  );
};

export default ActivityLog;