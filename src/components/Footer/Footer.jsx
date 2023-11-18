import applestore from "../../assets/icons/apple.png";
import googlestore from "../../assets/icons/gplay.png";

const Footer = () => {
	return (
		<footer>
			<div class="footer-top">
				<div class="footer-block one">
					<h3>Company</h3>
					<ul>
						<li>
							<a href="./about.html">About Us </a>
						</li>
						<li>
							<a href="./contact.html">Contact Us </a>
						</li>
						<li>
							<a href="https://blog.oyanow.ng" target="_blank">
								Blog{" "}
							</a>
						</li>
						<li>
							<a href="./faq.html">FAQ </a>
						</li>
					</ul>
				</div>
				<div class="footer-block two">
					<h3>Social</h3>
					<ul>
						<li>
							<a href="https://instagram.com/oyanow.ng">Instagram</a>
						</li>
						<li>
							<a href="https://facebook.com/oyanow.ng">Facebook </a>
						</li>
						<li>
							<a href="https://linkedin.com/company/oyanow/">Linkedin </a>
						</li>
						<li>
							<a href="https://twitter.com/oyanowN">Twitter </a>
						</li>
						<li>
							<a href="https://www.tiktok.com/@oyanow.ng?_t=8f7L3HZ2qOb&_r=1">
								Tiktok
							</a>
						</li>
					</ul>
				</div>
				<div class="footer-block three">
					<h3>Download the OyaNow app</h3>
					<ul>
						<li>
							<a href="https://apps.apple.com/ng/app/oyanow/id1248784384">
								<img src={applestore} alt="" />
							</a>
						</li>
						<li>
							<a href="https://play.google.com/store/apps/details?id=com.g360synergy.oyanow">
								<img src={googlestore} alt="" />
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="footer-bottom">
				<ul>
					<li>
						<a href="tel:+2348169899988">+2348169899988</a>
					</li>
					<li>
						<a href="mailto:info@oyanow.ng">info@oyanow.ng</a>
					</li>

					<li>
						<a href="./terms&condition.html" target="_blank">
							Terms and Conditions
						</a>
					</li>
					<li>
						<a href="./privacy policy.html" target="_blank">
							Privacy policy
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};
export default Footer;
