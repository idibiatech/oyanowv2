import "./getStarted.css";
import SignIn from "./SignIn";
import EmailSignIn from "./EmailSignIn";
import CreateAccount from "./CreateAccount";
import AccountCreated from "./Accountcreated";
import { BrowserRouter, Route } from "react-router-dom";

{
	/* <Router>
<Switch>
<Route path="/login" component={LoginPage} />
<Route path="/signup" component={SignUpPage} />
</Switch>
</Router> */
}

const GetStarted = () => {
	return <EmailSignIn />;
};
export default GetStarted;
