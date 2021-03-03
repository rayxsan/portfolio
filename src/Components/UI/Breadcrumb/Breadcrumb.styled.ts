import styled from "styled-components";
import { theme } from "../../../shared/Theme";

export const StyledBreadcrumb = styled.div`
  //float: left;
  font-size: 85%;
  margin: 0;
  list-style: none;
  li {
    float: left;
    span {
      color: ${theme.defaultColor};
    }
  }
`;
