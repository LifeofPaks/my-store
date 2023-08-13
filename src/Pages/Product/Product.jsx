import React from "react";
import "./Product.scss";
import Star from "../../assets/images/icons8-star-48.png";
import SimilarItem from "../../Components/SimilarItems/SimilarItem";

const Product = ({
  selectedImage,
  setSelectedImage,
  quantity,
  increase,
  decrease,
  addToCart,
  scrollToTop
}) => {
  const images = [
    "https://w7.pngwing.com/pngs/409/861/png-transparent-noise-cancelling-headphones-beats-electronics-beats-solo3-audio-headphones-electronics-magenta-mobile-phones.png",
    "https://cutewallpaper.org/24/beats-headphones-png/transparent-apple-headphones-png-beats-studio-3-wireless-gray-png-download-kindpng.png",
    "https://www.beatsbydre.com/content/dam/beats/web/product/headphones/studiopro-wireless/pdp/product-carousel/black/pc-studiopro-black-thrqtr-right.jpg",
  ];

  return (
    <>
      <div className="product">
        <div className="wrapper">
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

              <img
                src={images[2]}
                alt="productImage"
                onClick={(e) => setSelectedImage(2)}
              />
            </div>

            <div className="mainImage">
              <img src={images[selectedImage]} alt="" />
            </div>
          </div>

          <div className="right">
            <h1>
              Beats By Dr. Dre - Beats Studio 3 Wireless Noise Cancelling
              Headphones
            </h1>
            <p className="brand">
              Brand: <span>Apple | Similar products from Sony</span>{" "}
            </p>

            <div className="price">
              <span className="now">$238.56</span>
              <span className="then">$318.00</span>
            </div>

            <p className="available">In stock</p>

            <p className="desc">
              Enjoy immersive listening with these Beats Studio3 wireless
              headphones. The Pure Adaptive Noise Cancelling feature filters
              ambient sounds to reduce distractions, and Fast Fuel technology
              delivers up to three hours of play with just 10 minutes of
              charging. The Apple W1 chip in these Beats Studio3 wireless
              headphones offers one-press pairing to iOS devices.
            </p>

            <div className="qtyWrapper">
              <button onClick={decrease}>-</button>
              <span>{quantity}</span>
              <button onClick={increase}>+</button>
            </div>

            <div className="rating">
              <div className="ratingWrapper">
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
                <img src={Star} alt="star" />
              </div>
              <p>(2 verified ratings)</p>
            </div>

            <div className="addToCart" onClick={addToCart}>
              <img
                src="https://img.icons8.com/material-rounded/48/FFFFFF/add-shopping-cart.png"
                alt="add-shopping-cart"
              />
              <p>Add to cart</p>
            </div>

            <div className="actions">
              <div className="action">
                <img
                  src="https://img.icons8.com/ios/100/3184D7/hearts--v1.png"
                  alt="hearts--v1"
                />
                <p>add to watch list</p>
              </div>

              <div className="action">
                <img
                  src="https://img.icons8.com/metro/52/3184D7/scales.png"
                  alt="scales"
                />
                <p>add to compare</p>
              </div>
            </div>
          </div>
        </div>

        <SimilarItem scrollToTo={scrollToTop}/>
      </div>
    </>
  );
};

export default Product;
