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

// Yup API: https://github.com/jquense/yup
const SimpleFormValidation = Yup.object().shape({
  username: Yup.string()
    .min(4, "too short!")
    .max(9, "too long!")
    .required("this field is required"),
  firstName: Yup.string().required("this field is required"),
  email: Yup.string().email("Invalid email").required("this field is required"),
  date: Yup.date(),
  creditCard: Yup.string()
    .required("this field is required")
    .min(16, "Not a valid number")
    .max(16, "Not a valid number"),
  mobileNumber: Yup.string().required("this field is required"),
  password: Yup.string()
    .required("this field is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "passwords didn't match")
    .required("this field is required"),
});

// TODO Style Validation
const FormF: FunctionComponent<Values> = () => {
  const initialValues: Values = {
    username: "",
    firstName: "",
    email: "",
    date: "",
    creditCard: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    gender: "",
  };
  return (
    <StyledFormF>
      <Formik
        initialValues={initialValues}
        validationSchema={SimpleFormValidation}
        validateOnChange={true}
        validateOnBlur={false}
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
              {/* TODO: use input of type date */}
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
              {/* TODO: use input of type password */}
              <TextInputLiveFeedback
                id="password"
                name="password"
                placeholder="Password"
              />
              {/* TODO: use input of type password */}
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
