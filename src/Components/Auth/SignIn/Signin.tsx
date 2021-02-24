import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { StyledSignin } from "./Signin.styled";
import Button from "../../Elements/Button/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import * as Yup from "yup";
import * as path from "../../../shared/Routes";
import { auth } from "../../../firebase";
import "firebase/auth";
import "firebase/firestore";
import { AuthContext } from "../../../contexts/AuthContext";

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface UserData {
  email: string;
  password: string;
}

const Signin = () => {
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const handleSubmit = (values: UserData) => {
    auth
      .signInWithEmailAndPassword(values.email, values.password)
      .then((res) => {
        authContext.setUser(res);
        //console.log(res, "res");
        history.push("/");
      })
      .catch((error) => {
        console.log(error.message, values.email);
      });
  };
  return (
    <StyledSignin>
      <p>Welcome, please Sign In</p>
      <Formik
        initialValues={{
          email: "test01@test.com",
          password: "password",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => handleSubmit(values)}
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
              //value={values.email}
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
              //value={values.password}
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
