import React from 'react'
import ceoImg from '../assets/TeamMemberImgs/ceoImg.png'
import Title from '../components/Title'
import P from '../components/P'
import Container from '../components/Container'
import Flex from '../components/Flex'
import TeamMemberCard from '../components/TeamMemberCard'
import Schedule from '../components/Schedule'

const TeamMember = () => {
  return (
    <section className='py-45'>
      <Title text={`Our Team Of experts`} className={`text-center`}/>
      <P text={`Over many years of work, we have built a very successful history in our area of expertise.`} className={`mx-auto w-657 text-center mt-3 mb-60`}/>
      <Container>
        <Flex className={`flex-wrap justify-center gap-14`}>
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />
          
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />
          
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />
          
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />
          
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />
          
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />
          
          <TeamMemberCard src={ceoImg} name={`MD S joy`} prof={`Founder & CEO`} proftop={`Founder & CEO`} />


        </Flex>
        <Flex className={`justify-center`}>
          <Schedule text={`View more`}  className={`mt-10 bg-seagreen border-2 border-white hover:border-light-aqua duration-200`} />         
        </Flex>
      </Container>
    </section>
  )
}

export default TeamMember