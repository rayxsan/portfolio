import React from "react";
import { StyledSecurity } from "./Security.styled";

interface props {
  show: boolean;
}

const Security: React.FC<props> = (props) => {
  const security = (
    <StyledSecurity show={props.show}>
      <h3>Security</h3>
    </StyledSecurity>
  );
  return security;
};

export default Security;
