import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./Theme";

type Props = {
  theme: ThemeType;
};

export const GlobalStyles = createGlobalStyle<Props>`

html, body {
    margin: 0;
    padding: 0;
    height: 100%; 
    text-align: center;
    font-family: 'Roboto', sans-serif; 
    background-color: ${({ theme }) => theme.bodyColor};
    color:  ${({ theme }) => theme.fontColor};
    transition: all 0.50s linear;
   
 ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.primaryColor};
    border-radius: 3px;
  }
 
  ul {
    list-style: none
  }
  }
`;
