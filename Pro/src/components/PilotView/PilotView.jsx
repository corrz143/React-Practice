import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

/**
 * View components that displays each Pilots
 */

export function PilotView({
  // id,
  photo,
  pilotTag,
  pilotName,
  address,
  companyName,
  companyAdd,
  phoneNum,
}) {
  return (
    <div className="card-bg">
      <div className="card ms-3 border-light">
        <div>
          <img src={photo} alt="Pilot Photo" className="photo rounded-circle" />
          <div className="pilotTag card-body text-secondary text-center">
            {pilotTag}
          </div>
        </div>
        <div className="card-body text-secondary pt-3">
          <p className="pilotName">{pilotName}</p>
          <p className="address p-0">
            <FontAwesomeIcon
              icon={faMapMarker}
              aria-hidden="true"
              className="mapIcon mx-1"
            ></FontAwesomeIcon>
            {address}
          </p>

          <p className="compName ">{companyName}</p>
          <p className="compAdd">{companyAdd}</p>
          <p className="phoneNum">{phoneNum}</p>
        </div>
      </div>
    </div>
  );
}

export default PilotView;

PilotView.propTypes = {
  id: PropTypes.number,
  photo: PropTypes.object,
  pilotName: PropTypes.string,
  address: PropTypes.string,
  companyName: PropTypes.string,
  companyAdd: PropTypes.string,
  phoneNum: PropTypes.string,
};
