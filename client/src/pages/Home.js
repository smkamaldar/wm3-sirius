// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
// import AddEntry from "./AddEntry";

import "./Home.css";

export function Home() {
	const navigate = useNavigate();
	return (
		<main role="main">
			<div>
				<Box
					sx={{
						bgcolor: "background.paper",
						pt: 8,
						pb: 6,
					}}
				>
					<Container maxWidth="sm">
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
							Keep track of your progress. And share your thoughts and ideas
							with the world. Let's get started.
						</Typography>
						<Stack
							sx={{ pt: 4 }}
							direction="row"
							spacing={2}
							justifyContent="center"
						>
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
				</Box>
			</div>
		</main>
	);
}

export default Home;
