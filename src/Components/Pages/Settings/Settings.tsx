import React, { useState } from "react";

export interface SettingsProps {
  img: File;
}

const Settings: React.FC<SettingsProps> = (props) => {
  const [file, setFile] = useState("");

  const imgHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) setFile(URL.createObjectURL(event.target.files[0]));
  };

  const userImg = (
    <div>
      <input type="file" onChange={(e) => imgHandleChange(e)} />
      {file === "" ? <div /> : <img src={file} alt="userImg" />}
    </div>
  );
  return userImg;
};

export default Settings;
