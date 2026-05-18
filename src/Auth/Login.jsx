import React from "react";
import { MyAuth } from "../context/AuthContext";
import { FaUserShield } from "react-icons/fa";

const Login = () => {
  const { user, handleChange, handleLogin } = MyAuth();

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-5">
      
      {/* Login Card */}
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl p-8">
        
        {/* Logo / Icon */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <div className="bg-white/20 p-5 rounded-full shadow-lg">
            <FaUserShield className="text-4xl text-white" />
          </div>

          <h1 className="text-3xl font-bold text-white">
            Admin Login
          </h1>

          <p className="text-gray-300 text-sm text-center">
            Welcome back! Please login to continue.
          </p>
        </div>

        {/* Form */}
        <form className="flex flex-col gap-6" onSubmit={handleLogin}>
          
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 text-sm">
              Email Address
            </label>

            <input
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 duration-300"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-200 text-sm">
              Password
            </label>

            <input
              className="w-full p-3 rounded-lg bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 duration-300"
              type="password"
              placeholder="Enter your password"
              name="password"
              value={user.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Button */}
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold p-3 rounded-lg transition-all duration-300 shadow-lg hover:scale-[1.02]">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-6">
          Admin Dashboard Access Only
        </p>
      </div>
    </section>
  );
};

export default Login;