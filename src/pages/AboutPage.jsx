import "./pages.css";
import downarrow from "../assets/icons/downarrow.png";
import locationicon from "../assets/images/location1.png";
import PagesHero from "../components/Hero/PagesHero";
import Footer from "../components/Footer/Footer";
const AboutPage = () => {
	return (
		<>
			<PagesHero text1={"About"} text2="OyaNow" />
			<>
				<section class="section-one">
					<div class="section-one-wrapper">
						<div class="section-one-top">
							<h2>Who are we?</h2>
							<h3>Convenience. Reliability. Quality of Service</h3>
							<p>
								OyaNow is Nigeria’s leading one-stop solution for all your
								deliveries and professional service needs.We are Africa’s
								leading food and professional services delivery online platform.
								Our innovative platform caters to all your needs at your
								doorstep, encompassing a wide range of products and services,
								including food, medical care, beauty, laundry and cleaning
								services; as well as a nationwide courier services.With a team
								of over 200 people, provides fast delivery and courrier
								solutions to a country populated by 190+ million people.
							</p>
						</div>
						<div class="section-one-bottom">
							<h2>Our Locations</h2>
							<div class="section-one-bottom-wrapper">
								<img src={locationicon} alt="" />
								<ul>
									<li>Abuja</li>
									<li>Lagos</li>
									<li>Kano</li>
								</ul>
							</div>
						</div>
					</div>
				</section>
				<section class="section-two">
					<h2>Our delivery fee</h2>
					<div class="section-two-outer-wrapper">
						<div class="section-two-inner-top">
							<div class="section-two-item one">
								<h3>Abuja</h3>
								<p>
									We charge NGN 1000 for the first 4km and an additional NGN 100
									for every extra 1km
								</p>
							</div>
							<div class="section-two-item two">
								<h3>Lagos</h3>
								<p>
									We charge NGN 1000 for the first 3km and an additional NGN 117
									for every extra 1km
								</p>
							</div>
							<div class="section-two-item three">
								<h3>Kano</h3>
								<p>
									We charge NGN 425 for the first 3km and an additional NGN 34
									for every extra 1km
								</p>
							</div>
						</div>
						<h2>Our Business Packages</h2>
						<div class="section-two-inner-bottom">
							<div class="section-two-item one">
								<h3>Abuja B2B</h3>
								<a href="../assets/files/OyaNow_Abuja_B2B.pdf" download>
									<img src={downarrow} alt="" />
								</a>
							</div>
							<div class="section-two-item two">
								<h3>Lagos B2B</h3>
								<a href="../assets/files/OyaNow_lagos_B2B.pdf" download>
									<img src={downarrow} alt="" />
								</a>
							</div>
							<div class="section-two-item three">
								<h3>Kano B2B</h3>

								<a href="../assets/files/OyaNow_Kano_B2B.pdf" download>
									<img src={downarrow} alt="" />
								</a>
							</div>
							<div class="section-two-item four">
								<h3>Abuja OyaBiz</h3>
								<a href="./files/OyaBiz_Abuja_Price.pdf" download>
									<img src={downarrow} alt="" />
								</a>
							</div>
						</div>
					</div>
				</section>
				<section class="section-three">
					<h3>Start your business with OyaNow</h3>
					<p>Be part of our exciting OyaNow family!</p>
					<div class="section-three-item">
						<div>
							<a href="https://mhqt5ikbf91.typeform.com/to/mDt0Komg">
								Become a Delivery Partner
							</a>
						</div>
						<div>
							<a href="https://mhqt5ikbf91.typeform.com/to/AONIx0WV">
								Register Your Business
							</a>
						</div>
					</div>
				</section>
			</>
			<Footer />
		</>
	);
};
export default AboutPage;
