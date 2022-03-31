
import { NavLink } from "../Navbar/NavBarElements";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// import Link from "@mui/material/Link";
import "./footer.css";

export default function Footer() {
	return (
		<footer>
			<Box className="links-wrapper">
				<NavLink to="/signin"  className="footer-link" >
					Log In
				</NavLink>
				<NavLink to="/signup" style={{ color: "black" }} className="footer-link">
					Sign Up
				</NavLink>
				<NavLink to="/contact" style={{ color: "black" }} className="footer-link">
					Contact
				</NavLink>
				<NavLink to="/about" style={{ color: "black" }} className="footer-link">
					About
				</NavLink>
			</Box>
			<Box>
				<Typography textAlign="center" color="black">
					Sirius &reg; {new Date().getFullYear()}
				</Typography>
			</Box>
		</footer>
	);
}
