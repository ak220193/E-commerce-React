import React from 'react'
import "./Product.css"

import Navbar from '../../Components/Navbar/Navbar';
import Smallnavbar from '../../Components/Navbar/Smallnavbar';
import Footer from "../../Components/Footer/Footer"
const Product = () => {
  return (
    <div className='Product_container'> 
    <Smallnavbar/>
    <Navbar/>
    
    <Footer/>
    </div>
  )
}

export default Product