import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { menuList } from "../data/MenuList";
import { useDispatch } from "react-redux";
import { removeItem } from "../redux/cartSlice";

const CartItem = ({ cartItem }) => {
  const menuItem = menuList.find((m) => m.id === cartItem.menuItemId);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="row">
        <div className="containerItem">
          <img
            src={menuItem.image}
            alt="cartItemPhoto"
            className="cartItemImage"
          />

          <div className="col containerMenuItem1">
            <h5>{menuItem.name}</h5>
            <p> ${menuItem.price} </p>
            <div
              onClick={() => dispatch(removeItem({ cartItemId: cartItem.id }))}
            >
              <DeleteIcon />
            </div>
          </div>

          <div className="col containerMenuItem2">
            <p>{cartItem.quantity} </p>
          </div>

          <div className="col containerMenuItem3">
            <p> ${menuItem.price * cartItem.quantity} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
