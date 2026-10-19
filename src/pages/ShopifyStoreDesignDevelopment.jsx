import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import PackageItemCard from "../components/PackageItemCard";
import { useNavigate } from "react-router-dom";

const ShopifyStoreDesignDevelopment = () => {

  const navigate = useNavigate();

    const handleContinue = (pricemoney, packagename, time, servidesname) => {
      navigate("/order", { state: { pricemoney, packagename, time, servidesname } });
    };


  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className="justify-center items-start gap-8">
          <PackageItemCard

            onContinue={handleContinue}
            servidesname={`Shopify Store Design & Development`}
              
            packagename="BASIC PACKAGE"
            pricemoney="7000"
            aboutPackage={`Launch-ready Store Set-up 1 pages + 2 Product Uploads + Mobile Optimization + Payment Setup`}
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

            onContinue={handleContinue}
            servidesname={`Shopify Store Design & Development`}
              
            packagename="STANDARD PACKAGE"
            pricemoney="17000"
            aboutPackage={`Branded Store Set-up 5 pages + 25 products + Custom FAQs, About pages + Email popup + Shopify 2.0 Support + SEO`}
            provide1="Functional website"
            provide2="25 pages"
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

            onContinue={handleContinue}
            servidesname={`Shopify Store Design & Development`}
              
            packagename="PREMIUM PACKAGE"
            pricemoney="37000"
            aboutPackage={`Premier Store Set-up 10 pages + Speed Optimization + 50 Product Uploads + SEO + 4 Email Automations + Metafields`}
            provide1="Functional website"
            provide2="10 pages"
            provide3="Content upload"
            provide4="10 plugins/extensions"
            provide5="E-commerce functionality"
            provide6="50 products"
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

export default ShopifyStoreDesignDevelopment;
