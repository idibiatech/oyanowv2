import { useState } from "react";
import logo from "../../assets/images/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { Link, Routes, Route } from "react-router-dom";
import cancel from "../../assets/icons/x-solid.svg";
import ham from "../../assets/icons/bars-solid.svg";

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

	return (
		<motion.div className="mobile-nav-wrapper">
			<div className="mobile-control-wrapper">
				<div className="logo-div">
					<img src={logo} alt="oyanow logo" />
				</div>
				<div className="menu-btn" onClick={toggleMenu}>
					<img src={ham} alt="toggle navigation button" />
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
									<img src={cancel} alt="cancel navigation button" />
								</div>
							</div>
						</div>

						<motion.ul
							variants={contVar}
							initial="initial"
							animate="open"
							exit="exit"
							className="nav-links-wrapper"
						>
							{navLinks.map((link, index) => {
								return (
									<div className="overflow-hidden">
										<MobileNavLink
											key={index}
											title={link.title}
											to={link.to}
										/>
									</div>
								);
							})}
						</motion.ul>
					</motion.nav>
				)}
			</AnimatePresence>
		</motion.div>
	);
};

export default MobileNav;
const staggeredVar = {
	initial: {
		y: "30vh",
		transformOrigin: "top center",
	},
	open: {
		y: 0,
		transition: {
			duration: 1,
		},
	},
};
const contVar = {
	initial: {
		transition: {
			staggerChildren: 0.1,
		},
	},
	open: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};
const MobileNavLink = ({ title, to }) => {
	return (
		<motion.li variants={staggeredVar}>
			<Link to={`${to}`}>{title}</Link>
		</motion.li>
	);
};
// variants={staggeredVar}
// initial="initial"
// animate="open"
// href={link.href}
