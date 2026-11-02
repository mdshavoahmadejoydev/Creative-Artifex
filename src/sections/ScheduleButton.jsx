import React, { useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Schedule from "../components/Schedule";
import SubmitP from "../components/SubmitP";
import Input from "../components/Input";

import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import ReactCountryFlag from "react-country-flag";
import { FaAngleDown, FaImage } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const ScheduleButton = ({ onScheduleClick }) => {
  // date and time start
  const [showHour, setShowHour] = useState(false);
  const [showMinute, setShowMinute] = useState(false);

  const [hour, setHour] = useState("hour");
  const [minute, setMinute] = useState("munite");

  const handleHourSelect = (value) => {
    setHour(value);
    setShowHour(false);
  };

  const handleMinuteSelected = (value) => {
    setMinute(value);
    setShowMinute(false);
  };
  // date and time end

  const countries = [
    { name: "BAN", code: "+880", countryCode: "BD" },
    { name: "USA", code: "+1", countryCode: "US" },
    { name: "GBR", code: "+44", countryCode: "GB" },
    { name: "CAN", code: "+1", countryCode: "CA" },
    { name: "AUS", code: "+61", countryCode: "AU" },
    { name: "IND", code: "+91", countryCode: "IN" },
    { name: "PAK", code: "+92", countryCode: "PK" },
    { name: "SAU", code: "+966", countryCode: "SA" },
    { name: "ARE", code: "+971", countryCode: "AE" },
    { name: "DEU", code: "+49", countryCode: "DE" },
    { name: "FRA", code: "+33", countryCode: "FR" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);
  

  // schedule meeting sent massage
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");

  const [showScheduletemplate, setShowScheduletemplate] = useState(false);
  let emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let onScheduleClickBtn = () => {
    if (!name) {
      setNameError(true);
    } else if (!emailregex.test(email)) {
      setEmailError(true);
    }
    if (!email) {
      setEmailError(true);
    }
    if (!date) {
      setDateError(true);
    }
    if (name && email && emailregex.test(email)) {
      setTimeout(() => {
        setShowScheduletemplate(true);
      }, 150);
    }
  };

  return (
    <section
      className={`fixed inset-0 z-50 flex ${showScheduletemplate && "hidden"}  items-center justify-center bg-black/70 p-4`}
    >
      <Flex className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl mt-10 bg-white">
        <div className="relative w-full bg-white px-9 py-5 rounded-2xl">
          <IoClose
            onClick={onScheduleClick}
            className="absolute top-2 right-4 cursor-pointer text-4xl text-red-500!"
          />
          {/* Submit Message Form */}
          <SubmitP text="Submit message" className="text-2xl! font-bold!" />

          <Flex className={`justify-between gap-8 mt-1 `}>
            {/* Name */}
            <div className="w-1/2">
              <SubmitP
                text="Your Name"
                requerment={true}
                className={`text-base!`}
              />

              <Input
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                placeholder="Enter Your Full Name ..."
                className={`rounded-md! text-sm! py-1! ${nameError && "border-red-500 text-red-500"}`}
              />
            </div>

            {/* Email */}
            <div className="w-1/2">
              <SubmitP
                text="Email Address"
                requerment={true}
                className={`text-base!`}
              />

              <Input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                placeholder="Enter Your Email ..."
                className={`rounded-md! text-sm! py-1! ${emailError && "border-red-500 text-red-500"}`}
              />
              {emailError && (
                <p className="text-red-500 ml-6 text-sm font-roboto font-medium">
                  enter your valid email
                </p>
              )}
            </div>
          </Flex>

          <Flex className={`justify-between gap-8 mt-2`}>
            {/* Phone Number */}
            <div className="w-1/2">
              <SubmitP
                text="Phone number"
                requerment={false}
                className={`text-base!`}
              />

              <div className="relative mt-2">
                <div className="flex w-full items-center rounded-md border-2 border-gray-300 px-4 py-0">
                  {/* Country Selector */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setShowCountries(!showCountries)}
                      className="flex items-center gap-2 font-poppins text-sm font-medium"
                    >
                      <ReactCountryFlag
                        countryCode={selectedCountry.countryCode}
                        svg
                        style={{
                          width: "1.4em",
                          height: "1.4em",
                        }}
                      />

                      <span className="text-black/70">
                        {selectedCountry.name}
                      </span>

                      {showCountries ? (
                        <MdKeyboardArrowUp className="text-base text-black/70" />
                      ) : (
                        <MdKeyboardArrowDown className="text-base text-black/70" />
                      )}
                    </button>

                    {/* Country Dropdown */}
                    {showCountries && (
                      <div className="absolute left-0 top-full z-30 mt-2 w-52 rounded-lg border border-gray-200 bg-white shadow-lg">
                        {countries.map((country) => (
                          <button
                            type="button"
                            key={country.countryCode}
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountries(false);
                            }}
                            className="flex w-full items-center gap-3 px-4 py-0 text-left text-sm font-medium font-poppins hover:bg-gray-100"
                          >
                            <ReactCountryFlag
                              countryCode={country.countryCode}
                              svg
                              style={{
                                width: "1.4em",
                                height: "1.4em",
                              }}
                            />

                            <span className="text-black/70">
                              {country.name}
                            </span>

                            <span className="ml-auto text-black/70">
                              {country.code}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Country Code */}
                  <span className="ml-3 border-l-2 border-gray-300 pl-3 text-base font-medium font-poppins text-black/70">
                    {selectedCountry.code}
                  </span>

                  {/* Phone Input */}
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="ml-3 w-full min-w-0 border-none bg-transparent py-1 text-sm font-medium font-poppins text-black/90 outline-none"
                  />
                </div>
              </div>
            </div>

            {/* Upload scheduleDate */}

            <div className="w-1/2">
              <SubmitP
                text="Set Your Meeting Date and Time"
                requerment={true}
                className={`mt-1 text-base!`}
              />
              <Flex className={`justify-start items-center gap-2`}>
                <input
                  onChange={(e) => {
                    setDate(e.target.value);
                    setDateError(false);
                  }}
                  type="date"
                  className={`mt-1 w-33.5 rounded-md border-2 border-gray-300 bg-white px-1 py-1 font-poppins font-semibold text-sm! text-gray-600 outline-none transition-all duration-300 [&::-webkit-calendar-picker-indicator]:scale-125 [&::-webkit-calendar-picker-indicator]:cursor-pointer ${dateError && "border-red-500 text-red-500"}`}
                />
                <Flex className={`gap-1`}>
                  <div
                    onClick={() => {
                      setShowHour(!showHour);
                      setShowMinute(false);
                    }}
                    className="relative  text-gray-600 "
                  >
                    <input
                      type="text"
                      readOnly
                      value={hour}
                      display
                      className="w-23.25  mt-1 rounded-md border-2 border-gray-300 bg-white px-1 py-1 font-poppins font-semibold outline-none transition-all duration-300 text-sm"
                    />

                    <FaAngleDown className="absolute top-1/2 -translate-y-[35%]  right-2 text-base" />

                    {showHour && (
                      <div className="absolute top-8.75 left-0 bg-EEEEEE p-1 h-[200px] overflow-auto w-full font-roboto font-semibold text-base text-black/80 border border-gray-300 rounded-md">
                        {Array.from({ length: 23 }, (_, index) => {
                          const hour = String(index + 1).padStart(2, "0");

                          return (
                            <p
                              key={hour}
                              onClick={() => handleHourSelect(hour)}
                              className="cursor-pointer"
                            >
                              {hour}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  <div
                    onClick={() => {
                      setShowMinute(!showMinute);
                      setShowHour(false);
                    }}
                    className="relative cursor-pointer  text-gray-600 "
                  >
                    <input
                      type="text"
                      readOnly
                      value={minute}
                      display
                      className="w-[120px] mt-1 rounded-md border-2 border-gray-300 bg-white px-1 py-1 font-poppins text-sm! font-semibold text-gray-600 outline-none transition-all duration-300 "
                    />

                    <FaAngleDown className="absolute top-1/2 -translate-y-[35%]  right-2 text-base" />

                    {showMinute && (
                      <div className="absolute top-8.75 left-0 bg-EEEEEE py-1 h-50 overflow-auto w-full font-roboto font-semibold text-base text-black/80 border border-gray-300 rounded-md">
                        {Array.from({ length: 59 }, (_, index) => {
                          const minute = String(index + 1).padStart(2, "0");

                          return (
                            <p
                              key={minute}
                              onClick={() => handleMinuteSelected(minute)}
                              className="cursor-pointer"
                            >
                              {minute}
                            </p>
                          );
                        })}
                      </div>
                    )}
                  </div>
                </Flex>
              </Flex>
            </div>
          </Flex>

          {/* Description */}
          <div className="mt-4">
            <SubmitP text="Description" requerment={false} />

            <textarea
              placeholder="Write about your project"
              className="mt-2 h-32 w-full rounded-2xl border-2 border-gray-300 px-4 py-2 text-base font-medium font-poppins italic outline-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <Schedule
              onClick={onScheduleClickBtn}
              hover={true}
              text="submit here"
              className="mt-3 text-xl! bg-seagreen hover:shadow-standard-shadow"
            />
          </div>
        </div>
      </Flex>
    </section>
  );
};

export default ScheduleButton;
