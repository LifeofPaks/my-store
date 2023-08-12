import React from "react";
import "./Cart.scss";
import CartItem from "../../Components/CartItem/CartItem";

const Cart = ({ cartStatus, isEmpty }) => {
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {!isEmpty && <CartItem cartStatus={cartStatus} />}
      <p className="reset" onClick={cartStatus}>Clear Cart</p>
    </div>
  );
};

export default Cart;
