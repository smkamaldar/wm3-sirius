import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import AddEntry from "./pages/AddEntry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ViewEntries from "./pages/ViewEntries";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import "./index.css";

const theme = createTheme({
	typography: {
		fontFamily: "'Quicksand', sans-serif",
		fontSize: 16,
		fontWeightLight: 300,
		fontWeightRegular: 400,
		fontWeightMedium: 500,
		fontWeightBold: 700,
	},
});

const App = () => (
	<div>
		<ThemeProvider theme={theme}>
			<Box className="body">
				<Navbar />
				<Routes>
					<Route path="/" element={<SignIn />} />
					<Route path="/home" element={<Home />} />
					<Route path="/addentry" element={<AddEntry />} />
					<Route path="/viewentries" element={<ViewEntries />} />
					<Route path="/SignIn" element={<SignIn />} />
					<Route path="/SignUp" element={<SignUp />} />
					<Route path="/About" element={<About />} />
					<Route path="/Contact" element={<Contact />} />
				</Routes>
			</Box>
			<Footer />
		</ThemeProvider>
	</div>
);

export default App;
