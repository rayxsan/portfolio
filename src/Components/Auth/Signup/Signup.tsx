import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { StyledSignup } from "./Signup.styled";
import Button from "../../Elements/Button/Button";
import * as Yup from "yup";
import * as path from "../../../shared/Routes";
import { AuthContext } from "../../../contexts/AuthContext";
import app, { auth } from "../../../firebase";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

interface FormItems {
  email: string;
  password: string;
}

const Signup = () => {
  const authContext = useContext(AuthContext);

  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  // } as FormItems);

  const history = useHistory();

  const handleSubmit = (values: FormItems) => {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential: firebase.default.auth.UserCredential) => {
        authContext.setUser(userCredential);
        const db = app.firestore();
        db.collection("Users")
          .doc(userCredential.user!.uid)
          .set({
            email: values.email,
            password: values.password,
          })
          .then(() => {
            console.log("ok");
            history.push("/");
          })
          .catch((error) => {
            console.log(error.message);
            alert(error.message);
          });
      });
  };

  return (
    <StyledSignup>
      <p>Welcome, please Sign Up</p>
      <Formik
        initialValues={{
          email: "",
          password: "",
          verifyPassword: "",
        }}
        validationSchema={SignUpSchema}
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
              id="verifyPassword"
              name="verifyPassword"
              type="password"
              placeholder="Verify Password"
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
