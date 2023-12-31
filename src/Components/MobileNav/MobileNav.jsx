import React from "react";
import "./MobileNav.scss";
import Logo from "../../assets/images/logo.png";
import CartIcon from "../../assets/images/icons8-cart-50.png";
import Search from "../../assets/images/icons8-search-50.png";
import Favorite from "../../assets/images/icons8-favorite-50.png";
import Playstation from "../../assets/images/icons8-playstation-60.png";
import Apple from "../../assets/images/icons8-apple-60.png";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import EmptyCart from "../EmptyCart/EmptyCart";

const MobileNav = ({
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
    <div className="mobileNav">
      <div className="top">
        <div className="center logo" onClick={handleClick}>
          <Link to="/" onClick={scrollToTop}>
            <img src={Logo} alt="logo" />
            <h1>
              PAKS <span>Everything</span>
            </h1>
          </Link>
        </div>

        <div className="menu" onClick={toggleMenu}>
          {
            showMenu ?   <img
            src="https://img.icons8.com/fluency-systems-regular/96/long-arrow-left.png"
            alt="long-arrow-left"
            className="arrow"
          /> : 

          <img
          src="https://img.icons8.com/ios-glyphs/60/menu--v1.png"
          alt="menu--v1"
          className="hamburger"
        />
          }
        
        
        </div>
      </div>

      <div className={` bottom ${showMenu ? 'showMenu' : ''}`}>
        <div className="mnWrapper">
          <Link to="/" onClick={handleClick}>
            <img
              src="https://img.icons8.com/ios/100/home--v1.png"
              alt="home--v1"
            />
          </Link>

          <Link to="/products" onClick={scrollToTop}>
            <img
              src="https://img.icons8.com/glyph-neue/64/000000/multiple-devices.png"
              alt="multiple-devices"
              className="ps5"
            />
          </Link>

          <Link to="playstation" onClick={scrollToTop}>
            <img src={Playstation} alt="PS5" className="ps5" />
          </Link>

          <Link to="apple" onClick={scrollToTop}>
            <img src={Apple} alt="apple" />
          </Link>

          <img src={Search} alt="Others" />
          <img src={Favorite} alt="Others" />
          <div className="cartWrapper" onClick={toggleCart}>
            <img src={CartIcon} alt="Others" />
            {!isEmpty && <span>1</span>}
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
      </div>
    </div>
  );
};

export default MobileNav;
