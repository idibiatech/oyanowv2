import PagesHero from "../components/Hero/PagesHero";
const Contact = () => {
	return (
		<>
			<PagesHero text1={"contact"} text2="OyaNow" />
			<>
				<section class="section-one" id="contact-section-one">
					<div class="section-one-wrapper">
						<div class="section-one-top">
							<h2>Get in touch with us!</h2>
							<p>Connect with us for question and/or enquiries.</p>
						</div>
						<div class="section-one-bottom" id="contact-bottom">
							<h2>Our Locations</h2>
							<div class="section-one-bottom-wrapper">
								<div class="contact-bottom-left">
									<img class="phone" src="./assets/images/phone.png" alt="" />
								</div>
								<div class="contact-bottom-right">
									<div class="contact-bottom-right-wrapper">
										<div>
											<img
												class="contact-icon"
												src="./assets/icons/mail.png"
												alt="main icon"
											/>
											<p>info@oyanow.ng</p>
										</div>
										<div>
											<img
												class="contact-icon"
												src="./assets/icons/phone.png"
												alt="main icon"
											/>
											<p>+234 816 989 9988</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</>
		</>
	);
};
export default Contact;
