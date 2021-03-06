import React, { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { StyledSignin } from "./Signin.styled";
import Button from "../../Elements/Button/Button";
import Checkbox from "../../Elements/Checkbox/Checkbox";
import * as Yup from "yup";
import * as path from "../../../shared/Paths";
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
  const [error, setError] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const authContext = useContext(AuthContext);

  const history = useHistory();

  const onChangeCheckbox = (event: any) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (values: UserData) => {
    if (isChecked) {
      localStorage.username = values.email;
      localStorage.password = values.password;
      localStorage.checkbox = isChecked;
    }
    try {
      await auth
        .signInWithEmailAndPassword(values.email, values.password)
        .then((res) => {
          authContext.setUser(res);
          history.push(path.privatePagePath);
          window.location.reload();
        })
        .catch(() => {
          setError("Invalid email or password");
          //console.log(error.message, values.email);
        });
    } catch {
      setError("Invalid email or password");
    }
  };
  return (
    <StyledSignin>
      <p>Welcome, please Sign In</p>
      <Formik
        initialValues={{
          email: "myuser@test.com",
          password: "unsafe_password",
        }}
        validationSchema={SignInSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <Form>
            <span>
              Use <b>myuser@test.com</b> and <b>unsafe_password</b> to sign in
            </span>
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
              //value={values.email}
              placeholder=""
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
              placeholder=""
            />
            <Checkbox
              primary
              label="Remember me"
              checked={isChecked}
              onChange={onChangeCheckbox}
            />
            <Button primary type="submit">
              Sign in
            </Button>
            <Link to={path.passwordResetPath}>Forgot Password?</Link>
            <span>Don't have an account?</span>
            <Link to={path.signupPath}>Sign up here</Link>
          </Form>
        )}
      </Formik>
    </StyledSignin>
  );
};

export default Signin;
