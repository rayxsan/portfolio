import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { StyledSignup } from "./Signup.styled";
import Button from "../../Elements/Button/Button";
import * as Yup from "yup";
import * as path from "../../../shared/Paths";
import { auth } from "../../../firebase";

const SignUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  verifyPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords don't match!")
    .required("Required"),
});

interface FormItems {
  email: string;
  password: string;
  verifyPassword: string;
}

const Signup = () => {
  // const authContext = useContext(AuthContext);
  const [error, setError] = useState("");

  const history = useHistory();

  const handleSubmit = async (values: FormItems) => {
    await auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log("ok");
        history.push("/");
      })
      .catch((error: any) => {
        setError(error.message);
        console.log(error.message);
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
        {({ isSubmitting, dirty, isValid, errors, touched }) => (
          <Form>
            {error !== "" && <p>{error}</p>}
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
              htmlFor=" verifyPassword"
              className={
                errors.verifyPassword && touched.verifyPassword
                  ? "errorClass"
                  : "isValid"
              }
            >
              Verify Password
            </label>
            <Field
              id="verifyPassword"
              name="verifyPassword"
              type="password"
              placeholder="Verify Password"
            />
            <Button
              type="submit"
              primary
              disabled={isSubmitting || !dirty || !isValid}
            >
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
