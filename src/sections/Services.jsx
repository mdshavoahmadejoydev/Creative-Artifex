import React from 'react'
import MobileApp from '../assets/servicesicons/application.png'
import GraphicDesign from '../assets/servicesicons/graphicDesign.png'
import UiuxDesign from '../assets/servicesicons/uiux.png'
import VideoAnimation from '../assets/servicesicons/videoAnimation.png'
import WordpressDevelopment from '../assets/servicesicons/wordpressDevelopment.png'
import SoftwareDevelopment from '../assets/servicesicons/softwareDevelopment.png'
import WebsiteDevelopment from '../assets/servicesicons/Website-Development.png'
import shopifyStoreDevelopment from '../assets/servicesicons/shopifyStoreDevelopment.png'


import Container from '../components/Container'
import Title from '../components/Title'

import P from '../components/P'
import Flex from '../components/Flex'
import ServicesCard from '../components/ServicesCard'
import { Link } from 'react-router-dom'

const Services = () => {


  const allservicesarray = [
    {
      name: "UI/UX Design",
      path: "/services/graphic-multimedia/uiux-design",
       image: UiuxDesign,
    },
    {
       name: "Website Development",
       path: "/services/web-software/website-development",
       image: WebsiteDevelopment,
     },
     {
       name: "Software Development",
       path: "/services/web-software/software-development",
       image: SoftwareDevelopment,
     },
     {
       name: "WordPress Development",
       path: "/services/web-software/wordpress-development",
       image: WordpressDevelopment,
     },
     {
       name: "Shopify Store Design Development",
       path: "/services/web-software/shopify-store-design-development",
       image: shopifyStoreDevelopment,
     },
     {
       name: "Mobile Application Development",
       path: "/services/web-software/mobile-application-development",
       image: MobileApp,
     },
     {
      name: "Logo Design",
      path: "/services/graphic-multimedia/logo-design",
       image: GraphicDesign,
    },
    {
      name: "Cover Design",
      path: "/services/graphic-multimedia/cover-design",
       image: GraphicDesign,
    },
    {
      name: "ads design",
      path: "/services/graphic-multimedia/ads-design",
       image: GraphicDesign,
    },
    {
      name: "Thumbnail Design",
      path: "/services/graphic-multimedia/thumbnail-design",
       image: MobileApp,
    },
    {
      name: "Business Card Design",
      path: "/services/graphic-multimedia/business-card-design",
       image: GraphicDesign,
    },
    {
      name: "Video Animation",
      path: "/services/graphic-multimedia/video-animation",
       image: VideoAnimation,
    },
  ]


  return (
    <section id='servidesSection' className='bg-soft-gray py-94 overflow-x-hidden  scroll-mt-20'>
      <Container>
        <Title text={`Our Services`} className={`text-center`} />
        <P text={`From design to development, we craft digital  experiences that elevate your brand and drive real growth.`} className={`w-591 text-center mx-auto mt-4 mb-55`} />

        {/* services card */}
        <Flex className="flex-wrap justify-center gap-8 items-stretch">

          {
            allservicesarray.map((item) => (
              <Link to={item.path} key={item.path} className='flex'>
                <ServicesCard src={item.image} text={item.name} />
              </Link>
            ))
          }
        </Flex>
      </Container>
    </section>
  )
}

export default Services