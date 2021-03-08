import React, { useState } from "react";
import {
  StyledSettings,
  StyledProfile,
  StyledSecurity,
  StyledTheme,
  StyledNav,
} from "./Settings.styled";
import PasswordReset from "../../Auth/PasswordReset/PasswordReset";
import { Formik, Form, Field } from "formik";
import Button from "../../Elements/Button/Button";
import Dropdown from "../../Elements/Dropdown/Dropdown";

export interface SettingsProps {
  img?: File;
}

const Settings: React.FC<SettingsProps> = (props) => {
  const [file, setFile] = useState("");
  const [profileShow, setProfileShow] = useState(true);
  const [securityShow, setSecurityShow] = useState(false);
  const [themeShow, setThemeShow] = useState(false);

  const imgHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(URL.createObjectURL(event.target.files[0]));
  };

  const profileShowHandler = () => {
    setProfileShow(true);
    setSecurityShow(false);
    setThemeShow(false);
  };

  const securityShowHandler = () => {
    setSecurityShow(true);
    setProfileShow(false);
    setThemeShow(false);
  };

  const themeShowHandler = () => {
    setThemeShow(true);
    setSecurityShow(false);
    setProfileShow(false);
  };
  const userImg = (
    <div>
      <input type="file" onChange={(e) => imgHandleChange(e)} />
      {file === "" ? <div /> : <img src={file} alt="userImg" />}
    </div>
  );

  const nav = (
    <StyledNav>
      <ul>
        <li onClick={profileShowHandler}>Profile</li>
        <li onClick={securityShowHandler}>Security</li>
        <li onClick={themeShowHandler}>Themes</li>
      </ul>
    </StyledNav>
  );

  // const socialNetworkOptions = [
  //   { key: 1, value: "twitter", text: "Twitter" },
  //   { key: 2, value: "facebook", text: "Facebook" },
  //   { key: 3, value: "instagram", text: "Instagram" },
  // ];

  // const [valueArray, setValueArray] = useState<(string | number)[]>([]);

  // const onChangeDropdown = (value: string | number) => {
  //   if (value !== "") setValueArray((oldArray) => [...oldArray, value]);
  // };

  // const socialNetworksInputs = valueArray.map(
  //   (value) => console.log(value)
  //   // <Field
  //   //   key={value}
  //   //   id={value.toString()}
  //   //   type={value.toString()}
  //   //   placeholder={value.toString()}
  //   // />
  // );

  const profile = (
    <StyledProfile show={profileShow}>
      <h3>Profile</h3>
      <Formik
        initialValues={{
          uid: "",
          img: "",
          name: "",
          twitter: "",
          email: "",
          location: "",
          social: {
            twitter: "",
            facebook: "",
            instagram: "",
          },
          skills: "",
          description: "",
        }}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <span>Name</span>
          <Field id="name" name="name" type="name" placeholder="Your name" />
          <span>Occupation</span>
          <Field
            id="twitter"
            name="twitter"
            type="twitter"
            placeholder="Title"
          />
          <span>Email</span>
          <Field
            id="email"
            name="email"
            type="email"
            placeholder="Email address"
          />
          <span>Location</span>
          <Field
            id="location"
            name="location"
            type="location"
            placeholder="Where are you?"
          />
          <span>Social Network</span>
          {/* <Dropdown
            multiple
            fluid
            options={socialNetworkOptions}
            placeholder="Select all that apply"
            onChange={(value) => onChangeDropdown(value)}
          />
          {valueArray[0] && socialNetworksInputs} */}
          <Field
            id="twitter"
            name="twitter"
            type="twitter"
            placeholder="Twitter"
          />
          <Field
            id="facebook"
            name="facebook"
            type="facebook"
            placeholder="Facebook"
          />
          <Field
            id="instagram"
            name="instagram"
            type="instagram"
            placeholder="Instagram"
          />
          <span>Skills</span>
          <textarea id="skills" name="skills" />
          <span>Bio</span>
          <textarea id="bio" name="bio" />
          <Button primary type="submit">
            Update profile
          </Button>
        </Form>
      </Formik>
    </StyledProfile>
  );

  const security = (
    <StyledSecurity show={securityShow}>
      <h3>Security</h3>
      <PasswordReset />
    </StyledSecurity>
  );
  const themes = (
    <StyledTheme show={themeShow}>
      <h3>Themes</h3>
    </StyledTheme>
  );

  return (
    <StyledSettings>
      {nav}
      {profile}
      {security}
      {themes}
    </StyledSettings>
  );
};

export default Settings;
