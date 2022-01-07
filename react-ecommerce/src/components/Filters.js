import React from "react";
import Filter from "./Filter";
import "../styles/Filter.css";

const Filters = () => {
  return (
    <div className="filter">
      {["PIZZA", "SALAD", "SIDES", "ALL"].map((category) => (
        <Filter category={category} />
      ))}
    </div>
  );
};

export default Filters;
