import React, { useState } from "react";
import toast from "react-hot-toast";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectErrorMessage } from "../../redux/user/userSelector";

import Alert from "@material-ui/lab/Alert";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/userActions";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./SignIn.scss";

const SignIn = ({ emailSignInStart, googleSignInStart, errorMessage }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const showToast = () => {
    toast("You are successfully logged in!", {
      duration: 4000,
      style: { fontSize: "18px", fontWeight: "bold" },
      icon: "🎈🎈🎈",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    emailSignInStart({ email, password });
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  const handleSignInWithGoogle = async () => {
    await googleSignInStart();
    showToast();
  };

  return (
    <div className="sign-in">
      <h2 className="title">I already have account</h2>
      <span>Sign in with your email and passwod</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        {errorMessage ? (
          <Alert
            style={{ marginBottom: "20px" }}
            severity="error"
          >{`Account does not exist`}</Alert>
        ) : null}

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            isGoogleSignIn
            type="button"
            onClick={() => handleSignInWithGoogle()}
          >
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  errorMessage: selectErrorMessage,
});

export default connect(mapStateToProps, {
  googleSignInStart,
  emailSignInStart,
})(SignIn);
