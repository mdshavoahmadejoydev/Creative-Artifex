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
    <section id='servidesSection' className='bg-soft-gray py-94 overflow-x-hidden  scroll-mt-20'>
      <Container>
        <Title text={`Our Services`} className={`text-center`} />
        <P text={`From design to development, we craft digital  experiences that elevate your brand and drive real growth.`} className={`w-591 text-center mx-auto mt-4 mb-55`} />

        {/* services card */}
        <Flex className="flex-wrap justify-center gap-8">
          <ServicesCard src={Service3} text={`UI/UX Design`} />
          <ServicesCard src={Service6} text={`Website Development`} />
          <ServicesCard src={Service6} text={`Software Development`} />
          <ServicesCard src={Service1} text={`App Development`} />
          <ServicesCard src={Service5} text={`WordPress Development`} />
          <ServicesCard src={Service6} text={`Shopify Store Design Development`} />
          <ServicesCard src={Service2 } text={`Logo Design`} />
          


          <ServicesCard src={Service2} text={`Cover Design`} />

          <ServicesCard src={Service2} text={`Ads Design`} />

          <ServicesCard src={Service2} text={` Thumbnail Design`} />

          <ServicesCard src={Service2} text={`Business Card Design`} />
          <ServicesCard src={Service4} text={`Video Editing & Animations`} />
        </Flex>
      </Container>
    </section>
  )
}

export default Services