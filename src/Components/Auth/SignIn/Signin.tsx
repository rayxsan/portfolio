import React from "react";
import { Formik, Form, Field } from "formik";
import { StyledSingin } from "./Signin.styled";
import Button from "../../Elements/Button/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import * as Yup from "yup";

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
    <StyledSingin>
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
            <a href="*">Forgot Password</a>
          </Form>
        )}
      </Formik>
    </StyledSingin>
  );
};

export default Signin;
