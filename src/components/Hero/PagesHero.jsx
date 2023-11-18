import hand from "../../assets/images/hand.png";

const PagesHero = (props) => {
	const { text1, text2 } = { ...props };
	return (
		<header className="pagesheader">
			<div class="hero-container">
				<div class="hero-item hero-left">
					<h1>
						<span class="top-h1">{text1}</span>

						<span class="bottom-h1">{text2}</span>
					</h1>
				</div>
				<div class="hero-item hero-right">
					<img src={hand} alt="" />
				</div>
			</div>
		</header>
	);
};
export default PagesHero;
