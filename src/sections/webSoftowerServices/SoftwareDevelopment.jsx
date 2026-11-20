import React from "react";
import Container from "../../components/Container";
import Flex from "../../components/Flex";
import PackageItemCard from "../../components/PackageItemCard";
import { useNavigate } from "react-router-dom";


import ServicesIncludePortfolio from '../../components/ServicesIncludePortfolio'
import Portfolio1 from "../../assets/logoPortfolio/1.jpg";
import Portfolio2 from "../../assets/logoPortfolio/2.jpg";
import Portfolio3 from "../../assets/logoPortfolio/3.jpg";
import Portfolio4 from "../../assets/logoPortfolio/4.jpg";
import Portfolio5 from "../../assets/logoPortfolio/5.jpg";
import Portfolio6 from "../../assets/logoPortfolio/6.jpg";
import Portfolio7 from "../../assets/logoPortfolio/7.jpg";
import Portfolio8 from "../../assets/logoPortfolio/8.jpg";
import Portfolio9 from "../../assets/logoPortfolio/9.jpg";
import Portfolio10 from "../../assets/logoPortfolio/10.jpg";
import Portfolio11 from "../../assets/logoPortfolio/11.jpg";
import Portfolio12 from "../../assets/logoPortfolio/12.jpg";
import Portfolio13 from "../../assets/logoPortfolio/13.jpg";
import Portfolio14 from "../../assets/logoPortfolio/14.jpg";
import Portfolio15 from "../../assets/logoPortfolio/15.jpg";
import Portfolio16 from "../../assets/logoPortfolio/16.jpg";
import Portfolio17 from "../../assets/logoPortfolio/17.jpg";
import Portfolio18 from "../../assets/logoPortfolio/18.jpg";
import Portfolio19 from "../../assets/logoPortfolio/19.jpg";
import Portfolio20 from "../../assets/logoPortfolio/20.jpg";
import Portfolio21 from "../../assets/logoPortfolio/21.jpg";

const SoftwareDevelopmentPortfolio = [
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


const SoftwareDevelopment = () => {

  const navigate = useNavigate();

    const handleContinue = (pricemoney, packagename, time,servidesname) => {
      navigate("/order", { state: {pricemoney, packagename, time,servidesname } });
    };

  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Software Development`}
              
            packagename="BASIC PACKAGE"
            pricemoney="7000"
            aboutPackage={`3 page software solution with frontend, backend, database integration`}
            provide1="3 pages"
            provide2="Design customization"
            provide3="Content upload"
            provide4="Content upload"
            provide5="Responsive design"
            provide6="Source code"
            provide7="Detailed code comments"
            notprovide6={true}
            notprovide7={true}
            notprovide8={true}
            time="7"
          />

          <PackageItemCard

              onContinue={handleContinue}
              servidesname={`Software Development`}
              
            packagename="STANDARD PACKAGE"
            pricemoney="50000"
            aboutPackage={`Complete software module with frontend, backend, database, API integrations, and responsive UI`}
            provide1="6 pages"
            provide2="Design customization"
            provide3="Content upload"
            provide4="Content upload"
            provide5="Responsive design"
            provide6="Source code"
            provide7="Detailed code comments"
            notprovide6={true}
            time="21"
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Software Development`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="90000"
            aboutPackage={`Custom software with frontend, backend, database, API integrations, and core features`}
            provide1="10 pages"
            provide2="Design customization"
            provide3="Content upload"
            provide4="Content upload"
            provide5="Responsive design"
            provide6="Source code"
            provide7="Detailed code comments"
            time="21"
          />
        </Flex>

        <ServicesIncludePortfolio images={SoftwareDevelopmentPortfolio} />

      </Container>
    </div>
  )
}

export default SoftwareDevelopment