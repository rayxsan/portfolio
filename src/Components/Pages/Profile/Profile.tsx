import React from "react";
import { StyledProfile } from "./Profile.styled";

interface fakeUser {
  image: File;
  name: string;
  lastName: string;
  email: string;
  social: string;
}

export interface ProfileProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <StyledProfile>
      <div>Image, Name, meta</div>
      <div>Social Network, email...</div>
      <div>About</div>
    </StyledProfile>
  );
};

export default Profile;
