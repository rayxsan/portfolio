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
    background-color: #f6f6f6;
   
 ::-webkit-scrollbar {
    width: 6px;
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
