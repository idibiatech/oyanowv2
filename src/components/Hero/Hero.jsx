import heroBike from "../../assets/images/heroBike.png";
import appleButton from "../../assets/icons/Button apple.png";
import googleButton from "../../assets/icons/Button google.png";
import searchArrow from "../../assets/icons/vector.png";
import sendArrow from "../../assets/icons/sendArrow.png";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<div class="hero-container">
			<div class="left-hero-container hero-box">
				<h1>
					<div class="bold-heading">
						<h1>Express Delivery Service!</h1>
					</div>
				</h1>
				<h2>
					You need <span class="tagline"></span>
				</h2>
				<div class="left-hero-link-container" id="stores-wrapper">
					<div class="stores stores-left">
						<a href="https://play.google.com/store/apps/details?id=com.g360synergy.oyanow">
							<img
								class="store-images"
								src={googleButton}
								alt="google play app download link"
							/>
						</a>
					</div>
					<div class="stores stores-right">
						<a href="https://apps.apple.com/ng/app/oyanow/id1248784384">
							<img
								class="store-images"
								src={appleButton}
								alt="apple store app download link"
							/>
						</a>
					</div>
				</div>
				<div className="search-box">
					<div className="search-icon-wrapper">
						<img src={searchArrow} alt="" />
					</div>
					<div className="search-input-wrapper">
						<input type="text" name="" id="" placeholder="Enter your address" />
					</div>
					<div className="search-btn-wrapper">
						<div className="send-icon-wrapper">
							<img src={sendArrow} alt="" />
						</div>
						<div className="send-text-wrapper">
							<p>Use your current location</p>
						</div>
					</div>
				</div>
			</div>
			<motion.div
				initial={{
					scale: 0.6,
					opacity: 0,
				}}
				animate={{
					scale: 1,
					opacity: 1,
				}}
				transition={{
					duration: 1,
					delay: 0.2,

					ease: "backInOut",
				}}
				class="right-hero-container hero-box"
			>
				<img
					class="section-images"
					src={heroBike}
					alt="image of a delivery bike"
				/>
			</motion.div>
		</div>
	);
};
export default Hero;
