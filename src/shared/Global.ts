import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    text-align: center;
    font-family: 'Roboto', sans-serif; 
  }
  ul {
    list-style: none
  }
`;
