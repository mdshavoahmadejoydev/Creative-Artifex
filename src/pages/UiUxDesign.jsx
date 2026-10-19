import React from "react";
import Flex from "../components/Flex";
import Container from "../components/Container";
import PackageItemCard from "../components/PackageItemCard";
import { useNavigate } from "react-router-dom";

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
      </Container>
    </div>
  );
};

export default UiUxDesign;
