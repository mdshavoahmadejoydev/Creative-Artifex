import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import Schedule from "../components/Schedule";

const BusinessCardDesign = () => {
  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-8`}>
          <PackageItemCard
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`Basic Package 2 Sided Business Card + High-Res 300dpi + Print-Ready JPG & PDF`}
            provide1="1 Concept"
            provide2="Files Ready for Print"
            provide3="Include Source File"
            provide4="Front & back design"
            provide5="Email signature"
            notprovide3={true}
            notprovide4={true}
            time={`2`}
          />

          <PackageItemCard
            packagename="STANDARD PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`Standard Package 2 Sided Business Card + High-Res 300dpi + Print-Ready JPG & PDF + Editable Source Files`}
            provide1="2 Concept"
            provide2="Files Ready for Print"
            provide3="Include Source File"
            provide4="Front & back design"
            provide5="Email signature"
            notprovide4={true}
            time={`2`}
          />

          <PackageItemCard
            packagename="PREMIUM PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`Premium Package Stationery Set – Business Card + Letterhead + Envelope + Email Signature`}
            provide1="3 Concept"
            provide2="Files Ready for Print"
            provide3="Include Source File"
            provide4="Front & back design"
            provide5="Email signature"
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
  )
}

export default BusinessCardDesign