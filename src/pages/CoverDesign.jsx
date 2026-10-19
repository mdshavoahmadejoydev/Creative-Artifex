import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PackageItemCard from '../components/PackageItemCard'
import { useNavigate } from 'react-router-dom'

const CoverDesign = () => {


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
              servidesname={`Cover Design`}

              packagename="BASIC PACKAGE"
              pricemoney="800"
              aboutPackage={`Launch Ready Header 1 clean header or banner design for a platform of your choice`}
              provide1="1 Asset"
              provide2="Matching profile picture"
              provide3="Include source file"
              notprovide2={true}
              notprovide3={true}
              time={`2`}
            />

            <PackageItemCard

              onContinue={handleContinue}
              servidesname={`Cover Design`}

              packagename="STANDARD PACKAGE"
              pricemoney="1800"
              aboutPackage={`Social Profile Sync Kit Header/banner + profile photo + mobile friendly optimization for 3 platforms`}
              provide1="3 Asset"
              provide2="Matching profile picture"
              provide3="Include source file"
              notprovide3={true}
              time={`2`}
            />

            <PackageItemCard

              onContinue={handleContinue}
              servidesname={`Cover Design`}
              
              packagename="PREMIUM PACKAGE"
              pricemoney="3000"
              aboutPackage={`Full Brand Presence Headers/Banners, profile images, and post templates for up to 5 platforms`}
              provide1="5 Asset"
              provide2="Matching profile picture"
              provide3="Include source file"
              time={`2`}
            />

            
          </Flex>
      </Container>
    </div>
  )
}

export default CoverDesign