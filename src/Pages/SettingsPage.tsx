import React from "react";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Settings from "../Components/Pages/Settings/Settings";
import nina from "../Images/Nina.jpeg";

export interface SettingsPageProps {}

const fakeUser = {
  uid: "4636ebfa-8039-11eb-9439-0242ac130002",
  img: nina,
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

const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <ContentBox title="Settings">
      <Settings user={fakeUser} />
    </ContentBox>
  );
};

export default SettingsPage;
