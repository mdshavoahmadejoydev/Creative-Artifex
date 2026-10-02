import React from 'react'
import Title from '../components/Title'
import P from '../components/P'
import FaqTemplate from '../components/FaqTemplate'
import Container from '../components/Container'

const Faq = () => {
  return (
    <section className='bg-faqbg py-45 overflow-x-hidden'>
      <Title text={`Frequently asked question`} className={`text-center`} />
      <P text={`Everything you need to know before starting your branding, website, and digital experience journey with us.`} className={`text-center w-602 mx-auto mt-4 mb-45`}  />

      <Container>
        <FaqTemplate qua={`What services do you offer?`} ans={`We offer a wide range of design services including web design, graphic design,  branding, and UI/UX design solutions.  Our focus is on creating user-centered, innovative designs that help businesses grow.`}/>
        
        <FaqTemplate qua={`What services do you offer?`} ans={`We offer a wide range of design services including web design, graphic design,  branding, and UI/UX design solutions.  Our focus is on creating user-centered, innovative designs that help businesses grow.`}/>
        
        
        <FaqTemplate qua={`What services do you offer?`} ans={`We offer a wide range of design services including web design, graphic design,  branding, and UI/UX design solutions.  Our focus is on creating user-centered, innovative designs that help businesses grow.`}/>
        
        <FaqTemplate qua={`What services do you offer?`} ans={`We offer a wide range of design services including web design, graphic design,  branding, and UI/UX design solutions.  Our focus is on creating user-centered, innovative designs that help businesses grow.`}/>
        
        <FaqTemplate qua={`What services do you offer?`} ans={`We offer a wide range of design services including web design, graphic design,  branding, and UI/UX design solutions.  Our focus is on creating user-centered, innovative designs that help businesses grow.`}/>



      </Container>
      
    </section>
  )
}

export default Faq