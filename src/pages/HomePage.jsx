import Hero from "../components/Hero/Hero";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";
import SectionThree from "../components/Sections/SectionThree";
import SectionFour from "../components/Sections/SectionFour";
import Footer from "../components/Footer/Footer";

import "./index.css";

import NavBar from "../components/Navigation/NavBar";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";
import SignIn from "../components/GetStarted/SignIn";
import CreateAccount from "../components/GetStarted/CreateAccount";
import GetStarted from "../components/GetStarted/GetStarted";

const HomePage = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<header>
				<NavBar linkState="active" />
				<Hero />
			</header>
			<main>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
			</main>
			<Footer />
			{/* <GetStarted /> */}
		</motion.div>
	);
};
export default HomePage;
