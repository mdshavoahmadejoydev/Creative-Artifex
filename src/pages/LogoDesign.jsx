
import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import ServicesIncludePortfolio from "../sections/ServicesIncludePortfolio";

import { useNavigate } from "react-router-dom";

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

const logoPortfolio = [
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



const LogoDesign = () => {

  
  const navigate = useNavigate();

  const handleContinue = (id, pricemoney, packagename, time, servidesname) => {
    navigate("/order", { state: { id, pricemoney, packagename, time, servidesname } });
  };

  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Logo Desgin`}

            packagename="BASIC PACKAGE"
            pricemoney="500"
            provide1="2 concepts included"
            provide2="Logo transparency"
            provide3="Vector file"
            provide4="Printable file"
            provide5="Include 3D mockup"
            provide6="Include source file"
            provide7="Stationery designs"
            provide8="Include social media kit"
            notprovide4={true}
            notprovide5={true}
            notprovide6={true}
            notprovide7={true}
            notprovide8={true}
            time="2"
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Logo Desgin`}

            packagename="STANDARD PACKAGE"
            pricemoney="799"
            provide1="5 concepts included"
            provide2="Logo transparency"
            provide3="Vector file"
            provide4="Printable file"
            provide5="Include 3D mockup"
            provide6="Include source file"
            provide7="Stationery designs"
            provide8="Include social media kit"
            notprovide6={true}
            notprovide7={true}
            notprovide8={true}
            time={3}
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Logo Desgin`}

            packagename="PREMIUM PACKAGE"
            pricemoney="2000"
            provide1="8 concepts included"
            provide2="Logo transparency"
            provide3="Vector file"
            provide4="Printable file"
            provide5="Include 3D mockup"
            provide6="Include source file"
            provide7="Stationery designs"
            provide8="Include social media kit"
            time={5}
          />
        </Flex>

        <ServicesIncludePortfolio images={logoPortfolio} />
      </Container>
    </div>
  );
};

export default LogoDesign;
