import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  color: palevioletred;
  font-weight: bold;
`;

const Link: FunctionComponent = () => <StyledLink>This is styled</StyledLink>;

export default Link;
