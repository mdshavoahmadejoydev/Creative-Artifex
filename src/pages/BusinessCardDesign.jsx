import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import Schedule from "../components/Schedule";
import { useNavigate } from "react-router-dom";

const BusinessCardDesign = () => {

  const navigate = useNavigate();

    const handleContinue = (pricemoney, packagename, time,servidesname) => {
      navigate("/order", { state: {pricemoney, packagename, time,servidesname } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-8`}>
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Business Card Designt`}
              
            packagename="BASIC PACKAGE"
            pricemoney="700"
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

            onContinue={handleContinue}
            servidesname={`Business Card Designt`}
              
            packagename="STANDARD PACKAGE"
            pricemoney="1200"
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

            onContinue={handleContinue}
            servidesname={`Business Card Designt`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="2000"
            aboutPackage={`Premium Package Stationery Set – Business Card + Letterhead + Envelope + Email Signature`}
            provide1="4 Concept"
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