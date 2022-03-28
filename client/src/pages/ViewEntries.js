import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareButton from "../ShareButton";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./viewEntries.css";
import { CardContent } from "@mui/material";
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const theme = createTheme();

export default function ViewEntries() {
	return (
		<ThemeProvider theme={theme}>
			<Box component="main">


      <Box component="section" className="section-1">
				<Typography variant="h3" className="section-title" color="white">
					Star Entries
				</Typography>
			</Box>


				<Container className="grid-wrapper" maxWidth="md">
					<Grid container spacing={4}>
						{cards.map((card) => (
							<Grid item key={card} xs={12} sm={6} md={6}>
								<Card
									sx={{
										height: "100%",
										display: "flex",
										flexDirection: "column",
									}}
								>

									<Box
										className="intro-wrapper chalk "
										// sx={{
										// 	backgroundColor: "primary.main",
										// }}
									>
										<Typography variant="body1" className="intro-text">
											lorem ipsum blah blah blah blah blah blah blah
										</Typography>
									</Box>

									<CardContent className="card-content" sx={{ padding: 0 }}>
										<Box className="outer-wrapper">
											<Box className="star-wrapper">
												<Box className="star-row">
													<Box
														className="star-step chalk"
														// sx={{
														// 	backgroundColor: "primary.main",
														// }}
													>
														<Typography variant="h4" className="step-style">
															S
														</Typography>
													</Box>
													<Box className="star-answer">
														<Typography
															variant="body1"
															sx={{
																maxWidth: "100%",
																padding: "0.5rem",
															}}
														>
															lorem lorem lorem
														</Typography>
													</Box>
												</Box>

												<Box className="star-row">
													<Box
														className="star-step chalk"
														// sx={{
														// 	backgroundColor: "primary.main",
														// }}
													>
														<Typography variant="h4" className="step-style">
															T
														</Typography>
													</Box>
													<Box className="star-answer">
														<Typography
															variant="body1"
															sx={{
																maxWidth: "100%",
																padding: "0.5rem",
															}}
														>
															lorem lorem lorem
														</Typography>
													</Box>
												</Box>

												<Box className="star-row">
													<Box
														className="star-step chalk"
														// sx={{
														// 	backgroundColor: "primary.main",
														// }}
													>
														<Typography variant="h4" className="step-style">
															A
														</Typography>
													</Box>
													<Box className="star-answer">
														<Typography
															variant="body1"
															sx={{
																maxWidth: "100%",
																padding: "0.5rem",
															}}
														>
															lorem lorem lorem
														</Typography>
													</Box>
												</Box>

												<Box className="star-row">
													<Box
														className="star-step chalk"
														// sx={{
														// 	backgroundColor: "primary.main",
														// }}
													>
														<Typography variant="h4" className="step-style">
															R
														</Typography>
													</Box>
													<Box className="star-answer">
														<Typography
															variant="body1"
															sx={{
																maxWidth: "100%",
																padding: "0.5rem",
															}}
														>
															lorem lorem lorem
														</Typography>
													</Box>
												</Box>

												<Box className=" star-row star-row-last">
													<Box
														className="star-step star-wrap chalk"
														// sx={{
														// 	backgroundColor: "primary.main",
														// }}
													>
														<CardMedia
															className="star-icon"
															component="img"
															image="https://i.ibb.co/X4GpNWt/custom-star.png"
															alt="star"
														/>
													</Box>
													<Box className="star-answer star-tags">
														<p>x tag</p> <p>x tag</p> <p>x tag</p>
													</Box>
												</Box>
											</Box>
										</Box>
									</CardContent>

									<CardActions className="buttons-wrapper">
                    <ShareButton />
									</CardActions>

								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
		</ThemeProvider>
	);
}
