import React from 'react'
import ExperienceImg from '../assets/ExperienceImg.svg'
import Container from '../components/Container'
import Image from '../components/Image'
import Title from '../components/Title'
import Flex from '../components/Flex'
import P from '../components/P'
import Schedule from '../components/Schedule'

const Experieance = () => {
  return (
    <section className="bg-light-gray py-80">
      <Container>
        <Flex className={`items-center`}>
        {/* left part */}
          <div className="w-1/2 relative">
            <Image src={ExperienceImg} alt={`image`} className={`h-416 mx-auto`} />
            <div class="absolute top-156 left-32">
              <p class="text-2xl font-['Poppins'] font-semibold text-white text-center">
                Project <br></br> Completed
              </p>
              <p class="text-4xl font-['Poppins'] font-bold text-white text-center">
                500+
              </p>
            </div>
            <div class="absolute top-80 left-360">
              <p class="text-2xl font-['Poppins'] font-semibold text-white text-center">
                {" "}
                Years Of <br></br> Experience{" "}
              </p>
              <p class="text-4xl font-['Poppins'] font-bold text-white text-center">
                04+
              </p>
            </div>
            <div class="absolute top-232 left-360">
              <p class="text-2xl font-['Poppins'] font-semibold text-white text-center">
                Project <br></br> Completed
              </p>
              <p class="text-4xl font-['Poppins'] font-bold text-white text-center">
                500+
              </p>
            </div>
          </div>

          {/* Right part */}
          <div className="w-1/2">
            <Title text={`Inside Creative Artifex`}/>
            <P text={`Naiyoj Solutions is a creative design and development agency  dedicated to empowering startups, individuals,  and businesses in their growth journeys. By combining strategic  thinking with innovative design and robust development.  thinking with innovative design and robust development.`} className={`w-560 mt-15 ml-21 mb-29`}/>
            <Schedule text={`Schedule A Meeting`} calender={true} hover={true} className={`bg-seagreen`} />
          </div>
        </Flex>
      </Container>
    </section>
  );
}

export default Experieance