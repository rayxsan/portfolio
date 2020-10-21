import React, { FunctionComponent } from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Button from "../Button/Button";
import TextInputLiveFeedback from "./LiveFeedback";
import StyledFormF from "./FormF.styled";

interface Values {
  username?: string | any;
  firstName?: string;
  email?: string;
  date?: string;
  creditCard?: string;
  mobileNumber?: string;
  password?: string;
  confirmPassword?: string;
  gender?: string;
  checked?: boolean;
  toggle?: boolean;
}

// Async Validation
const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

const validate = (values: Values) => {
  return sleep(300).then(() => {
    const errors: any = {};
    if (!values.username) errors.username = "Required";
    if (!values.firstName) errors.firstName = "Required";
    if (!values.password) errors.password = "Required";
    if (values.password && values.password.length < 6) errors.password = "Invalid password";
    if (values.confirmPassword !== values.password)
      errors.confirmPassword = "Password doesn't match";
    return errors;
  });
};

// TODO Style Validation
const FormF: FunctionComponent<Values> = () => {
  return (
    <StyledFormF>
      <Formik
        initialValues={{
          username: "",
          firstName: "",
          email: "",
          date: "",
          creditCard: "",
          mobileNumber: "",
          password: "",
          confirmPassword: "",
          gender: "",
          checked: false,
          toggle: false,
        }}
        validate={validate}
        onSubmit={(values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {() => (
          <Form>
            <section>
              <TextInputLiveFeedback
                id="username"
                name="username"
                placeholder="Username (Min length 4, Max length 9)"
              />
              <TextInputLiveFeedback id="firstName" name="firstName" placeholder="First Name" />
              <TextInputLiveFeedback id="email" name="email" placeholder="Email" />
              <TextInputLiveFeedback id="date" name="date" placeholder="Date" />
              <TextInputLiveFeedback id="creditCard" name="creditCard" placeholder="Credit Card" />
              <TextInputLiveFeedback
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
              <TextInputLiveFeedback id="password" name="password" placeholder="Password" />
              <TextInputLiveFeedback
                id="confirmPassword"
                name="confirmPassword"
                placeholder="confirmPassword"
              />

              <div role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="Male" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="picked" value="Female" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="picked" value="Others" />
                  Others
                </label>
              </div>

              <div role="group" aria-labelledby="checkbox-group">
                <label htmlFor="toggle">
                  <Field type="checkbox" name="toggle" />I have read and agree to the terms of
                  service.
                </label>
              </div>
            </section>

            <Button outline primary type="submit">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </StyledFormF>
  );
};

export default FormF;
