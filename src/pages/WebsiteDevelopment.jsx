import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import { useNavigate } from "react-router-dom";

const WebsiteDevelopment = () => {

  const navigate = useNavigate();

    const handleContinue = (id, pricemoney, packagename, time) => {
      navigate("/order", { state: { id, pricemoney, packagename, time } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard

              id={25}
              onContinue={handleContinue}
              
            packagename="BASIC PACKAGE"
            pricemoney="500 tk"
            aboutPackage={`One Page Website Design and Development W/ Static Functionality | Need something specific? | DM Now`}
            provide1="Functional website"
            provide2="1 pages"
            provide3="Content upload"
            provide4="5 plugins/extensions"
            provide5="E-commerce functionality"
            provide6="2 products"
            provide7="Payment Integration"
            provide8="Opt-in form"
            provide9="Autoresponder integration"
            provide10="Speed optimization"
            provide11="Hosting setup"
            provide12="Social media icons"
            provide13="Responsive Design"
            notprovide8={true}
            notprovide9={true}
            notprovide10={true}
            notprovide11={true}
            notprovide12={true}
            time="3"
          />

          <PackageItemCard

              id={26}
              onContinue={handleContinue}
              
            packagename="STANDARD PACKAGE"
            pricemoney="1000 tk"
            aboutPackage={`5 Page website development, Basic API integrations | Figma to React, Clean Code + Payment Integrate`}
            provide1="Functional website"
            provide2="5 pages"
            provide3="Content upload"
            provide4="8 plugins/extensions"
            provide5="E-commerce functionality"
            provide6="5 products"
            provide7="Payment Integration"
            provide8="Opt-in form"
            provide9="Autoresponder integration"
            provide10="Speed optimization"
            provide11="Hosting setup"
            provide12="Social media icons"
            provide13="Responsive Design"
            time="7"
            notprovide10={true}
            notprovide11={true}
            notprovide12={true}
          />

          <PackageItemCard

              id={27}
              onContinue={handleContinue}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="1000 tk"
            aboutPackage={`Up to 8 Pages Custom Website Design and Development + Backend Setup + API Integration (Customizable)`}
            provide1="Functional website"
            provide2="8 pages"
            provide3="Content upload"
            provide4="10 plugins/extensions"
            provide5="E-commerce functionality"
            provide6="8 products"
            provide7="Payment Integration"
            provide8="Opt-in form"
            provide9="Autoresponder integration"
            provide10="Speed optimization"
            provide11="Hosting setup"
            provide12="Social media icons"
            provide13="Responsive Design"
            time="14"
          />
        </Flex>

      </Container>
    </div>
  );
};

export default WebsiteDevelopment;
