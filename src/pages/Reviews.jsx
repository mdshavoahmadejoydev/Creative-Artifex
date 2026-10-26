import React from 'react'
import creativeHero from '../assets/creativeherro.svg'
import ReviewsPageTitle from '../components/ReviewsPageTitle'
import P from '../components/P'
import Container from "../components/Container";
import ReviewsFullCard from '../components/ReviewsFullCard';
import Schedule from '../components/Schedule';
import Flex from '../components/Flex';
import ScrollToTop from '../components/ScrollToTop';



const Reviews = () => {
  return (
    <section className={`w-full bg-seagreen`}>
      <ScrollToTop/>
      <div className='h-94'></div>
      <div className="bg-seagreen">
        <ReviewsPageTitle
          text={"<< Customer Reviews >>"}
          className={`pt-4 text-center`}
        />

        <P
          text={`See what our customers have to say about their experience with us.`}
          className={`text-white w-2xl text-center mx-auto pb-20`}
        />
      </div>

      {/* Package informations */}
      <div className="bg-gray-white pt-17.5">
        <Container>
          <ReviewsFullCard
            yourName={`Sojub khan`}
            country={`🇬🇧 USA`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`400`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />

          <ReviewsFullCard
            yourName={`Tushar`}
            country={`🇬🇧 AST`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`50`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />

          <ReviewsFullCard
            yourName={`md shavo ahmade joy`}
            country={`🇬🇧 QAT`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`100`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />

          <ReviewsFullCard
            yourName={`md shavo ahmade joy`}
            country={`🇬🇧 QAT`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`100`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />

          <ReviewsFullCard
            yourName={`md shavo ahmade joy`}
            country={`🇬🇧 QAT`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`100`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />

          <ReviewsFullCard
            yourName={`md shavo ahmade joy`}
            country={`🇬🇧 QAT`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`100`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />

          <ReviewsFullCard
            yourName={`md shavo ahmade joy`}
            country={`🇬🇧 QAT`}
            prof={`ceo of creative artifex`}
            productLink={`............Link............`}
            clientDes={`Excellent experience working with this seller! The website turned out
        really well, and I’m very happy with the quality of the work. The seller
        was professional, responsive, and understood my requirements perfectly.
        Highly recommended!`}
            Lprice={`100`}
            Hprice={`800`}
            duration={`2`}
            pastWorkingTime={`1`}
            src={creativeHero}
          />
        </Container>
        <Flex className="justify-center">
          <Schedule
            text={`View More`}
            hover={true}
            className={`bg-seagreen mb-10`}
          />
        </Flex>
      </div>
    </section>
  );
}

export default Reviews