import React from "react";
import PropTypes from "prop-types";

export function BidTypesButtons({
  buttons: { btnretry, btnperiod, btnimport, btndelete },
}) {
  return (
    // <td className={`list-item ${state}`}>
    <div className="btn-container">
      <button type="button" className="btn btn-primary btn-m mb-2 ">
        <i className="bi bi-cloud-arrow-down mr-2 mx-2"></i>
        {btnretry}
      </button>
      <button type="button" className="btn btn-primary btn-m mb-2" disabled>
        {btnperiod}
        <span className="icon-bi-chevron-double-right"></span>
      </button>
      <button type="button" className="btn btn-primary btn-m mb-2" disabled>
        {btnimport}
        <i className="bi bi-chevron-double-right"></i>
      </button>
      <button type="button" className="btn btn-danger btn-m">
        <i className="bi bi-x-square mx-lg-2"></i>
        {btndelete}
      </button>
    </div>
    // </td>
  );
}

BidTypesButtons.propTypes = {
  //Composition of the task
  buttons: PropTypes.shape({
    btnretry: PropTypes.string,
    btnperiod: PropTypes.string,
    btnimport: PropTypes.string,
    btndelete: PropTypes.string,
  }),
};
