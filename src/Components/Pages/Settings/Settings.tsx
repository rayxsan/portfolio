import React, { useState } from "react";
import Profile from "./Profile/Profile";
import Security from "./Security/Security";
import ThemeChanger from "./ThemeChanger/ThemeChanger";
import { StyledSettings, StyledNav } from "./Settings.styled";

const fakeUser = {
  uid: "4636ebfa-8039-11eb-9439-0242ac130002",
  //img: nina,
  name: "Raymel Manreza",
  meta: "React developer",
  email: "raymel.manreza@gmail.com",
  location: "Miami",
  social: {
    twitter: "@rmanreza",
    facebook: "raymel.manreza",
    instagram: "rmanreza",
  },
  skills: "React, HTML, CSS",
  bio: "Just me",
};

interface props {}

interface Show {
  profile: boolean;
  security: boolean;
  theme: boolean;
}

const Settings: React.FC<props> = (props) => {
  const [show, setShow] = useState({
    profile: true,
    security: false,
    theme: false,
  });

  const handleShow = (value: string) => {
    const stateCopy = { ...show };

    const temp: any = Object.keys(stateCopy).reduce((result, k) => {
      return { ...result, [k]: k === value };
    }, {});

    setShow(temp);
  };

  const nav = (
    <StyledNav>
      <ul>
        <li onClick={handleShow.bind(null, "profile")}>Profile</li>
        <li onClick={handleShow.bind(null, "security")}>Security</li>
        <li onClick={handleShow.bind(null, "theme")}>Themes</li>
      </ul>
    </StyledNav>
  );

  return (
    <StyledSettings>
      {nav}
      <Profile user={fakeUser} show={show.profile} />
      <Security show={show.security} />
      <ThemeChanger show={show.theme} />
    </StyledSettings>
  );
};

export default Settings;
