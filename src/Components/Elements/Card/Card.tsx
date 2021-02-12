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
  content?: React.ReactNode | JSX.Element;
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
    Header = (
      <StyledHeader header={header !== undefined}>{header}</StyledHeader>
    );
    Content = (
      <StyledContent content={content !== undefined}>{content}</StyledContent>
    );
    Description = (
      <StyledDescription description={description !== undefined}>
        {description}
      </StyledDescription>
    );
    Footer = (
      <StyledFooter footer={footer !== undefined}>{footer}</StyledFooter>
    );
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
