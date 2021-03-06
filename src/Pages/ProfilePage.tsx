import React from "react";
import Profile from "../Components/Pages/Profile/Profile";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import nina from "../Images/Nina.jpeg";

export interface ProfilePageProps {}

const fakeUser = {
  img: nina,
  name: "Raymel",
  lastName: "Manreza",
  meta: "React developer",
  email: "raymel.manreza@gmail.com",
  social: {
    twitter: "@rmanreza",
    facebook: "raymel.manreza",
    instagram: "rmanreza",
  },
  skills: "React, HTML, CSS",
};

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <ContentBox title="Profile">
      <Profile user={fakeUser} />
    </ContentBox>
  );
};

export default ProfilePage;
