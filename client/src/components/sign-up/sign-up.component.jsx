import React, { useState } from "react";
import { useDispatch } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.styles.scss";
import { signUpStart } from "../../store/user/user.actions";

const SignUp = () => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    email: "",
    password: "",
    confirmPassword: "",
    displayName: "",
  };
  const [userCredentials, setUserCredentials] = useState(INITIAL_STATE);

  const { email, password, confirmPassword, displayName } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      dispatch(signUpStart({ email, password, displayName }));
      setUserCredentials(INITIAL_STATE);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
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
          onChange={handleChange}
          label="Display Name"
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          required
          onChange={handleChange}
          label="Email"
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={password}
          onChange={handleChange}
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
