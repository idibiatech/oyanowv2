import logo from "../../assets/images/logo.png";
const MobileNav = () => {
	const navLinks = [
		{ title: "Home", href: "/" },
		{ title: "About", href: "/" },
		{ title: "Contact", href: "/" },
	];
	return (
		<div className="mobile-nav-wrapper">
			<div className="mobile-control-wrapper">
				<div className="logo-div">
					<img src={logo} alt="oyanow logo" />
				</div>
				<div className="menu-div">menu</div>
			</div>

			<nav className="mobile-nav">
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
		</div>
	);
};
export default MobileNav;
