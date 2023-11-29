import "./getStarted.css";
import "./createAccount.css";
import userIcon from "../../assets/icons/userIcon.png";
import mailIcon from "../../assets/icons/mailIcon.png";
import lockIcon from "../../assets/icons/lock.png";
import cancel from "../../assets/icons/x-solid.svg";
import fIcon from "../../assets/icons/fIcon.png";

import gIcon from "../../assets/icons/gIcon.png";
const CreateAccount = () => {
	return (
		<div className="gs-wrapper create-account-wrapper ">
			<div className="cancel-btn">
				<img src={cancel} alt="" />
			</div>
			<h3 className="gs-heading">Create an account</h3>
			<h5 className="gs-sub-heading">
				Input your details to sign up on OyaNow
			</h5>
			<div className="form-wrapper">
				<div className="form-input-wrapper">
					<div className="form-icon">
						<img src={userIcon} alt="" />
					</div>
					<input
						type="text"
						name="username"
						id=""
						placeholder="Enter your full name"
					/>
				</div>
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
				<div className="form-info">
					<p className="gs-text">
						Minimum 6 characters, at least one number, and special character
					</p>
				</div>
				<div className="form-input-wrapper">
					<div className="form-icon">
						<img src={lockIcon} alt="" />
					</div>
					<input
						type="password"
						name="password"
						id=""
						placeholder="Enter your password again"
					/>
				</div>
				<div className=" gs-text">
					By creating an account, you automatically accept our
					<a href=""> Terms of service</a>, <a href="">Privacy Policy </a>and
					<a href=""> Cookies Policy</a>
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
					Already have an account?{" "}
					<a href="">
						<span className="highlightLink">Sign in</span>
					</a>
				</p>
			</div>
		</div>
	);
};
export default CreateAccount;
