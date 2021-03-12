import React, { useState } from "react";
import { Key } from "readline";
import Profile from "./Profile/Profile";
import Security from "./Security/Security";
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

const Settings: React.FC<props> = (props) => {
  const [show, setShow] = useState({
    profile: false,
    security: false,
    theme: false,
  });

  const handleShow = (value: string) => {
    const temp = Object.keys(show).reduce((result, k) => {
      return { ...result, [k]: k === value };
    }, {});

    console.log(temp);

    setShow({ ...show, [value]: true });
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
      <Profile user={fakeUser} />
      <Security show={show.security} />
    </StyledSettings>
  );
};

export default Settings;
