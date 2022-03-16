import React from "react";
import { Link } from "react-router-dom";
import {
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
  } from "./NavbarElements";
import "../../pages/Home.css";
import image from "../../Component/Siriuslogo.png";


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">

            <NavLink to='/'>
       <img src={image} height={100} width={100}  alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
        <NavLink to='/' style={{ padding: "5px", color: "black" }}>
            Home
          </NavLink>
          <NavLink to='/about'style={{ color: "black" }} activeStyle>
            About
          </NavLink>
          <NavLink to='/addentry' style={{
                    color: "white",
                    backgroundColor: "rgb(0, 0, 0)",
                    borderRadius: "5px",
                }}> Add A Star</NavLink>
          <NavLink to='/contact'style={{ color: "black" }} activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/signup'style={{ color: "black" }} activeStyle>
            Sign Up
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>

        </nav>
     );
};

export default Navbar;

