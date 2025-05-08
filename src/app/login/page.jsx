// // client/pages/login/page.jsx
// 'use client'; // Mark this as a Client Component

// import LoginForm from '../../components/LoginForm';

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-50">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold text-center text-blue-700 mb-6">Login</h1>
//         <LoginForm />
//       </div>
//     </div>
//   );
// }

'use client';

import LoginForm from '../../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="w-full max-w-xl px-4 sm:px-0">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 sm:p-10 border border-white/20 animate-fadeIn">
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-pink-400 mb-8 tracking-tight drop-shadow">
            Welcome to the Library Portal
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
