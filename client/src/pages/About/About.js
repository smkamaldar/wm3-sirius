import "./About.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";



export const About = () => {
	return (
		<div>
			<Box component="section" className="section-1">
				<Typography variant="h3" className="section-title" color="white">
					About Sirius
				</Typography>
			</Box>

			<Box component="section" className="section-2">
				<Box className="section-content">
					<Typography variant="h4" className="section-title" color="black">
						The STAR Methodology
					</Typography>
					<Typography variant="body1" className="section-text" color="black">
						Lorem ipsum lorem lorem lorem lorem lorem lorem lorem Lorem ipsum
						lorem lorem lorem lorem lorem lorem lorem Lorem ipsum lorem lorem
						lorem lorem lorem lorem lorem Lorem ipsum lorem lorem lorem lorem
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
					<Typography variant="h4" className="section-title" color="white">
						Site Features
					</Typography>
					<Typography variant="body1" className="section-text" color="white">
						Lorem ipsum lorem lorem lorem lorem lorem lorem lorem Lorem ipsum
						lorem lorem lorem lorem lorem lorem lorem Lorem ipsum lorem lorem
						lorem lorem lorem lorem lorem Lorem ipsum lorem lorem lorem lorem
					</Typography>
				</Box>
			</Box>

			{/* <Box component="section" className="section-4">
				<Typography variant="h4" className="section-title" color="black">
					Meet The Team
				</Typography>
			</Box> */}
		</div>
	);
};

export default About;

