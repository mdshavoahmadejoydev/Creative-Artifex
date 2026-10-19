import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import { useNavigate } from "react-router-dom";

const WordPressDevelopment = () => {

  const navigate = useNavigate();

    const handleContinue = (id, pricemoney, packagename, time) => {
      navigate("/order", { state: { id, pricemoney, packagename, time } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard

              id={34}
              onContinue={handleContinue}
              
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`1 page + Expert Consultation 1 Page basic WordPress website design with three sections using Divi layout/templates.`}
            provide1="Functional website"
            provide2="3 pages"
            provide3="Content upload"
            provide4="5 plugins/extensions"
            provide5="Responsive design"
            provide8="Opt-in form"
            provide12="Social media icons"
            notprovide8={true}
            notprovide9={true}
            notprovide10={true}
            notprovide11={true}
            notprovide12={true}
            time="3"
          />

          <PackageItemCard

              id={35}
              onContinue={handleContinue}
              
            packagename="STANDARD PACKAGE"
            pricemoney="1000 tk"
            aboutPackage={`5 pages + Expert Consultation For startups and individuals who need a simple, functional website using amazing layouts/templates.`}
            provide1="Functional website"
            provide2="5 pages"
            provide3="Content upload"
            provide4="5 plugins/extensions"
            provide5="Responsive design"
            provide8="Opt-in form"
            provide12="Social media icons"
            time="5"
            notprovide10={true}
            notprovide11={true}
            notprovide12={true}
          />

          <PackageItemCard

              id={36}
              onContinue={handleContinue}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="1000 tk"
            aboutPackage={`10 pages + Expert Consultation For Professionals and businesses, high-quality, Modern website, 10 Pages + Popups + Dynamic Blogs`}
            provide1="Functional website"
            provide2="10 pages"
            provide3="Content upload"
            provide4="5 plugins/extensions"
            provide5="Responsive design"
            provide8="Opt-in form"
            provide12="Social media icons"
            time="10"
          />
        </Flex>
      </Container>
    </div>
  );
};

export default WordPressDevelopment;
