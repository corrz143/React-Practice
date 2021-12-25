import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavBarDropDownView } from "../NavBarDropDownView/NavBarDropDownView";

/**
 * View components that displays the navbar section
 */

export function NavBarView({ airlines }) {
  return (
    <>
      <Navbar className="navbar navbar-bg navbar-dark py-3" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="navbar-collapse">
          <Nav>
            {airlines.map((airline, index) => (
              <NavBarDropDownView key={index} airline={airline} />
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
