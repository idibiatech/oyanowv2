import { BrowserRouter } from "react-router-dom";

import "./App.css";

import AnimatedRoutes from "./components/AnimatedRoutes";
import SignIn from "./components/GetStarted/SignIn";

function App() {
	return (
		<BrowserRouter>
			<AnimatedRoutes />
		</BrowserRouter>
	);
}

export default App;
