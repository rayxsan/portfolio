import React, { FunctionComponent } from "react";
import {
  Formik,
  Field,
  Form,
  FormikHelpers,
  ErrorMessage,
  useField,
} from "formik";
import Button from "../Button/Button";
import * as Yup from "yup";
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
  error?: boolean;
}

interface LiveFeedback {
  name: string;
  id?: string;
  placeholder?: string;
}

// Async Validation
// const sleep = (ms: any) => new Promise(resolve => setTimeout(resolve, ms));

const TextInputLiveFeedback = ({
  name,
  id,
  placeholder,
  ...props
}: LiveFeedback) => {
  const [field, meta] = useField(name);

  // Show inline feedback if EITHER
  // - the input is focused AND value is longer than 2 characters
  // - or, the has been visited (touched === true)
  const [didFocus, setDidFocus] = React.useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback =
    (!!didFocus && field.value.trim().length > 2) || meta.touched;

  return (
    <div>
      <label htmlFor={id} />
      <Field
        {...props}
        {...field}
        id={id}
        name={name}
        placeholder={placeholder}
        aria-describedby={`${id}-feedback ${id}-help`}
        onFocus={handleFocus}
        error={meta.error}
      />
      {meta.error && showFeedback ? (
        <ErrorMessage component="span" name={name} />
      ) : null}
    </div>
  );
};

const SimpleFormValidation = Yup.object().shape({
  username: Yup.string()
    .min(4, "Too Short!")
    .max(9, "Too Long!")
    .required("Required"),
  firstName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  date: Yup.date(),
  creditCard: Yup.number(),
  mobileNumber: Yup.number(),
  password: Yup.string(),
  confirmPassword: Yup.string(),
});

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
          error: false,
        }}
        validationSchema={SimpleFormValidation}
        onSubmit={(values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <section>
              <TextInputLiveFeedback
                id="username"
                name="username"
                placeholder="Username (Min length 4, Max length 9)"
              />
              <TextInputLiveFeedback
                id="firstName"
                name="firstName"
                placeholder="First Name"
              />
              <TextInputLiveFeedback
                id="email"
                name="email"
                placeholder="Email"
              />
              <TextInputLiveFeedback id="date" name="date" placeholder="Date" />
              <TextInputLiveFeedback
                id="creditCard"
                name="creditCard"
                placeholder="Credit Card"
              />
              <TextInputLiveFeedback
                id="mobileNumber"
                name="mobileNumber"
                placeholder="Mobile Number"
              />
              <TextInputLiveFeedback
                id="password"
                name="password"
                placeholder="Password"
              />
              <TextInputLiveFeedback
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm Password"
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
                  <Field type="checkbox" name="toggle" />I have read and agree
                  to the terms of service.
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
