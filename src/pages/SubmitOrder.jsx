import React from 'react'
import ReviewsPageTitle from '../components/ReviewsPageTitle'
import Container from '../components/Container'
import Flex from '../components/Flex'

import { FaUser, FaFileAlt, FaPaperclip, FaHeadset, FaArrowRight} from "react-icons/fa";
import { FiClipboard, FiPackage, FiClock } from "react-icons/fi";

const SubmitOrder = () => {
  return (
    <section className="bg-[#EFF4F6]">
      <div className="h-94"></div>

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
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-seagreen">
                  <FaUser size={18} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Your Details
                </h2>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full border border-slate-200 rounded-lg px-3 py-3 outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full border border-slate-200 rounded-lg px-3 py-3 outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-slate-200 rounded-lg px-3 py-3 outline-none focus:border-cyan-500"
                  />
                </div>
              </div>
            </div>

            <hr className="border-slate-200 mb-6" />

            {/* Project Brief */}

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-seagreen">
                  <FaFileAlt size={18} />
                </div>
                <h2 className="text-xl font-bold text-slate-800">
                  Project Brief
                </h2>
              </div>

              <label className="block text-sm font-semibold mb-2">
                Tell us about your project{" "}
                <span className="text-red-500">*</span>
              </label>

              <textarea
                rows="4"
                placeholder="Describe your idea, goals, required features, preferred style, timeline, and any references..."
                className="w-full border border-slate-200 rounded-lg p-3 outline-none resize-y focus:border-cyan-500"
              />

              {/* Service and Package */}
              <div className="grid grid-cols-2 gap-5 mt-5">
                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Service You Need <span className="text-red-500">*</span>
                  </label>

                  <select className="w-full border border-slate-200 rounded-lg px-3 py-3 outline-none focus:border-cyan-500">
                    <option value="">Choose a service</option>
                    <option>Logo Design</option>
                    <option>UI/UX Design</option>
                    <option>Website Development</option>
                    <option>Software Development</option>
                    <option>Cover Design</option>
                    <option>Ads Design</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">
                    Selected Package
                  </label>

                  <div className="flex items-center gap-3 border border-cyan-100 bg-cyan-50 rounded-lg p-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                      <FiPackage size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold text-sm text-slate-800">
                        BASIC PACKAGE
                      </h3>
                      <p className="text-cyan-600 font-bold">৳500 tk</p>
                      <p className="text-xs text-slate-600">◷ 2-day delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <label className="flex items-center gap-3 border border-dashed border-slate-300 rounded-lg p-4 mt-5 cursor-pointer hover:bg-slate-50">
                <FaPaperclip className="text-slate-600" size={20} />
                <span className="text-sm text-slate-500">
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
              <label className="flex items-center gap-2 mt-5 text-sm text-slate-700 cursor-pointer">
                <input type="checkbox" className="accent-cyan-600 w-4 h-4" />I
                agree to be contacted about this project.
              </label>

              {/* Submit Button */}
              <button
                type="button"
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 rounded-xl mt-5 duration-200"
              >
                Submit Order →
              </button>
            </div>
          </div>

          {/* right part */}
          <div className="w-[28%] rounded-2xl">
            <div className="bg-white border border-[#DCE9F0] rounded-2xl p-5 w-full mb-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-[#DDF5F7] flex items-center justify-center text-[#123B5B]">
                  <FiClipboard size={21} />
                </div>

                <h2 className="text-lg font-bold text-[#123B5B]">
                  Your Order Summary
                </h2>
              </div>

              <div className="flex items-center justify-between gap-2 bg-[#F0FAFA] border border-[#D4F0F2] rounded-lg p-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#DDF5F7] flex items-center justify-center text-cyan-600">
                    <FiPackage size={23} />
                  </div>

                  <div>
                    <h3 className="text-xs font-bold text-[#123B5B]">
                      BASIC PACKAGE
                    </h3>

                    <p className="text-sm font-bold text-cyan-600 mt-1">
                      ৳500 tk
                    </p>
                  </div>
                </div>

                <p className="flex items-center gap-1 text-xs text-[#123B5B] whitespace-nowrap">
                  <FiClock size={14} />
                  2-day delivery
                </p>
              </div>

              <div className="mt-4 text-sm text-[#294963]">
                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span>Service:</span>
                  <span className="font-semibold text-[#123B5B]">
                    Logo Design
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span>Package:</span>
                  <span className="font-semibold text-[#123B5B]">
                    Basic Package
                  </span>
                </div>

                <div className="flex justify-between py-3 border-b border-slate-100">
                  <span>Price:</span>
                  <span className="font-semibold text-[#123B5B]">৳500 tk</span>
                </div>

                <div className="flex justify-between pt-3">
                  <span>Delivery:</span>
                  <span className="font-semibold text-[#123B5B]">2 days</span>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#DCE9F0] rounded-2xl p-5 w-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-[#DDF5F7] flex items-center justify-center text-[#123B5B]">
                  <FaHeadset size={23} />
                </div>

                <h2 className="text-xl font-bold text-[#123B5B]">Need help?</h2>
              </div>

              <p className="text-sm leading-6 text-[#294963] pl-1">
                Questions before ordering?
                <br />
                Our team will contact you.
              </p>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 border-2 border-[#08A5C8] text-[#079CC0] hover:bg-[#08A5C8] hover:text-white font-bold py-3 rounded-full mt-5 transition duration-200"
              >
                Contact Us
                <FaArrowRight />
              </button>
            </div>

          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default SubmitOrder