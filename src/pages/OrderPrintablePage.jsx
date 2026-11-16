
import React from "react";
import { FaGlobeAfrica, FaPhoneAlt, FaRegCheckCircle, FaRegClock, FaRegEnvelopeOpen, FaRegUserCircle, FaUserAlt } from "react-icons/fa";
import {
  // FaCheckCircle,
  FaRegFileLines,
  FaRegCalendarDays,
  FaUser,
  FaRegUser,
  FaRegEnvelope,
  FaPhone,
  FaBoxOpen,
  FaGear,
  FaCoins,
  FaClock,
  FaGlobe,
  FaBitcoinSign,
  FaGears,
} from "react-icons/fa6";

const OrderConfirmation = () => {
  return (
    <div className="w-full mt-94  bg-gray-100 py-8 px-3 flex justify-center">

      {/* A4 PAGE */}
      <div
        id="order-confirmation-page"
        className="relative w-full max-w-[794px] min-h-[1123px] bg-white overflow-hidden shadow-xl px-8 py-8 flex flex-col"
      >

        {/* TOP CORNER DESIGN */}
        <div className="absolute top-0 left-0 w-[120px] h-[120px] bg-red-600 rounded-br-full" />

        <div className="absolute top-0 left-0 w-[150px] h-[150px] border-r-[15px] border-b-[15px] border-gray-100 rounded-br-full" />

        {/* HEADER LOGO */}
        <div className="relative flex justify-center items-center mb-8 mt-2">

          <div className="flex items-center gap-4">

            <img
              src="/demo-logo.png"
              alt="Logo"
              className="w-[105px] h-[105px] object-contain"
            />

            <div className="flex flex-col items-center">

              <h1 className="font-poppins text-[37px] font-extrabold text-red-600 leading-tight">
                Creative Artifex
              </h1>

              <div className="flex items-center gap-2 w-full">
                <div className="h-[2px] bg-red-500 flex-1" />

                <p className="font-poppins text-[15px] italic font-semibold text-[#172333] whitespace-nowrap">
                  where creativity meets future
                </p>

                <div className="h-[2px] bg-red-500 flex-1" />
              </div>

            </div>
          </div>
        </div>

        {/* MAIN TITLE */}
        <div className="flex flex-col items-center mb-6">

          <h1 className="font-poppins text-[40px] font-extrabold text-center leading-tight">
            <span className="text-[#172333]">ORDER </span>
            <span className="text-red-600">CONFIRMATION</span>
          </h1>

          <div className="flex items-center gap-5 mt-3 w-full">

            <div className="h-[2px] bg-red-500 flex-1" />

            <div className="flex items-center gap-2 border border-green-500 bg-green-50 rounded-full px-4 py-2">
              <FaRegCheckCircle className="text-green-600 text-xl" />
              <span className="font-poppins font-bold text-green-600 text-[15px]">
                ORDER RECEIVED
              </span>
            </div>

            <div className="h-[2px] bg-red-500 flex-1" />

          </div>
        </div>

        {/* ORDER ID AND DATE */}
        <div className="border-2 border-[#e2e7ee] rounded-2xl p-5 flex items-center gap-6 mb-4">

          <div className="flex-1 flex items-center gap-5 min-w-0">
            <FaRegFileLines className="text-red-600 text-[30px] shrink-0" />

            <div className="flex-1 min-w-0">
              <p className="font-poppins font-bold text-[#172333] mb-2">
                Order ID
              </p>
              <div className="bg-[#eef1f5] rounded-lg min-h-[36px] px-3 py-2 font-poppins text-sm font-semibold">
                CA-2026-001
              </div>
            </div>
          </div>

          <div className="w-[2px] h-[65px] bg-[#dce2ea]" />

          <div className="flex-1 flex items-center gap-5 min-w-0">
            <FaRegCalendarDays className="text-red-600 text-[30px] shrink-0" />

            <div className="flex-1 min-w-0">
              <p className="font-poppins font-bold text-[#172333] mb-2">
                Order Date
              </p>
              <div className="bg-[#eef1f5] rounded-lg min-h-[36px] px-3 py-2 font-poppins text-sm font-semibold">
                17 November, 2026
              </div>
            </div>
          </div>

        </div>

        {/* CLIENT DETAILS */}
        <div className="border-2 border-[#e2e7ee] rounded-2xl p-5 mb-4">

          <div className="flex items-center gap-4 mb-6">
            <FaUserAlt className="text-red-600 text-[29px]" />

            <h2 className="font-poppins text-[21px] font-bold text-[#172333] whitespace-nowrap">
              CLIENT DETAILS
            </h2>

            <div className="h-[2px] bg-[#dce2ea] flex-1" />
          </div>

          <div className="flex gap-7">

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <FaRegUserCircle className="text-red-600 text-[23px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Client Full Name
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                John Smith
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <FaRegEnvelopeOpen className="text-red-600 text-[23px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Email Address
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                john@example.com
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2">
                <FaPhoneAlt className="text-red-600 text-[23px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Phone Number
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                +880 1234-567890
              </div>
            </div>

          </div>
        </div>

        {/* ORDER DETAILS */}
        <div className="border-2 border-[#e2e7ee] rounded-2xl p-5 mb-4">

          <div className="flex items-center gap-4 mb-6">
            <FaBoxOpen className="text-red-600 text-[29px]" />

            <h2 className="font-poppins text-[21px] font-bold text-[#172333] whitespace-nowrap">
              ORDER DETAILS
            </h2>

            <div className="h-[2px] bg-[#dce2ea] flex-1" />
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-7">

            <div className="flex flex-col flex-1 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <FaGears className="text-red-600 text-[25px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Service Requested
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                Logo Design
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <FaBoxOpen className="text-red-600 text-[25px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Selected Package
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                Premium Package
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <FaBitcoinSign className="text-red-600 text-[25px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Package Price
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                ৳ 1,500 TK
              </div>
            </div>

            <div className="flex flex-col flex-1 min-w-[180px]">
              <div className="flex items-center gap-3 mb-2">
                <FaRegClock className="text-red-600 text-[25px]" />
                <span className="font-poppins text-[14px] font-semibold text-[#172333]">
                  Delivery Time
                </span>
              </div>
              <div className="bg-[#eef1f5] h-[38px] rounded-lg px-3 py-2 text-sm font-poppins">
                5 Days
              </div>
            </div>

          </div>
        </div>

        {/* PROJECT BRIEF */}
        <div className="border-2 border-[#e2e7ee] rounded-2xl p-5 flex-1">

          <div className="flex items-center gap-4 mb-6">
            <FaRegFileLines className="text-red-600 text-[29px]" />

            <h2 className="font-poppins text-[21px] font-bold text-[#172333] whitespace-nowrap">
              PROJECT BRIEF
            </h2>

            <div className="h-[2px] bg-[#dce2ea] flex-1" />
          </div>

          <div className="border-2 border-[#e2e7ee] rounded-xl p-3">

            <p className="font-poppins text-[15px] font-semibold text-[#172333] mb-3">
              Tell us about your project
            </p>

            <div className="min-h-[125px] border-t border-[#dce2ea]">
              <div className="h-[30px] border-b border-[#dce2ea]" />
              <div className="h-[30px] border-b border-[#dce2ea]" />
              <div className="h-[30px] border-b border-[#dce2ea]" />
              <div className="h-[30px] border-b border-[#dce2ea]" />
            </div>

          </div>
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between gap-5 mt-7 px-5 pb-4">

          {/* BOTTOM LOGO */}
          <div className="flex-1 flex flex-col items-center">

            <p className="font-poppins italic text-[24px] text-[#172333]">
              Thank you for choosing
            </p>

            <img
              src="/demo-logo.png"
              alt="Logo"
              className="w-[270px] h-[65px] object-contain"
            />

            <div className="flex items-center gap-2 w-full justify-center mt-1">
              <div className="h-[2px] w-12 bg-red-500" />

              <p className="font-poppins italic text-[13px] font-semibold text-[#172333] whitespace-nowrap">
                where creativity meets future
              </p>

              <div className="h-[2px] w-12 bg-red-500" />
            </div>

          </div>

          <div className="w-[2px] h-[125px] bg-[#dce2ea]" />

          {/* AUTHORIZED TEAM */}
          <div className="flex-1 flex flex-col items-center">

            <p className="font-serif italic text-[38px] text-[#172333]">
              Creative
            </p>

            <div className="border-t-2 border-[#dce2ea] w-[145px] mt-1" />

            <p className="font-poppins text-[13px] font-bold text-[#172333] mt-2">
              Authorized Team
            </p>

            <p className="font-poppins text-[12px] text-[#172333]">
              Creative Artifex
            </p>

            <div className="flex items-center gap-4 mt-5">

              <div className="flex items-center gap-2">
                <FaGlobeAfrica className="text-red-600" />
                <span className="font-poppins text-[11px] text-[#172333]">
                  Website
                </span>
              </div>

              <div className="w-[1px] h-5 bg-[#dce2ea]" />

              <div className="flex items-center gap-2">
                <FaRegEnvelopeOpen className="text-red-600" />
                <span className="font-poppins text-[11px] text-[#172333]">
                  Email
                </span>
              </div>

              <div className="w-[1px] h-5 bg-[#dce2ea]" />

              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-red-600" />
                <span className="font-poppins text-[11px] text-[#172333]">
                  Phone
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* BOTTOM CORNER DESIGN */}
        <div className="absolute bottom-0 right-0 w-[120px] h-[120px] bg-red-600 rounded-tl-full" />

        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] border-l-[15px] border-t-[15px] border-gray-100 rounded-tl-full" />

      </div>
    </div>
  );
};

export default OrderConfirmation;

