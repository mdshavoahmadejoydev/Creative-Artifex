import React from 'react'

import Img1 from '../assets/Teamexpertsimgs/AffordablePrices.png'
import Img2 from '../assets/Teamexpertsimgs/ClientSatisfaction.png'
import Img3 from '../assets/Teamexpertsimgs/Flexibility.png'
import Img4 from '../assets/Teamexpertsimgs/FullStackTeams.png'
import Img5 from '../assets/Teamexpertsimgs/HighQualityCode.png'
import Img6 from '../assets/Teamexpertsimgs/Support247.png'

import Title from '../components/Title'
import P from '../components/P'
import Container from '../components/Container'
import Flex from '../components/Flex'
import TeamexpertsCard from '../components/TeamexpertsCard'
import { useState } from 'react'

const Teamexperts = () => {

  const [showTeamsex, setShowTeamsex] =  useState(true)

  return (
    <section className={`bg-white py-45 overflow-x-hidden`}>
      <Title text={`Our Team Of experts`} className={`text-center`} />
      <P
        text={`Over many years of work, we have built a very successful history in our area of expertise.`}
        className={`text-center w-654 mx-auto mt-4 mb-74`}
      />

      <Container>
        {showTeamsex ? (
          <Flex className={`justify-between`}>
            <TeamexpertsCard src={Img5} text={`High Quality Code`} />
            <TeamexpertsCard src={Img4} text={`Full Stack Teams`} />
            <TeamexpertsCard src={Img3} text={`Flexibility`} />
          </Flex>
        ) : (
          <Flex className={`justify-between`}>
            <TeamexpertsCard src={Img6} text={`Support 24/7`} />
            <TeamexpertsCard src={Img2} text={`Affordable Prices`} />
            <TeamexpertsCard src={Img1} text={`Client Satisfaction`} />
          </Flex>
        )}

        <Flex className={`gap-4 justify-center mt-60`}>
          <button className={` w-74 h-30 rounded-2xl hover:bg-lightgreen duration-200  ${showTeamsex ? "bg-lightgreen" : "bg-lightgreen/60"}  `} onClick={()=> setShowTeamsex(true)}></button>
          <button className={` w-74 h-30 rounded-2xl  hover:bg-lightgreen  duration-200 ${!showTeamsex ? "bg-lightgreen" : "bg-lightgreen/60"}`}onClick={()=> setShowTeamsex(false)}></button>
        </Flex>
      </Container>
    </section>
  );
}

export default Teamexperts