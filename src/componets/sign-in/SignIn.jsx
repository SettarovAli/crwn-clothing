import React, { Component } from "react";
import toast from "react-hot-toast";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import { withRouter } from "react-router-dom";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./SignIn.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  showToast = () => {
    toast("You are successfully logged in!", {
      duration: 4000,
      style: { fontSize: "18px", fontWeight: "bold" },
      icon: "🎈🎈🎈",
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.showToast();
      this.props.history.push("/");
    } catch (error) {
      console.log(error);
    }
    this.setState({ email: "", password: "" });
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleSignInWithGoogle = async () => {
    await signInWithGoogle();
    this.showToast();
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">I already have account</h2>
        <span>Sign in with your email and passwod</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            label="Email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name="password"
            type="password"
            label="Password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">Sign in</CustomButton>
            <CustomButton
              isGoogleSignIn
              type="button"
              onClick={() => this.handleSignInWithGoogle()}
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
