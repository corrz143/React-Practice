import React from "react";

const MoreInfo = ({ menuItem }) => {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${menuItem.image})` }}
      >
        <h1>Image</h1>
      </div>
      <div className="rightSide">
        <h1>{menuItem.name}</h1>
        <p>{menuItem.description}</p>
      </div>
    </div>
  );
};

export default MoreInfo;
