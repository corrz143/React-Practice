import React from "react";
import PropTypes from "prop-types";

export function BidTypes({
  type: { id, bidtypes, status, bidPeriods, lastImport },
}) {
  // if (this.item === undefined)
  return (
    <>
      <table className="table table-striped">
        {/* <thead>
          <tr>
            <th className="">ID</th>
            <th className="">Bid Types</th>
            <th className="">Status</th>
            <th className="">#Bid Periods</th>
            <th scope="">Last Import</th>
            <th className="">
              <a href="#">
                <i className="bi bi-funnel-fill mx-2"></i>
              </a>
              <a href="#">
                <i className="bi bi-plus mx-2"></i>
              </a>
              <a href="#">
                <i className="bi bi-arrow-repeat mx-2"></i>
              </a>
            </th>
          </tr>
        </thead> */}

        <tbody>
          <tr>
            <th className="align-middle">{id}</th>
            <td className="">{bidtypes}</td>
            <td className="">{status}</td>
            <td className="">{bidPeriods}</td>
            <td className="">{lastImport}</td>
            {/* <td>
            <div className="btn-container">
              <button type="button" className="btn btn-primary btn-m mb-2 ">
                <i className="bi bi-cloud-arrow-down mr-2 mx-2"></i>
                Retry Import
              </button>
              <button
                type="button"
                className="btn btn-primary btn-m mb-2"
                disabled
              >
                Bid Periods
                <span className="icon-bi-chevron-double-right"></span>
              </button>
              <button
                type="button"
                className="btn btn-primary btn-m mb-2"
                disabled
              >
                Import History
                <i className="bi bi-chevron-double-right"></i>
              </button>
              <button type="button" className="btn btn-danger btn-m">
                <i className="bi bi-x-square mx-lg-2"></i>
                Delete
              </button>
            </div>
          </td> */}
          </tr>
        </tbody>
        {/* <td>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-m mb-2 ">
                  <i className="bi bi-cloud-arrow-down mr-2 mx-2"></i>
                  Retry Import
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Bid Periods
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Import History
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button type="button" className="btn btn-danger btn-m">
                  <i className="bi bi-x-square mx-lg-2"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th className="align-middle">2</th>
            <td className="td">Captain LAX 73G</td>
            <td>Current</td>
            <td style="padding-left: 45px">1</td>
            <td>Nov 1 2017 12:00AM</td>
            <td>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-m mb-2 ">
                  <i className="bi bi-cloud-arrow-down mr-2 mx-2"></i>
                  Retry Import
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Bid Periods
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Import History
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button type="button" className="btn btn-danger btn-m">
                  <i className="bi bi-x-square mx-lg-2"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th className="align-middle">3</th>
            <td>Captain PDX 73G</td>
            <td>Current</td>
            <td style="padding-left: 45px">1</td>
            <td>Nov 1 2017 12:00AM</td>
            <td>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-m mb-2 ">
                  <i className="bi bi-cloud-arrow-down mr-2 mx-2"></i>
                  Retry Import
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Bid Periods
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Import History
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button type="button" className="btn btn-danger btn-m">
                  <i className="bi bi-x-square mx-lg-2"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr>

          <tr>
            <th className="align-middle">4</th>
            <td>Captain SEA 73G</td>
            <td>Current</td>
            <td style="padding-left: 45px">1</td>
            <td>Nov 1 2017 12:00AM</td>
            <td>
              <div className="text-center">
                <button type="button" className="btn btn-primary btn-m mb-2 ">
                  <i className="bi bi-cloud-arrow-down mr-2 mx-2"></i>
                  Retry Import
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Bid Periods
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-primary btn-m mb-2"
                  disabled
                >
                  Import History
                  <i className="bi bi-chevron-double-right"></i>
                </button>
                <button type="button" className="btn btn-danger btn-m">
                  <i className="bi bi-x-square mx-lg-2"></i>
                  Delete
                </button>
              </div>
            </td>
          </tr> */}
      </table>
    </>
  );
}

BidTypes.propTypes = {
  types: PropTypes.shape({
    id: PropTypes.number,
    bidtypes: PropTypes.string,
    status: PropTypes.string,
    bidPeriods: PropTypes.number,
    lastImport: PropTypes.string,
  }),
};
