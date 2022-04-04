import React from "react";
import {
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
	NavBtnLogout
  } from "./NavBarElements";
  import useAuth from '../../hooks/useAuth';
import "../../pages/Home.css";
import image from "../../assets/Siriuslogo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
	const {auth, setAuth} = useAuth();
	const navigate = useNavigate();
	const handleLogout = ()=>{
		fetch("/api/auth/logout",{
			method: "POST",
			headers: { "Content-Type": "application/json" },
		})
		.then(response => response.json() )
		.then(data => {
			setAuth(0);
			navigate("/signin");
		})
	}
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink to="/home" className="logo">
				<img src={image} height={100} width={100} alt="Logo" />
			</NavLink>
			<Bars />
			<NavMenu className="navbar-menu">
				<NavLink to="/home" style={{ padding: "5px", color: "black" }}>
					Home
				</NavLink>
				<NavLink to="/about" style={{ color: "black" }}>
					About
				</NavLink>
				<NavLink
					to="/addentry"
					style={{
						color: "black",
					}}
				>
					{" "}
					Add A Star
				</NavLink>
				<NavLink to="/contact" style={{ color: "black" }}>
					Contact Us
				</NavLink>
				<NavLink to="/signup" style={{ color: "black" }}>
					Sign Up
				</NavLink>
			</NavMenu>
			<NavBtn>
				{auth ? (
					<NavBtnLogout onClick={handleLogout}>log out</NavBtnLogout>
				) : (
					<NavBtnLink
						style={{
							background: "black",
							color: "white",
						}}
						to="/signin"
					>
						Sign In
					</NavBtnLink>
				)}
			</NavBtn>
		</nav>
	);
};

export default Navbar;
