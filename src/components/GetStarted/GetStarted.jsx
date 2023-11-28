import "./getStarted.css";
import SignIn from "./SignIn";
import EmailSignIn from "./EmailSignIn";
import CreateAccount from "./CreateAccount";
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
