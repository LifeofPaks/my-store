import React from "react";
import "./Navbar.scss";
import Logo from "../../assets/images/logo.png";
import ArrowDown from "../../assets/images/icons8-expand-arrow-52.png";
import CartIcon from "../../assets/images/icons8-cart-50.png";
import Search from "../../assets/images/icons8-search-50.png";
import User from "../../assets/images/icons8-user-32.png";
import Favorite from "../../assets/images/icons8-favorite-50.png";
import Flag from "../../assets/images/icons8-usa-flag-48.png";
import Playstation from "../../assets/images/icons8-playstation-60.png";
import Apple from "../../assets/images/icons8-apple-60.png";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";
import MobileNav from "../MobileNav/MobileNav";

const Navbar = ({
  toggleCart,
  openCart,
  cartStatus,
  isEmpty,
  exitEmptyCart,
  homePage,
  showMenu,
  toggleMenu,
  scrollToTop,
  handleClick,
}) => {
  return (
    <>
      <MobileNav
        toggleCart={toggleCart}
        openCart={openCart}
        cartStatus={cartStatus}
        isEmpty={isEmpty}
        exitEmptyCart={exitEmptyCart}
        homePage={homePage}
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        scrollToTop={scrollToTop}
        handleClick={handleClick}
      />

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
              <Link to="/products" onClick={scrollToTop}>
                <img
                  src="https://img.icons8.com/glyph-neue/64/000000/multiple-devices.png"
                  alt="multiple-devices"
                  className="ps5"
                />
                <p>Store</p>
              </Link>
            </div>

            <div className="item" onClick={scrollToTop}>
              <Link to="playstation">
                <img src={Playstation} alt="PS5" className="ps5" />
                <p>Play Station</p>
              </Link>
            </div>

            <div className="item" onClick={scrollToTop}>
              <Link to="apple">
                <img src={Apple} alt="apple" />
                <p>Apple</p>
              </Link>
            </div>
          </div>

          <div className="center logo" onClick={handleClick}>
            <Link to="/">
              <img src={Logo} alt="logo" />
              <h1>
                PAKS <span>Everything</span>
              </h1>
            </Link>
          </div>

          <div className="right">
            <Link to="/" className="homeWrapper" onClick={handleClick}>
              <p>Home</p>{" "}
              <img
                src="https://img.icons8.com/ios/100/home--v1.png"
                alt="home--v1"
                className="homeIcon"
              />
            </Link>
            <Link to="/">
              <p>About</p>
            </Link>
            <Link to="/">
              {" "}
              <p>Contact</p>
            </Link>
            <img src={Search} alt="Others" />
            <img src={User} alt="Others" />
            <img src={Favorite} alt="Others" />

            <div className="cartWrapper" onClick={toggleCart}>
              <img src={CartIcon} alt="Others" />
              {!isEmpty && <span>1</span>}
            </div>
          </div>
        </div>
        {!isEmpty && openCart && (
          <Cart cartStatus={cartStatus} isEmpty={isEmpty} />
        )}
        {isEmpty && (
          <EmptyCart
            exitEmptyCart={exitEmptyCart}
            homePage={homePage}
            isEmpty={isEmpty}
          />
        )}
      </div>
    </>
  );
};

export default Navbar;
