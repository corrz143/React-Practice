import React from "react";
import logo from "../images/BidProLogo.png";
import { NavLink, Navbar } from "react-bootstrap";

/**
 * View components that displays the Bidpro Logo
 */

export function LogoView() {
  return (
    <Navbar.Brand className="navbar-brand py-0">
      <NavLink to="/">
        <img src={logo} alt="BidPro logo" />
      </NavLink>
    </Navbar.Brand>
  );
}
