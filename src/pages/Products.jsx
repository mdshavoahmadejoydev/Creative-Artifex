import React, { Component } from 'react'
import ReviewsPageTitle from '../components/ReviewsPageTitle';
import P from '../components/P';
import creativeHero from '../assets/creativeherro.svg'
import { IoIosStar } from 'react-icons/io';
import Flex from '../components/Flex';
import Container from '../components/Container';
import Image from '../components/Image';
import ProductFullCard from '../components/ProductFullCard';

const Products = () => {
  return (
    <section className={`w-full`}>
      <div className='h-94'></div>

      <div className='bg-seagreen'>
        <ReviewsPageTitle
          text={"<< Products >>"}
          className={`pt-4 text-center`}
        />

        <P
          text={`Explore our latest products, crafted with quality and care.`}
          className={`text-white w-2xl text-center mx-auto pb-20`}
        />

      </div>
      {/* About Products */}
      <div className="bg-gray-white pt-17.5">
        <Container>

          
          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>

          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>

          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>

          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>

          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>

          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>

          <ProductFullCard productLink={`.......Link........`} productDes={`Excellent experience working with this seller! The website turned
            out really well, and I’m very happy with the quality of the work.
            The seller was professional, responsive, and understood my
            requirements perfectly. Highly recommended!`} Lprice={`500`} Hprice={`800`} duration={`2`} countReviews={`150`} stars={`5`} src={creativeHero}/>



        </Container>
      </div>
    </section>
  );
}

export default Products
