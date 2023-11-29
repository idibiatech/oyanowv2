import orangeCheck from "../../assets/icons/orangeCheck.png";
import cancel from "../../assets/icons/x-solid.svg";

const AccountCreated = () => {
	return (
		<div className="gs-wrapper login-alert">
			<div className="cancel-btn">
				<img src={cancel} alt="" />
			</div>
			<h3>Account created</h3>
			<div className="orange-check">
				<img src={orangeCheck} alt="" />
			</div>
			<div className="gs-main-btn">
				<span>OK</span>
			</div>
		</div>
	);
};
export default AccountCreated;
