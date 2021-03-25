import * as React from "react";
import { StyledUseTheme } from "./useTheme.styled";
import Card from "../../../Elements/Card/Card";
import Button from "../../../Elements/Button/Button";
//import { lightTheme, darkTheme } from "../../../../shared/Theme";

export interface ThemeProps {
  show: boolean;
}

//Work in progress
const useTheme: React.FC<ThemeProps> = (props) => {
  const [theme, setTheme] = React.useState("light");
  //const [mountedComponent, setMountedComponent] = React.useState(false);
  const setMode = (mode: string) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };

  React.useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    // setMountedComponent(true);
  }, []);

  const theme1 = {
    header: "Light",
    innerContent: "This is a link",
  };
  const theme2 = {
    header: "Dark",
    innerContent: "This is a link",
  };

  const themes = (
    <StyledUseTheme show={props.show}>
      <h3>Themes</h3>
      <Card group>
        <Card
          animate
          content={theme1}
          footer={
            <Button primary clicked={themeToggler}>
              Toggle
            </Button>
          }
        />
        <Card
          animate
          content={theme2}
          footer={<Button primary>Apply theme</Button>}
        />
      </Card>
    </StyledUseTheme>
  );
  return themes;
};

export default useTheme;
