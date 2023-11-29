import { navLinks } from "./navlinks";
import logo from "../../assets/images/logo.png";
import { Link, Routes, Route } from "react-router-dom";
const PcNav = () => {
	return (
		<div className="pc-nav-wrapper">
			<div className="logo-wrapper">
				<img src={logo} alt="" />
			</div>
			<div className="link-wrapper">
				<ul>
					{navLinks.map((link) => {
						return (
							<li className={link.class}>
								<Link to={link.to}>{link.title}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};
export default PcNav;
