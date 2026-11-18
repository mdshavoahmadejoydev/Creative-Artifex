import React from 'react'
import { Link } from "react-router-dom";
import {
  FaHardHat,
  FaTools,
  FaArrowLeft,
  FaCog,
} from "react-icons/fa";

const setting = () => {
  return (
    <div className="w-full bg-[#F7F8FC] flex items-center justify-center py-2 font-poppins">
          <div className="w-full bg-white rounded-3xl shadow-xl px-6 md:px-14 py-12 flex flex-col items-center text-center">
    
            <div className="relative mb-8">
              <div className="w-28 h-28 rounded-full bg-yellow-100 flex items-center justify-center">
                <FaHardHat className="text-6xl text-yellow-500" />
              </div>
    
              <div className="absolute -right-3 -top-2 w-11 h-11 rounded-full bg-[#5F35F5] flex items-center justify-center text-white">
                <FaTools className="text-xl" />
              </div>
            </div>
    
            <p className="text-sm font-bold tracking-[4px] text-[#5F35F5] uppercase mb-4">
              Coming Soon
            </p>
    
            <h1 className="text-3xl md:text-5xl font-extrabold text-[#172331] leading-tight">
              Page Is Under
              <span className="block text-[#5F35F5] mt-2">
                Construction!
              </span>
            </h1>
    
            <p className="max-w-xl text-gray-500 text-sm md:text-base leading-7 mt-6">
              We're working hard to make this page better for you.
              Something amazing is coming soon. Please check back
              again later!
            </p>
    
            <div className="flex items-center gap-3 mt-9">
              <FaCog className="text-2xl text-yellow-500 animate-spin" />
              <span className="text-sm font-semibold text-gray-600">
                Working on something awesome...
              </span>
            </div>
    
            <div className="w-full max-w-md h-2 bg-gray-100 rounded-full mt-6 overflow-hidden">
              <div className="w-2/3 h-full bg-[#5F35F5] rounded-full animate-pulse" />
            </div>
    
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-3 bg-[#5F35F5] hover:bg-[#4824D8] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <FaArrowLeft />
              Back To Home
            </Link>
    
            <div className="w-full border-t border-gray-100 mt-12 pt-6">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} All Rights Reserved.
              </p>
            </div>
    
          </div>
        </div>
  )
}

export default setting