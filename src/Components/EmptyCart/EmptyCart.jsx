import React from 'react'
import './EmptyCart.scss'


const EmptyCart = ({exitEmptyCart, homePage, isEmpty}) => {

  
  return (
    !exitEmptyCart && isEmpty &&
    <div className='emptyCart'>
        <div className="modal">
            <div className="content">
                <img src="https://img.icons8.com/ios/100/3184D7/clear-shopping-cart.png" alt="clear-shopping-cart"/>
                <h1>Your cart is empty</h1>
                <p>You have not added any item to your cart.</p>
                <span onClick={homePage}>Return to Homepage</span>
            </div>
        </div>

    </div>
  )
}

export default EmptyCart