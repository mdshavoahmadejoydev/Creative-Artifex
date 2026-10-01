import React from 'react'
import Herro from '../sections/Herro'
import WorkingWith from '../sections/WorkingWith'
import Experieance from '../sections/Experieance'
import Services from '../sections/Services'
import Portfolio from '../sections/Portfolio'
import CustomerReviews from '../sections/CustomerReviews'
import Teamexperts from '../sections/Teamexperts'
import Faq from '../sections/Faq'

const Home = () => {
  return (
    <>
    <Herro/>
    <WorkingWith/>
    <Experieance/>
    <Services/>
    <Portfolio/>
    <CustomerReviews />
    <Teamexperts />
    <Faq/>
    </>
  )
}

export default Home