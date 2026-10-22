import React from 'react'
import workWithLogo1 from '../assets/workWithLogos/Avak.png'
import workWithLogo2 from '../assets/workWithLogos/BikeZoon.png'
import workWithLogo3 from '../assets/workWithLogos/HospiDiag1.png'
import workWithLogo4 from '../assets/workWithLogos/HospiDiag2.png'
import workWithLogo5 from '../assets/workWithLogos/HospiDiag2.png'
import workWithLogo6 from '../assets/workWithLogos/rakib.png'
import workWithLogo7 from '../assets/workWithLogos/CreativeArtifex.png'
import workWithLogo8 from '../assets/workWithLogos/CreativeArtifex1.png'
import workWithLogo9 from '../assets/workWithLogos/CreativeArtifex2.png'

import Flex from '../components/Flex'
import WorkingWithLogosF from '../components/WorkingWithLogosF'

const WorkingWith = () => {

  const logoarr = [
    workWithLogo1,
    workWithLogo2,
    workWithLogo3,
    workWithLogo4,
    workWithLogo5,
    workWithLogo6,
    workWithLogo7,
    workWithLogo8,
    workWithLogo9,
  ]

  return (
    <section className='bg-pinkish py-6 overflow-x-hidden'>
      <Flex className={`w-max animation-logo-scroll hover:[animation-play-state:paused]`}>
        {
          logoarr.map((item, index) => {
            return (
              <div key={`first ${index}`} className='shrink-0 mr-16'>
                <WorkingWithLogosF src={item}/>
              </div>
            )
          })
        }
        {
          logoarr.map((item, index) => {
            return(
              <div key={`second ${index}`} className='mr-16 shrink-0'>
                <WorkingWithLogosF src={item}/>
              </div>
            )
          })
        }
      </Flex>      
    </section>
  )
}

export default WorkingWith