import "./SignInAndUp.scss";

import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";
/**
 *
 * @returns
 */
const signInOut = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default signInOut;
