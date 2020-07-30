import { createGlobalStyle, ThemeProps } from "styled-components";
import { ThemeType } from "./Theme";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<Props>`
html, body {
    margin: 0;
    padding: 0;
    height: 100%
  }
`;
