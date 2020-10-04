import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle`

html, body {
    margin: 0;
    padding: 0;
    height: 100%; 
    text-align: center;
    font-family: 'Roboto', sans-serif; 
    /* overflow: hidden; */
  }
  ul {
    list-style: none
  }
`;
