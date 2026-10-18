import React from "react";
import { FaCheck } from "react-icons/fa";
import { Link } from "react-router-dom";

const OrderSubmited = () => {
  return (
    <div className="min-h-screen bg-[#F1F6F8] flex items-center justify-center px-4">
      <div className="bg-white border border-[#DCE9F0] rounded-2xl p-8 md:p-12 w-full max-w-[550px] text-center shadow-sm">
        {/* Success Icon */}
        <div className="w-20 h-20 bg-[#DDF7E8] rounded-full flex items-center justify-center mx-auto mb-6">
          <div className="w-14 h-14 bg-[#22C55E] rounded-full flex items-center justify-center text-white">
            <FaCheck size={28} />
          </div>
        </div>

        {/* Success Message */}
        <h1 className="text-3xl font-bold text-[#123B5B] mb-3">
          Order Submitted!
        </h1>

        <p className="text-slate-600 leading-7 mb-7">
          Thank you for choosing Creative Artifex!
          <br />
          Your project details have been submitted successfully. Our team will
          contact you shortly.
        </p>

        {/* Order Status */}
        <div className="bg-[#F0FAFA] border border-[#D4F0F2] rounded-xl p-4 mb-7">
          <p className="text-sm text-slate-500 mb-1">Order Status</p>

          <p className="text-[#079CC0] font-bold text-lg">
            Successfully Submitted
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/"
            className="flex-1 bg-[#08A5C8] hover:bg-[#0788AA] text-white font-semibold py-3 rounded-full transition duration-200"
          >
            Back to Home
          </Link>

          <Link
            to="/services"
            className="flex-1 border-2 border-[#08A5C8] text-[#079CC0] hover:bg-[#08A5C8] hover:text-white font-semibold py-3 rounded-full transition duration-200"
          >
            Explore Services
          </Link>
        </div>

        {/* Footer */}
        <p className="text-sm text-slate-400 mt-7">
          Creative Artifex — Where creativity meets future
        </p>
      </div>
    </div>
  );
};

export default OrderSubmited;
