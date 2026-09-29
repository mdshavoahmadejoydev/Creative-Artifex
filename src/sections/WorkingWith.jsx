import React from 'react'
import workWithLogo1 from '../assets/workWithLogos/Avak.png'
import workWithLogo2 from '../assets/workWithLogos/BikeZoon.png'
import workWithLogo3 from '../assets/workWithLogos/HospiDiag1.png'
import workWithLogo4 from '../assets/workWithLogos/HospiDiag2.png'
import workWithLogo5 from '../assets/workWithLogos/HospiDiag2.png'
import workWithLogo6 from '../assets/workWithLogos/rakib.png'
import Flex from '../components/Flex'
import WorkingWithLogosF from '../components/WorkingWithLogosF'

const WorkingWith = () => {
  return (
    <section className='bg-pinkish py-6 overflow-x-hidden'>
      <Flex className={`gap-16`}>
        <WorkingWithLogosF src={workWithLogo1}/>
        <WorkingWithLogosF src={workWithLogo2}/>
        <WorkingWithLogosF src={workWithLogo3}/>
        <WorkingWithLogosF src={workWithLogo4}/>
        <WorkingWithLogosF src={workWithLogo5}/>
        <WorkingWithLogosF src={workWithLogo6}/>
        <WorkingWithLogosF src={workWithLogo1}/>
        <WorkingWithLogosF src={workWithLogo2}/>
        <WorkingWithLogosF src={workWithLogo3}/>
        <WorkingWithLogosF src={workWithLogo4}/>
        <WorkingWithLogosF src={workWithLogo5}/>
        <WorkingWithLogosF src={workWithLogo6}/>
      </Flex>      
    </section>
  )
}

export default WorkingWith