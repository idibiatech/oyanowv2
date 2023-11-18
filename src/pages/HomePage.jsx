import Hero from "../components/Hero/Hero";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";
import SectionThree from "../components/Sections/SectionThree";
import SectionFour from "../components/Sections/SectionFour";

const HomePage = () => {
	return (
		<>
			<header>
				<Hero />
			</header>
			<main>
				<SectionOne />
				<SectionTwo />
				<SectionThree />
				<SectionFour />
			</main>
		</>
	);
};
export default HomePage;
