import React from "react";
import {
  StyledProfile,
  StyledUserImg,
  StyledAbout,
  StyledSkills,
} from "./Profile.styled";
import * as svg from "../../../shared/AppIcons";
import blankUser from "../../../Images/blank-profile-picture.png";

export interface ProfileProps {
  user: {
    uid: string;
    img?: string;
    name: string;
    lastName: string;
    meta?: string;
    email: string;
    location?: string;
    social?: {
      facebook?: string;
      instagram?: string;
      twitter?: string;
    };
    skills?: string;
    description?: string;
  };
}

const Profile: React.FC<ProfileProps> = (props) => {
  const user = props.user;

  const userImg = user.img ? (
    <img src={user.img} alt="userImg" />
  ) : (
    <img src={blankUser} alt="userImg" />
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
        {user.location && (
          <li>
            <svg.BiLocationPlus />
            {user.location}
          </li>
        )}
        <li>
          <svg.AiOutlineMail />
          <a
            href={`mailto:${user.email}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {user.email}
          </a>
        </li>
        {user.social?.twitter && (
          <li>
            <svg.FiTwitter />
            <a
              href={`https://twitter.com/${user.social?.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.social?.twitter}
            </a>
          </li>
        )}
        {user.social?.facebook && (
          <li>
            <svg.FiFacebook />
            <a
              href={`https://www.facebook.com/${user.social?.facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.social?.facebook}
            </a>
          </li>
        )}
        {user.social?.instagram && (
          <li>
            <svg.AiOutlineInstagram />
            <a
              href={`https://www.instagram.com/${user.social?.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {user.social?.instagram}
            </a>
          </li>
        )}
      </StyledAbout>
      <StyledSkills>
        {user.skills && (
          <div>
            <h3>Skills</h3>
            <span>{user.skills}</span>
          </div>
        )}
        {user.description && (
          <div>
            <h3>About</h3>
            <span>{user.description}</span>
          </div>
        )}
      </StyledSkills>
    </StyledProfile>
  );
};

export default Profile;
