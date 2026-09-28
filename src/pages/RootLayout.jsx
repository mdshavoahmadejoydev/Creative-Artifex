import React from 'react'
import Header from '../sections/Header'
import Footer from '../sections/Footer'
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div>
      <Header/>
        <Outlet/>
      <Footer/>
    </div>
  )
}

export default RootLayout