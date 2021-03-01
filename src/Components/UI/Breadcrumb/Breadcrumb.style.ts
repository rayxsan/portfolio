import styled from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledBreadcrumb = styled.div`
  //float: left;
  font-size: 85%;
  margin: 0;
  padding-left: 0.2em;
  padding-right: 0.2em;

  list-style: none;
  li {
    float: left;
    padding: 0.2em;
    a {
      text-decoration: none;
      color: ${theme.primaryColor};
      :hover {
        text-decoration: underline;
      }
    }

    span {
      opacity: 0.7;
    }
  }
`;
