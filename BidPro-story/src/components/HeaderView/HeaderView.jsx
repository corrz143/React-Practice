import React from "react";
import { Navbar, Nav } from "react-bootstrap";

/**
 * View components that displays the header section
 */

export function HeaderView({
  logoView,
  AADropDown,
  ASDropDown,
  FADropDown,
  UPSDropDown,
}) {
  return (
    <Navbar className="navbar-mar navbar-bg px-5 justify-content-end">
      <Nav className="logoView">{logoView}</Nav>

      <Nav>
        {AADropDown}
        {ASDropDown}
        {FADropDown}
        {UPSDropDown}
      </Nav>
    </Navbar>
  );
}
