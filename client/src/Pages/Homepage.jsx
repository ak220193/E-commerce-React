import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Smallnavbar from '../Components/Navbar/Smallnavbar';
import Slider from '../Components/Slider/Slider';
import Categories from '../Components/Categories/Categories';
import Products from '../Components/Products/Products';

const Homepage = () => {
  return (
    <div>
    <Smallnavbar/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    </div>
  )
}

export default Homepage