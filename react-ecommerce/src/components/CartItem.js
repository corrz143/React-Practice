import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

const CartItem = ({ cartItem }) => {
  return (
    <div className="cartItem">
      <div className="cartItemContainer">
        <div>{cartItem.image}</div>
        <b>Name: {cartItem.name}</b>
        <p>Quantity: {cartItem.quantity} </p>
        <p>Price: {cartItem.price} </p>
      </div>
      <DeleteIcon />
    </div>
  );
};

export default CartItem;
