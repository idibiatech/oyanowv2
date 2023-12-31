import "./pages.css";
import PagesHero from "../components/Hero/PagesHero";
import phone from "../assets/icons/phone.png";
import mail from "../assets/icons/mail.png";
import tel from "../assets/images/phone.png";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/Navigation/NavBar";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animations";
const Contact = () => {
	return (
		<motion.div
			variants={pageAnimation}
			initial="initial"
			animate="animate"
			exit="exit"
		>
			<NavBar />
			<PagesHero text1={"contact"} text2="OyaNow" />
			<>
				<section class="section-one-about" id="contact-section-one">
					<div class="section-one-wrapper">
						<div class="section-one-top">
							<h2>Get in touch with us!</h2>
							<p>Connect with us for question and/or enquiries.</p>
						</div>
						<div class="section-one-bottom" id="contact-bottom">
							<h2>Our Locations</h2>
							<div class="section-one-bottom-wrapper">
								<div class="contact-bottom-left">
									<img class="phone" src={tel} alt="" />
								</div>
								<div class="contact-bottom-right">
									<div class="contact-bottom-right-wrapper">
										<div>
											<img class="contact-icon" src={mail} alt="main icon" />
											<p>info@oyanow.ng</p>
										</div>
										<div>
											<img class="contact-icon" src={phone} alt="main icon" />
											<p>+234 816 989 9988</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
			<Footer />
		</motion.div>
	);
};
export default Contact;
