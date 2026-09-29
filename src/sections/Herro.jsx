import React from 'react'

import creativeHero from '../assets/creativeherro.svg'
import Bennermen from '../assets/Bennermen.png'
import Container from '../components/Container'
import Schedule from '../components/Schedule'
import Image from '../components/Image'
import { FaSearch } from 'react-icons/fa'

const Hero = () => {
  return (
    <section
      className="h-657 p-0 w-full bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${creativeHero})` }}
    >
      <Container className={`relative`}>
        <div className="pt-74">
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

        <div class="searchBox absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 ">
          <div class="w-335">
            <div class="w-full flex mb-2">
              <input
                type="text"
                placeholder="Search your services..."
                class="w-4/5 bg-white pl-6 pr-2 py-2.5  rounded-l-full outline-none text-2xl font-poppins font-medium text-gray-600 placeholder:text-gray-600"
              />
              <FaSearch className='w-1/5 text-2xl text-gray-600 bg-white py-3.5 box-content rounded-r-full flex items-center justify-center   hover:hover:text-red-500 duration-150' />

            </div>
            <div class="w-full flex justify-center">
              <button class="text-2xl font-poppins font-bold px-9 py-1.5 text-white bg-blue-800 rounded-full border-2 border-cyan-400    hover:hover:border-red-500 duration-150">
                ORDER NOW
              </button>
            </div>
          </div>
        </div>

        <Image src={Bennermen} alt={`img`} className={`h-654 w-491 object-cover object-center absolute bottom-0 -right-1/10`} />


      </Container>
    </section>
  );
}

export default Hero
