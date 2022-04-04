import "./Nav.css";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import image from "../../assets/Siriuslogo.png";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const Navbar = () => {
	const { auth, setAuth } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		fetch("/api/auth/logout", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => response.json())
			.then((data) => {
				setAuth(0);
				navigate("/signin");
			});
	};

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink to="/" className="logo">
				<img src={image} height={100} width={100} alt="Logo" />
			</NavLink>
			<Box className="navbar-menu">
				<NavLink to="/" style={{ padding: "5px", color: "black" }}>
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
					Add A Star
				</NavLink>
				<NavLink to="/contact" style={{ color: "black" }}>
					Contact Us
				</NavLink>
				<NavLink to="/signup" style={{ color: "black" }}>
					Sign Up
				</NavLink>
			</Box>

			{auth ? (
				<Button onClick={handleLogout}>log out</Button>
			) : (
				<NavLink
					style={{
						background: "black",
						color: "white",
					}}
					to="/signin"
				>
					Sign In
				</NavLink>
			)}
		</nav>
	);
};

export default Navbar;
