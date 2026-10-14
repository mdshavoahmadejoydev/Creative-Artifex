import React from 'react'

import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './sections/RootLayout';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Products from './pages/Products';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Services from './pages/Services';
import GraphicMultimedia from './pages/GraphicMultimedia';
import WebSoftware from './pages/WebSoftware';
import LogoDesign from './pages/LogoDesign';
import UiUxDesign from './pages/UiUxDesign';
import VideoAnimations from './pages/VideoAnimations';
import CoverDesign from './pages/CoverDesign';
import AdsDesign from './pages/AdsDesign';
import ThumbnailDesign from './pages/ThumbnailDesign';
import BusinessCardDesign from './pages/BusinessCardDesign';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import MobileApplicationDevelopment from './pages/MobileApplicationDevelopment';
import WordPressDevelopment from './pages/WordPressDevelopment';
import ShopifyStoreDesignDevelopment from './pages/ShopifyStoreDesignDevelopment';

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>


      <Route path="/services" element={<Services/>}>

        <Route path='graphic-multimedia' element={<GraphicMultimedia/>}>
          <Route path='logo-design' element={<LogoDesign/>}></Route>
          <Route path='uiux-design' element={<UiUxDesign/>}></Route>
          <Route path='video-animation' element={<VideoAnimations/>}></Route>
          <Route path='cover-design' element={<CoverDesign/>}></Route>
          <Route path='ads-design' element={<AdsDesign/>}></Route>
          <Route path='thumbnail-design' element={<ThumbnailDesign/>}></Route>
          <Route path='business-card-design' element={<BusinessCardDesign/>}></Route>

        </Route>


        <Route path='web-software' element={<WebSoftware/>}>
          <Route path='website-development' element={<WebsiteDevelopment/>}></Route>
          <Route path='software-development' element={<SoftwareDevelopment/>}></Route>
          <Route path='mobile-application-development' element={<MobileApplicationDevelopment/>}></Route>
          <Route path='wordpress-development' element={<WordPressDevelopment/>}></Route>
          <Route path='shopify-store-design-development' element={<ShopifyStoreDesignDevelopment/>}></Route>
        </Route>


      </Route>


      <Route path="/reviews" element={<Reviews/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      <Route path="/team" element={<Team/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
    </Route>
  )
);


const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App