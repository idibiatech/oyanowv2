import { Routes, Route, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import Faq from "../pages/Faq";
import Terms from "../pages/terms";
import Privacy from "../pages/Privacy";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
	const location = useLocation();
	return (
		// online
		// <AnimatePresence>
		// 	<Routes location={location} key={location.pathname}>
		// 		<Route path="oyanowv2/" element={<HomePage />} />
		// 		<Route path="oyanowv2/about" element={<AboutPage />} />
		// 		<Route path="oyanowv2/contact" element={<ContactPage />} />
		// 		<Route path="oyanowv2/faq" element={<Faq />} />
		// 		<Route path="oyanowv2/terms" element={<Terms />} />
		// 		<Route path="oyanowv2/privacy" element={<Privacy />} />
		// 	</Routes>
		// </AnimatePresence>

		// offline
		<AnimatePresence>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<HomePage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/faq" element={<Faq />} />
				<Route path="/terms" element={<Terms />} />
				<Route path="/privacy" element={<Privacy />} />
			</Routes>
		</AnimatePresence>
	);
};
export default AnimatedRoutes;
