import React, { Component, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaCheck } from "react-icons/fa";
import PackageItemCard from "../components/PackageItemCard";
import Schedule from "../components/Schedule";
import Image from "../components/Image";
import ServicesIncludePortfolio from "../sections/ServicesIncludePortfolio";


const LogoDesign = () => {

  return (
    <div className="bg-EEEEEE py-10">
      <Container>

        <Flex className={`justify-center items-start gap-8`}>
          <PackageItemCard
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
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
            time={`2`}
          />

          <PackageItemCard
            packagename="STANDARD PACKAGE"
            pricemoney="700 tk"
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
          />

          <PackageItemCard
            packagename="PREMIUM PACKAGE"
            pricemoney="1000 tk"
            provide1="8 concepts included"
            provide2="Logo transparency"
            provide3="Vector file"
            provide4="Printable file"
            provide5="Include 3D mockup"
            provide6="Include source file"
            provide7="Stationery designs"
            provide8="Include social media kit"
          />
        </Flex>

        <ServicesIncludePortfolio/>

        <Flex className={`justify-center`}>
          <Schedule text={`View More`} hover={true} className={`bg-006F9F! hover:bg-07506B! duration-200 mt-6`}/>
        </Flex>
        
      </Container>
    </div>
  );
};

export default LogoDesign;
