import React, { FunctionComponent } from "react";
import { StyledCard } from "./Card.styled";

interface Props {
  title: string;
  text: string;
}

const Card: FunctionComponent<Props> = ({ title, text }) => {
  return (
    <StyledCard>
      <h3>{title}</h3>
      <p>{text}</p>
    </StyledCard>
  );
};

export default Card;
