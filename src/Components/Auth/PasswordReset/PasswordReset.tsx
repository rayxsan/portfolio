import React, { useState } from "react";
import { StyledPasswordReset } from "./PasswordReset.styled";
import { Formik, Form, Field, FormikHelpers } from "formik";
import Button from "../../Elements/Button/Button";
import { auth } from "../../../firebase";

export interface props {}

interface FormValues {
  email: string;
}

const PasswordReset: React.FC<props> = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (
    values: FormValues,
    actions: FormikHelpers<FormValues>
  ) => {
    try {
      await auth.sendPasswordResetEmail(values.email);
      actions.resetForm();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <StyledPasswordReset>
      <Formik
        initialValues={{
          email: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, dirty, isValid, errors, touched }) => (
          <Form>
            <h1>Reset password</h1>
            <h2>Enter your email to reset your password</h2>
            {error !== "" && <p>{error}</p>}

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
