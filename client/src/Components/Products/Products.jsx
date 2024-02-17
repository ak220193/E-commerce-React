import React from 'react';
import "./Products.css";
import {popularProducts} from "../../Variabledata/Productimages";
import Product from '../../Components/Product/Product';

const Products = () => {
  return (
    <div> 
    <div className='Products__heading'>
        <h1> Select and Shop Your Products </h1>
      </div>
    <div className='Products__container'>
    {
      popularProducts.map((item, index) => (
        <Product item={item} key={index} />
    ))}
    </div>
    </div>
  )
}

export default Products