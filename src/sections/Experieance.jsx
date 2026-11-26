import React, { useEffect, useState } from 'react'
import ExperienceImg from '../assets/ExperienceImg.svg'
import Container from '../components/Container'
import Image from '../components/Image'
import Title from '../components/Title'
import Flex from '../components/Flex'
import P from '../components/P'
import Schedule from '../components/Schedule'

const Experieance = ({ onScheduleClick }) => {
  // schedule meeting button function
  const [showScheduleBox, setShowScheduleBox] = useState(false);
  const handleMeetingTime = () => {
    setShowScheduleBox(!showScheduleBox);
  };

  // 500 + counter animation

  const [count500, setCount500] = useState(0);
  const [count400, setCount400] = useState(0);
  const [count4, setCount4] = useState(0);

  useEffect(() => {
    const duration = 4000;
    const incrementTime = 20;
    const steps = duration / incrementTime;

    const interval = setInterval(() => {
      setCount500((prev) => Math.min(500, prev + 500 / steps));
      setCount4((prev) => Math.min(4, prev + 4 / steps));
      setCount400((prev) => Math.min(400, prev + 400 / steps));
    }, incrementTime);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className="bg-light-gray py-10 sm:py-16 xl:py-80 overflow-x-hidden">
      <Container className={``}>
        <div className={`block w-screen xl:w-full xl:flex items-center`}>
          {/* left part */}
          <div className="w-[320px] sm:w-[640px] xl:w-1/2 relative mx-auto">
            <Image
              src={ExperienceImg}
              alt={`image`}
              className={`h-[220px] sm:h-[400px]  xl:h-416 mx-auto`}
            />
            <div class="absolute top-[80px] sm:top-[150px] xl:top-156 left-[54px] sm:left-[132px] xl:left-32">
              <p class="text-sm sm:text-2xl xl:text-2xl font-['Poppins'] font-semibold text-white text-center">
                Project <br></br> Completed
              </p>
              <p className="text-base sm:text-3xl xl:text-4xl font-['Poppins'] font-bold text-white text-center">
                {Math.floor(count500)}+
              </p>
            </div>
            <div class="absolute top-[38px] sm:top-[80px] xl:top-80 left-[177px]  sm:left-[353px] xl:left-360">
              <p class="text-sm sm:text-2xl xl:text-2xl font-['Poppins'] font-semibold text-white text-center">
                {" "}
                Years Of <br></br> Experience{" "}
              </p>
              <p className="text-base sm:text-3xl xl:text-4xl font-['Poppins'] font-bold text-white text-center">
                {String(Math.floor(count4)).padStart(2, "0")}+
              </p>
            </div>
            <div class="absolute top-[120px]  sm:top-[225px] xl:top-232 left-[177px]  sm:left-[353px] xl:left-360">
              <p class="text-sm  sm:text-2xl xl:text-2xl font-['Poppins'] font-semibold text-white text-center">
                Project <br></br> Completed
              </p>
              <p className="text-base sm:text-3xl xl:text-4xl font-['Poppins'] font-bold text-white text-center">
                {Math.floor(count400)}+
              </p>
            </div>
          </div>

          {/* Right part */}
          <div className="w-full mx-auto mt-6 sm:mt-14 xl:mt-0 xl:w-1/2">
            <Title text={`Inside Creative Artifex`} className={`text-center! xl:text-start!`}/>
            <P
              text={`Creative Artifex is a creative design and development agency  dedicated to empowering startups, individuals,  and businesses in their growth journeys. By combining strategic  thinking with innovative design and robust development.  thinking with innovative design and robust development.`}
              className={`xl:w-560 mt-3 px-3.5 xl:px-0 xl:mt-15 xl:ml-21 mb-29 text-center xl:text-start`}
            />
            <div className='flex justify-center xl:justify-start'>
              <Schedule
              onClick={onScheduleClick}
              text={`Schedule A Meeting`}
              calender={true}
              hover={true}
              className={`bg-seagreen`}
            />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Experieance