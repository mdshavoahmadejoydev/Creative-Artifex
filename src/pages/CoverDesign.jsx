import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import PackageItemCard from '../components/PackageItemCard'

const CoverDesign = () => {
  return (
    <div className="bg-EEEEEE py-10">
      <Container>
        <Flex className={`justify-center items-start gap-8`}>
          
            <PackageItemCard
              packagename="BASIC PACKAGE"
              pricemoney="500 tk"
              aboutPackage={`Launch Ready Header One clean header or banner design for a platform of your choice`}
              provide1="1 Asset"
              provide2="Matching profile picture"
              provide3="Include source file"
              notprovide2={true}
              notprovide3={true}
              time={`2`}
            />

            <PackageItemCard
              packagename="STANDARD PACKAGE"
              pricemoney="500 tk"
              aboutPackage={`Social Profile Sync Kit Header/banner + profile photo + mobile friendly optimization for 2 platforms`}
              provide1="4 Asset"
              provide2="Matching profile picture"
              provide3="Include source file"
              notprovide3={true}
              time={`2`}
            />

            <PackageItemCard
              packagename="PREMIUM PACKAGE"
              pricemoney="500 tk"
              aboutPackage={`Full Brand Presence Headers/Banners, profile images, and post templates for up to 4 platforms`}
              provide1="9 Asset"
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