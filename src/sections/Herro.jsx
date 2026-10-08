import React, { useState } from 'react'

import creativeHero from '../assets/creativeherro.svg'
import Bennermen from '../assets/Bennermen.png'
import Container from '../components/Container'
import Schedule from '../components/Schedule'
import Image from '../components/Image'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {

    const [search, setSearch] = useState("");
    const [showOptions, setShowOptions] = useState(false);

    const services = [
      "Graphics & Design",
      "UI/UX Design",
      "Website Development",
      "Software Development",
      "Mobile Application Development",
      "WordPress Development",
      "Shopify Store Design & Development",
      "Video Animations",
      "Logo Design",
      "Cover Design",
      "Ads Design",
      "Thumbnail Design",
      "Business Card Design",
      "Poster Design",
      "Flyer Design",
      "Apps Design",
      "Website Design",
      "Desktop Software- design",
      "Thumbel Design",
      "Apps Design",
      "Desktop Software- design",
    ];

    const filteredServices = services.filter((service) =>
      service.toLowerCase().includes(search.toLowerCase()),
    );


  return (
    <section
      className={`h-186.75 p-0 w-full bg-cover bg-center bg-no-repeat overflow-hidden`}
      style={{ backgroundImage: `url(${creativeHero})` }}
    >
      <Container className={`relative`}>
        <div className="pt-40.25">
          <p className="font-roboto font-extrabold text-white text-70 leading-24">
            A Clean and Smart Solution{" "}
          </p>
          <p className="font-roboto font-extrabold text-white text-70 leading-24">
            Designed to <span className="text-74">Grow</span> Your{" "}
          </p>
          <p className="font-roboto font-extrabold text-white text-80 leading-24">
            Business
          </p>
        </div>
        <div className="ml-23 my-7">
          <button className="px-30 font-poppins py-2 te bg-Royal-Purple text-white italic font-extrabold border border-white rounded-full text-4xl cursor-pointer hover:border-red-500 duration-200">
            Hire Us
          </button>
          <Schedule
            text={`Schedule A Meeting`}
            className={`block  mt-3.5`}
            calender={true}
            hover={true}
          />
        </div>
        <p className="font-poppins font-medium text-2xl w-826 pb-6 text-white/90">
          Creative provides creative and technology-driven services that help
          businesses grow through impactful design, powerful software, and
          engaging digital experiences.{" "}
        </p>

        <div class="searchBox absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-2/8 ">
          <div class="w-335">
            <div className="relative w-full mb-2">
              {/* Search Input */}
              <div className="w-full flex">
                <input
                  type="text"
                  placeholder="Search your services..."
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowOptions(true);
                  }}
                  className="w-4/5 bg-white pl-6 pr-2 py-2.5 rounded-l-full outline-none text-2xl font-poppins font-medium text-gray-700 placeholder:text-gray-700"
                />

                <FaSearch className="w-1/5 text-2xl text-gray-600 bg-white py-3.5 box-content rounded-r-full flex items-center justify-center hover:text-red-500 duration-150" />
              </div>

              {/* Dropdown */}
              {showOptions && search && (
                <div className="absolute left-0 top-14 z-50 w-full bg-soft-gray shadow-lg rounded-md overflow-hidden max-h-77.75 overflow-y-scroll">
                  {filteredServices.length > 0 ? (
                    filteredServices.map((service, index) => {
                      const matchIndex = service
                        .toLowerCase()
                        .indexOf(search.toLowerCase());

                      const beforeMatch = service.slice(0, matchIndex);

                      const matchText = service.slice(
                        matchIndex,
                        matchIndex + search.length,
                      );

                      const afterMatch = service.slice(
                        matchIndex + search.length,
                      );

                      return (
                        <div
                          key={index}
                          onClick={() => {
                            setSearch(service);
                            setShowOptions(false);
                          }}
                          className="cursor-pointer px-6 py-3 text-xl font-poppins font-medium hover:bg-gray-100"
                        >
                          <span className="text-gray-600/50">
                            {beforeMatch}
                          </span>

                          <span className="text-gray-600">{matchText}</span>

                          <span className="text-gray-600/50">{afterMatch}</span>
                        </div>
                      );
                    })
                  ) : (
                    <div className="px-6 py-3 text-xl font-poppins text-gray-600/50">
                      No service found
                    </div>
                  )}
                </div>
              )}
            </div>




            <div class="w-full flex justify-center">
              <button class="text-2xl font-poppins font-bold px-9 py-1 text-white bg-blue-800 rounded-full border-2 border-cyan-400    hover:hover:border-red-500 duration-150">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>

        <Image
          src={Bennermen}
          alt={`img`}
          className={`h-654 w-491 object-cover object-center absolute bottom-0 -right-1/10`}
        />
      </Container>
    </section>
  );
}

export default Hero
