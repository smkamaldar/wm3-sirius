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

            <p className="mt-4 text-lg text-blueGray-200">
                    Welcome to Siris. We are a group of passionate people who
					want to help you celebrate your small steps towards your goals and aspirations.
					We have been working on this project since the beginning of 2022 and we are excited to
					share our knowledge and experience with you.
					This is a platform where you can keep track of your progress and share your thoughts and ideas with the world. 
					Let's get started. 
                  </p>
		</div>
	);
};

export default About;


