import React, { Component, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { FaCheck } from "react-icons/fa";
import PackageItemCard from "../components/PackageItemCard";

const LogoDesign = () => {
  const [isDefault, setIsDefault] = useState(true);

  return (
    <div className="bg-EEEEEE py-[40px]">
      <Container>
        <div className="flex items-center gap-3 justify-center mb-8">
          {/* Default */}
          <span
            className={`font-bold font-poppins text-xl duration-300 ${
              isDefault ? "text-[#07506B]" : "text-gray-400"
            }`}
          >
            Default
          </span>

          {/* Toggle Button */}
          <button
            onClick={() => setIsDefault(!isDefault)}
            className={`relative h-10 w-[100px] rounded-full transition-colors duration-300 ease-in-out transition-all ${
              isDefault ? "bg-[#07506B]" : "bg-red-500"
            }`}
            aria-label="Toggle pricing plan"
            aria-pressed={!isDefault}
          >
            <span
              className={`absolute top-1 h-8 w-8 rounded-full bg-white shadow-sm transition-all duration-500 ${
                isDefault ? "left-1" : "left-[64px]"
              }`}
            />
          </button>

          {/* Monthly */}
          <span
            className={`font-bold font-poppins text-xl transition-colors duration-300 ${
              !isDefault ? "text-red-500" : "text-gray-400"
            }`}
          >
            Monthly
          </span>
        </div>

        <Flex className={`justify-center gap-6`}>
          {isDefault ? (
            <>
              <PackageItemCard
                packagename="BASIC PACKAGE"
                pricemoney="500 tk"
                provive1="2 concepts included"
                provive2="Logo transparency"
                provive3="Vector file"
                provive4="Printable file"
                provive5="Include 3D mockup"
                provive6="Include source file"
                provive7="Stationery designs"
                provive8="Include social media kit"
                notprovide4={true}
                notprovide5={true}
                notprovide6={true}
                notprovide7={true}
                notprovide8={true}
              />

              <PackageItemCard
                packagename="STANDARD PACKAGE"
                pricemoney="700 tk"
                provive1="5 concepts included"
                provive2="Logo transparency"
                provive3="Vector file"
                provive4="Printable file"
                provive5="Include 3D mockup"
                provive6="Include source file"
                provive7="Stationery designs"
                provive8="Include social media kit"
                notprovide6={true}
                notprovide7={true}
                notprovide8={true}
              />

              <PackageItemCard
                packagename="PREMIUM PACKAGE"
                pricemoney="1000 tk"
                provive1="8 concepts included"
                provive2="Logo transparency"
                provive3="Vector file"
                provive4="Printable file"
                provive5="Include 3D mockup"
                provive6="Include source file"
                provive7="Stationery designs"
                provive8="Include social media kit"
              />
            </>
          ) : (
            <>
              <PackageItemCard
                packagename="BASIC PACKAGE"
                pricemoney="5000 tk"
                provive1="10 concepts included"
                provive2="Logo transparency"
                provive3="Vector file"
                provive4="Printable file"
                provive5="Include 3D mockup"
                provive6="Include source file"
                icon7={true}
                icon8={true}
                notprovide4={true}
                notprovide5={true}
                notprovide6={true}
                notprovide7={true}
                notprovide8={true}
              />

              <PackageItemCard
                packagename="STANDARD PACKAGE"
                pricemoney="1000 tk"
                provive1="5 concepts included"
                provive2="Logo transparency"
                provive3="Vector file"
                provive4="Printable file"
                provive5="Include 3D mockup"
                provive6="Include source file"
                provive7="Stationery designs"
                provive8="Include social media kit"
                notprovide6={true}
                notprovide7={true}
                notprovide8={true}
              />

              <PackageItemCard
                packagename="PREMIUM PACKAGE"
                pricemoney="15000 tk"
                provive1="8 concepts included"
                provive2="Logo transparency"
                provive3="Vector file"
                provive4="Printable file"
                provive5="Include 3D mockup"
                provive6="Include source file"
                provive7="Stationery designs"
                provive8="Include social media kit"
              />
            </>
          )}
        </Flex>
      </Container>
    </div>
  );
};

export default LogoDesign;
