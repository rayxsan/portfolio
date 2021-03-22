import React from "react";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import Settings from "../Components/Pages/Settings/Settings";

export interface SettingsPageProps {}

const SettingsPage: React.FC<SettingsPageProps> = () => {
  return (
    <ContentBox title="Settings">
      <Settings />
    </ContentBox>
  );
};

export default SettingsPage;
