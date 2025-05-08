// // client/components/LoginForm.js
// 'use client'; // Mark this as a Client Component

// import { useState } from "react";
// import axios from "axios";
// import InputField from "./InputField";
// import Button from "./Button";
// import ErrorMessage from "./ErrorMessage";

// const LoginForm = () => {
//   const [uniqueKey, setUniqueKey] = useState(""); // State for the unique key input
//   const [error, setError] = useState(""); // State for error messages
//   const [isLoading, setIsLoading] = useState(false); // State to indicate loading during API call

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear any previous errors
//     setIsLoading(true); // Set loading state to true

//     try {
//       // Send a POST request to the backend API
//       const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`, {
//         uniqueKey,
//       });

//       if (response.data.success) {
//         // Redirect to the home page after successful login
//         window.location.href = "/dashboard";
//       }
//     } catch (err) {
//       // Handle errors from the API
//       setError(err.response?.data?.message || "An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false); // Reset loading state
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       {/* Error Message */}
//       <ErrorMessage message={error} />

//       {/* Unique Key Input */}
//       <InputField
//         label="Unique Key"
//         type="text"
//         id="uniqueKey"
//         value={uniqueKey}
//         onChange={(e) => setUniqueKey(e.target.value)}
//         placeholder="Enter your unique key"
//         required
//       />

//       {/* Submit Button */}
//       <Button type="submit" disabled={isLoading}>
//         {isLoading ? "Logging in..." : "Login"}
//       </Button>
//     </form>
//   );
// };

// export default LoginForm;


// 'use client';

// import { useState } from 'react';
// import axios from 'axios';
// import { motion, AnimatePresence } from 'framer-motion';
// import ErrorMessage from './ErrorMessage';

// const LoginForm = () => {
//   const [mode, setMode] = useState('uniqueKey');
//   const [uniqueKey, setUniqueKey] = useState('');
//   const [userId, setUserId] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);

//   const toggleMode = () => {
//     setMode((prev) => (prev === 'uniqueKey' ? 'credentials' : 'uniqueKey'));
//     setError('');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError('');
//     setIsLoading(true);

//     try {
//       const payload =
//         mode === 'uniqueKey'
//           ? { uniqueKey }
//           : { userId, password };

//       const response = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
//         payload
//       );

//       if (response.data.success) {
//         window.location.href = '/dashboard';
//       }
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-md w-full mx-auto mt-16 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white animate-fadeIn">
//       <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-pink-400">
//         Library Login
//       </h2>

//       <div className="flex justify-center mb-6 space-x-4">
//         <button
//           className={`px-4 py-2 rounded-full transition-colors duration-300 ${
//             mode === 'uniqueKey'
//               ? 'bg-pink-500 text-white'
//               : 'bg-white/20 hover:bg-white/30'
//           }`}
//           onClick={() => setMode('uniqueKey')}
//         >
//           Unique Key
//         </button>
//         <button
//           className={`px-4 py-2 rounded-full transition-colors duration-300 ${
//             mode === 'credentials'
//               ? 'bg-pink-500 text-white'
//               : 'bg-white/20 hover:bg-white/30'
//           }`}
//           onClick={() => setMode('credentials')}
//         >
//           User ID + Password
//         </button>
//       </div>

//       <AnimatePresence mode="wait">
//         <motion.form
//           key={mode}
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.3 }}
//           className="space-y-4"
//         >
//           <ErrorMessage message={error} />

//           {mode === 'uniqueKey' ? (
//             <input
//               type="text"
//               placeholder="Enter your unique key"
//               value={uniqueKey}
//               onChange={(e) => setUniqueKey(e.target.value)}
//               className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
//               required
//             />
//           ) : (
//             <>
//               <input
//                 type="text"
//                 placeholder="User ID"
//                 value={userId}
//                 onChange={(e) => setUserId(e.target.value)}
//                 className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                 required
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
//                 required
//               />
//             </>
//           )}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full py-3 rounded-md bg-pink-600 hover:bg-pink-500 transition duration-300 font-semibold text-white"
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//         </motion.form>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default LoginForm;


'use client';

import { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
// import ErrorMessage from './ErrorMessage';

const LoginForm = () => {
  const [mode, setMode] = useState('login'); // login or register
  const [loginType, setLoginType] = useState('uniqueKey'); // uniqueKey or credentials

  // Common states
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [uniqueKey, setUniqueKey] = useState('');

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const resetForm = () => {
    setUserId('');
    setPassword('');
    setUniqueKey('');
    setError('');
    setSuccess('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      if (mode === 'register') {
        // Register
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
          userId,
          password,
        });
        if (res.data.success) {
          setSuccess('Registration successful. You can now log in.');
          setMode('login');
        }
      } else {
        // Login
        const payload =
          loginType === 'uniqueKey' ? { uniqueKey } : { userId, password };

        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
          payload
        );

        if (res.data.success) {
          window.location.href = '/dashboard';
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto mt-16 p-8 rounded-xl shadow-2xl bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white animate-fadeIn">
      <h2 className="text-3xl font-extrabold mb-6 text-center tracking-wide text-pink-400">
        {mode === 'register' ? 'Register Account' : 'Library Login'}
      </h2>

      {/* Toggle mode between login and register */}
      <div className="flex justify-center mb-6 space-x-4">
        <button
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            mode === 'login'
              ? 'bg-pink-500 text-white'
              : 'bg-white/20 hover:bg-white/30'
          }`}
          onClick={() => {
            setMode('login');
            resetForm();
          }}
        >
          Login
        </button>
        <button
          className={`px-4 py-2 rounded-full transition-colors duration-300 ${
            mode === 'register'
              ? 'bg-pink-500 text-white'
              : 'bg-white/20 hover:bg-white/30'
          }`}
          onClick={() => {
            setMode('register');
            resetForm();
          }}
        >
          Register
        </button>
      </div>

      {/* Toggle login method */}
      {mode === 'login' && (
        <div className="flex justify-center mb-6 space-x-4">
          <button
            className={`px-4 py-1 rounded-full text-sm ${
              loginType === 'uniqueKey'
                ? 'bg-pink-400 text-white'
                : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setLoginType('uniqueKey')}
          >
            Unique Key
          </button>
          <button
            className={`px-4 py-1 rounded-full text-sm ${
              loginType === 'credentials'
                ? 'bg-pink-400 text-white'
                : 'bg-white/10 hover:bg-white/20'
            }`}
            onClick={() => setLoginType('credentials')}
          >
            User ID + Password
          </button>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.form
          key={mode + loginType}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4"
        >
          {/* {error && <ErrorMessage message={error} />} */}
          {success && (
            <div className="bg-green-500/10 text-green-300 p-3 rounded-md text-sm border border-green-600">
              {success}
            </div>
          )}

          {mode === 'register' ? (
            <>
              <input
                type="text"
                placeholder="Username"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                required
              />
            </>
          ) : loginType === 'uniqueKey' ? (
            <input
              type="text"
              placeholder="Enter your unique key"
              value={uniqueKey}
              onChange={(e) => setUniqueKey(e.target.value)}
              className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
              required
            />
          ) : (
            <>
              <input
                type="text"
                placeholder="User ID"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
                className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-md bg-white/10 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
                required
              />
            </>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-md bg-pink-600 hover:bg-pink-500 transition duration-300 font-semibold text-white"
          >
            {isLoading
              ? mode === 'register'
                ? 'Registering...'
                : 'Logging in...'
              : mode === 'register'
              ? 'Register'
              : 'Login'}
          </button>
        </motion.form>
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;

