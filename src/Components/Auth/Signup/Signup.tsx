import React from "react";
import { Formik, Form, Field } from "formik";
import { StyledSignup } from "./Signup.styled";
import Button from "../../Elements/Button/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import * as Yup from "yup";
import * as path from "../../../shared/Routes";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup = () => {
  return (
    <StyledSignup>
      <p>Welcome, please Sign Up</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignUpSchema}
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
            <label
              htmlFor="Confirm password"
              className={
                errors.password && touched.password ? "errorClass" : "isValid"
              }
            >
              Confirm Password
            </label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Confirm Password"
            />
            <Button primary type="submit">
              Sign Up
            </Button>
            <span>Already have an accouont?</span>
            <a href={path.signinPath}>Sign in here</a>
          </Form>
        )}
      </Formik>
    </StyledSignup>
  );
};

export default Signup;
