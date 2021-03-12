import React, { useState } from "react";
import { StyledProfile } from "./Profile.styled";
import { Formik, Form, Field } from "formik";
import Button from "../../../Elements/Button/Button";
import defaultImg from "../../../../Images/blank-profile-picture.png";
import * as Yup from "yup";

const FILE_SIZE = (1920 * 1080) | 0;

const SUPPORTED_FORMATS = [
  "image/jpg",
  "image/jpeg",
  "image/gif",
  "image/png",
  "",
];

const SettingsSchema = Yup.object().shape({
  img: Yup.mixed().notRequired().default(""),
  name: Yup.string().min(2, "Too Short!").required("A text is required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

export interface props {
  user: user;
}

interface user {
  uid: string;
  img?: string | any;
  name: string;
  meta?: string;
  email: string;
  location?: string;
  social?: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  skills?: string;
  bio?: string;
}

const Profile: React.FC<props> = (props) => {
  const [user, setUser] = useState<user>(props.user);
  const [showProfileEditImg, setShowProfileEditImg] = useState(false);

  const onSubmitHandler = (value: user) => {
    alert("Profile updated for user " + value.name);
    console.log(value);
  };

  const onChangePreview = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    let reader = new FileReader();

    reader.onloadend = () => {
      setUser({ ...user, img: reader.result });
    };
    if (e.target.files) {
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const profile = (
    <StyledProfile show={true} showProfileEditImg={showProfileEditImg}>
      <h3>Profile</h3>
      <Formik
        initialValues={user}
        validationSchema={SettingsSchema}
        onSubmit={onSubmitHandler}
      >
        {({ isValid, errors, touched, setFieldValue }) => (
          <Form>
            <div>
              <Button
                secondary
                size="tiny"
                clicked={() => setShowProfileEditImg(!showProfileEditImg)}
              >
                Edit
              </Button>
              <ul>
                <li>
                  <label>
                    <input
                      type="file"
                      id="upload-button"
                      onChange={(event) => {
                        if (event.currentTarget.files) {
                          setFieldValue("img", event.currentTarget.files[0]);
                          onChangePreview(event);
                          setShowProfileEditImg(false);
                        }
                      }}
                    />
                    Upload a photo...
                  </label>
                </li>
                <li>
                  <label
                    onClick={(e) => {
                      setFieldValue("img", "");
                      setUser({ ...user, img: "" });
                      setShowProfileEditImg(false);
                    }}
                  >
                    Remove photo
                  </label>
                </li>
              </ul>

              {user.img ? (
                <img src={user.img} alt="userImg" />
              ) : (
                <img src={defaultImg} alt="defaultImg" />
              )}
              <span>{errors.img ? errors.img : ""}</span>
            </div>
            <div>
              <span className={errors.name ? "errorClass" : "isValid"}>
                {errors.name ? "Name too short" : "Name"}
              </span>
              <Field
                id="name"
                name="name"
                type="name"
                placeholder="Your name"
              />
              <span>Occupation</span>
              <Field id="meta" name="meta" type="meta" placeholder="Title" />
              <span
                className={
                  errors.email && touched.email ? "errorClass" : "isValid"
                }
              >
                {errors.email ? "Email not valid" : "Email"}
              </span>
              <Field
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
              />
              <span>Location</span>
              <Field
                id="location"
                name="location"
                type="location"
                placeholder="Where are you?"
              />
              <span>Social Network</span>
              <Field
                id="twitter"
                name="social.twitter"
                type="twitter"
                placeholder="Twitter"
              />
              <Field
                id="facebook"
                name="social.facebook"
                type="facebook"
                placeholder="Facebook"
              />
              <Field
                id="instagram"
                name="social.instagram"
                type="instagram"
                placeholder="Instagram"
              />
              <span>Skills</span>
              <Field as="textarea" name="skills" />
              <span>Bio</span>
              <Field as="textarea" name="bio" />
              <Button primary type="submit">
                Update profile
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </StyledProfile>
  );

  return profile;
};

export default Profile;
