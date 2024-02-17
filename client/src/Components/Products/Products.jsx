import React from 'react';
import "./Products.css";
import {popularProducts} from "../../Variabledata/Productimages";
import Product from '../../Components/Product/Product';

const Products = () => {
  return (
    <div className='Products__container'>
    {
      popularProducts.map((item, index) => (
        <Product item={item} key={index} />
    ))}
    </div>
  )
}

export default Products