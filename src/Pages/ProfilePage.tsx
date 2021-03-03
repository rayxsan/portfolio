import React from "react";
import Profile from "../Components/Pages/Profile/Profile";
import ContentBox from "../Components/UI/ContentBox/ContentBox";

export interface ProfilePageProps {}

const ProfilePage: React.FC<ProfilePageProps> = () => {
  return (
    <ContentBox title="Profile">
      <Profile />
    </ContentBox>
  );
};

export default ProfilePage;
