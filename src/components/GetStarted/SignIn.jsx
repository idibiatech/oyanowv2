import "./getstarted.css";
import "./SignIn.css";

import facebookIcon from "../../assets/icons/facebookIcon.png";
import emailIcon from "../../assets/icons/emailIcon.png";
import googleIcon from "../../assets/icons/googleIcon.png";
import cancel from "../../assets/icons/x-solid.svg";

const SignIn = () => {
	return (
		<div className="sign-in-wrapper gs-wrapper">
			<div className="cancel-btn">
				<img src={cancel} alt="" />
			</div>
			<h3 className="gs-heading">Welcome</h3>
			<h5 className="gs-sub-heading">Create an account to get started</h5>
			<div className="login-links">
				<div className="login-google">
					<div className="social-logo">
						<img src={googleIcon} alt="" />
					</div>
					<div className="social-text">Sign up with Google</div>
				</div>
				<div className="login-facebook">
					<div className="social-logo">
						<img src={facebookIcon} alt="" />
					</div>
					<div className="social-text">Sign up with facebook</div>
				</div>
				<div className="login-email">
					<div className="social-logo">
						<img src={emailIcon} alt="" />
					</div>
					<div className="social-text">Sign up with Email</div>
				</div>
			</div>
			<div className="gs-text">
				By creating an account, you automatically accept our
				<a href=""> Terms of service</a>, <a href="">Privacy Policy </a>and
				<a href=""> Cookies Policy</a>
			</div>

			<p>
				Already have an account?{" "}
				<a href="">
					{" "}
					<span className="highlightLink2">Log In</span>{" "}
				</a>
			</p>
		</div>
	);
};
export default SignIn;
