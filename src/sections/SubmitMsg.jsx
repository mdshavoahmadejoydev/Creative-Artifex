import React from 'react'
import Container from '../components/Container';
import Flex from '../components/Flex';
import Schedule from '../components/Schedule';
import SubmitP from '../components/SubmitP';
import Input from '../components/Input';
import { useState, useEffect, useRef } from 'react';
import { MdAddCall, MdEmail, MdLocationOn, MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

import ReactCountryFlag from "react-country-flag";
import { FaImage } from 'react-icons/fa';

const SubmitMsg = () => {
  
  const [search, setSearch] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const options = [
    "UI/UX design",
    "graphic design",
    "website development",
    "website design",
  ];

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(search.toLowerCase()),
  );

  const dropdownRef = useRef(null);
  const countryDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowOptions(false);
      }

      if (
        countryDropdownRef.current &&
        !countryDropdownRef.current.contains(event.target)
      ) {
        setShowCountries(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



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
    <section className="bg-seagreen py-60">
      <Container className="">
        <Flex className={`justify-between`}>
          <div className="w-[57%] bg-white px-9 py-7 rounded-2xl">
            <SubmitP
              text={`Submit message`}
              className={`text-3xl! font-bold!`}
            />

            <div className="mt-4">
              <SubmitP text={`Your Name`} requerment={true} />

              <Input placeholder={`Enter Your Full Name ...`} />
            </div>

            <div className="mt-4">
              <SubmitP text={`Phone number`} requerment={true} />

              <div ref={countryDropdownRef} className="relative shrink-0 mt-2">
                <div className="flex w-full items-center rounded-full border-2 border-gray-300 px-4 py-1">
                  {/* Country Selector */}
                  <div className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setShowCountries(!showCountries)}
                      className="flex items-center gap-2 font-poppins text-base font-medium"
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
                        <MdKeyboardArrowUp className="text-2xl text-black/70" />
                      ) : (
                        <MdKeyboardArrowDown className="text-2xl text-black/70" />
                      )}
                    </button>

                    {/* Country Dropdown */}
                    {showCountries && (
                      <div className="absolute left-0 top-full z-30 mt-2 w-52 rounded-lg border border-gray-200 bg-white shadow-lg">
                        {countries.map((country, index) => (
                          <div
                            key={index}
                            onClick={() => {
                              setSelectedCountry(country);
                              setShowCountries(false);
                            }}
                            className="flex cursor-pointer items-center gap-3 px-4 py-2 text-base font-medium font-poppins hover:bg-gray-100"
                          >
                            <span className="text-xl">{country.flag}</span>

                            <span className="text-black/70">
                              {country.name}
                            </span>

                            <span className="ml-auto text-black/70">
                              {country.code}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Country Code */}
                  <span className="ml-3 border-l-2 border-gray-300 pl-3 text-base font-medium font-poppins text-black/70">
                    {selectedCountry.code}
                  </span>

                  {/* Phone Number */}
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="ml-3 w-full border-none bg-transparent py-1 text-base font-medium font-poppins outline-none text-black/90"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4">
              <SubmitP text={`Service catagory`} requerment={false} />

              <div ref={dropdownRef} className="relative">
                <input
                  type="text"
                  placeholder="Enter Service Catagory ..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowOptions(true);
                  }}
                  className="w-full py-1 pr-10 text-base text-black/70 font-medium border-2 border-gray-300 rounded-full outline-none font-poppins px-4 mt-2"
                />

                <button
                  type="button"
                  onClick={() => setShowOptions(!showOptions)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 mt-1"
                >
                  {showOptions ? (
                    <MdKeyboardArrowUp className="text-2xl text-black/50" />
                  ) : (
                    <MdKeyboardArrowDown className="text-2xl text-black/50" />
                  )}
                </button>

                {/* Dropdown */}
                {showOptions && (
                  <div className="absolute left-0 top-full z-20 mt-1 w-full rounded-md bg-white shadow-lg border border-gray-200">
                    {filteredOptions.length > 0 ? (
                      filteredOptions.map((option, index) => {
                        const matchIndex = option
                          .toLowerCase()
                          .indexOf(search.toLowerCase());

                        const beforeMatch = option.slice(0, matchIndex);
                        const matchText = option.slice(
                          matchIndex,
                          matchIndex + search.length,
                        );
                        const afterMatch = option.slice(
                          matchIndex + search.length,
                        );

                        return (
                          <div
                            key={index}
                            onClick={() => {
                              setSearch(option);
                              setShowOptions(false);
                            }}
                            className="cursor-pointer px-4 py-3 text-base font-medium font-poppins hover:bg-gray-100"
                          >
                            <span className="text-black/50">{beforeMatch}</span>
                            <span className="text-black">{matchText}</span>
                            <span className="text-black/50">{afterMatch}</span>
                          </div>
                        );
                      })
                    ) : (
                      <div className="px-4 py-3 text-base font-medium font-poppins text-black/50">
                        No service found
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 cursor-pointer">
              <SubmitP text={`Ubload Images`} requerment={false} className={`inline-block`} /> 
              <FaImage className='text-2xl inline-block text-black/90 mx-2' />
            </div>

            <div className="mt-4">
              <SubmitP text={`Description`} requerment={false} />

              <textarea
                type="text"
                placeholder="Write about your project"
                className="w-full py-1 text-base font-medium border-2 border-gray-300 rounded-2xl outline-none font-poppins italic h-32 px-4 mt-2"
              />
            </div>

            <div className="flex justify-end">
              <Schedule
                text="submit here"
                className={`bg-seagreen mt-6 hover:shadow-lg`}
              />
            </div>
          </div>

          <div className="w-[40%] bg-white px-9 py-7 rounded-2xl">
            <SubmitP
              text={`Feel free to Direct message or call to us.`}
              className={`text-3xl! font-bold!`}
            />

            {/* Phone */}
            <div className="flex items-center gap-3 my-6 text-black/70">
              <MdAddCall className="text-2xl " />

              <SubmitP text={`+8801602282313`} className={`text-black/70`} />
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 mb-3 my-6 text-black/70">
              <MdEmail className="text-2xl" />

              <SubmitP
                text={`mdshavoahmadejoy@gmail.com`}
                className={`text-black/70`}
              />
            </div>

            <div className="flex items-center gap-3 mb-3 my-6 text-black/70">
              <MdLocationOn className="text-3xl shrink-0 mt-1" />

              <SubmitP
                text={`House #417, (4th Floor ) Borogram Chairmanbari Mor, Kamranggirchor Dhaka, Dhaka, Bangladesh, 1211 `}
                className="text-black/70"
              />
            </div>
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default SubmitMsg