import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer";
import AddEntry from "./pages/AddEntry";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ViewEntries from "./pages/ViewEntries";
import About from "./pages/About";
import Contact from "./pages/Contact";



const App = () => (
	<div>

<Navbar />
	<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/addentry" element={<AddEntry />} />
			<Route path="/viewentries" element={<ViewEntries />} />
			<Route path="/SignIn" element={<SignIn />} />
			<Route path="/SignUp" element={<SignUp />} />
			<Route path="/About" element={<About />} />
			<Route path="/Contact" element={<Contact />} />
	</Routes>

	<Footer />
	</div>
);

export default App;
