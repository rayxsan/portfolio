import * as React from "react";
import { StyledThemeChanger } from "./ThemeChanger.styled";

export interface ThemeProps {
  show: boolean;
}

const ThemeChanger: React.FC<ThemeProps> = (props) => {
  const themes = (
    <StyledThemeChanger show={props.show}>
      <h3>Themes</h3>
    </StyledThemeChanger>
  );
  return themes;
};

export default ThemeChanger;
