import React from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.actions";

import "./sign-in.styles.scss";

const SignIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("email/password", email, password);
    dispatch(emailSignInStart({ email, password }));
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          onChange={(event) => setEmail(event.target.value)}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            onClick={() => dispatch(googleSignInStart())}
            isGoogleSignIn
          >
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
