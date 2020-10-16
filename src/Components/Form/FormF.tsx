import React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";
import Button from "../Button/Button";
import StyledFormF from "./FormF.styled";

interface Values {
  username: string;
  firstName: string;
  email: string;
  date: string;
  creditCard: string;
  mobileNumber: string;
  password: string;
  confirmPassword: string;
  picked: string;
}

// TODO Validation
const FormF = () => {
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
          picked: "",
        }}
        onSubmit={(values: Values, { setSubmitting }: FormikHelpers<Values>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        {({ values }) => (
          <Form>
            <section>
              <label htmlFor="username" />
              <Field id="username" name="username" placeholder="username" />

              <label htmlFor="firstName" />
              <Field id="firstName" name="firstName" placeholder="John" />

              <label htmlFor="email" />
              <Field id="email" name="email" placeholder="john@acme.com" type="email" />

              <label htmlFor="date" />
              <Field id="date" name="date" placeholder="today" />

              <label htmlFor="creditCard" />
              <Field id="creditCard" name="creditCard" placeholder="0001203441932034" />

              <label htmlFor="mobileNumber" />
              <Field id="mobileNumber" name="mobileNumber" placeholder="john@acme.com" />

              <label htmlFor="pasword" />
              <Field id="pasword" name="pasword" placeholder="John" />

              <label htmlFor="confirmPassword" />
              <Field id="confirmPassword" name="confirmPassword" placeholder="Doe" />

              <div className="radios" role="group" aria-labelledby="my-radio-group">
                <label>
                  <Field type="radio" name="picked" value="One" />
                  Male
                </label>
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  Female
                </label>
                <label>
                  <Field type="radio" name="picked" value="Two" />
                  Others
                </label>
                <div>{values.picked}</div>
              </div>

              <div role="group" aria-labelledby="checkbox-group">
                <label>
                  <Field type="checkbox" name="checked" value="One" />I have read and agree to the
                  terms of service.
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
