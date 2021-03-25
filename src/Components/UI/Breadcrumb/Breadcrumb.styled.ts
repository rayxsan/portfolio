import styled from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledBreadcrumb = styled.ul`
  display: block;
  font-size: 85%;
  margin: 1rem;
  //width: 100%;
  list-style: none;
  text-align: left;
  padding: 0;
  overflow: hidden;
  li {
    display: inline;
    span {
      color: ${theme.defaultColor};
    }
  }
`;
