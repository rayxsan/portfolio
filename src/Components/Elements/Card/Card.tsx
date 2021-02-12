import React from "react";
import {
  StyledCard,
  StyledHeader,
  StyledContent,
  StyledDescription,
  StyledFooter,
} from "./Card.styled";

interface props {
  group?: boolean;
  animate?: boolean;
  header?: string;
  content?: React.ReactNode;
  description?: string;
  footer?: React.ReactNode;
}

const Card: React.FC<props> = (props) => {
  const {
    group,
    children,
    animate,
    header,
    content,
    description,
    footer,
  } = props;

  let Header;
  let Content;
  let Description;
  let Footer;

  if (!group) {
    Header = <StyledHeader>{header}</StyledHeader>;
    Content = <StyledContent>{content}</StyledContent>;
    Description = <StyledDescription>{description}</StyledDescription>;
    Footer = <StyledFooter>{footer}</StyledFooter>;
  }

  return (
    <StyledCard group={group} animate={animate}>
      {group && children}
      {Header}
      {Content}
      {Description}
      {Footer}
    </StyledCard>
  );
};

export default Card;
