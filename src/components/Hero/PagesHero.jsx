import hand from "../../assets/images/hand.png";

const PagesHero = (props) => {
	const { text1, text2 } = { ...props };
	return (
		<header className="pagesheader">
			<div className="hero-container">
				<div class="hero-item hero-left">
					<h1>
						<span className="top-h1">{text1}</span>

						<span className="bottom-h1">{text2}</span>
					</h1>
				</div>
				<div className="hero-item hero-right">
					<img src={hand} alt="" />
				</div>
			</div>
		</header>
	);
};
export default PagesHero;
