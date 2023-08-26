import React, { useState } from "react";
import "./App.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import { useNavigate } from "react-router-dom";
import PlayStation from "./Pages/PlayStation/PlayStation";
import Apple from "./Pages/Apple/Apple";


function App() {


  const [selectedImage, setSelectedImage] = useState(1);
  const [quantity, setQuantity] = useState(1);
  const [openCart, setOpenCart] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [exitEmptyCart, setExitEmptyCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const navigate = useNavigate();

  const increase = () => {
    setQuantity(quantity + 1);
  };

  const decrease = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
    isEmpty ? setExitEmptyCart(false) : setExitEmptyCart(true);
  };

  const addToCart = () => {
    setQuantity(quantity);
    setOpenCart(!openCart);
    setIsEmpty(false);
  };

  const cartStatus = () => {
    setIsEmpty(true);
    setOpenCart(false);
    setExitEmptyCart(false);
  };

  const homePage = () => {
    navigate("/");
    setExitEmptyCart(true);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setExitEmptyCart(true);
  };

  // AUTO SCROLL TOP ON EACH PAGE
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const handleClick = () => {
    scrollToTop();
    homePage();
  };

  const Layout = () => {
    return (
      <div className="container">
        <Navbar
          toggleCart={toggleCart}
          openCart={openCart}
          setOpenCart={setOpenCart}
          cartStatus={cartStatus}
          isEmpty={isEmpty}
          exitEmptyCart={exitEmptyCart}
          homePage={homePage}
          showMenu={showMenu}
          toggleMenu={toggleMenu}
          scrollToTop={scrollToTop}
          handleClick={handleClick}
        />
        <div className="main">
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };


  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home scrollToTop={scrollToTop} />} />
            <Route
              path="products"
              element={<Products scrollToTop={scrollToTop} />}
            />
            <Route
              path="playstation"
              element={<PlayStation scrollToTop={scrollToTop} />}
            />
            <Route path="apple" element={<Apple scrollToTop={scrollToTop} />} />

            <Route
              path="/products/:id"
              element={
                <Product
                  selectedImage={selectedImage}
                  setSelectedImage={setSelectedImage}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  increase={increase}
                  decrease={decrease}
                  addToCart={addToCart}
                  isEmpty={isEmpty}
                  setIsEmpty={setIsEmpty}
                  scrollToTop={scrollToTop}
                />
              }
            />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
