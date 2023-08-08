import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/icons8-expand-arrow-52.png";
import Cart from "../../assets/images/icons8-cart-50.png";
import Search from "../../assets/images/icons8-search-50.png";
import User from "../../assets/images/icons8-user-32.png";
import Favorite from "../../assets/images/icons8-favorite-50.png";
import Scale from "../../assets/images/icons8-scale-50.png";
import Flag from "../../assets/images/icons8-usa-flag-48.png";
import PS5 from "../../assets/images/icons8-ps-5-48.png";
import Playstation from "../../assets/images/icons8-playstation-60.png";
import Apple from "../../assets/images/icons8-apple-60.png";
import Others from "../../assets/images/icons8-multiple-devices-52.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src={Flag} alt="flag" className="flag" />
            <img src={ArrowDown} alt="arrow" className="arrow" />
          </div>

          <div className="item">
            <span>USD</span>
            <img src={ArrowDown} alt="arrow" className="arrow" />
          </div>

          <div className="item">
            <Link to="/products/1">
              <img src={Playstation} alt="PS5" className="ps5" />
              Play Station
            </Link>
          </div>

          <div className="item">
            <Link to="/products/2">
              <img src={Apple} alt="apple" />
              Apple
            </Link>
          </div>

          <div className="item">
            <Link to="/products/3">
              <img src={Others} alt="Others" />
              Others
            </Link>
          </div>
        </div>

        <div className="center logo">
          <Link to="/">
            <img src={Logo} alt="logo" />
            <h1>
              PAKS <span>Everything</span>
            </h1>
          </Link>
        </div>

        <div className="right">
          <Link to="/"> Home</Link>
          <a href="#footer">About</a>
          <a href="#footer">Contact</a>
          <a href="#footer">Store</a>
          <img src={Search} alt="Others" />
          <img src={User} alt="Others" />
          <img src={Favorite} alt="Others" />

          <div className="cartWrapper">
            <img src={Cart} alt="Others" />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
