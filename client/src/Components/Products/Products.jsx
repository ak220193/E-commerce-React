import React from 'react';
import "./Products.css";
import {popularProducts} from "../../Variabledata/Productimages";
import Product from '../../Components/Product/Product';

const Products = () => {
  return (
    <div className='Products__container'>
    {
      popularProducts.map((item) => (
        <Product item={item} key={item.id} />
    ))}
    </div>
  )
}

export default Products