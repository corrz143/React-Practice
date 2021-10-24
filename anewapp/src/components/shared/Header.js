import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./valesco-logo.png"
 import { Form,FormControl,Button } from 'react-bootstrap'

const Header = () => {
    const activeStyle = {color: "#F15B2A"};
    return (
        <>
         <nav className="row header">
             <div className="col-md-2">
                  <img src={logo} className="logo" alt="logo" />

             </div>
           
                <div className="col-md-10 navbar">
                <NavLink to="/" activeStyle={activeStyle} exact>
                    Home
                </NavLink>
                {" | "}
                <NavLink to="/about" activeStyle={activeStyle} exact>
                    About Us
                </NavLink>
                {" | "}
                 <NavLink to="/employment" activeStyle={activeStyle} exact>
                    Employment
                </NavLink>
                {" | "}
                 <NavLink to="/clients" activeStyle={activeStyle} exact>
                    Our Clients
                </NavLink>
                {" | "}
                <NavLink to="/comments" activeStyle={activeStyle} exact>
                    Comments and Suggestions
                </NavLink>
                {" | "}
                <NavLink to="/contact" activeStyle={activeStyle} exact>
                    Contact Us
                </NavLink>
                {" | "}
               
            
      
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
            />
          <Button variant="outline-success">Search</Button>
        </Form>
         </div>
           </nav>       
        </>    
    );   
};

export default Header;