import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Routes, Route } from "react-router-dom";

const MobileNav = () => {
	const navLinks = [
		{ title: "Home", to: "/" },
		{ title: "About", to: "/about" }, // Update the route for About
		{ title: "Contact", to: "/contact" }, // Update the route for Contact
		// { title: "Get started", to: "/get-started" },
		// Update the route for Get started
	];

	const [openMenu, setOpenMenu] = useState(false);
	const toggleMenu = () => {
		setOpenMenu(!openMenu);
	};

	const menuVar = {
		initial: {
			scaleY: 0,
			transformOrigin: "top center",
		},
		animate: {
			scaleY: 1,
			transformOrigin: "top center",
			transition: {
				duration: 0.5,
				ease: [0.12, 0, 0.39, 0],
			},
		},
		exit: {
			scaleY: 0,
			transformOrigin: "top center",
			transition: {
				duration: 0.5,
				ease: [0.22, 1, 0.39, 1],
			},
		},
	};
	const staggeredVar = {
		initial: {
			y: "30vh",
			transformOrigin: "top center",
		},
		open: {
			y: 0,
			transition: {
				duration: 4,
			},
		},
	};
	return (
		<motion.div className="mobile-nav-wrapper">
			<div className="mobile-control-wrapper">
				<div className="logo-div">
					<img src={logo} alt="oyanow logo" />
				</div>
				<div className="menu-btn" onClick={toggleMenu}>
					menu
				</div>
			</div>

			<AnimatePresence>
				{openMenu && (
					<motion.nav
						variants={menuVar}
						initial="initial"
						animate="animate"
						exit="exit"
						className="mobile-nav origin-top"
					>
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
									<MobileNavLink key={index} title={link.title} to={link.to} />
								);
							})}
						</ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default MobileNav;
const MobileNavLink = ({ title, to }) => {
	return (
		<li>
			<Link to={`${to}`}>{title}</Link>
		</li>
	);
};
// variants={staggeredVar}
// initial="initial"
// animate="open"
// href={link.href}
