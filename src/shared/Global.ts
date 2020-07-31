import { createGlobalStyle, ThemeProps } from "styled-components";
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
  }
  ul {
    list-style: none
  }
`;
