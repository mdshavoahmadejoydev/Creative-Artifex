import React from "react";
import ReviewsPageTitle from "../components/ReviewsPageTitle";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { Link } from "react-router-dom";

import { useLocation, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaFileAlt,
  FaPaperclip,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";
import { FiClipboard, FiPackage, FiClock } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import OrderPageInput from "../components/OrderPageInput";
import { FaArrowRightLong } from "react-icons/fa6";

const SubmitOrder = () => {


  const location = useLocation();
  const price = location.state?.pricemoney;
  const packagename = location.state?.packagename;
  const deliverytime = location.state?.time;
  const servidesname = location.state?.servidesname;
  console.log(servidesname)


  let navigate = useNavigate();
  
  const orderedSuccessfully = () => {
    navigate("/order-submited")
  }



  return (
    <section className="bg-[#EFF4F6]">
      <div className="h-94 bg-seagreen"></div>

      <Container>
        <div className="py-6">
          <p className="font-roboto font-bold text-seagreen/90 text-[42px]">
            Let's Start Your Project
          </p>

          <p className="font-roboto font-medium text-black/60 text-xl">
            Tell us a little about your project. We'll get back to you shortly
          </p>
        </div>

        {/* contant box */}
        <Flex className={`justify-between pb-8`}>
          <div className="w-[70%] bg-[#FEFDFD] rounded-2xl p-5">
            {/* Your Details */}

            <div className="mb-6">
              <Flex className="flex items-center gap-3 mb-5">
                <div className="w- h- rounded-full bg-cyan-100 flex items-center justify-center text-seagreen">
                  <CgProfile className="text-4xl" />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Your Details
                </h2>
              </Flex>

              <div className="grid grid-cols-3 gap-4">
                <OrderPageInput
                  fullName={`Full Name`}
                  placeholder={`Enter Your Full Name`}
                  id={`fullName`}
                  icon={true}
                />

                <OrderPageInput
                  fullName={`Email`}
                  placeholder={`Enter Your Email address`}
                  id={`email`}
                  icon={true}
                />

                <OrderPageInput
                  fullName={`Phone Number`}
                  placeholder={`Enter Your Phone Number`}
                  id={`phone`}
                />
              </div>
            </div>

            <hr className="border-slate-200 mb-6" />

            {/* Project Brief */}

            <div>
              <Flex className="items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-seagreen">
                  <CgProfile className="text-4xl" />
                </div>
                <h2 className="text-xl font-bold font-roboto text-slate-800">
                  Project Brief
                </h2>
              </Flex>

              <label
                htmlFor="textarea"
                className="block text-base text-black/80 font-poppins font-semibold mb-2"
              >
                Tell us about your project{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                id="textarea"
                rows="4"
                placeholder="Describe your idea, goals, required features, preferred style, timeline, and any references..."
                className="w-full placeholder:text-black/70 placeholder:font-roboto placeholder:font-medium  border border-slate-400 rounded-lg p-3 outline-none resize-y focus:border-cyan-500"
              />

              {/* Service and Package */}
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block font-poppins text-base font-semibold mb-2 text-black/80">
                    Service You Need
                  </label>

                  <div className="border border-slate-400 rounded-lg">
                    <p className="text-3xl text-black/70 font-roboto p-4 font-semibold">
                      {servidesname}
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block font-poppins text-base font-semibold mb-2 text-black/80">
                    Selected Package
                  </label>

                  <div className="flex items-center gap-3 border border-slate-400 bg-cyan-50 rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                      <FiPackage className="text-3xl" />
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-slate-800 font-roboto">
                        {packagename}
                      </h3>
                      <p className=" text-cyan-600 font-bold font-roboto">
                        {price}
                      </p>
                      <p className="flex items-center gap-1 text-sm text-slate-600 font-roboto">
                        <FiClock className="text-base" />{" "}
                        {deliverytime}-day delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <label className="flex items-center gap-3 border border-dashed border-slate-400 rounded-lg p-4 mt-5 cursor-pointer hover:bg-slate-50">
                <FaPaperclip className="text-slate-600" size={20} />
                <span className="text-sm font-roboto text-slate-500">
                  Attach references (optional) — PDF, PNG, JPG
                </span>
                <input
                  type="file"
                  accept=".pdf,.png,.jpg,.jpeg"
                  multiple
                  className="hidden"
                />
              </label>

              {/* Agreement */}
              <label className="flex items-center gap-2 mt-5 text-sm text-roboto text-slate-700 cursor-pointer">
                <input type="checkbox" className="accent-cyan-600 w-4 h-4" />I
                agree to be contacted about this project.
              </label>

              {/* Submit Button */}
              <button
                onClick={orderedSuccessfully}
                type="button"
                className="w-full flex justify-center items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white font-bold font-roboto text-xl py-2 rounded-xl mt-5 duration-200 cursor-pointer"
              >
                Submit Order <FaArrowRightLong className="text-white text-xl" />
              </button>
            </div>
          </div>

          {/* right part */}
          <div className="w-[28%] rounded-2xl">
            <div className="bg-white border border-[#DCE9F0] rounded-2xl p-5 w-full mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#DDF5F7] flex items-center justify-center text-[#123B5B]">
                  <FiClipboard className="text-2xl" />
                </div>

                <h2 className="text-lg font-roboto font-bold text-[#123B5B]">
                  Your Order Summary
                </h2>
              </div>

              <div className="flex items-center justify-between gap-2 bg-[#F0FAFA] border border-[#D4F0F2] rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DDF5F7] flex items-center justify-center text-cyan-600">
                    <FiPackage className="text-2xl" />
                  </div>

                  <div>
                    <h3 className="font-bold text-sm text-slate-800 font-roboto uppercase">
                      {packagename}
                    </h3>

                    <p className="text-sm font-roboto font-bold text-cyan-600 mt-1 ">
                      {price}
                    </p>
                  </div>
                </div>

                <p className="flex items-center gap-1 text-xs text-[#123B5B] font-roboto whitespace-nowrap">
                  <FiClock className="text-lg" />
                  {deliverytime}-day delivery
                </p>
              </div>

              <div className="mt-4 text-sm font-roboto text-[#294963]">
                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span>Service:</span>
                  <span className="font-semibold text-[#123B5B] uppercase">
                    {servidesname}
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span>Package:</span>
                  <span className="font-semibold text-[#123B5B]">
                    {packagename}
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span>Price:</span>
                  <span className="font-semibold text-[#123B5B]">
                    {price}
                  </span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Delivery:</span>
                  <span className="font-semibold text-[#123B5B]">
                    {deliverytime} days
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#DCE9F0] rounded-2xl p-5 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#DDF5F7] flex items-center justify-center text-[#123B5B]">
                  <FaHeadset className="text-3xl" />
                </div>

                <h2 className="text-xl font-roboto font-bold text-[#123B5B]">
                  Need help?
                </h2>
              </div>

              <p className="text-sm font-roboto font-semibold leading-6 text-[#294963] pl-1">
                Questions before ordering?
                <br />
                Our team will contact you.
              </p>

              <Link
                to={"/contact"}
                className="w-full flex items-center justify-center gap-3 border-2 border-[#08A5C8] text-[#079CC0] hover:bg-[#08A5C8] hover:text-white font-bold py-3 rounded-full mt-5 transition duration-200 cursor-pointer"
              >
                Contact Us
                <FaArrowRightLong className="duration-200 text-xl" />
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default SubmitOrder;
