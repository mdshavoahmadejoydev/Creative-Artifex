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

const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>


      <Route path="/services" element={<Services/>}>

        <Route path='graphic-multimedia' element={<GraphicMultimedia/>}></Route>


        <Route path='web-software' element={<WebSoftware/>}></Route>


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