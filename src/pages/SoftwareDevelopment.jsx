import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import { useNavigate } from "react-router-dom";

const SoftwareDevelopment = () => {

  const navigate = useNavigate();

    const handleContinue = (pricemoney, packagename, time,servidesname) => {
      navigate("/order", { state: {pricemoney, packagename, time,servidesname } });
    };

  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Software Development`}
              
            packagename="BASIC PACKAGE"
            pricemoney="7000"
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

              onContinue={handleContinue}
              servidesname={`Software Development`}
              
            packagename="STANDARD PACKAGE"
            pricemoney="50000 tk"
            aboutPackage={`Complete software module with frontend, backend, database, API integrations, and responsive UI`}
            provide1="6 pages"
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

            onContinue={handleContinue}
            servidesname={`Software Development`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="90000 tk"
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