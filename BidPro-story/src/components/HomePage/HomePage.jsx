import React from "react";
import { Navbar, Nav } from "react-bootstrap";

/**
 * View components that displays the homepage
 */

export function HomePage({
  logoView,
  AADropDown,
  ASDropDown,
  FADropDown,
  UPSDropDown,
  administrationView,
  versionView,
  airlineView,
  footerView,
}) {
  return (
    <>
      <div>
        <Navbar className="navbar-mar navbar-bg justify-content-end px-5">
          <Nav className="logoView">{logoView}</Nav>

          <Nav>
            {AADropDown}
            {ASDropDown}
            {FADropDown}
            {UPSDropDown}
          </Nav>
        </Navbar>
      </div>

      <div>
        <div className="jumbotron mt-3">
          <section className="row">
            {administrationView}
            {versionView}
          </section>
        </div>
      </div>

      <div className="row">
        <div className="col col-md-6">{airlineView}</div>
        <div className="col col-md-6">{airlineView}</div>
      </div>
      <div className="row">
        <div className="col col-md-6">{airlineView}</div>
        <div className="col col-md-6">{airlineView}</div>
      </div>

      <div>{footerView}</div>
    </>
  );
}
