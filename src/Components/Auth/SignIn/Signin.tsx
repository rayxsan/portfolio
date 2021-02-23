import React, { useState } from "react";
import { useFormik } from "formik";
import { StyledSingin } from "./Signin.styled";
import Button from "../../Elements/Button/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";

const Signin = () => {
  const [showLabel, setShowLabel] = useState(true);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledSingin>
      <p>Welcome, please Sign In</p>
      <form onSubmit={formik.handleSubmit}>
        <p>User, password</p>
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Checkbox primary label="Remember me" />
        <Button primary type="submit">
          Sign in
        </Button>
        <a href="*">Forgot Password</a>
      </form>
    </StyledSingin>
  );
};

export default Signin;
