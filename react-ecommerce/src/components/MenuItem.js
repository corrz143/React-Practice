import React from "react";
import { Link } from "react-router-dom";
import Quantity from "./Quantity";
// import { Modal } from "react-bootstrap";
// import ModalMenu from "./ModalMenu";

const MenuItem = ({ menuItem }) => {
  // const [modalShow, setModalShow] = useState(false);

  return (
    <div className="menuItem">
      <div>
        <Link to={`/menu/${menuItem.name.split(" ").join("")}`}>
          <img src={menuItem.image} alt="" className="" />
        </Link>
      </div>
      <h2> {menuItem.name}</h2>

      {/* <p> {menuItem.description} </p> */}
      <h5> ${menuItem.price} </h5>
      <div className="addCart">
        <Link to="/cart">
          <button> ADD TO CART </button>
        </Link>
        <Quantity />
      </div>
    </div>
  );
};

export default MenuItem;
