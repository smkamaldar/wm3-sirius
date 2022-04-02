import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { getImageByName } from "../utils/image.js";
import SingeStarPage from "./SingleStarPage";
import ShareStar from "./ShareStar";
import { Axios } from "axios";


const theme = createTheme();

export default function ViewEntries() {
	const navigate = useNavigate();
	const [stars, setStars] = useState([]);

	const ViewEntryHandler = () => {
		Axios.get("/api/starId")
			.then((response) => {
				if (response.status === 200) {
					navigate("/SingleStarPage", {
						state: {
							starId: response.data,
						},
					});
				}
			})
	};


	useEffect(() => {
		fetch("/api/stars")
			.then((response) => response.json())
			.then((data) => setStars(data));
	}, []);
	return (
		<ThemeProvider theme={theme}>
			<main>
				<Container sx={{ py: 8 }} maxWidth="md">
					<Grid container spacing={4}>
						{stars.map((star) => (
							<Grid item key={star.id} xs={12} sm={6} md={6}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>
									<CardMedia
										component="img"
										sx={{
											height: "50%",
										}}
										image={getImageByName(star.image)}
										alt="random"
									/>
									<CardContent sx={{ flexGrow: 1 }}>
										<Typography
											gutterBottom
											variant="h5"
											component="h2"
											color="common.black"
										>
											{star.title}
										</Typography>
										<Typography color="common.black">
											{star.competence}
										</Typography>
									</CardContent>
									<CardActions>
										<Button 
										onClick={ViewEntryHandler}
										size="small">View</Button>
										<ShareStar/>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</main>
		</ThemeProvider>
	);
}
