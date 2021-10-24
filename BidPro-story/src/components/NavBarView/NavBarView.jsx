import React from "react";
import { Navbar } from "react-bootstrap";
import PropTypes from "prop-types";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View components that displays the navbar section
 */

export function NavBarView({
  AADropDown,
  ASDropDown,
  FADropDown,
  UPSDropDown,
}) {
  const DropDownList = ["bidtypes", "pilots"];

  const DropDownListItems = DropDownList.map((DropDownListItems) => {
    return (
      <Navbar
        className="navbar-bg navbar-dark py-0 justify-content-end px-5"
        expand="lg"
      >
        {AADropDown}
        {DropDownListItems}
        {ASDropDown}
        {DropDownListItems}
        {FADropDown}
        {DropDownListItems}
        {UPSDropDown}
        {DropDownListItems}
      </Navbar>
    );
  });
}

NavBarView.propTypes = {
  AADropDown: PropTypes.string,
  ASDropDown: PropTypes.string,
  FADropDown: PropTypes.string,
  UPSDropDown: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string,
};
