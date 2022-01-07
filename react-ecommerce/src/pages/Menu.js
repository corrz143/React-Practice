import React from "react";
import { menuList } from "../data/MenuList";
import MenuItem from "../components/MenuItem";
import { useSelector } from "react-redux";
import { selectMenu } from "../redux/menuSlice";
import Filters from "../components/Filters";

// import { selectMenu } from "../redux/menuSlice";
import "../styles/Menu.css";
// import { selectMenu } from "../redux/menuSlice";
// import { useSelector } from "react-redux";
// console.log(selectMenu);
// import Filter from "../components/Filter";
import "../styles/Filter.css";

export const Menu = () => {
  const selectedMenuCategory = useSelector(selectMenu);

  // const selectMenu = (state) => state.menus.menus;

  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      {/* <div className="filter"> */}
      <Filters />
      {/* </div> */}
      <div className="menuList">
        {menuList &&
          menuList
            .filter((menuItem) => {
              if (selectedMenuCategory === "ALL") return true;
              return selectedMenuCategory === menuItem.category;
            })
            .map(
              (menuItem, key) => (
                // return (
                <MenuItem
                  key={key}
                  menuItem={menuItem}

                  // image={menuItem.image}
                  // name={menuItem.name}
                  // description={menuItem.description}
                  // price={menuItem.price}
                />
              )
              // );
            )}
        {/* {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              description={menuItem.description}
              price={menuItem.price} 
        //    />
        //   );
        // })}*/}
      </div>
    </div>
  );
};

export default Menu;
