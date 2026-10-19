import React from "react";
import Flex from "../components/Flex";
import Container from "../components/Container";
import PackageItemCard from "../components/PackageItemCard";
import { useNavigate } from "react-router-dom";

const UiUxDesign = () => {

  const navigate = useNavigate();

    const handleContinue = (id, pricemoney, packagename, time) => {
      navigate("/order", { state: { id, pricemoney, packagename, time } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-6`}>
          <PackageItemCard

              id={22}
              onContinue={handleContinue}
              
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
            provide1="1 page"
            provide2="Responsive design"
            provide3="Prototype"
            provide4="Source file"
            notprovide3={true}
            notprovide4={true}
            time={`3`}
          />

          <PackageItemCard

              id={23}
              onContinue={handleContinue}
              
            packagename="STANDAND PACKAGE"
            pricemoney="500 tk"
            provide1="1 page"
            provide2="Responsive design"
            provide3="Prototype"
            provide4="Source file"
            notprovide4={true}
            time={`3`}
          />

          <PackageItemCard

              id={24}
              onContinue={handleContinue}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="500 tk"
            provide1="1 page"
            provide2="Responsive design"
            provide3="Prototype"
            provide4="Source file"
            time={`3`}
          />
        </Flex>
      </Container>
    </div>
  );
};

export default UiUxDesign;
