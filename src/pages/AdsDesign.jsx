import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import Schedule from "../components/Schedule";
import { useNavigate } from "react-router-dom";

const AdsDesign = () => {


  const navigate = useNavigate();

  const handleContinue = (pricemoney, packagename, time,servidesname) => {
    navigate("/order", { state: { pricemoney, packagename, time,servidesname } });
  };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-8`}>
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Ads Design`}
              
            packagename="BASIC PACKAGE"
            pricemoney="500"
            aboutPackage={`ESSENTIAL PACK 5 Static Post Templates for your Social Media ✅ Unique & Editable Designs in Canva`}
            provide1="Feed template"
            provide2="Include source file"
            provide3="3 posts"
            notprovide2={true}
            notprovide3={true}
            time={`2`}
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Ads Design`}
              
            packagename="STANDARD PACKAGE"
            pricemoney="800"
            aboutPackage={`GROWTH PACK 10 Premium Static Post Templates for your Social Media ✅ Unique Designs in Canva`}
            provide1="Feed template"
            provide2="Include source file"
            provide3="6 posts"
            notprovide3={true}
            time={`2`}
          />

          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Ads Design`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="1000"
            aboutPackage={`30 POST POWER PACKAGE ⚡️ 30 Premium Static Post Templates for your Social Media ✅ Knock me to discuss about it`}
            provide1="Feed template"
            provide2="Include source file"
            provide3="10 posts"
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
      </Container>
    </div>
  );
};

export default AdsDesign;
