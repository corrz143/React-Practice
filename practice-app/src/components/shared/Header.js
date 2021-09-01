import React from "react";
import logo from './image/valesco-logo.png'
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import { NavLink } from "react-router-dom";


const Header = () => {
    return (

<>

<Nav className="row">
    <Navbar className="navbar-bg py-0  navbar-dark" expand="lg">
        <Navbar.Brand className="navbar-brand py-0" > 
          <NavLink to="/"><img src={logo}  alt="Bid Pro logo"/> </NavLink>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="navbar-collapse " id="basic-navbar-nav">
        
            <Nav className="navbar-nav ml-auto mr-2">
                <NavDropdown alignRight title="American Airlines" id="basic-nav-dropdown" >
                    <NavDropdown.Item>
                        <NavLink to="/american-airlines/bidtypes" className="navbar-link">BidTypes</NavLink>
                    </NavDropdown.Item>
                    <Nav className="dropdown-divider"></Nav>
                    <NavDropdown.Item>
                        <NavLink to="/american-airlines/pilots" className="navbar-link">Pilots</NavLink>
                    </NavDropdown.Item>  
                </NavDropdown>
           
                <NavDropdown alignRight title="Alaska Airlines" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <NavLink to="/alaska-airlines/bidtypes" className="navbar-link">BidTypes</NavLink>
                    </NavDropdown.Item>
                    <Nav className="dropdown-divider"></Nav>
                    <NavDropdown.Item>
                        <NavLink to="/alaska-airlines/pilots" className="navbar-link">Pilots</NavLink>  
                    </NavDropdown.Item>   
                </NavDropdown>
          
                <NavDropdown alignRight title="JetSuite" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                        <NavLink to="/jetsuite/bidtypes" className="navbar-link">BidTypes</NavLink>
                    </NavDropdown.Item>
                   <Nav className="dropdown-divider"></Nav>
                   <NavDropdown.Item>
                        <NavLink to="/jetsuite/pilots" className="navbar-link">Pilots</NavLink>  
                    </NavDropdown.Item> 
                </NavDropdown>
          
                <NavDropdown alignRight title="UPS" id="basic-nav-dropdown">  
                    <NavDropdown.Item>
                        <NavLink to="/ups/bidtypes" className="navbar-link">BidTypes</NavLink>
                    </NavDropdown.Item>
                    <Nav className="dropdown-divider"></Nav>
                    <NavDropdown.Item>
                        <NavLink to="/ups/pilots" className="navbar-link">Pilots</NavLink>  
                    </NavDropdown.Item>  
                </NavDropdown>
            </Nav>                
        </Navbar.Collapse>   
    </Navbar> 
</Nav>  

</>        





    )
}

export default Header;