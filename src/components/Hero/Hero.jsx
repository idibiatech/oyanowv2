import herobike from "../../assets/images/herobike.png";
import applebutton from "../../assets/icons/Button apple.png";
import googlebutton from "../../assets/icons/Button google.png";

const Hero = () => {
	return (
		<div class="hero-container">
			<div class="left-hero-container hero-box">
				<h1>
					<div class="express">Express</div>
					<span class="bold-heading">
						<div>Delivery</div>
						<div>Service!</div>
					</span>
				</h1>
				<h2>
					You need <span class="tagline"></span>
				</h2>
				<div class="left-hero-link-container" id="stores-wrapper">
					<div class="stores stores-left">
						<a href="https://play.google.com/store/apps/details?id=com.g360synergy.oyanow">
							<img
								class="store-images"
								src={googlebutton}
								alt="google play app download link"
							/>
						</a>
					</div>
					<div class="stores stores-right">
						<a href="https://apps.apple.com/ng/app/oyanow/id1248784384">
							<img
								class="store-images"
								src={applebutton}
								alt="apple store app download link"
							/>
						</a>
					</div>
				</div>
			</div>
			<div class="right-hero-container hero-box">
				<img
					class="section-images"
					src={herobike}
					alt="image of a delivery bike"
				/>
			</div>
		</div>
	);
};
export default Hero;
