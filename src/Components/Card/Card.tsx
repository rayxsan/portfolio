import React, { FunctionComponent } from "react";
import { StyledCard } from "./Card.styled";

interface Props {
  title: string;
  text?: string;
}

const Card: FunctionComponent<Props> = ({ title, text, children }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      {text && <p>{text}</p>}
      <div>{children}</div>
    </StyledCard>
  );
};

export default Card;
