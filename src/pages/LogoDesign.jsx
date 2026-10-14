import React, { Component } from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaCheck } from 'react-icons/fa'

const LogoDesign = () => {
  return (
    <div className='bg-EEEEEE py-[40px]'>
      <Container>
        <Flex>
          <div className='w-[367px] bg-white px-[40px] py-[20px] rounded-4xl font-poppins border border-[#D9EFF7] hover:shadow-[0px_2px_10px_2px_rgba(0,0,0,0.3)] duration-200'>
            <h5 className='font-bold text-[31px] text-[#07506B]'>BASIC PACKAGE</h5>
            <p className='font-semibold text-[24px] text-[#079FD3] mt-3.5 mb-1'>$ 500 tk</p>
            <p className='font-semibold text-[26px] text-black/90'>Our services :</p>

            <Flex className={`list-none flex-col gap-y-2 font-poppins font-semibold text-lg text-black/80 mt-1`}>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> 2 concepts included</li>
              </Flex>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Logo transparency</li>
              </Flex>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Vector file</li>
              </Flex>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Printable file</li>
              </Flex>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Include 3D mockup</li>
              </Flex>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Include source file</li>
              </Flex>

              <Flex className={`items-center gap-2`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Stationery designs</li>
              </Flex>

              <Flex className={`items-center gap-2 text-black/30`}>
                <FaCheck className='inline-block text-xl'/>
                <li> Include social media kit</li>
              </Flex>

            </Flex>

            <button className='font-poppins font-semibold text-2xl text-white bg-[#006F9F] hover:bg-[#07506B] duration-200 w-full py-1 rounded-full mb-2 mt-4 cursor-pointer'>Order Now</button>

            <button className='font-poppins font-semibold text-2xl text-[#079CC8] border-2 border-[#079CC8] w-full py-1 rounded-full   cursor-pointer '>Contact Us</button>
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default LogoDesign