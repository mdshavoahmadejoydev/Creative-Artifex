import React from 'react'
import Footerlogo from '../assets/creativeArtifexLogo.png'
import FooterlogoTagline from '../assets/creativeArtifexLogoTagline.png'

import Image from '../components/Image'
import Container from '../components/Container'
import Flex from '../components/Flex'
import FP from '../components/FP'
import FooterTitle from '../components/FooterTitle'
import { FaChevronCircleUp, FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <footer className="bg-seagreen pt-83 pb-73 border-b border-white/50 overflow-x-hidden">
      <Container>
        <Flex>
          <div className="w-1/2">
            <Flex className="w-1/2 gap-3 items-center">
              <Image
                className={`h-55 py-18 box-content`}
                src={Footerlogo}
                alt={`header logo`}
              />
              <Image className={`h-55`} src={FooterlogoTagline} />
            </Flex>
            <FP
              className={`w-416 ml-45`}
              text={`Creative Artifex provides creative and technology-driven services that help businesses grow through impactful design, powerful software, and engaging digital experiences.`}
            />
            <FP
              className={`w-416 ml-45 mt-27`}
              text={`Address: House #417, (4th Floor ) Borogram Chairmanbari Mor, Kamranggirchor Dhaka, Dhaka, Bangladesh, 1211`}
            />
          </div>

          <Flex className="w-1/2 mt-21">
            <div className="w-3/5">
              <FooterTitle className={` mb-30`} text={`Servives`} />
              <Flex className={`w-300 gap-1 flex-col`}>
                <Link><FP text={`Graphics & Design`} /></Link>
                <Link><FP text={`UI/UX Design`} /></Link>
                <Link><FP text={`Website Developmen`} /></Link>
                <Link><FP text={`Software Development`} /></Link>
                <Link><FP text={`Mobile Application Development`} /></Link>
                <Link><FP text={`Shopify Store Design & Development`} /></Link>
                <Link><FP text={`Video & Animation`} /></Link>
              </Flex>
            </div>
            <div className="w-2/5">
              <FooterTitle className={` mb-30`} text={`Social`} />
              <Flex className={`w-300 gap-1 flex-col`}>
                <Link><FP text={`Facebook`} /></Link>
                <Link><FP text={`Instagram`} /></Link>
                <Link><FP text={`Tiktok`} /></Link>
                <Link><FP text={`Twitter`} /></Link>
              </Flex>
            </div>
          </Flex>
        </Flex>
      </Container>
    </footer>
    <div className={`bg-seagreen py-30 relative`}>
      <div className='absolute top-1/2 -translate-y-1/2 left-[5%]'>
        <FaChevronCircleUp className='text-white text-5xl ml-15'/>
      </div>
      
      <Container>
        <Flex className={`items-center justify-around`}>
          <p className='font-poppins font-medium text-white/50 text-base'>© 2024 creative artifex</p>
          <Flex className='items-center gap-10'>
            <p className='font-poppins font-medium text-white text-lg'>Folllow us on</p>
            <Flex className={`gap-6`}>
              <FaFacebook className='text-white text-2xl cursor-pointer hover:text-red-500 duration-150' />
              <FaInstagram className='text-white text-2xl cursor-pointer hover:text-red-500 duration-150' />
              <FaTiktok className='text-white text-2xl cursor-pointer hover:text-red-500 duration-150' />
              <FaTwitter className='text-white text-2xl cursor-pointer hover:text-red-500 duration-150' />
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </div>
    </>
  );
}

export default Footer