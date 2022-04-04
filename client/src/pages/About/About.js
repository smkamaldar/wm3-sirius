import React from "react";
import { StyledAboutSection } from "./About.Styled";
import IllustrationGrowTogether from "../..//assets/svg/IllustrationGrowTogether";
import IllustrationFlowingConversations from "../..//assets/svg/IllustrationFlowingConversations";
import IllustrationsYourUsers from "../..//assets/svg/IllustrationsYourUsers";
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
		"Fullstack Developer", 
		"https://www.linkedin.com/in/elmirakamaldar/",
	],
	[
		"Nonye",
		"https://i.ibb.co/KG2LvBb/nonye.jpg",
		"Fullstack Developer",
		"https://www.linkedin.com/in/nonye-ehiguese/",
	],
	[
		"Tiana ",
		"https://i.ibb.co/hyzWnGy/hibah.jpg",
		"Fullstack Developer",
		"https://www.linkedin.com/in/tianajad/",
	],
	[
		"Sinead",
		"https://i.ibb.co/fSkBNYD/sinead.png",
		"Fullstack Developer",
		"https://www.linkedin.com/in/sinead-osb-dev/",
	],
];

function About() {
  return (
    <StyledAboutSection>
      <article>
        <IllustrationGrowTogether />
        <div>
          <h3>Your journey starts with us</h3>
          <p>
		  Welcome to Siris. We are a group of passionate people who
		 want to help you celebrate your small steps towards your goals and aspirations. 
		 The idea of Siris is to guide the user to write their achievements using the STAR format so at every interview you want them to know that they are the brightest STAR by being the most prepared.

          </p>
        </div>
      </article>
      <article>
	  <IllustrationsYourUsers />
        <div>
          <h3>Technology Used </h3>
          <p>
		  The technology used in Siris is the latest version of ReactJS to make the user experience better and more efficient.
					 And NodeJS to make the server side work Along with PostgreSQL to store the data.
					 We also used PassportJS to handle the authentication of the user.
          </p>
        </div>
      </article>
      <article>
		  <IllustrationFlowingConversations />
        <div>
          <h3>Your Users</h3>
          <p>
            It takes no time at all to integrate Huddle with your app's
            authentication solution. This means, once signed in to your app,
            your users can start chatting immediately.
          </p>
        </div>
      </article>

    </StyledAboutSection>
  );
}

export default About;
