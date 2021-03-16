import * as React from "react";
import { StyledThemeChanger } from "./ThemeChanger.styled";
import Card from "../../../Elements/Card/Card";

export interface ThemeProps {
  show: boolean;
}

const ThemeChanger: React.FC<ThemeProps> = (props) => {
  const theme1 = {
    header: "Light",
  };
  const theme2 = {
    header: "Dark",
  };

  const themes = (
    <StyledThemeChanger show={props.show}>
      <h3>Themes</h3>
      <Card group>
        <Card animate content={theme1} footer={<button>Apply theme</button>} />
        <Card animate content={theme2} footer={<button>Apply theme</button>} />
      </Card>
    </StyledThemeChanger>
  );
  return themes;
};

export default ThemeChanger;
