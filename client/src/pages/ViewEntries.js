import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

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
import ShareStar from "./ShareStar";

const theme = createTheme();

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
  };

export default function ViewEntries() {
	// const navigate = useNavigate();
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
  
	const [stars, setStars] = useState([]);
	const [selectedStar, setSelectedStar] = useState(null);


	useEffect(() => {
		fetch("/api/stars")
			.then((response) => response.json())
			.then((data) => setStars(data));
	}, []);

	const showModal = () => {
		console.log(selectedStar);
		console.log(show);
		return (
			<Modal
				open={show}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				>
				<Box sx={style}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
					{selectedStar?.title}
					</Typography>
					<Typography id="modal-modal-image" sx={{ mt: 2 }}>
						<img src={getImageByName(selectedStar?.image)} alt={selectedStar?.title} 
						style={{
							width: '100%',
							height: 'auto',
							maxWidth: '100%',
							maxHeight: '100%',
							objectFit: 'contain',
							objectPosition: 'center',
							}}
						/>
					</Typography>
					<Typography id="modal-modal-description" variant="body2" color="textSecondary" component="p">
						{selectedStar?.competence}
					</Typography>
					<Typography id="modal-modal-description" variant="body2" color="textSecondary" component="p">
						{selectedStar?.situation}
					</Typography>
					<Typography id="modal-modal-description" variant="body2" color="textSecondary" component="p">
						{selectedStar?.task}
					</Typography>
					<Typography id="modal-modal-description" variant="body2" color="textSecondary" component="p">
						{selectedStar?.action}
					</Typography>
					<Typography id="modal-modal-description" variant="body2" color="textSecondary" component="p">
						{selectedStar?.result}
					</Typography>
					<Typography id="modal-modal-footer" variant="body2" color="textSecondary" component="p">
						<Button 
						style={{
							fontFamily: "QuickSand",
							color: "white",
							backgroundColor: "rgb(0, 0, 0)",
							borderRadius: "5px",
						}}
						variant="outlined" onClick={handleClose}>
							Close
						</Button>
					
					</Typography>
				</Box>
			</Modal>
		  );
	};

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
										<Typography gutterBottom variant="h5" component="h2" color="common.black">
											{star.title}
										</Typography>
										<Typography color="common.black">{star.competence}</Typography>
									</CardContent>
									<CardActions>
				
										<Button
										
											onClick={() => {
												handleShow()
												setSelectedStar(star);
												}}
											sx={{
												size: "small",
												fontFamily: "QuickSand",
											}}
										>
											View
										</Button>
										<ShareStar/>
									</CardActions>
								</Card>
							</Grid>
						))}
					</Grid>
					{showModal()}
				</Container>
			</main>
			
		</ThemeProvider>
	);
}
