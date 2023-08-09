import React, { useState } from "react";
import "./Product.scss";
import Loader from "react-loaders";
import { useNavigate } from "react-router-dom";
import Star from "../../assets/images/icons8-star-48.png";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(0)

  const navigate = useNavigate()

  const increase = ()=>{
    setQuantity(quantity + 1)
  }

  const decrease = ()=>{
    setQuantity(quantity === 0 ? 0 : quantity -1)
  }

  const addToCart = ()=>{
    setQuantity(quantity)
    navigate('/')
  }

  const images = [
    "https://w7.pngwing.com/pngs/409/861/png-transparent-noise-cancelling-headphones-beats-electronics-beats-solo3-audio-headphones-electronics-magenta-mobile-phones.png",
    "https://cutewallpaper.org/24/beats-headphones-png/transparent-apple-headphones-png-beats-studio-3-wireless-gray-png-download-kindpng.png",
  ];

  return (
    <>
      <div className="product">
        <div className="left">
          <div className="images">
            <img
              src={images[0]}
              alt="productImage"
              onClick={(e) => setSelectedImage(0)}
            />
            <img
              src={images[1]}
              alt="productImage"
              onClick={(e) => setSelectedImage(1)}
            />
          </div>

          <div className="mainImage">
            <img src={images[selectedImage]} alt="" />
          </div>
        </div>

        <div className="right">
          <h1>Beats By Dr. Dre - Beats Studio 3 Wireless Noise Cancelling Headphones</h1>
          <p className="brand">Brand: <span>Sony | Similar products from Sony</span> </p>

          <div className="price">
           <span className="now">$238.56</span>
           <span className="then">$318.00</span>
          </div>

          <p className="available">In stock</p>

          <p className="desc">
            Enjoy immersive listening with these Beats Studio3 wireless
            headphones. The Pure Adaptive Noise Cancelling feature filters
            ambient sounds to reduce distractions, and Fast Fuel technology
            delivers up to three hours of play with just 10 minutes of charging.
            The Apple W1 chip in these Beats Studio3 wireless headphones offers
            one-press pairing to iOS devices.
          </p>

          <div className="qtyWrapper">
            <button onClick={decrease}>-</button> 
            <span >{quantity}</span>
            <button onClick={increase}>+</button>
          </div>

          <div className="rating">
            <div className="wrapper">
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
              <img src={Star} alt="star" />
            </div>
            <p>(2 verified ratings)</p>
          </div>

          <div className="addToCart" onClick={addToCart}>
            <img  src="https://img.icons8.com/material-rounded/48/FFFFFF/add-shopping-cart.png" alt="add-shopping-cart"/>
            <p>Add to cart</p>
          </div>

          <div className="actions">
            <div className="action">
              <img src="https://img.icons8.com/ios/100/3184D7/hearts--v1.png" alt="hearts--v1"/>
              <p>add to watch list</p>
            </div>

            <div className="action">
              <img  src="https://img.icons8.com/metro/52/3184D7/scales.png" alt="scales"/>
              <p>add to compare</p>
            </div>
          </div>
          
        </div>
      </div>

      <Loader type="square-spin" />
    </>
  );
};

export default Product;
