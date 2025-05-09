// 'use client';

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// const UsersList = ({ isDarkMode }) => {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allusers`);
//         setUsers(res.data);
//       } catch (err) {
//         console.error('Failed to fetch users:', err);
//       }
//     };
//     fetchUsers();
//   }, []);

//   return (
//     <div className={`p-6 rounded-2xl shadow-inner transition-all duration-300
//       ${isDarkMode ? 'bg-[#12131A] text-gray-100' : 'bg-gray-100 text-gray-900'}`}
//     >
//       <h2 className="text-2xl font-bold mb-4">Registered Users</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {users.map(user => (
//           <div
//             key={user._id}
//             className={`p-4 rounded-xl border shadow-sm transition
//               ${isDarkMode
//                 ? 'bg-[#1c1e2a] border-gray-700'
//                 : 'bg-white border-gray-300'
//               }`}
//           >
//             <p className="font-semibold text-lg">User ID: {user.userId || '—'}</p>
//             <p className="text-sm text-gray-500">Unique Key: {user.uniqueKey}</p>
//             <p className={`mt-1 inline-block px-2 py-1 text-xs rounded-full font-medium
//               ${user.isAllowed
//                 ? 'bg-green-200 text-green-800 dark:bg-green-800 dark:text-green-200'
//                 : 'bg-red-200 text-red-800 dark:bg-red-800 dark:text-red-200'
//               }`}
//             >
//               {user.isAllowed ? 'Allowed' : 'Not Allowed'}
//             </p>
//             <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
//               Registered: {new Date(user.createdAt).toLocaleString()}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default UsersList;


'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Switch } from '@headlessui/react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

const UsersList = ({ isDarkMode }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/user/allusers`);
        setUsers(res.data);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };
    fetchUsers();
  }, []);

  const handleToggle = async (userId) => {
    try {
      const res = await axios.patch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/status`, { userId });
      setUsers(users.map(u => u._id === userId ? { ...u, isAllowed: !u.isAllowed } : u));
    } catch (err) {
      console.error('Error updating user status:', err);
    }
  };

  return (
    <div className={`p-6 rounded-2xl transition-all duration-300 shadow-2xl
      ${isDarkMode ? 'bg-[#0f0f1b] text-gray-100' : 'bg-gradient-to-br from-white to-[#f0f4ff] text-gray-900'}`}>
      <h2 className="text-3xl font-extrabold mb-6 tracking-tight text-center">👥 Registered Users</h2>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {users.map(user => (
          <div
            key={user._id}
            className={`rounded-2xl p-5 transition-all shadow-xl border border-opacity-10
              ${isDarkMode ? 'bg-[#1b1c2a] border-gray-700' : 'bg-white border-gray-300'}`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-lg font-semibold">🆔 {user.userId || '—'}</p>
                <p className="text-sm text-gray-500">🔑 {user.uniqueKey}</p>
              </div>
              <div className="flex flex-col items-end">
                <Switch
                  checked={user.isAllowed}
                  onChange={() => handleToggle(user._id)}
                  className={`${user.isAllowed ? 'bg-green-600' : 'bg-red-600'}
                    relative inline-flex h-6 w-11 items-center rounded-full transition`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform bg-white rounded-full transition
                      ${user.isAllowed ? 'translate-x-6' : 'translate-x-1'}`}
                  />
                </Switch>
                <span className={`text-xs mt-1 font-medium
                  ${user.isAllowed ? 'text-green-400' : 'text-red-400'}`}>
                  {user.isAllowed ? 'Allowed' : 'Not Allowed'}
                </span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-400">
              {user.isAllowed ? (
                <CheckCircleIcon className="h-4 w-4 text-green-400" />
              ) : (
                <XCircleIcon className="h-4 w-4 text-red-400" />
              )}
              <span>Registered: {new Date(user.createdAt).toLocaleString()}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
