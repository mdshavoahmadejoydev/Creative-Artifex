import React from 'react'

import headerLogo from '../assets/creativeArtifexLogo.png'


import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'

const Header = () => {
  return (
    <header className="bg-seagreen">
      <Container>
        <Flex>
          <div className="w-1/4">
            <Image src={headerLogo} alt={`header logo`}/>
          </div>
          <div className="w-3/4">
            <h1 className="text-white">secend</h1>
          </div>
        </Flex>
      </Container>
    </header>
  );
}

export default Header