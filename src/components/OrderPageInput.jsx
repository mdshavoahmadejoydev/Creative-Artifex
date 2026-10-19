import React from "react";
import { useEffect, useRef, useState } from "react";

const OrderPageInput = ({ fullName, placeholder, id, icon }) => {
  const countries = [
    { name: "Bangladesh", countryCode: "BD", code: "+880" },
    { name: "India", countryCode: "IN", code: "+91" },
    { name: "United States", countryCode: "US", code: "+1" },
    { name: "United Kingdom", countryCode: "UK", code: "+44" },
    { name: "Pakistan", countryCode: "PK", code: "+92" },
    { name: "Canada", countryCode: "CA", code: "+1" },
    { name: "Australia", countryCode: "AU", code: "+61" },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showCountries, setShowCountries] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const countryDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
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

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-poppins text-base text-black/80 font-semibold mb-2"
      >
        {fullName} {icon && <span className="text-red-500">*</span>}
      </label>

      {id === "phone" ? (
        <div
          ref={countryDropdownRef}
          className="relative flex items-center w-full border border-slate-400 rounded-lg focus-within:border-cyan-500"
        >
          {/* Country selector button */}
          <button
            type="button"
            onClick={() => setShowCountries((prev) => !prev)}
            className="flex items-center gap-1 px-1 py-3  border-slate-400 whitespace-nowrap text-black/70 font-roboto font-medium cursor-pointer"
          >
            <span className="">{selectedCountry.countryCode}</span>
            <span className="">{selectedCountry.code}</span>
          </button>

          {/* Phone number input */}
          <input
            id={id}
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={placeholder}
            className="w-full min-w-0 px-1.5 py-3 rounded-r-lg outline-none text-black/70 placeholder:font-roboto font-medium"
          />

          {/* Country dropdown */}

          {showCountries && (
            <div className="absolute p-2 top-full left-0 mt-2 w-68.25 bg-white border border-slate-200 rounded-lg shadow-lg z-50">
              <div className="max-h-[220px] overflow-y-auto">
                {countries.map((country) => (
                  <button
                    key={country.countryCode + country.name}
                    type="button"
                    onClick={() => {
                      setSelectedCountry(country);
                      setShowCountries(false);
                    }}
                    className="flex items-center justify-between gap-3 w-full px-2 py-2 text-left font-roboto font-medium font-base rounded-md hover:bg-slate-100"
                  >
                    <span>{country.name}</span>
                    <span>{country.code}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ) : (
        <input
          id={id}
          type="text"
          placeholder={placeholder}
          className="w-full border border-slate-400 rounded-lg px-3 py-3 outline-none focus:border-cyan-500 placeholder:text-black/70 placeholder:font-roboto placeholder:font-medium "
        />
      )}
    </div>
  );
};

export default OrderPageInput;
