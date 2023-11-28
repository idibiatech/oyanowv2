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

const HomePage = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<header>
				<NavBar />
				<Hero />
			</header>
			<main>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
			</main>
			<Footer />
			<CreateAccount />
			{/* <SignIn /> */}
		</motion.div>
	);
};
export default HomePage;
