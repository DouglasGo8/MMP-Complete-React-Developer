import { Component } from "react";
import "./SignIn.scss";
import FormInput from "../formInput/FormInput";
import Button from "../button/Button";

/**
 *
 */
class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ email: "", password: "" });

    try {
      this.setState({
        email: "userx@mail.com",
        password: "1234",
      });
    } catch (error) {}
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  signInWithGoogle = () => {
    console.log("signed");
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <Button type="submit">Sign in</Button>{" "}
            <Button
              type="submit"
              onClick={this.signInWithGoogle}
              isGoogleSignIn
            >
              Sign in With Google
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
