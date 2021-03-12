import React from "react";
import { StyledSecurity } from "./Security.styled";
import { Formik, Form, Field } from "formik";

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
        //validationSchema={SettingsSchema}
        onSubmit={onSubmitHandler}
      >
        <Form>
          <span>Current Password</span>
          <Field
            id="password"
            name="currentPassword"
            type="password"
            //value={values.password}
            placeholder=""
          />
          <span>New password</span>
          <Field
            id="password"
            name="newPassword"
            type="password"
            //value={values.password}
            placeholder=""
          />
          <span>Confirm new password</span>
          <Field
            id="password"
            name="ConfirmNewPassword"
            type="password"
            //value={values.password}
            placeholder=""
          />
        </Form>
      </Formik>
    </StyledSecurity>
  );
  return security;
};

export default Security;
