import React from "react";
import Profile from "../Components/Pages/Profile/Profile";
import styled from "styled-components";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import nina from "../Images/Nina.jpeg";

export interface ProfilePageProps {}

const StyledProfilePage = styled.div``;

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

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <StyledProfilePage>
      <ContentBox title="Profile">
        <Profile user={fakeUser} />
      </ContentBox>
    </StyledProfilePage>
  );
};

export default ProfilePage;
