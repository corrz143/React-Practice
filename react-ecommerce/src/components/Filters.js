import React from "react";
import Filter from "./Filter";
import "../styles/Filter.css";

const Filters = () => {
  return (
    <div className="filter">
      {["PIZZA", "SALAD", "SIDES"].map((category) => (
        <Filter category={category} isActive={false} />
      ))}
    </div>
  );
};

export default Filters;
