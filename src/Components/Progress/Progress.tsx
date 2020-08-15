import React, { FunctionComponent } from "react";
import { StyledProgress } from "./Progress.styled";
import { theme } from "../../shared/Theme";

interface Props {
  primary?: boolean;
  secondary?: boolean;
}

const Progress: FunctionComponent<Props> = (props) => {
  let color = "#AAA";

  if (props.primary) {
    color = theme.primaryColor;
  }
  if (props.secondary) {
    color = theme.secondaryColor;
  }
  return (
    <StyledProgress viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="3"
        stroke={color}
      />
    </StyledProgress>
  );
};

export default Progress;
