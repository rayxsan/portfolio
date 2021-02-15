import React from "react";
import {
  StyledCard,
  StyledContent,
  StyledMiniImg,
  StyledHeader,
  StyledInnerContent,
  StyledDescription,
  StyledFooter,
} from "./Card.styled";

interface props {
  group?: boolean;
  animate?: boolean;
  content?: {
    miniImg?: string;
    header?: string | undefined;
    meta?: string | undefined;
    innerContent?: React.ReactNode | JSX.Element;
    description?: string | undefined;
  };
  footer?: React.ReactNode | JSX.Element;
}

const Card: React.FC<props> = (props) => {
  const { group, children, animate, content, footer } = props;

  let Content;
  let Footer;

  if (!group) {
    if (content)
      Content = (
        <StyledContent>
          {content.miniImg && <StyledMiniImg src={content.miniImg} alt="" />}
          <StyledHeader header={content.header}>
            {content.header}
            <span>{content.meta}</span>
          </StyledHeader>
          <StyledInnerContent innerContent={content.innerContent}>
            {content.innerContent}
          </StyledInnerContent>
          <StyledDescription description={content.description}>
            {content.description}
          </StyledDescription>
        </StyledContent>
      );
    Footer = (
      <StyledFooter footer={footer !== undefined}>{footer}</StyledFooter>
    );
  }

  return (
    <StyledCard group={group} animate={animate}>
      {group && children}
      {Content}
      {Footer}
    </StyledCard>
  );
};

export default Card;
