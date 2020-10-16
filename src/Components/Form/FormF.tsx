import "react-app-polyfill/ie11";
import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

interface Values {
  username: string;
  firstName: string;
  email: string;
  date: string;
  creditCard: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
}

const FormF = () => {
  return (
    <div>
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
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <label htmlFor="username">Username</label>
          <Field id="lastName" name="lastName" placeholder="john-doe" />

          <label htmlFor="firstName">First Name</label>
          <Field id="firstName" name="firstName" placeholder="John" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="john@acme.com" type="email" />

          <label htmlFor="date">First Name</label>
          <Field id="date" name="date" placeholder="today" />

          <label htmlFor="creditCard">Last Name</label>
          <Field id="creditCard" name="creditCard" placeholder="0001203441932034" />

          <label htmlFor="mobileNumber">Email</label>
          <Field id="mobileNumber" name="mobileNumber" placeholder="john@acme.com" />

          <label htmlFor="pasword">First Name</label>
          <Field id="pasword" name="pasword" placeholder="John" />

          <label htmlFor="confirmPassword">Last Name</label>
          <Field id="confirmPassword" name="confirmPassword" placeholder="Doe" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormF;
