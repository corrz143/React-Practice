import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    const activeStyle = {color: "#F15B2A"};
    return (
        <>
            <nav>
                <NavLink to="/" activeStyle={activeStyle} exact>
                    Week 4
                </NavLink>
                {" | "}
                <NavLink to="/week5" activeStyle={activeStyle} exact>
                    Week 5
                </NavLink>
                {" | "}
                <NavLink to="/week6" activeStyle={activeStyle} exact>
                    Week 6
                </NavLink>
                {" | "}
            </nav>
            
        </>    
    );   
};

export default Header;