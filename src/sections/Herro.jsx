import React from 'react'
import creativeHero from '../assets/creativeherro.svg'
import Container from '../components/Container'
import Schedule from '../components/Schedule'

const Hero = () => {
  return (
    <section
      className="h-[657px] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${creativeHero})` }}
    >
      <Container>
        <div className='pt-[74px]'>
          <p className='font-roboto font-extrabold text-white text-[70px]'>A Clean and Smart Solution </p>
          <p className='font-roboto font-extrabold text-white text-[70px]'>Designed to <span className='text-[74px]'>Grow</span> Your </p>
          <p className='font-roboto font-extrabold text-white text-[80px]'>Business</p>
        </div>
        <div >
          <button className='px-[30px] font-poppins py-2 te bg-Royal-Purple text-white italic font-extrabold border border-white rounded-full text-4xl'>Hire Us</button>
          <Schedule text={`Schedule A Meeting`} className={`block  mt-[14px]`}/>
        </div>
      </Container>
    </section>
  )
}

export default Hero
