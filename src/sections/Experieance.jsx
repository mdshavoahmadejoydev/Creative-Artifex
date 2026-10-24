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


  // useEffect(() => {
  //   const target = 500;
  //   const duration = 6000; // 2 seconds
  //   const incrementTime = 20;
  //   const increment = target / (duration / incrementTime);

  //   const interval = setInterval(() => {
  //     setCount((prev) => {
  //       if (prev >= target) {
  //         clearInterval(interval);
  //         return target;
  //       }

  //       return Math.min(target, Math.ceil(prev + increment));
  //     });
  //   }, incrementTime);

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="bg-light-gray py-80 overflow-x-hidden">
      <Container>
        <Flex className={`items-center`}>
          {/* left part */}
          <div className="w-1/2 relative">
            <Image
              src={ExperienceImg}
              alt={`image`}
              className={`h-416 mx-auto`}
            />
            <div class="absolute top-156 left-32">
              <p class="text-2xl font-['Poppins'] font-semibold text-white text-center">
                Project <br></br> Completed
              </p>
              <p className="text-4xl font-['Poppins'] font-bold text-white text-center">
                {Math.floor(count500)}+
              </p>
            </div>
            <div class="absolute top-80 left-360">
              <p class="text-2xl font-['Poppins'] font-semibold text-white text-center">
                {" "}
                Years Of <br></br> Experience{" "}
              </p>
              <p className="text-4xl font-['Poppins'] font-bold text-white text-center">
                {String(Math.floor(count4)).padStart(2, "0")}+
              </p>
            </div>
            <div class="absolute top-232 left-360">
              <p class="text-2xl font-['Poppins'] font-semibold text-white text-center">
                Project <br></br> Completed
              </p>
              <p className="text-4xl font-['Poppins'] font-bold text-white text-center">
                {Math.floor(count400)}+
              </p>
            </div>
          </div>

          {/* Right part */}
          <div className="w-1/2">
            <Title text={`Inside Creative Artifex`} />
            <P
              text={`Creative Artifex is a creative design and development agency  dedicated to empowering startups, individuals,  and businesses in their growth journeys. By combining strategic  thinking with innovative design and robust development.  thinking with innovative design and robust development.`}
              className={`w-560 mt-15 ml-21 mb-29`}
            />
            <Schedule
              onClick={onScheduleClick}
              text={`Schedule A Meeting`}
              calender={true}
              hover={true}
              className={`bg-seagreen`}
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
};

export default Experieance