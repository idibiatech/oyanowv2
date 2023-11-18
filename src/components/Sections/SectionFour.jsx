import oyaphone from "../../assets/images/oyaphone.png";
import applestore from "../../assets/icons/apple.png";
import googlestore from "../../assets/icons/gplay.png";
const SectionFour = () => {
	return (
		<div className="section-four">
			<div className="left">
				<h3>
					Download the <span>OyaNow </span>app now
				</h3>
				<p>
					Order for your food, drinks and even run errands at very affordable
					rates
				</p>
				<div className="section-four-icon-wrapper">
					<div className="left-icon-wrapper">
						<img className="storeIcon" src={googlestore} alt="" />
					</div>
					<div className="right-icon-wrapper">
						<img className="storeIcon" src={applestore} alt="" />
					</div>
				</div>
			</div>
			<div className="right">
				<img src={oyaphone} alt="" />
			</div>
		</div>
	);
};
export default SectionFour;
