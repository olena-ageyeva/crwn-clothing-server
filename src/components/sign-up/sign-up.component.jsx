import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";

import "./sign-up.styles.scss";

const SignUp = () => {
  const [email, setEmail] = React.useState(" ");
  const [password, setPassword] = React.useState(" ");
  const [displayName, setDisplayName] = React.useState(" ");
  const [confirmPassword, setConfirmPassword] = React.useState(" ");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error(error);
    }
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
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          required
          onChange={(e) => setDisplayName(e.target.value)}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={(e) => setConfirmPassword(e.target.value)}
          label="Confirm password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
