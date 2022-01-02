import React from "react";
import CartItem from "../components/CartItem";

const cartItems = [
  {
    id: 1,
    name: "Pepperoni Pizza",
    quantity: 2,
    price: 15.99,
  },
  {
    id: 2,
    name: "Cheezy Pizza",
    quantity: 2,
    price: 15.99,
  },
];

const Cart = () => {
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div>Image</div>
      <div>
        <h5>Total:</h5>
        <span>$100</span>
      </div>
      {cartItems.map((cartItem) => (
        <CartItem cartItem={cartItem} />
      ))}
    </div>
  );
};

export default Cart;
