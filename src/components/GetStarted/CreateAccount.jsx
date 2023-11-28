import "./createAccount.css";
import userIcon from "../../assets/icons/userIcon.png";
import mailIcon from "../../assets/icons/mailIcon.png";
import lockIcon from "../../assets/icons/lock.png";
const CreateAccount = () => {
	return (
		<div className="create-account-wrapper">
			<div className="create-account-x"></div>
			<h3>Create an account</h3>
			<h5>Input your details to sign up on OyaNow</h5>
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
					<p>
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
				<div className="create-account-text">
					By creating an account, you automatically accept our
					<a href=""> Terms of service</a>, <a href="">Privacy Policy </a>and
					<a href=""> Cookies Policy</a>
				</div>
			</div>
			<div className="create-account-btn">
				<span>Create Account</span>
			</div>
			<div className="demarcation-wrapper">
				<div></div>
				<div> Or</div>
				<div></div>
			</div>
			<div className="create-account-socials">
				<div className="create-google"></div>
				<div className="create-facebook"></div>
			</div>
			<div>
				<p>
					Already have an account? <a href="">Sign in</a>
				</p>
			</div>
		</div>
	);
};
export default CreateAccount;
