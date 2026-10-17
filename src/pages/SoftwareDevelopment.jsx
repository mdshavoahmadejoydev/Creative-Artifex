import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";

const SoftwareDevelopment = () => {
  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
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
            packagename="STANDARD PACKAGE"
            pricemoney="1000 tk"
            aboutPackage={`Complete software module with frontend, backend, database, API integrations, and responsive UI`}
            provide1="10 pages"
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
            packagename="PREMIUM PACKAGE"
            pricemoney="1000 tk"
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

      </Container>
    </div>
  )
}

export default SoftwareDevelopment