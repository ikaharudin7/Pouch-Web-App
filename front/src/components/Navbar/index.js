import React from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {


    return (
        <>
           <Nav>
            <NavLogo to="/">
                Logo
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                > Home
                </NavLink>
                <NavLink 
                  to="/about"
                > About
                </NavLink>
                <NavLink 
                  to="/collection-page"
                > Test
                </NavLink>
                <NavLink 
                  to="/profile"
                > My Profile
                </NavLink>
                <NavBtn>
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/signup">
                        Sign Up
                    </NavBtnLink>
                </NavBtn>
                
            </NavMenu>
           </Nav> 
        </>
    );
};



export default Navbar;