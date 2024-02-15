import React from "react";
import "./Navbar.css";
import { IoSearch } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav__container">
      <div className="nav__wrapper">
        <div className="nav__left">
          <div className="nav__language">EN</div>
          <div className="nav__searchbar">
            <div className="nav__input">
              <input type="text" placeholder=" " />
            </div>
            <div>
              <IoSearch />
            </div>
          </div>
        </div>
        <div className="nav__center">
          <h1> LuxeDivas </h1>
        </div>
        <div className="nav__right">
          <div className="Menu-item">
            <div> Register </div>
            <div> Sign-in</div>

            <div className="icon">
              <div className="icon__fav">
                <FaHeart />
              </div>
              <div className="icon__cart">
                <FiShoppingCart />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
