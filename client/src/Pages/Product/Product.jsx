import React from 'react'
import "./Product.css"

import Navbar from '../../Components/Navbar/Navbar';
import Smallnavbar from '../../Components/Navbar/Smallnavbar';
const Product = () => {
  return (
    <div className='Product_container'> 
    <Smallnavbar/>
    <Navbar/>
    </div>
  )
}

export default Product