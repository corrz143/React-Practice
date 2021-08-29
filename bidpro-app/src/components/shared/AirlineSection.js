import React from "react";
import { Link } from "react-router-dom";


const AirlineSection = (props) => {
    return (
        <div className="border rounded border-danger mb-2" >
            <div className="ml-3 ">
                <h1>{props.airlineName}</h1>
                <p>View the monthly bid data, import history &amp; download statistics</p>
                <Link to={props.airlineLink} className="btn view btn-outline-dark mb-2" role="button">
                    View 
                </Link>    
            </div>
        </div>
    )
}

export default AirlineSection;