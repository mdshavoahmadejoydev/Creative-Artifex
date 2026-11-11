
import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaArrowLeft } from "react-icons/fa";
import { MdOutlineErrorOutline } from "react-icons/md";

const Error = () => {
  return (
    <div className="mt-94 bg-gradient-to-br from-[#F8F7FF] via-white to-[#F0EBFF] flex items-center justify-center px-5 py-10 font-poppins overflow-hidden">

      <div className="max-w-3xl w-full text-center relative">

        {/* Background Decoration */}
        <div className="absolute -top-20 -left-20 w-52 h-52 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-300/20 rounded-full blur-3xl"></div>

        {/* Error Icon */}
        <div className="relative flex justify-center mb-6">
          <div className="w-24 h-24 bg-purple-100 rounded-3xl flex items-center justify-center shadow-lg shadow-purple-200/50 rotate-6">
            <MdOutlineErrorOutline className="text-[#6C3BFF] text-6xl -rotate-6" />
          </div>
        </div>

        {/* 404 Text */}
        <h1 className="text-[110px] leading-none font-extrabold tracking-tight bg-gradient-to-r from-[#5F35F5] via-[#8B5CF6] to-[#B57BFF] bg-clip-text text-transparent drop-shadow-sm">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm sm:text-base leading-7 max-w-lg mx-auto mt-1">
          The page you're looking for might have been removed,
          had its name changed, or is temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4">

          <Link
            to="/"
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 bg-[#5F35F5] text-white rounded-full font-semibold shadow-lg shadow-purple-300/40 hover:bg-[#4823D5] hover:-translate-y-1 transition-all duration-300"
          >
            <FaHome />
            Back To Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-3 border-2 border-[#5F35F5] text-[#5F35F5] rounded-full font-semibold hover:bg-purple-50 hover:-translate-y-1 transition-all duration-300"
          >
            <FaArrowLeft />
            Go Back
          </button>

        </div>

      </div>
    </div>
  );
};

export default Error;
