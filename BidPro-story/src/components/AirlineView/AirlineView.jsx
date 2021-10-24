import React from "react";
import PropTypes from "prop-types";

/**
 * Interactive components that displays the airline section
 */

export function AirlineView({ name, path }) {
  return (
    <div className="col-sm-12 col-md border rounded border-danger mb-2">
      <div className="p-3">
        <h1>{name}</h1>
        <p>
          View the monthly bid data, import history &amp; download statistics.
        </p>
        <a href={path} className=" btn btn-outline-dark">
          View
        </a>
      </div>
    </div>
  );
}

AirlineView.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};
