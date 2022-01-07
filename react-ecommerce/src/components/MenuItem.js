import React, { useState } from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";

import { useDispatch } from "react-redux";
import { addItemToCart } from "../redux/cartSlice";
// import { Modal } from "react-bootstrap";
// import ModalMenu from "./ModalMenu";

const MenuItem = ({ menuItem }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  // const [modalShow, setModalShow] = useState(false);

  return (
    <div className="menuItem">
      <div>
        <Link to={`/menu/${menuItem.name.split(" ").join("")}`}>
          <img src={menuItem.image} alt="" className="" />
        </Link>
      </div>
      <h3> {menuItem.name}</h3>

      {/* <p> {menuItem.description} </p> */}
      <h5> ${menuItem.price} </h5>
      <div className="addCart">
        <Link to="/cart">
          <button
            className="addToCartButton"
            onClick={() => {
              dispatch(addItemToCart({ menuItem, quantity }));
            }}
          >
            ADD TO CART
          </button>
        </Link>
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </div>
    </div>
  );
};

export default MenuItem;
