import React from "react";
import Title from "../components/Title";
import P from "../components/P";
import Flex from "../components/Flex";
import ProtfolioBox from "../components/ProtfolioBox";
import Schedule from "../components/Schedule";

// portfolio img link
import Portfolio1 from "../assets/logoPortfolio/1.jpg";
import Portfolio2 from "../assets/logoPortfolio/2.jpg";
import Portfolio3 from "../assets/logoPortfolio/3.jpg";
import Portfolio4 from "../assets/logoPortfolio/4.jpg";
import Portfolio5 from "../assets/logoPortfolio/5.jpg";
import Portfolio6 from "../assets/logoPortfolio/6.jpg";
import Portfolio7 from "../assets/logoPortfolio/7.jpg";
import Portfolio8 from "../assets/logoPortfolio/8.jpg";
import Portfolio9 from "../assets/logoPortfolio/9.jpg";
import Portfolio10 from "../assets/logoPortfolio/10.jpg";
import Portfolio11 from "../assets/logoPortfolio/11.jpg";
import Portfolio12 from "../assets/logoPortfolio/12.jpg";
import Portfolio13 from "../assets/logoPortfolio/13.jpg";
import Portfolio14 from "../assets/logoPortfolio/14.jpg";
import Portfolio15 from "../assets/logoPortfolio/15.jpg";
import Portfolio16 from "../assets/logoPortfolio/16.jpg";
import Portfolio17 from "../assets/logoPortfolio/17.jpg";
import Portfolio18 from "../assets/logoPortfolio/18.jpg";
import Portfolio19 from "../assets/logoPortfolio/19.jpg";
import Portfolio20 from "../assets/logoPortfolio/20.jpg";
import Portfolio21 from "../assets/logoPortfolio/21.jpg";
import { useNavigate } from "react-router-dom";

const Portfolio = () => {

  let navigate = useNavigate();

  const portfolioImg = [
    Portfolio1,
    Portfolio2,
    Portfolio3,
    Portfolio4,
    Portfolio5,
    Portfolio6,
    Portfolio7,
    Portfolio8,
    Portfolio9,
    Portfolio10,
    Portfolio11,
    Portfolio12,
    Portfolio13,
    Portfolio14,
    Portfolio15,
    Portfolio16,
    Portfolio17,
    Portfolio18,
    Portfolio19,
    Portfolio20,
    Portfolio21,
  ];

  return (
    <section className="bg-deep-blue py-55 overflow-x-hidden">
      <Title
        text={`Our Portfolio Projects`}
        className={`text-white text-center`}
      />
      ;
      <P
        text={`Explore our portfolio to see the results of our creative thinking and design expertise. We help brands transform ideas into engaging digital experiences that drive growth and connection.`}
        className={`w-835 text-white/70 mx-auto text-center mb-55`}
      />
      {/* protfolio img template */}
      <Flex
        className={`w-max portfolio1 justify-start flex-nowrap gap-x-6 overflow-x-hidden animation-portfolio-scroll hover:[animation-play-state:paused]`}
      >
        {portfolioImg.map((item) => {
          return <ProtfolioBox src={item} alt={`portfolio`} />;
        })}
        {portfolioImg.map((item) => {
          return <ProtfolioBox src={item} alt={`portfolio`} />;
        })}
      </Flex>
      {/* second protfolio */}
      <Flex
        className={`w-max portfolio1 justify-end flex-nowrap gap-x-6 overflow-x-hidden my-8 animation-portfolio2-scroll hover:[animation-play-state:paused]`}
      >
        {portfolioImg.map((item) => {
          return <ProtfolioBox src={item} alt={`portfolio`} />;
        })}
        {portfolioImg.map((item) => {
          return <ProtfolioBox src={item} alt={`portfolio`} />;
        })}
      </Flex>
      {/* Third protfolio */}
      <Flex
        className={`w-max portfolio justify-start flex-nowrap gap-x-6 overflow-x-hidden -ml-38 animation-portfolio-scroll hover:[animation-play-state:paused]`}
      >
        {[
          ...portfolioImg.slice(Math.floor(portfolioImg.length / 2)),
          ...portfolioImg.slice(0, Math.floor(portfolioImg.length / 2)),
        ].map((item, index) => {
          return <ProtfolioBox key={index} src={item} alt="portfolio" />;
        })}

        {[
          ...portfolioImg.slice(Math.floor(portfolioImg.length / 2)),
          ...portfolioImg.slice(0, Math.floor(portfolioImg.length / 2)),
        ].map((item, index) => {
          return (
            <ProtfolioBox
              key={`duplicate-${index}`}
              src={item}
              alt="portfolio"
            />
          );
        })}
      </Flex>
      <Flex className={`justify-center `}>
        <Schedule
          onClick={() => navigate("/reviews") }
          text={`Learn More`}
          hover={true}
          className={`bg-gray-white text-deep-blue! mt-60`}
        />
      </Flex>
    </section>
  );
};

export default Portfolio;
