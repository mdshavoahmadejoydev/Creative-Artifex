import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import Schedule from "../components/Schedule";

const ThumbnailDesign = () => {
  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-8`}>
          <PackageItemCard
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
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
            packagename="STANDARD PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`x1 ULTRA thumbnail with bold visuals and high-converting design`}
            provide1="7 thumbnail"
            provide2="Image sourcing"
            provide3="Custom designed images"
            provide4="Include source file"
            notprovide4={true}
            time={`2`}
          />

          <PackageItemCard
            packagename="PREMIUM PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`x10 Ultra Thumbnails - Bundle Deal`}
            provide1="10 thumbnail"
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
      </Container>
    </div>
  );
};

export default ThumbnailDesign;
