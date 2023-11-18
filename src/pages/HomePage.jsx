import Hero from "../components/Hero/Hero";
import SectionOne from "../components/Sections/SectionOne";
import SectionTwo from "../components/Sections/SectionTwo";

const HomePage = () => {
	return (
		<>
			<header>
				<Hero />
			</header>
			<SectionOne />
			<SectionTwo />
		</>
	);
};
export default HomePage;
