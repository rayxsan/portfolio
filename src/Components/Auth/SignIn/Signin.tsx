import React, { useState } from "react";
import { useFormik } from "formik";
import { StyledSingin } from "./Signin.styled";
import Button from "../../Elements/Button/Button";

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
      <form onSubmit={formik.handleSubmit}>
        <p>User, password</p>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <Button primary type="submit">
          Sign in
        </Button>
        <a href="*">Forgot Password</a>
      </form>
    </StyledSingin>
  );
};

export default Signin;
