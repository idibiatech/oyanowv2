import Hero from "../components/Hero/Hero";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";
import SectionThree from "../components/Sections/SectionThree";
import SectionFour from "../components/Sections/SectionFour";
import Footer from "../components/Footer/Footer";
import "./index.css";
import NavBar from "../components/Navigation/NavBar";

const HomePage = () => {
	return (
		<>
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
		</>
	);
};
export default HomePage;
