import React from "react";
import { StyledSecurity } from "./Security.styled";
import { Formik, Form, Field } from "formik";
import Button from "../../../Elements/Button/Button";
import * as Yup from "yup";

const SecuritySchema = Yup.object().shape({
  currentPassword: Yup.string()
    .min(6, "Password too short ")
    .max(50, "Password too Long!")
    .required("Required"),
  newPassword: Yup.string()
    .min(6, "Password too short")
    .max(50, "Password too Long!")
    .required("Required"),
  ConfirmNewPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), undefined], "Passwords don't match!")
    .required("Required"),
});

interface props {
  show: boolean;
}

const Security: React.FC<props> = (props) => {
  const initialValues = {
    currentPassword: "",
    newPassword: "",
    ConfirmNewPassword: "",
  };

  const onSubmitHandler = (value: any) => {
    console.log(value);
  };

  const security = (
    <StyledSecurity show={props.show}>
      <h3>Security</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={SecuritySchema}
        onSubmit={onSubmitHandler}
      >
        {({ isSubmitting, dirty, isValid, errors, touched }) => (
          <Form>
            <span>Current Password</span>
            {errors.currentPassword && touched.currentPassword && (
              <label>{errors.currentPassword}</label>
            )}
            <Field
              name="currentPassword"
              type="password"
              //value={values.password}
              placeholder=""
            />
            <span>New password</span>
            {errors.newPassword && touched.newPassword && (
              <label>{errors.newPassword}</label>
            )}
            <Field
              name="newPassword"
              type="password"
              //value={values.password}
              placeholder=""
            />
            <span>Confirm new password</span>
            {errors.ConfirmNewPassword && touched.ConfirmNewPassword && (
              <label>{errors.ConfirmNewPassword}</label>
            )}
            <Field
              name="ConfirmNewPassword"
              type="password"
              //value={values.password}
              placeholder=""
            />
            <Button
              primary
              disabled={isSubmitting || !dirty || !isValid}
              type="submit"
            >
              Update password
            </Button>
          </Form>
        )}
      </Formik>
    </StyledSecurity>
  );
  return security;
};

export default Security;
