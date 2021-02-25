import React, { useState } from "react";
import { StyledPasswordReset } from "./PasswordReset.styled";
import { Formik, Form, Field, FormikHelpers } from "formik";
import Button from "../../Elements/Button/Button";
import { auth } from "../../../firebase";
import * as Yup from "yup";

const PasswordResetSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

interface props {}

interface FormValues {
  email: string;
}

const PasswordReset: React.FC<props> = () => {
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await auth.sendPasswordResetEmail(values.email);
      actions.resetForm();
      setSubmitted(true);
    } catch (error) {
      setError(error.message);
      actions.setSubmitting(false);
    }
  };

  return (
    <StyledPasswordReset submitted={submitted}>
      <Formik
        initialValues={{
          email: "",
        }}
        validationSchema={PasswordResetSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, dirty, isValid, errors, touched }) => (
          <Form>
            <h1>Reset password</h1>
            <h2>Enter your email to reset your password</h2>
            {error !== "" && <p>{error}</p>}
            {submitted && (
              <p>Please check your inbox to reset your password.</p>
            )}
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
            />
            <Button primary type="submit">
              Reset Password
            </Button>
          </Form>
        )}
      </Formik>
    </StyledPasswordReset>
  );
};

export default PasswordReset;
