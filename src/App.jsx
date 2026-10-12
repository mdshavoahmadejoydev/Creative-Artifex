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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home/>}></Route>
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