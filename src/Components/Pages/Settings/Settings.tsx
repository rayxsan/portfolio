import React, { useState } from "react";
import {
  StyledSettings,
  StyledProfile,
  StyledSecurity,
  StyledAppearance,
} from "./Settings.styled";

export interface SettingsProps {
  img?: File;
}

const Settings: React.FC<SettingsProps> = (props) => {
  const [file, setFile] = useState("");
  const [profileShow, setProfileShow] = useState(true);

  const imgHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(URL.createObjectURL(event.target.files[0]));
  };

  const userImg = (
    <div>
      <input type="file" onChange={(e) => imgHandleChange(e)} />
      {file === "" ? <div /> : <img src={file} alt="userImg" />}
    </div>
  );

  const nav = (
    <ul>
      <li onClick={() => setProfileShow(true)}>Profile</li>
      <li>Password</li>
      <li>Appearance</li>
    </ul>
  );

  const profile = <StyledProfile show={profileShow}>Profile</StyledProfile>;
  const security = <StyledSecurity>Security</StyledSecurity>;
  const appearance = <StyledAppearance>Appearance</StyledAppearance>;

  return (
    <StyledSettings>
      {nav}
      {profile}
      {security}
      {appearance}
    </StyledSettings>
  );
};

export default Settings;
