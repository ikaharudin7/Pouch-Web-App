import axios from "axios";
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
  const [loggedIn, setLoggedIn] = React.useState(false);

  React.useEffect(() => {
    axios.get("http://localhost:8080/login", { withCredentials: true})
    .then((response) => {       
      setLoggedIn(response.data.loggedIn)
      console.log(response.data.loggedIn)
  })    
  }, []);


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
                  to="/browse-users"
                > Browse Users
                </NavLink>
                { false ? <NavLink 
                  to="/about"
                > About
                </NavLink> : null }
                {loggedIn ?
                <NavLink 
                  to="/collection-page"
                > My Collection
                </NavLink> : <></>
                }
                { loggedIn ? 
                <NavLink 
                  to="/profile"
                > My Profile
                </NavLink> : <></>
                }
                { !loggedIn ? 
                <NavBtn>
                    <NavBtnLink to="/login">
                        Login
                    </NavBtnLink>
                </NavBtn> : 
                <NavBtn>
                <NavBtnLink to="/login">
                    Logout
                </NavBtnLink>
                </NavBtn> 
                }
                { !loggedIn ? 
                <NavBtn>
                  <NavBtnLink 
                      to="/signup"
                    > Sign Up
                  </NavBtnLink> 
                </NavBtn> : <></>
                }
                
            </NavMenu>
           </Nav> 
        </>
    );
};



export default Navbar;