
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import "./footer.css";

export default function Footer() {
	return (
		<footer>
			<Box className="links-wrapper">
				<Link className="footer-link" href="#" underline="hover" color="black">
					Log In
				</Link>
				<Link className="footer-link" href="#" underline="hover" color="black">
					Sign Up
				</Link>
				<Link className="footer-link" href="#" underline="hover" color="black">
					Contact
				</Link>
				<Link className="footer-link" href="#" underline="hover" color="black">
					About
				</Link>
			</Box>
			<Box>
				<Typography textAlign="center" color="black">
					Sirius &reg; {new Date().getFullYear()}
				</Typography>
			</Box>
		</footer>
	);
}
