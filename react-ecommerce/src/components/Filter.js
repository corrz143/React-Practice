import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory, selectMenu } from "../redux/menuSlice";

const Filter = ({ category }) => {
  const dispatch = useDispatch();
  const selectedMenuCategory = useSelector(selectMenu);
  return (
    <span
      onClick={() => {
        dispatch(filterCategory(category));
      }}
      className={
        selectedMenuCategory === category
          ? "filterButton filterButtonActive"
          : "filterButton"
      }
    >
      {category}
    </span>
  );
};

export default Filter;
