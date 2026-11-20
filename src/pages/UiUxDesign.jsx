import React from "react";
import Flex from "../components/Flex";
import Container from "../components/Container";
import PackageItemCard from "../components/PackageItemCard";
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

const UiUxPortfolio = [
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


const UiUxDesign = () => {

  const navigate = useNavigate();

    const handleContinue = (pricemoney, packagename, time,servidesname) => {
      navigate("/order", { state: {pricemoney, packagename, time,servidesname } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-6`}>
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Ui/Ux Design`}
              
            packagename="BASIC PACKAGE"
            pricemoney="3000"
            aboutPackage={`Figma Custom Unique Landing Page Design – Crafted from Scratch | Responsive Website Design`}
            provide1="1 page"
            provide2="Responsive design"
            provide3="Prototype"
            provide4="Source file"
            notprovide3={true}
            notprovide4={true}
            time={`3`}
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Ui/Ux Design`}
              
            packagename="STANDAND PACKAGE"
            pricemoney="10000"
            aboutPackage={`Upto 6 pages Figma Custom Unique design | Responsive Website Design`}
            provide1="6 page"
            provide2="Responsive design"
            provide3="Prototype"
            provide4="Source file"
            notprovide4={true}
            time={`5`}
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Ui/Ux Design`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="15000"
            aboutPackage={`Upto 15 pages Figma Custom Unique design | Responsive Website Design`}
            provide1="15 page"
            provide2="Responsive design"
            provide3="Prototype"
            provide4="Source file"
            time={`7`}
          />
        </Flex>

        <ServicesIncludePortfolio images={UiUxPortfolio} />
      </Container>
    </div>
  );
};

export default UiUxDesign;
