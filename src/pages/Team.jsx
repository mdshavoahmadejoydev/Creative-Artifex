import React from 'react'
import TeamMember from '../sections/TeamMember'
import ReviewsPageTitle from '../components/ReviewsPageTitle'
import P from '../components/P'
import Container from '../components/Container'
import Flex from '../components/Flex'
import TeamMemberCard from '../components/TeamMemberCard'
import CeoImage from '../assets/TeamMemberImgs/ceoImg.png'
import Schedule from '../components/Schedule'

const Team = () => {
  return (
    <section>
      <div className="h-94"></div>
      <div className="pt-4 bg-seagreen">
        <ReviewsPageTitle text={"<< Teams >>"} className={`text-center`} />

        <P
          text={`Over many years of work, we have built a very successful history in our area of expertise.`}
          className={`text-white w-2xl text-center mx-auto pb-20`}
        />
      </div>

      <div className="py-16">
        <Container>
          <Flex className={`flex-wrap justify-center gap-x-16 gap-y-10`}>
            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <TeamMemberCard
              src={CeoImage}
              name={`MD S joy`}
              prof={`ceo`}
              proftop={`ceo of creative`}
            />

            <Schedule
              text={`View More`}
              hover={true}
              className={`bg-seagreen border-2`}
            />
          </Flex>
        </Container>
      </div>
    </section>
  );
}

export default Team