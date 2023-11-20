import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { motion } from "framer-motion";
const MobileNav = () => {
	const navLinks = [
		{ title: "Home", href: "/" },
		{ title: "About", href: "/" },
		{ title: "Contact", href: "/" },
		{ title: "Get started", href: "/" },
	];
	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<div className="mobile-nav-wrapper">
			<div className="mobile-control-wrapper">
				<div className="logo-div">
					<img src={logo} alt="oyanow logo" />
				</div>
				<div className="menu-btn" onClick={toggleMenu}>
					menu
				</div>
			</div>

			{openMenu && (
				<nav className="mobile-nav">
					<div className="displayed-mobile-menu-wrapper">
						<div className="mobile-control-wrapper">
							<div className="logo-div">
								<img src={logo} alt="oyanow logo" />
							</div>
							<div className="menu-btn" onClick={toggleMenu}>
								close
							</div>
						</div>
					</div>

					<ul className="nav-links-wrapper">
						{navLinks.map((link, index) => {
							return (
								<li key={index}>
									<a href={link.href}>{link.title}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			)}
		</div>
	);
};
export default MobileNav;
