import React from 'react'

import headerLogo from '../assets/creativeArtifexLogo.png'
import headerLogoTagline from '../assets/creativeArtifexLogoTagline.png'

import { Link } from 'react-router-dom'


import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import Li from '../components/Li'
import { RiAccountCircleFill } from 'react-icons/ri'

const Header = () => {
  return (
    <header className="bg-seagreen">
      <Container className={`relative`}>
        <Flex>
          <Flex className="w-1/4 gap-3 items-center">
            <Image
              className={`h-[55px] py-[18px] box-content`}
              src={headerLogo}
              alt={`header logo`}
            />
            <Image className={`h-[55px]`} src={headerLogoTagline} />
          </Flex>
          <Flex className="w-3/4 justify-end items-center">
            <nav>
              <ul className="flex gap-6">
                <Link className="py-[31px] group">
                  <Li text={`Home`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Services`} icon={true} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Templates`} icon={true} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Reviews`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Products`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Team`} />
                </Link>
                <Link className="py-[31px] group">
                  <Li text={`Contact`} />
                </Link>
              </ul>
            </nav>
            <RiAccountCircleFill className="text-white text-4xl ml-10 py-[29px] cursor-pointer box-content hover:text-red-500 duration-200" />
          </Flex>
        </Flex>
        <div className="w-[320px] bg-skyblue rounded-b-xl border-t-2 border-red-500 absolute top-[93px] right-[360px]">
          <ul className='flex flex-col py-2'>
            
          </ul>
        </div>
      </Container>
    </header>
  );
}

export default Header