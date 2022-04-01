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
import "./Home.css";

const Result = () => {
	return <Typography color="black">Message sent successfully!</Typography>;
};

// const initialState = {
// 	name: "",
// 	email: "",
// 	message: "",
// };

export const Contact = () => {
	// const [{ name, email, message }, setState] = useState(initialState);

	// const handleChange = (e) => {
	// 	const { name, value } = e.target;
	// 	setState((prevState) => ({ ...prevState, [name]: value }));
	// };

	// const clearState = () => setState({ ...initialState });

	const [result, showResult] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		// console.log(name, email, message);
		emailjs
			.sendForm("gmail", "template_qnyu6pp", e.target, "ypobPy9eMdN67GSip")
			.then(
				(result) => {
					console.log(result.text);
					// clearState();
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
			<Card
				className="contact-card"
				sx={{
					boxShadow:
						"rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
				}}
			>
				<CardContent sx={{ padding: "1.5rem" }} className="contact-">
					<Box className="card-intro-wrapper">
						<Typography className="contact-title" variant="h5" color="black">
							Contact Us ...
						</Typography>
						<Typography
							className="contact-subtitle"
							variant="body2"
							color="black"
						>
							Please let us know if you have any questions or feedback and we'll
							be in touch.
						</Typography>
					</Box>
					<form name="sentMessage" validate onSubmit={sendEmail}>
						<Stack spacing={2}>
							<Grid xs={12} sm={6} item>
								<TextField
									sx={{ backgroundColor: "white" }}
									label="Full Name"
									name="fullName"
									id="fullName"
									placeholder="Enter Full Name"
									fullWidth
									required
									// onChange={handleChange}
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									sx={{ backgroundColor: "white" }}
									type="email"
									label="Email"
									name="email"
									id="email"
									placeholder="Enter Email"
									fullWidth
									required
									// onChange={handleChange}
								/>
							</Grid>
							<Grid xs={12} item>
								<TextField
									sx={{ backgroundColor: "white" }}
									label="Message"
									name="message"
									id="message"
									placeholder="Enter Message"
									multiline={true}
									rows={4}
									fullWidth
									required
									// onChange={handleChange}
								/>
							</Grid>
							<Grid xs={12} item className="button-wrapper">
								<Button
									sx={{ margin: "0.8rem 0 0.3rem", backgroundColor: "black" }}
									className="contact-button"
									type="submit"
									variant="contained"
									align="center"
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
	);
};

export default Contact;
