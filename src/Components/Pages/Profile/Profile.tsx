import React, { useState } from "react";
import {
  StyledProfile,
  StyledUserImg,
  StyledAbout,
  StyledSkills,
} from "./Profile.styled";
import * as svg from "../../../shared/AppIcons";

export interface ProfileProps {
  user: {
    img?: string;
    name: string;
    lastName: string;
    meta?: string;
    email: string;
    social?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
    skills?: string;
  };
}

const Profile: React.FC<ProfileProps> = (props) => {
  const user = props.user;

  const userImg = user.img ? (
    <img src={user.img} alt="userImg" />
  ) : (
    <svg.CgProfile />
  );
  return (
    <StyledProfile>
      <StyledUserImg>
        {userImg}
        <div>
          <span>{user.name + " " + user.lastName}</span>
          <label>{user.meta}</label>
        </div>
      </StyledUserImg>
      <StyledAbout>
        <li>
          <svg.AiOutlineMail />
          <a href={`mailto:${user.email}`}>{user.email}</a>
        </li>
        {user.social?.twitter && (
          <li>
            <svg.FiTwitter />
            <a href={`https://twitter.com/${user.social?.twitter}`}>
              {user.social?.twitter}
            </a>
          </li>
        )}
        {user.social?.facebook && (
          <li>
            <svg.FiFacebook />
            <a href={`https://www.facebook.com/${user.social?.facebook}`}>
              {user.social?.facebook}
            </a>
          </li>
        )}
        {user.social?.instagram && (
          <li>
            <svg.AiOutlineInstagram />
            <a href={`https://www.instagram.com/${user.social?.instagram}`}>
              {user.social?.instagram}
            </a>
          </li>
        )}
      </StyledAbout>
      <StyledSkills>
        <div>
          <p>Skills</p>
          <span>{user.skills}</span>
        </div>
      </StyledSkills>
    </StyledProfile>
  );
};

export default Profile;
