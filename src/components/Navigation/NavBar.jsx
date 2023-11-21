import MobileNav from "./MobileNav";
import PcNav from "./PcNav";
import "./navbar.css";
const NavBar = () => {
	const isMobile = window.innerWidth <= 1000;

	return <>{isMobile ? <MobileNav /> : <PcNav />}</>;
};
export default NavBar;
