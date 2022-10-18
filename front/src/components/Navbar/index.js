import React from "react";
import Logo from "../../static/images/Logo.svg"
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
                <img src = {Logo} alt= "logo" style = {{maxHeight:"50%"}} />
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
                > My Collection
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