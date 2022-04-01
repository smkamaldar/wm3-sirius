import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "././context/AuthProvider"
import App from "./App";

ReactDOM.render(
	<BrowserRouter>
		<AuthProvider>
		<App />
		</AuthProvider>
	</BrowserRouter>,
	document.getElementById("root")
);
