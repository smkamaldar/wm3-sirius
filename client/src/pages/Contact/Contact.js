import "./contact.css";
import { useState } from "react";
import emailjs from "emailjs-com";
import {
	Card,
	CardContent,
	Grid,
	Stack,
	TextField,
	Button,
} from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";

const team = [
	[
		"Elmira",
		"https://i.ibb.co/LYTLy2P/elmira.jpg",
		"Fullstack",
		"https://www.linkedin.com/in/elmirakamaldar/",
	],
	[
		"Nonye",
		"https://i.ibb.co/KG2LvBb/nonye.jpg",
		"Fullstack",
		"https://www.linkedin.com/in/nonye-ehiguese/",
	],
	[
		"Tiana",
		"https://i.ibb.co/hyzWnGy/hibah.jpg",
		"Fullstack",
		"https://www.linkedin.com/in/tianajad/",
	],
	[
		"Sinead",
		"https://i.ibb.co/fSkBNYD/sinead.png",
		"Fullstack",
		"https://www.linkedin.com/in/sinead-osb-dev/",
	],
];

const Result = () => {
	return <Typography color="black">Message sent successfully!</Typography>;
};

export const Contact = () => {
	const [result, showResult] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		emailjs
			.sendForm("gmail", "template_qnyu6pp", e.target, "ypobPy9eMdN67GSip")
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
		showResult(true);
	};

	setTimeout(() => {
		showResult(false);
	}, 4000);

	return (
		<Box component="main" className="contact-main">
			<Box component="section" className="contact-section contact-section-1">
				<Card
					className="contact-card"
					sx={{
						boxShadow:
							"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
					}}
				>
					<CardContent
						sx={{ padding: "1.5rem", backgroundColor: "whitesmoke" }}
					>
						<Box className="card-intro-wrapper">
							<Typography
								className="contact-title"
								variant="h4"
								color="black"
								fontWeight={700}
								sx={{ padding: "0.3rem" }}
							>
								Contact Us
							</Typography>
							<Typography
								className="contact-subtitle"
								variant="subtitle1"
								color="black"
								fontWeight={500}
								sx={{ padding: "0.3rem", fontSize: "1.2rem" }}
							>
								Please let us know if you have any questions or feedback and
								we'll be in touch.
							</Typography>
						</Box>
						<form name="sentMessage" onSubmit={sendEmail}>
							<Stack spacing={2}>
								<Grid xs={12} sm={6} item>
									<TextField
										sx={{ backgroundColor: "white", marginTop: "0.5rem" }}
										label="Full Name"
										name="fullName"
										id="fullName"
										placeholder="Enter Full Name"
										fullWidth
										required
									/>
								</Grid>
								<Grid xs={12} item>
									<TextField
										sx={{ backgroundColor: "white", marginTop: "0.5rem" }}
										type="email"
										label="Email"
										name="email"
										id="email"
										placeholder="Enter Email"
										fullWidth
										required
									/>
								</Grid>
								<Grid xs={12} item>
									<TextField
										className="text-field"
										sx={{ backgroundColor: "white", marginTop: "0.5rem" }}
										label="Message"
										name="message"
										id="message"
										placeholder="Enter Message"
										multiline={true}
										rows={4}
										fullWidth
										required
									/>
								</Grid>
								<Grid xs={12} item className="button-wrapper">
									<Button
										sx={{ margin: "0.8rem 0 0.3rem", backgroundColor: "black" }}
										className="contact-button"
										type="submit"
										variant="contained"
										align="center"
										size="large"
									>
										Submit
									</Button>
								</Grid>
								<Box className="success-msg">{result ? <Result /> : null}</Box>
							</Stack>
						</form>
					</CardContent>
				</Card>
			</Box>

			<Box
				component="section"
				className="section-4 contact-section contact-section-2"
			>
				<Typography variant="h4" className="section-title" color="black" fontWeight={700}>
					Meet the Team
				</Typography>

				<Box className="team-cards-wrapper">
					{team.map((member, index) => (
						<Card className="card" key={index} sx={{ maxWidth: 335 }}>
							<CardActionArea>
								<CardMedia
									component="img"
									height="260"
									image={member[1]}
									alt="Team Member"
								/>
								<CardContent classsName="card-content">
									<Box className="title-wrapper">
										<Typography variant="h4" component="div">
											{member[0]}
										</Typography>
										<Link href={member[3]} target="_blank">
											<LinkedInIcon fontSize="large" className="icon" />
										</Link>
									</Box>
									<Typography variant="h5" color="text.secondary">
										{member[2]}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					))}
				</Box>
			</Box>
		</Box>
	);
};

export default Contact;
