import React, { FunctionComponent } from "react";
import styled from "styled-components";

const StyledLink = styled.div`
  color: palevioletred;
  font-weight: bold;
`;

interface Props {
  title: string;
}

const Link: FunctionComponent<Props> = title => <StyledLink>{title}</StyledLink>;

export default Link;
