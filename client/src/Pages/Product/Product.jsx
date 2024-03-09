import React from "react";
import "./Product.css";
import { Add, Remove } from "@material-ui/icons";
import Navbar from "../../Components/Navbar/Navbar";
import Smallnavbar from "../../Components/Navbar/Smallnavbar";
import Footer from "../../Components/Footer/Footer";
import Newsletter from "../../Components/Newsletter/Newletter";
// import denim from "../../Assets/Men-Jacket-PNG-High-Quality-Image.png";
const Product = () => {
  return (
    <div className="container">
      <Navbar />
      <Smallnavbar />
      <div className="wrapper">
        <div className="img-container">
          <img
            className="image"
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="Denim Jumpsuit"
          />
        </div>
        <div className="info-container">
          <h1 className="title">Denim Jumpsuit</h1>
          <p className="desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className="price">$ 20</span>
          <div className="filter-container">
            <div className="filter">
              <span className="filter-title">Color</span>
              <div
                className="filter-color"
                style={{ backgroundColor: "black" }}
              />
              <div
                className="filter-color"
                style={{ backgroundColor: "darkblue" }}
              />
              <div
                className="filter-color"
                style={{ backgroundColor: "gray" }}
              />
            </div>
            <div className="filter">
              <span className="filter-title">Size</span>
              <select className="filter-size">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="add-container">
            <div className="amount-container">
              <Remove />
              <span className="amount">1</span>
              <Add />
            </div>
            <button className="button">ADD TO CART</button>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Product;
