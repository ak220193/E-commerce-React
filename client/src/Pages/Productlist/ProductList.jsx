

import React from "react";
import "./Productlist.css";
import Navbar from "../../Components/Navbar/Navbar";
import SmallNavbar from "../../Components/Navbar/Smallnavbar";
import Products from "../../Components/Products/Products";
import Newsletter from "../../Components/Newsletter/Newletter";
import Footer from "../../Components/Footer/Footer";

const ProductList = () => {
  return (
    <div className="container">
      <Navbar />
      <SmallNavbar />
      <h1 className="title">Dresses</h1>
      <div className="filter-container">
        <div className="filter">
          <span className="filter-text">Filter Products:</span>
          <select className="select">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="select">
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="filter">
          <span className="filter-text">Sort Products:</span>
          <select className="select">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
