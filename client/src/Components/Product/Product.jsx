import React from "react";
import "./Product.css";
import { IoHeart } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const Product = ({ item }) => {
  return (
    <div className="Product__Container">
   
      <div className="Product__image">
        <img src={item.img} alt="prodcutimages" />
      </div>
      <div className="Product__info">
        <div className="Product__icon">
          <MdShoppingCart />
          <IoHeart />
          <IoMdSearch />
        </div>
      </div>
    </div>
  );
};

export default Product;
