import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import AddEntry from "./pages/AddEntry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ViewEntries from "./pages/ViewEntries";
import About from "./pages/About/About";
import Contact from "./pages/Contact";
import "./index.css";

const App = () => (
	<div >
		<Navbar />
		<Box className="body">
			<Routes>
				<Route path="/" element={<Home />} />
				{/* Public route */}
				{/* Private route */}

				<Route path="/addentry" element={<AddEntry />} />
				<Route path="/viewentries" element={<ViewEntries />} />
				<Route path="/SignIn" element={<SignIn />} />
				<Route path="/SignUp" element={<SignUp />} />
				<Route path="/About" element={<About />} />
				<Route path="/Contact" element={<Contact />} />
			</Routes>
		</Box>
		<Footer />
	</div>
);

export default App;
