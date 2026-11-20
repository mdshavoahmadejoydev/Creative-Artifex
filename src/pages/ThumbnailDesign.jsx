import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import Schedule from "../components/Schedule";
import { useNavigate } from "react-router-dom";

import ServicesIncludePortfolio from '../components/ServicesIncludePortfolio'
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

const ThumbnailPortfolio = [
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


const ThumbnailDesign = () => {


  const navigate = useNavigate();

    const handleContinue = (pricemoney, packagename, time,servidesname) => {
      navigate("/order", { state: {pricemoney, packagename, time,servidesname } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-8`}>
          <PackageItemCard

              onContinue={handleContinue}
              servidesname={`Thumbnail Design`}
              
            packagename="BASIC PACKAGE"
            pricemoney="500"
            aboutPackage={`x1 Professional thumbnail within 24hrs`}
            provide1="1 thumbnail"
            provide2="Image sourcing"
            provide3="Custom designed images"
            provide4="Include source file"
            notprovide3={true}
            notprovide4={true}
            time={`2`}
          />

          <PackageItemCard

              onContinue={handleContinue}
              servidesname={`Thumbnail Design`}
              
            packagename="STANDARD PACKAGE"
            pricemoney="990"
            aboutPackage={`x1 ULTRA thumbnail with bold visuals and high-converting design`}
            provide1="4 thumbnail"
            provide2="Image sourcing"
            provide3="Custom designed images"
            provide4="Include source file"
            notprovide4={true}
            time={`2`}
          />

          <PackageItemCard

              onContinue={handleContinue}
              servidesname={`Thumbnail Design`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="1600"
            aboutPackage={`x10 Ultra Thumbnails - Bundle Deal`}
            provide1="8 thumbnail"
            provide2="Image sourcing"
            provide3="Custom designed images"
            provide4="Include source file"
            time={`2`}
          />
        </Flex>

        <Flex className={`justify-center`}>
          <Schedule
            text={`View More`}
            hover={true}
            className={`bg-006F9F! hover:bg-07506B! duration-200 mt-6`}
          />
        </Flex>

        <ServicesIncludePortfolio images={ThumbnailPortfolio} />
      </Container>
    </div>
  );
};

export default ThumbnailDesign;
