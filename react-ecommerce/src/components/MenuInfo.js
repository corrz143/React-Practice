import React from "react";
import "../styles/MenuInfo.css";
// import { MenuList } from "../data/MenuList";
import MoreInfo from "./MoreInfo";

const ModalMenu = ({ menuItem }) => {
  return (
    <div className="menuInfo">
      <div className="menuLeft">
        {/* {MenuList.map((menuItem, key) => { */}
        {/* return ( */}
        <MoreInfo
          // key={key}
          // name={name}
          menuItem={menuItem.image}
          // price={menuItem.price}
        />
        {/* ); */}
        {/* })} */}
      </div>
      <div className="menuRight">
        <p>{menuItem.description}</p>
      </div>
    </div>
  );
};

export default ModalMenu;
