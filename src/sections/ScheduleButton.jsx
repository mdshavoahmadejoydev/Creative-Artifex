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

const SubmitMsg = ({onScheduleClick}) => {

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

  return (
    <section className="absolute top-0 left-0 bg-black/70 w-screen h-screen z-20">
      <Flex className=" w-[60vw] pt-[120px] mx-auto">
        <div className="relative w-full bg-white px-9 py-5 rounded-2xl">
        <IoClose onClick={onScheduleClick} className="absolute top-2 right-4 cursor-pointer text-4xl text-red-500!" />
        {/* Submit Message Form */}
          <SubmitP text="Submit message" className="text-2xl! font-bold!" />

          <Flex className={`justify-between gap-8 mt-1 `}>
            {/* Name */}
            <div className="w-1/2">
              <SubmitP text="Your Name" requerment={true} className={`text-base!`}/>

              <Input placeholder="Enter Your Full Name ..."  className={`rounded-md! text-sm! py-1!`}/>
            </div>

            {/* Email */}
            <div className="w-1/2">
              <SubmitP text="Email Address" requerment={true} className={`text-base!`}/>

              <Input placeholder="Enter Your Email ..."  className={`rounded-md! text-sm! py-1!`}/>
            </div>
          </Flex>


          <Flex className={`justify-between gap-8 mt-2`}>
            {/* Phone Number */}
            <div className="w-1/2">
              <SubmitP text="Phone number" requerment={false} className={`text-base!`}/>

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

                            <span className="text-black/70">{country.name}</span>

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
                  type="date"
                  className="mt-1 w-33.5 rounded-md border-2 border-gray-300 bg-white px-1 py-1 font-poppins font-semibold text-sm! text-gray-600 outline-none transition-all duration-300 [&::-webkit-calendar-picker-indicator]:scale-125 [&::-webkit-calendar-picker-indicator]:cursor-pointer"
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
                        <p
                          onClick={() => handleHourSelect("01")}
                          className="cursor-pointer"
                        >
                          01
                        </p>
                        <p
                          onClick={() => handleHourSelect("02")}
                          className="cursor-pointer"
                        >
                          02
                        </p>
                        <p
                          onClick={() => handleHourSelect("03")}
                          className="cursor-pointer"
                        >
                          03
                        </p>
                        <p
                          onClick={() => handleHourSelect("04")}
                          className="cursor-pointer"
                        >
                          04
                        </p>
                        <p
                          onClick={() => handleHourSelect("05")}
                          className="cursor-pointer"
                        >
                          05
                        </p>
                        <p
                          onClick={() => handleHourSelect("06")}
                          className="cursor-pointer"
                        >
                          06
                        </p>
                        <p
                          onClick={() => handleHourSelect("07")}
                          className="cursor-pointer"
                        >
                          07
                        </p>
                        <p
                          onClick={() => handleHourSelect("08")}
                          className="cursor-pointer"
                        >
                          08
                        </p>
                        <p
                          onClick={() => handleHourSelect("09")}
                          className="cursor-pointer"
                        >
                          09
                        </p>
                        <p
                          onClick={() => handleHourSelect("10")}
                          className="cursor-pointer"
                        >
                          10
                        </p>
                        <p
                          onClick={() => handleHourSelect("11")}
                          className="cursor-pointer"
                        >
                          11
                        </p>
                        <p
                          onClick={() => handleHourSelect("12")}
                          className="cursor-pointer"
                        >
                          12
                        </p>
                        <p
                          onClick={() => handleHourSelect("13")}
                          className="cursor-pointer"
                        >
                          13
                        </p>
                        <p
                          onClick={() => handleHourSelect("14")}
                          className="cursor-pointer"
                        >
                          14
                        </p>
                        <p
                          onClick={() => handleHourSelect("15")}
                          className="cursor-pointer"
                        >
                          15
                        </p>
                        <p
                          onClick={() => handleHourSelect("16")}
                          className="cursor-pointer"
                        >
                          16
                        </p>
                        <p
                          onClick={() => handleHourSelect("17")}
                          className="cursor-pointer"
                        >
                          17
                        </p>
                        <p
                          onClick={() => handleHourSelect("18")}
                          className="cursor-pointer"
                        >
                          18
                        </p>
                        <p
                          onClick={() => handleHourSelect("19")}
                          className="cursor-pointer"
                        >
                          19
                        </p>
                        <p
                          onClick={() => handleHourSelect("20")}
                          className="cursor-pointer"
                        >
                          20
                        </p>
                        <p
                          onClick={() => handleHourSelect("21")}
                          className="cursor-pointer"
                        >
                          21
                        </p>
                        <p
                          onClick={() => handleHourSelect("22")}
                          className="cursor-pointer"
                        >
                          22
                        </p>
                        <p
                          onClick={() => handleHourSelect("23")}
                          className="cursor-pointer"
                        >
                          23
                        </p>
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
                        <p
                          onClick={() => handleMinuteSelected("01")}
                          className="cursor-pointer"
                        >
                          01
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("02")}
                          className="cursor-pointer"
                        >
                          02
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("03")}
                          className="cursor-pointer"
                        >
                          03
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("04")}
                          className="cursor-pointer"
                        >
                          04
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("05")}
                          className="cursor-pointer"
                        >
                          05
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("06")}
                          className="cursor-pointer"
                        >
                          06
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("07")}
                          className="cursor-pointer"
                        >
                          07
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("08")}
                          className="cursor-pointer"
                        >
                          08
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("09")}
                          className="cursor-pointer"
                        >
                          09
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("10")}
                          className="cursor-pointer"
                        >
                          10
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("11")}
                          className="cursor-pointer"
                        >
                          11
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("12")}
                          className="cursor-pointer"
                        >
                          12
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("13")}
                          className="cursor-pointer"
                        >
                          13
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("14")}
                          className="cursor-pointer"
                        >
                          14
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("15")}
                          className="cursor-pointer"
                        >
                          15
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("16")}
                          className="cursor-pointer"
                        >
                          16
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("17")}
                          className="cursor-pointer"
                        >
                          17
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("18")}
                          className="cursor-pointer"
                        >
                          18
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("19")}
                          className="cursor-pointer"
                        >
                          19
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("20")}
                          className="cursor-pointer"
                        >
                          20
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("21")}
                          className="cursor-pointer"
                        >
                          21
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("22")}
                          className="cursor-pointer"
                        >
                          22
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("23")}
                          className="cursor-pointer"
                        >
                          23
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("24")}
                          className="cursor-pointer"
                        >
                          24
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("25")}
                          className="cursor-pointer"
                        >
                          25
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("26")}
                          className="cursor-pointer"
                        >
                          26
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("27")}
                          className="cursor-pointer"
                        >
                          27
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("28")}
                          className="cursor-pointer"
                        >
                          28
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("29")}
                          className="cursor-pointer"
                        >
                          29
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("30")}
                          className="cursor-pointer"
                        >
                          30
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("31")}
                          className="cursor-pointer"
                        >
                          31
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("32")}
                          className="cursor-pointer"
                        >
                          32
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("33")}
                          className="cursor-pointer"
                        >
                          33
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("34")}
                          className="cursor-pointer"
                        >
                          34
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("35")}
                          className="cursor-pointer"
                        >
                          35
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("36")}
                          className="cursor-pointer"
                        >
                          36
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("37")}
                          className="cursor-pointer"
                        >
                          37
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("38")}
                          className="cursor-pointer"
                        >
                          38
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("39")}
                          className="cursor-pointer"
                        >
                          39
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("40")}
                          className="cursor-pointer"
                        >
                          40
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("41")}
                          className="cursor-pointer"
                        >
                          41
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("42")}
                          className="cursor-pointer"
                        >
                          42
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("43")}
                          className="cursor-pointer"
                        >
                          43
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("44")}
                          className="cursor-pointer"
                        >
                          44
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("45")}
                          className="cursor-pointer"
                        >
                          45
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("46")}
                          className="cursor-pointer"
                        >
                          46
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("47")}
                          className="cursor-pointer"
                        >
                          47
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("48")}
                          className="cursor-pointer"
                        >
                          48
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("49")}
                          className="cursor-pointer"
                        >
                          49
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("50")}
                          className="cursor-pointer"
                        >
                          50
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("51")}
                          className="cursor-pointer"
                        >
                          51
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("52")}
                          className="cursor-pointer"
                        >
                          52
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("53")}
                          className="cursor-pointer"
                        >
                          53
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("54")}
                          className="cursor-pointer"
                        >
                          54
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("55")}
                          className="cursor-pointer"
                        >
                          55
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("56")}
                          className="cursor-pointer"
                        >
                          56
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("57")}
                          className="cursor-pointer"
                        >
                          57
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("58")}
                          className="cursor-pointer"
                        >
                          58
                        </p>
                        <p
                          onClick={() => handleMinuteSelected("59")}
                          className="cursor-pointer"
                        >
                          59
                        </p>
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
            onClick={onScheduleClick}
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

export default SubmitMsg;
