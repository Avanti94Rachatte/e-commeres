import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaFacebook, FaGoogle } from "react-icons/fa";
import bg from "../assets/shopbg.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export const Auth = () => {
  // State variables
  const [showPassword, setShowPassword] = useState(false); // toggle password visibility
  const [showConfPassword, setShowConfPassword] = useState(false); // toggle confirm password
  const [isLogin, setIsLogin] = useState(false); // toggle between login/signup
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, login } = useAuth(); // auth context functions
  const navigate = useNavigate(); // navigation after login/signup

  // Handle input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Login
      login(form.email, form.password);
      navigate("/"); // redirect after login
    } else {
      // Signup
      if (form.password !== form.confirmPassword) {
        alert("Passwords don’t match!");
        return;
      }
      signup(form.email, form.password, form.firstName, form.lastName);
      navigate("/"); // redirect after signup
    }

    // Reset form
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="mt-12 flex justify-center items-center bg-white max-h-screen px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="container mx-5 pl-3 pr-0 py-6">
        <div className="flex flex-col lg:flex-row rounded-xl shadow-xl">

          {/* Left side - Form */}
          <div className="m-3 p-3 w-full gap-1 lg:w-1/2">
            <div className="flex flex-col">
              {/* Form title */}
              <h3 className="text-3xl font-semibold text-gray-700 mb-2 ">
                {isLogin ? "Welcome Back" : "Create an Account"}
              </h3>
              <p className="text-gray-600 mb-2">
                {isLogin
                  ? "Enjoy your shopping on MY SHOP..."
                  : "Join us and start shopping!"}
              </p>

              {/* Social login buttons */}
              <div className="flex gap-18 justify-center">
                <button className="w-48 justify-center flex items-center gap-2 py-2 border border-gray-300 px-4 rounded">
                  <FaGoogle className="text-blue-600 h-7 w-7" />
                  <span className="font-semibold">Google</span>
                </button>
                <button className="w-48 flex justify-center items-center gap-2 py-2 border border-gray-300 px-4 rounded">
                  <FaFacebook className="text-blue-600 h-7 w-7" />
                  <span className="font-semibold">Facebook</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex-grow border-t border-gray-500"></div>
                <span className="text-gray-500 text-2xl ">or</span>
                <div className="flex-grow border-t border-gray-500"></div>
              </div>

              {/* Auth Form */}
              <form onSubmit={handleSubmit}>
                {/* Signup fields */}
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={form.firstName}
                        onChange={handleChange}
                        placeholder="Enter your First Name"
                        className="w-full px-4 py-2 border border-gray-400 rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={form.lastName}
                        onChange={handleChange}
                        placeholder="Enter your Last Name"
                        className="w-full px-4 py-2 border border-gray-400 rounded"
                      />
                    </div>
                  </div>
                )}

                {/* Email */}
                <div className="mb-4 mt-3">
                  <label className="block text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-700 rounded"
                  />
                </div>

                {/* Password */}
                <div className="mb-4 mt-6">
                  <label className="block text-gray-700 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="w-full px-4 py-2 border border-gray-700 rounded"
                    />
                    {/* Toggle password visibility */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-3 right-3 text-gray-600"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password for signup */}
                {!isLogin && (
                  <div className="mb-4 mt-6">
                    <label className="block text-gray-700 mb-2">
                      Confirm Password
                    </label>
                    <div className="relative">
                      <input
                        type={showConfPassword ? "text" : "password"}
                        name="confirmPassword"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        placeholder="Confirm password"
                        className="w-full px-4 py-2 border border-gray-700 rounded"
                      />
                      {/* Toggle confirm password visibility */}
                      <button
                        type="button"
                        onClick={() => setShowConfPassword(!showConfPassword)}
                        className="absolute top-3 right-3 text-gray-600"
                      >
                        {showConfPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                )}

                {/* Remember Me and Forget Password for login */}
                {isLogin && (
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 mt-1">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm text-gray-700 font-semibold">
                        Remember Me
                      </span>
                    </div>
                    <a
                      href="#"
                      className="text-amber-700 text-sm underline hover:text-blue-600"
                    >
                      Forget Password
                    </a>
                  </div>
                )}

                {/* Submit button */}
                <div className="mt-6 mb-2">
                  <button className="w-full bg-amber-600 text-white font-bold rounded py-2 hover:scale-105 duration-500">
                    {isLogin ? "Login" : "Sign Up"}
                  </button>
                </div>

                {/* Toggle between login/signup */}
                <p className="text-center text-gray-600">
                  {isLogin
                    ? "Don't have account? Create one"
                    : "Already have an account? Please login"}
                  <span
                    onClick={() => setIsLogin(!isLogin)}
                    className="text-amber-600 hover:underline cursor-pointer ml-2"
                  >
                    {isLogin ? "Sign up" : "Login"}
                  </span>
                </p>
              </form>
            </div>
          </div>

          {/* Right side - Image/Info */}
          <div
            className="hidden p-6 lg:p-2 lg:flex relative w-full lg:w-1/2 bg-center justify-center items-center text-white"
            style={{ backgroundImage: `url(${bg})` }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="relative text-center py-5 m-2 flex flex-col justify-center items-center">
              <h3 className="text-[44px] font-bold text-white mt-10 py-4">
                Login Your Account and Shop Now
              </h3>
              <p className="text-slate-50 max-w-xl py-5 font-semibold text-xl">
                Login your account to enjoy the best offers and shopping experience
              </p>
              <div className="my-2 bg-amber-500 w-60 h-[1px]"></div>
              <button className="hover:text-black text-white bg-transparent border border-white rounded px-2 py-2 w-40 cursor-pointer font-bold hover:bg-amber-300 hover:scale-110 duration-500">
                Create an Account
              </button>
              <div className="my-2 bg-amber-500 w-60 h-[1px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
