import React from "react";
import PropTypes from "prop-types";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

/**
 * Interactive components that displays the airline dropdown section
 */

export function NavBarDropDownView({ airlineName, bidTypesPath, pilotsPath }) {
  return (
    <Navbar className="navbar-bg navbar-dark" expand="lg">
      <NavDropdown
        title={airlineName}
        id="basic-nav-dropdown"
        className="navdrop mx-1"
      >
        <NavDropdown.Item>
          <a href={bidTypesPath} className="navbar-link">
            BidTypes
          </a>
        </NavDropdown.Item>
        <Nav className="dropdown-divider"></Nav>
        <NavDropdown.Item alignRight>
          <a href={pilotsPath} className="navbar-link">
            Pilots
          </a>
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
}

NavBarDropDownView.propTypes = {
  airlineName: PropTypes.string,
  bidTypesPath: PropTypes.string,
  pilotsPath: PropTypes.string,
};
