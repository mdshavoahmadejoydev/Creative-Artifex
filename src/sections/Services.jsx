import React from 'react'
import Service1 from '../assets/servicesicons/application.png'
import Service2 from '../assets/servicesicons/graphicDesign.png'
import Service3 from '../assets/servicesicons/uiux.png'
import Service4 from '../assets/servicesicons/videoAnimation.png'
import Service5 from '../assets/servicesicons/wordpressDevelopment.png'
import Service6 from '../assets/servicesicons/softwareDevelopment.png'
import Container from '../components/Container'
import Title from '../components/Title'

import P from '../components/P'
import Flex from '../components/Flex'
import ServicesCard from '../components/ServicesCard'

const Services = () => {
  return (
    <section className='bg-soft-gray py-94 overflow-x-hidden'>
      <Container>
        <Title text={`Our Services`} className={`text-center`} />
        <P text={`From design to development, we craft digital  experiences that elevate your brand and drive real growth.`} className={`w-591 text-center mx-auto mt-4 mb-55`} />

        {/* services card */}
        <Flex className="flex-wrap justify-around gap-10">
          <ServicesCard src={Service3} text={`UI/UX Development`} />
          <ServicesCard src={Service6} text={`Website Development`} />
          <ServicesCard src={Service5} text={`App Development`} />
          <ServicesCard src={Service1} text={`Graphic & Design`} />
          <ServicesCard src={Service4} text={`Video Editing & Animations`} />
          <ServicesCard src={Service2 } text={`Logo Design`} />
          <ServicesCard src={Service6} text={`Website Development`} />
        </Flex>
      </Container>
    </section>
  )
}

export default Services