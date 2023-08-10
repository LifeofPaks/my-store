import React from 'react'
import './CartItem.scss'

const CartItem = ({cartStatus}) => {
  return (
    <div className='cartItem'>
        <div className="cartItemWrapper">
        <div className="productInfo">
          <img
            src="https://cutewallpaper.org/24/beats-headphones-png/transparent-apple-headphones-png-beats-studio-3-wireless-gray-png-download-kindpng.png"
            alt="cart-image"
          />

          <div className="desc">
                <p className="title">
                Beats By Dr. Dre - Beats Studio 3 Wireless Noise Cancelling
                Headphones
                </p>
                <p className="about">
                Enjoy immersive listening with these Beats Studio3 wireless
                headphones. 
                </p>
                <p className="qty">
                    <span>1</span> * <span>$238.56</span>
                </p>
          </div>

          <button onClick={cartStatus} >
            <img
              src="https://img.icons8.com/material-rounded/48/f40000/filled-trash.png"
              alt="filled-trash"
            />
          </button>
        </div>

        <div className="sum">
          <p className="sumTitle">subtotal</p>
          <span className="sumTotal">$238.56</span>
        </div>

        <button className="checkout">Proceed to check out</button>
      </div>
    </div>
  )
}

export default CartItem