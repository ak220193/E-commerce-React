import React from 'react'
import Navbar from '../Components/Navbar/Navbar';
import Smallnavbar from '../Components/Navbar/Smallnavbar';
import Slider from '../Components/Slider/Slider';
import Categories from '../Components/Categories/Categories';
import Products from '../Components/Products/Products';
import Newletter from '../Components/Newsletter/Newletter';
import Footer from '../Components/Footer/Footer';

const Homepage = () => {
  return (
    <div>
    <Smallnavbar/>
    <Navbar/>
    <Slider/>
    <Categories/>
    <Products/>
    <Newletter/>
    <Footer/>
    </div>
  )
}

export default Homepage