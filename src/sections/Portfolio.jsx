import React from 'react'
import Title from '../components/Title'
import P from '../components/P'
import Flex from '../components/Flex'
import ProtfolioBox from '../components/ProtfolioBox'
import Schedule from '../components/Schedule'

const Portfolio = () => {
  return (
    <section className='bg-deep-blue py-55'>
      <Title text={`Our Portfolio Projects`} className={`text-white text-center`}/>;
      <P text={`Explore our portfolio to see the results of our creative thinking and design expertise. We help brands transform ideas into engaging digital experiences that drive growth and connection.`} className={`w-835 text-white/70 mx-auto text-center mb-55`}/>

      {/* protfolio img template */}
      <Flex className={`portfolio1 justify-start flex-nowrap gap-10 overflow-x-hidden`}>
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />

      </Flex>

      {/* second protfolio */}
      <Flex className={`portfolio1 justify-end flex-nowrap gap-10 overflow-x-hidden my-10`}>
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />

      </Flex>

      {/* Third protfolio */}
      <Flex className={`portfolio1 justify-start flex-nowrap gap-10 overflow-x-hidden`}>
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />
        
        <ProtfolioBox  />

      </Flex>
      <Flex className={`justify-center `}>
        <Schedule text={`Learn More`} hover={true} className={`bg-gray-white text-deep-blue! mt-60`} />
      </Flex>     
    </section>
  )
}

export default Portfolio