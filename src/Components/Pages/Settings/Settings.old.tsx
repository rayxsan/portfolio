import React, { useState } from "react";
import {
  StyledSettings,
  StyledSecurity,
  StyledTheme,
  StyledNav,
} from "./Settings.styled";
import PasswordReset from "../../Auth/PasswordReset/PasswordReset";

export interface props {
  user: user;
}

interface user {
  uid: string;
  img?: string | any;
  name: string;
  meta?: string;
  email: string;
  location?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  skills?: string;
  bio?: string;
}

const SettingsOld: React.FC<props> = (props) => {
  const [user, setUser] = useState<user>(props.user);

  const [profileShow, setProfileShow] = useState(true);
  const [securityShow, setSecurityShow] = useState(false);
  const [themeShow, setThemeShow] = useState(false);

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

  const nav = (
    <StyledNav>
      <ul>
        <li onClick={profileShowHandler}>Profile</li>
        <li onClick={securityShowHandler}>Security</li>
        <li onClick={themeShowHandler}>Themes</li>
      </ul>
    </StyledNav>
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

      {security}
      {themes}
    </StyledSettings>
  );
};

export default SettingsOld;
