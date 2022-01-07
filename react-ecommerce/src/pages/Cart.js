import React from "react";
import CartItem from "../components/CartItem";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import "../styles/Cart.css";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector(getCartItems);
  const subTotalPrice = useSelector(getTotalPrice);

  return (
    <div className="container cart">
      <div className="text-center">
        <h1>
          <ShoppingCartOutlinedIcon
            className="cartIcon mr-2s"
            fontSize="large"
          />
          Cart
        </h1>
      </div>
      <div className="cartRow row">
        <p className="col">Item</p>
        <p className="col">Quantity</p>
        <p className="col">Subtotal</p>
      </div>
      <div className="cartItem">
        {cartItems &&
          cartItems.map((cartItem, key) => (
            <CartItem key={key} cartItem={cartItem} />
          ))}
      </div>
      <div className="justify-content-end">
        <hr className="" />
        <div className="row subTotal ">
          <p className="col">Subtotal</p>
          <span className="col">${subTotalPrice}</span>
        </div>
        <div className="row subTotal">
          <p className="col">Tax</p>
          <span className="col">${(subTotalPrice * 0.12).toFixed(2)}</span>
        </div>
        <div className="row subTotal">
          <p className="col">Total</p>
          <span className="col">
            ${(subTotalPrice * 0.12 + subTotalPrice).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Cart;
