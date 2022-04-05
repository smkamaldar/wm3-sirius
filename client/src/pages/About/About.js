import "./About.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export const About = () => {
	return (
		<Box component="main">
			<Box component="section" className="section-2">
				<Box className="section-content">
					<Typography
						variant="h2"
						className="section-title"
						color="black"
						sx={{}}
					>
						Sirius
					</Typography>
					<Typography
						variant="h6"
						className="section-subtitle"
						color="black"
						fontStyle="italic"
					>
						Your Journey Begins Here
					</Typography>
					<Typography
						variant="body2"
						className="section-text"
						fontSize="1.2em"
						color="black"
						sx={{ margin: "2rem" }}
					>
						Welcome to Sirius, the educational application designed by a
						passionate team of aspiring Junior Web Devs who hope to be able to
						help you document your achievements, challenges and accomplishments
						throughout your learning and work experiences. <br></br> <br></br>
						Providing a convenient solution for the implementation of STAR
						methodology has been the driving concept behind Sirius, we have
						created an easy to use platform for creating, viewing and sharing
						STAR diary entries. Here at Sirius we believe that you can shine
						through as the brightest STAR attending your interviews by being the
						most well prepared.
					</Typography>
				</Box>
				<Box className="section-image">
					<img
						className="image-1"
						src="https://i.ibb.co/wzwmC7w/star.jpg"
						alt="star method"
					/>
				</Box>
			</Box>

			<Box component="section" className="section-3">
				<Box className="section-image">
					<img
						className="image-1"
						src="https://i.ibb.co/zZXPss0/features.png"
						alt="star method"
					/>
				</Box>
				<Box className="section-content">
					<Typography variant="h2" className="section-title" color="white">
						STAR
					</Typography>
					<Typography
						variant="h6"
						className="section-subtitle"
						color="white"
						fontStyle="italic"
					>
						Situation, Task, Action, Result
					</Typography>
					<Typography
						variant="body1"
						className="section-text"
						fontSize="1.2em"
						color="white"
						sx={{ marginTop: "2rem" }}
					>
						If you have ever been asked a question during an interview that
						starts with "tell me about a time when you did", then it is likely
						you are being asked a competency based question. Competency
						questions are usually used to find out how candidates would react to
						certain situations by asking for real-world examples. <br></br>
						<br></br> The STAR method is a structured technique, designed to
						give you the solid foundations needed to prepare for competency
						based interview questions.
					</Typography>
					<Link
						sx={{ textDecoration: "none" }}
						href="https://uk.indeed.com/career-advice/interviewing/star-technique"
						target="_blank"
						className="About-link"
					>
						<Typography
							variant="h6"
							fontStyle="italic"
							color="rgb(224,129,129)"
							fontSize="1.2em"
							fontWeight={600}
						>
							Click here to read more about STAR methodology ...
						</Typography>
					</Link>
				</Box>
			</Box>

			<Box component="section" className="section-2">
				<Box className="section-content">
					<Typography
						variant="h3"
						className="section-title"
						color="black"
						sx={{}}
					>
						Tech Stack
					</Typography>
					<Typography
						variant="h6"
						className="section-subtitle"
						color="black"
						fontStyle="italic"
					>
						Postgres, Express, React, Node
					</Typography>
					<Typography
						variant="body2"
						className="section-text"
						fontSize="1.2em"
						color="black"
						sx={{ margin: "2rem" }}
					>
						Sirius have implemented ES6 and the PERN stack, believing them to be
						most reliable, scalable, fullstack tech solution to real world
						problems. <br></br>
						<br></br> At the frontend we have React and MUI libraries, which
						have helped to boost the productivity, scalability and reliability
						of our application. At the backend we are able to dynamically
						create, store and drop user, login and STAR data history utilising
						Node.js, Express and PostreSQL.
						<br></br>
						<br></br>
						Additional tools implemented include Email.js and Passport.js, which
						have been used to send and receive emails and to authenticate users.
						Our project would not have been possible without taking advantage of
						the powerful collaboration tools: GitHub and Slack.
						<br></br>
						<br></br>
						We look forward to expanding on the functionality and scope of
						Sirius in future.
					</Typography>
				</Box>
				<Box className="section-image">
					<img
						className="image-1"
						src="https://i.ibb.co/N9GcLmF/react-stack.jpg"
						alt="star method"
					/>
				</Box>
			</Box>
		</Box>
	);
};

export default About;
