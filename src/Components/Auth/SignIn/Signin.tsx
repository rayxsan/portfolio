import React from "react";
import { Formik, Form, Field } from "formik";
import { StyledSignin } from "./Signin.styled";
import Button from "../../Elements/Button/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import * as Yup from "yup";
import * as path from "../../../shared/Routes";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface Values {
  email: string;
  password: string;
}

const Signin = () => {
  return (
    <StyledSignin>
      <p>Welcome, please Sign In</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values: Values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <p>User, password</p>
            <label
              htmlFor="email"
              className={
                errors.email && touched.email ? "errorClass" : "isValid"
              }
            >
              Email Address
            </label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
            />

            <label
              htmlFor="password"
              className={
                errors.password && touched.password ? "errorClass" : "isValid"
              }
            >
              Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Password"
            />
            <Checkbox primary label="Remember me" />
            <Button primary type="submit">
              Sign in
            </Button>
            <a href="*">Forgot Password?</a>
            <span>Don't have an account?</span>
            <a href={path.signupPath}>Sign up here</a>
          </Form>
        )}
      </Formik>
    </StyledSignin>
  );
};

export default Signin;
