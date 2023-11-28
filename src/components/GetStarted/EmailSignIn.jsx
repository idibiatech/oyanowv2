import "./getStarted.css";
import "./emailSignIn.css";
import userIcon from "../../assets/icons/userIcon.png";
import mailIcon from "../../assets/icons/mailIcon.png";
import lockIcon from "../../assets/icons/lock.png";
import cancel from "../../assets/icons/x-solid.svg";
import fIcon from "../../assets/icons/fIcon.png";

import gIcon from "../../assets/icons/gIcon.png";

const EmailSignIn = () => {
	return (
		<div className="gs-wrapper email-signIn-wrapper ">
			<div className="cancel-btn">
				<img src={cancel} alt="" />
			</div>
			<h3 className="gs-heading">Welcome Back</h3>
			<h5 className="gs-sub-heading">Login into your account</h5>
			<div className="form-wrapper">
				<div className="form-input-wrapper">
					<div className="form-icon">
						<img src={mailIcon} alt="" />
					</div>
					<input
						type="email"
						name="email"
						id=""
						placeholder="Enter your email"
					/>
				</div>
				<div className="form-input-wrapper">
					<div className="form-icon">
						<img src={lockIcon} alt="" />
					</div>
					<input
						type="password"
						name="password"
						id=""
						placeholder="Enter your password "
					/>
				</div>

				<div className="form-input-wrapper radio-wrapper">
					<input type="checkbox" name="remember" id="" />
					<span>Remember me</span>
				</div>
			</div>
			<div className="gs-main-btn">
				<span>Create Account</span>
			</div>
			<div className="demarcation-wrapper">
				<div className="dem-lines"></div>
				<div> Or</div>
				<div className="dem-lines"></div>
			</div>
			<div className="create-account-socials">
				<div className="create-google">
					<div className="social-icon">
						<img src={gIcon} alt="" />
					</div>
					<div className="">Google</div>
				</div>
				<div className="create-facebook">
					<div className="social-icon">
						<img src={fIcon} alt="" />
					</div>
					<div className="">Facebook</div>
				</div>
			</div>
			<div>
				<p>
					Don't have an account? <a href="">Sign up</a>
				</p>
			</div>
		</div>
	);
};
export default EmailSignIn;
