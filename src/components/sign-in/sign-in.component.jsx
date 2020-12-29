import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../firebase/firebase.utils";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = React.useState(" ");
  const [password, setPassword] = React.useState(" ");

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    if (name === "password") {
      setPassword(value);
    }
    if (name === "email") {
      setEmail(value);
    }
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
          onChange={handleChange}
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
