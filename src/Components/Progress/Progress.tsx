import React, { FunctionComponent } from "react";
import { StyledProgress, StyledLinearProgress } from "./Progress.styled";
import { theme } from "../../shared/Theme";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  completed?: number;
  circular?: boolean;
  linear?: boolean;
}

const Progress: FunctionComponent<Props> = (props) => {
  let color = "#aaa";

  if (props.primary) {
    color = theme.primaryColor;
  }
  if (props.secondary) {
    color = theme.secondaryColor;
  }

  let progressBar;

  if (props.circular) {
    progressBar = (
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
  }
  if (props.linear) {
    progressBar = (
      <StyledLinearProgress completed={props.completed} color={color}>
        <div>
          <span>{`${props.completed}%`}</span>
        </div>
      </StyledLinearProgress>
    );
  }

  return <>{progressBar}</>;
};

export default Progress;
