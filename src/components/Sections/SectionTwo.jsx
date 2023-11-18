import arrow from "../../assets/icons/arrow.png";
import oyabike from "../../assets/images/ojabike.webp.png";
import manMagnet from "../../assets/images/manmagnet.png";
import chart from "../../assets/images/chart.png";
const SectionTwo = () => {
	return (
		<section class="section-two">
			<div className="top-Restaurants">
				<h3>
					Top Restaurants on <span>OyaNow</span>
				</h3>
				<div className="Restaurants-wrapper"></div>
			</div>
			<div class="section-two-container one">
				<div class="two-box-left two-box">
					<h3>Become a Delivery Partner</h3>

					<p>
						Be part of the OyaNow family. Register your bike or fleet with us
						today.
					</p>
					<div class="apply-button">
						<a href="https://mhqt5ikbf91.typeform.com/to/mDt0Komg">
							Apply now
							<img class="arrows" src={arrow} alt="arrow icon" />
						</a>
					</div>
				</div>
				<div class="two-box-right two-box">
					<img class="section-images" src={oyabike} alt="bike icon" />
				</div>
			</div>

			<div class="section-two-container two">
				<div class="two-box-left two-box">
					<h3>Careers at OyaNow</h3>
					<p>
						We are always on the look for amazing talent. Think you are one, hit
						us up right away!
					</p>
					<div class="apply-button">
						<a href="https://mhqt5ikbf91.typeform.com/to/XHDCE33N">
							Apply now
							<img class="arrows" src={arrow} alt="arrow icon" />
						</a>
					</div>
				</div>
				<div class="two-box-right two-box">
					<img class="section-images" src={manMagnet} alt="" />
				</div>
			</div>

			<div class="section-two-container three">
				<div class="two-box-left two-box">
					<h3>Register your Business</h3>
					<p>
						Do you want to list your products on OyaNow? Use the button below to
						get started right away.
					</p>
					<div class="apply-button">
						<a href="https://mhqt5ikbf91.typeform.com/to/AONIx0WV">
							Apply now
							<img class="arrows" src={arrow} alt="" />
						</a>
					</div>
				</div>
				<div class="two-box-right two-box">
					<img class="section-images" src={chart} alt="" />
				</div>
			</div>
		</section>
	);
};
export default SectionTwo;
