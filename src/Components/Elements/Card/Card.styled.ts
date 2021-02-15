import styled, { css } from "styled-components";

interface styledCardProps {
  group?: boolean;
  animate?: boolean;
}

export const StyledCard = styled.div<styledCardProps>`
  display: flex;
  flex-direction: column;
  box-sizing: inherit;
  position: relative;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  min-width: 18rem;
  max-width: 18rem;
  overflow: hidden;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  :hover {
    transform: ${(props: styledCardProps) =>
      props.animate && "translateY(-2px)"};
  }

  ${(props: styledCardProps) =>
    props.group &&
    css`
      flex-direction: row;
      align-items: left;
      max-width: 100%;
      //max-height: 48rem;
      padding: 0.1rem;
      flex-wrap: wrap;
      border-radius: none;
      box-shadow: none;
      :hover {
        transform: none;
      }
    `}
`;

interface StyledContentProps {
  content?: {
    miniImg?: string;
    header?: string | undefined;
    meta?: string | undefined;
    innerContent?: React.ReactNode | JSX.Element;
    description?: string | undefined;
  };
}

export const StyledContent = styled.div<StyledContentProps>`
  flex-grow: 1;
  padding-bottom: 0.5em;
`;

interface StyledHeaderProps {
  header: string | undefined;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  ${(props: StyledHeaderProps) =>
    props.header &&
    css`
      display: flex;
      flex-direction: column;
      font-size: 90%;
      font-weight: bold;
      margin: 0;
      padding: 0.5em;
      text-align: left;

      span {
        font-size: 80%;
        font-weight: lighter;
        color: ${({ theme }) => theme.defaultColor};
      }
    `}
`;

interface StyledMiniImgProps {}

export const StyledMiniImg = styled.img<StyledMiniImgProps>`
  float: right;
  margin: 0.5em;
  width: 2.5rem;
  height: 2.5rem;
`;
interface StyledInnerContentProps {
  innerContent: React.ReactNode | JSX.Element;
}

export const StyledInnerContent = styled.div<StyledInnerContentProps>`
  ${(props: StyledInnerContentProps) =>
    props.innerContent &&
    css`
      align-items: left;
      text-align: center;
      font-size: 0.95em;
      img {
        padding: 0;
        width: 100%;
        overflow: hidden;
      }
    `}
`;
interface StyledDescriptionProps {
  description: string | undefined;
}
export const StyledDescription = styled.div<StyledDescriptionProps>`
  ${(props: StyledDescriptionProps) =>
    props.description &&
    css`
      padding: 0.5em;
      text-align: justify;
      font-weight: lighter;
      font-size: 0.8em;
      color: rgba(0, 0, 0, 0.7);
    `}
`;

interface StyledFooterProps {
  footer: boolean;
}
export const StyledFooter = styled.div<StyledFooterProps>`
  ${(props: StyledFooterProps) =>
    props.footer &&
    css`
      padding: 0.5em;
      flex-basis: 0;
      flex-grow: 0;
      text-align: left;
      background-color: ${({ theme }) => theme.disabledColor};
      :hover {
        background-color: ${({ theme }) => theme.defaultColor};
      }
    `}
`;
