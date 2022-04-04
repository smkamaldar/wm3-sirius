import "./Home.css";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export function Home() {
	const navigate = useNavigate();
	return (
		<Container maxWidth="sm" className="home-wrapper">
			<Typography
				fontFamily="QuickSand"
				component="h1"
				variant="h2"
				align="center"
				color="text.primary"
				gutterBottom
			>
				Sirius.
			</Typography>
			<Typography
				fontFamily="QuickSand"
				variant="h5"
				align="center"
				color="text.secondary"
				paragraph
			>
				Keep track of your progress. And share your thoughts and ideas with the
				world. Let's get started.
			</Typography>
			<Stack sx={{ pt: 4 }} direction="row" spacing={2} justifyContent="center">
				<Button
					className="home-button"
					onClick={() => navigate("/addentry")}
					style={{
						fontFamily: "QuickSand",
						color: "white",
						backgroundColor: "rgb(0, 0, 0)",
						borderRadius: "5px",
					}}
				>
					Add A Star
				</Button>
				<Button
					onClick={() => navigate("/viewentries")}
					style={{
						fontFamily: "QuickSand",
						color: "black",
						border: "1px solid var(--pink)",
					}}
					className="home-button"
				>
					View Stars
				</Button>
			</Stack>
		</Container>
	);
}

export default Home;
