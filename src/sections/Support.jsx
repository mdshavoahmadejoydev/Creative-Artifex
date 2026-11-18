import React from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";


const Support = () => {
  return (
    <div className="min-h-screen bg-[#F7F8FC] font-poppins px-5 py-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#5F35F5] font-bold tracking-widest uppercase text-sm">
            Contact Support
          </p>

          <h1 className="text-3xl md:text-5xl font-extrabold text-[#172331] mt-4">
            Get In Touch With Us
          </h1>

          <p className="text-gray-500 mt-5 max-w-2xl mx-auto leading-7">
            Have questions or need assistance? We're always
            here to help you. Feel free to Direct message or
            call to us.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Phone */}
          <a
            href="tel:+8801602282313"
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-5 items-start"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center">
              <FaPhoneAlt className="text-2xl text-[#5F35F5]" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#172331]">
                Phone Number
              </h3>

              <p className="text-gray-500 mt-2">
                +8801602282313
              </p>

              <p className="text-[#5F35F5] text-sm font-semibold mt-4 flex items-center gap-2">
                Call Us <FaArrowRight />
              </p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:mdshavoahmadejoy@gmail.com"
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-5 items-start"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center">
              <FaEnvelope className="text-2xl text-[#5F35F5]" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#172331]">
                Email Address
              </h3>

              <p className="text-gray-500 mt-2 break-all">
                mdshavoahmadejoy@gmail.com
              </p>

              <p className="text-[#5F35F5] text-sm font-semibold mt-4 flex items-center gap-2">
                Send Email <FaArrowRight />
              </p>
            </div>
          </a>

          {/* Address */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=House+417+4th+Floor+Borogram+Chairmanbari+Mor+Kamranggirchor+Dhaka+1211+Bangladesh"
            target="_blank"
            rel="noreferrer"
            className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex gap-5 items-start md:col-span-2"
          >
            <div className="w-14 h-14 shrink-0 rounded-xl bg-purple-100 flex items-center justify-center">
              <FaMapMarkerAlt className="text-2xl text-[#5F35F5]" />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#172331]">
                Our Office Address
              </h3>

              <p className="text-gray-500 mt-2 leading-7">
                House #417, (4th Floor), Borogram Chairmanbari
                Mor, Kamranggirchor, Dhaka, Dhaka,
                Bangladesh, 1211
              </p>

              <p className="text-[#5F35F5] text-sm font-semibold mt-4 flex items-center gap-2">
                Find Our Location <FaArrowRight />
              </p>
            </div>
          </a>

        </div>

        {/* Bottom Support Section */}
        <div className="mt-10 bg-[#5F35F5] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-7 text-center md:text-left">

          <div className="flex items-center gap-5">
            <div className="w-16 h-16 shrink-0 rounded-full bg-white/20 flex items-center justify-center">
              <FaHeadset className="text-3xl text-white" />
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Need Any Support?
              </h2>

              <p className="text-white/80 text-sm mt-2">
                Feel free to Direct message or call to us.
              </p>
            </div>
          </div>

          <a
            href="mailto:mdshavoahmadejoy@gmail.com"
            className="bg-white text-[#5F35F5] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap"
          >
            Contact Us
          </a>

        </div>

      </div>
    </div>
  );
}

export default Support