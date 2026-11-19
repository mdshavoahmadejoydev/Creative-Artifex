import React from "react";
import LogoIcon from "../assets/creativeArtifexLogo.png";
import LogoTagline from "../assets/creativeArtifexLogoTaglineBlack.png";
import Image from "../components/Image";

import {
  FaRegCalendarAlt,
  FaRegFileAlt,
  FaUser,
  FaRegUser,
  FaRegEnvelope,
  FaPhoneAlt,
  FaCube,
  FaCogs,
  FaCoins,
  FaRegClock,
  FaPaperclip,
  FaGlobe,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const OrderConfirmation = () => {

  
  const location = useLocation();

  const data = location.state?.order;

  const orderArray = data ? [data] : [];
  console.log(orderArray[0].uid)


  return (
    <div className="w-full mt-94 bg-gray-100 flex justify-center items-start py-8 px-3">
      {/* A4 PAGE */}
      <div className="relative w-[794px]  max-h-[1123px] overflow-hidden bg-white overflow-hidden shadow-xl flex flex-col font-poppins text-[#172331]">
        {/* HEADER AND FOOTER SVG CURVES */}

        {/* <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 794 1123"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          HEADER LIGHT GRAY CURVE
          <path
            d="M0 0 H160
       C125 25 75 75 0 145
       Z"
            fill="#E9EDF2"
          />

          HEADER RED CURVE
          <path
            d="M0 0 H100
       C76 20 40 60 0 100
       Z"
            fill="#F00018"
          />

          FOOTER LIGHT GRAY CURVE
          <path
            d="M794 970
       C750 1005 705 1065 640 1123
       H794 Z"
            fill="#E9EDF2"
          />

          FOOTER RED CURVE
          <path
            d="M794 1015
       C760 1045 720 1090 680 1123
       H794 Z"
            fill="#F00018"
          />

          BOTTOM RED BORDER
          <path d="M0 1107 H794 V1123 H0 Z" fill="#F00018" />
        </svg> */}

        {/* PAGE CONTENT */}
        <div className="relative z-10 flex flex-col px-6 pt-9 pb-8 gap-3">
          {/* HEADER */}
          <div className="flex flex-col items-center">
            {/* DEMO COMPANY LOGO */}
            <div className="flex items-center justify-center gap-4 mt-1">
              <Image src={LogoIcon} className={`h-17.5`} />
              <Image src={LogoTagline} className={`h-12`} />
            </div>

            {/* ORDER RECEIVED */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <div
                className={`w-[185px] h-[1px] ${
                  orderArray[0].status === "Completed"
                    ? "bg-green-500"
                    : orderArray[0].status === "Accepted"
                      ? "bg-purple-500"
                      : "bg-blue-500"
                }`}
              />

              <div
                className={`flex items-center gap-1 rounded-full px-3 py-0.5 border ${
                  orderArray[0].status === "Completed"
                    ? "bg-green-50 border-green-400"
                    : orderArray[0].status === "Accepted"
                      ? "bg-purple-50 border-purple-400"
                      : "bg-blue-50 border-blue-400"
                }`}
              >
                <span
                  className={`w-4 h-4 rounded-full text-white flex items-center justify-center text-[11px] font-bold ${
                    orderArray[0].status === "Completed"
                      ? "bg-green-500"
                      : orderArray[0].status === "Accepted"
                        ? "bg-purple-500"
                        : "bg-blue-500"
                  }`}
                >
                  ✓
                </span>

                <span
                  className={`text-[12px] font-bold ${
                    orderArray[0].status === "Completed"
                      ? "text-green-600"
                      : orderArray[0].status === "Accepted"
                        ? "text-purple-600"
                        : "text-blue-600"
                  }`}
                >
                  {orderArray[0].status || "Pending"}
                </span>
              </div>

              <div
                className={`w-[185px] h-[1px] ${
                  orderArray[0].status === "Completed"
                    ? "bg-green-500"
                    : orderArray[0].status === "Accepted"
                      ? "bg-purple-500"
                      : "bg-blue-500"
                }`}
              />
            </div>
          </div>

          {/* ORDER ID AND DATE */}
          <div className="flex items-center gap-3 border border-[#DFE5EC] rounded-xl bg-[#FBFCFD] px-5 py-4">
            <div className="flex items-center gap-3 flex-1">
              <FaRegFileAlt className="text-[#F00018] text-[23px] shrink-0" />

              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[13px] font-bold">Order ID</p>
                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].id}
                </div>
              </div>
            </div>

            <div className="w-[1px] h-12 bg-[#E2E6EB]" />

            <div className="flex items-center gap-3 flex-1">
              <FaRegCalendarAlt className="text-[#F00018] text-[23px] shrink-0" />

              <div className="flex flex-col gap-2 flex-1">
                <p className="text-[13px] font-bold">Order Date</p>
                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {new Date(
                    Number(orderArray[0].timezoon.year),
                    Number(orderArray[0].timezoon.month),
                    Number(orderArray[0].timezoon.date),
                  ).toLocaleDateString("en-GB")}
                </div>
              </div>
            </div>
          </div>

          {/* CLIENT DETAILS */}
          <div className="border border-[#DFE5EC] rounded-xl p-5 flex flex-col gap-4">
            {/* SECTION TITLE */}
            <div className="flex items-center gap-3">
              <FaUser className="text-[#F00018] text-[20px]" />

              <h3 className="text-base font-bold whitespace-nowrap">
                CLIENT DETAILS
              </h3>

              <div className="h-[1px] bg-[#DDE3E9] flex-1" />
            </div>

            {/* CLIENT INFORMATION */}
            <div className="flex items-center gap-6">
              {/* NAME */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaRegUser className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Client Full Name</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].name}
                </div>
              </div>

              {/* EMAIL */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaRegEnvelope className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Email Address</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].email}
                </div>
              </div>

              {/* PHONE */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="text-[#F00018] text-[19px]" />
                  <p className="text-[12px] font-semibold">Phone Number</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].phoneNumber}
                </div>
              </div>
            </div>
          </div>

          {/* ORDER DETAILS */}
          <div className="border border-[#DFE5EC] rounded-xl p-5 flex flex-col gap-5">
            {/* SECTION TITLE */}
            <div className="flex items-center gap-3">
              <FaCube className="text-[#F00018] text-[20px]" />

              <h3 className="text-base font-bold whitespace-nowrap">
                ORDER DETAILS
              </h3>

              <div className="h-[1px] bg-[#DDE3E9] flex-1" />
            </div>

            {/* FIRST ROW */}
            <div className="flex items-center gap-6">
              {/* SERVICE */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaCogs className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Service Name</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].serviceName}
                </div>
              </div>

              {/* PACKAGE */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaCube className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Selected Package</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].packageName}
                </div>
              </div>

              {/* PRICE */}
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaCoins className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Package Price</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].price} TK
                </div>
              </div>
            </div>

            <div className="flex gap-5">
              {/* project durations */}
              <div className="w-[31.5%] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Project Duration</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {orderArray[0].deliveryTime} Days
                </div>
              </div>

              <div className="w-[31.5%] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Ordering Date</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {new Date(
                    Number(orderArray[0].timezoon.year),
                    Number(orderArray[0].timezoon.month),
                    Number(orderArray[0].timezoon.date),
                  ).toLocaleDateString("en-GB")}
                </div>
              </div>

              {/* DELIVERY TIME */}
              <div className="w-[31.5%] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <FaRegClock className="text-[#F00018] text-[20px]" />
                  <p className="text-[12px] font-semibold">Delivery Date</p>
                </div>

                <div className="w-full text-sm py-1 px-2 bg-[#EDF0F4] rounded-md">
                  {" "}
                  {/* {Number(orderArray[0].timezoon.date) +
                    Number(orderArray[0].deliveryTime) +
                    "/" +
                    orderArray[0].timezoon.month +
                    "/" +
                    orderArray[0].timezoon.year} */}
                  {new Date(
                    Number(orderArray[0].timezoon.year),
                    Number(orderArray[0].timezoon.month),
                    Number(orderArray[0].timezoon.date) +
                      Number(orderArray[0].deliveryTime),
                  ).toLocaleDateString("en-GB")}
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT BRIEF */}
          <div className="border border-[#DFE5EC] rounded-xl p-5 flex flex-col gap-3">
            {/* SECTION TITLE */}
            <div className="flex items-center gap-3">
              <FaRegFileAlt className="text-[#F00018] text-[20px]" />

              <h3 className="text-base font-bold whitespace-nowrap">
                PROJECT BRIEF
              </h3>
            </div>

            {/* PROJECT DESCRIPTION */}
            <div className="flex flex-col gap-2">
              <p className="text-[12px] font-semibold">
                Tell us about your project
              </p>

              <textarea
                value={orderArray[0].description}
                readOnly
                className="border max-h-[187px] overflow-y-scroll h-[130px] outline-0 border-[#E2E7ED] rounded-md px-3 py-2 flex flex-col justify-between"
              ></textarea>
            </div>
          </div>

          {/* FOOTER */}
          <div className="flex items-center justify-between px-3 pt-2 pb-4 mt-1">
            {/* THANK YOU LOGO */}
            <div className="flex flex-col justify-center items-center w-[48%]">
              <p className="text-xl italic font-bold font-allura text-[#172331]">
                Thank you for choosing
              </p>

              <div className="flex items-center justify-center gap-4 mt-1">
                <Image src={LogoTagline} className={`h-10`} />
              </div>

              <div className="flex items-center gap-1 mt-4">
                <FaGlobe className="text-[#F00018] text-[13px]" />
                <span className="text-[10px]">www.creativeartifex.com</span>
              </div>
            </div>

            {/* VERTICAL DIVIDER */}
            <div className="w-[1px] h-[105px] bg-[#DDE3E9]" />

            {/* AUTHORIZED TEAM */}
            <div className="flex flex-col items-center w-[43%]">
              {/* SIGNATURE */}
              <div className="w-[125px] h-[47px] flex items-center justify-center">
                <span className="text-[29px] font-allura italic text-[#172331]">
                  Artifex
                </span>
              </div>

              <p className="text-[11px] font-extrabold">Authorized Team</p>

              <p className="text-[10px] text-gray-500">Creative Artifex</p>

              {/* CONTACT INFORMATION */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <div className="flex items-center gap-1">
                  <FaEnvelope className="text-[#F00018] text-[13px]" />
                  <span className="text-[10px]">
                    creativeartifexofficial@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <FaPhone className="text-[#F00018] text-[13px]" />
                  <span className="text-[10px]">+8801887002276</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
