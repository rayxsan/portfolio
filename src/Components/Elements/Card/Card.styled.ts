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
  //max-height: 24rem;
  overflow: hidden;
  border: none;
  border-radius: 0.3rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  transition: box-shadow 0.1s ease, transform 0.1s ease;
  :hover {
    transform: ${(props: styledCardProps) =>
      props.animate && "translateY(-2px)"};
  }

  //TODO: align left cards when they are in a group.
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

interface StyledHeaderProps {
  header: boolean;
}

export const StyledHeader = styled.div<StyledHeaderProps>`
  ${(props: StyledHeaderProps) =>
    props.header &&
    css`
      font-size: 90%;
      font-weight: bold;
      margin: 0;
      padding: 0.5em;
      text-align: left;
      flex-grow: 1;
    `}
`;

interface StyledContentProps {
  content: boolean;
}

export const StyledContent = styled.div<StyledContentProps>`
  ${(props: StyledContentProps) =>
    props.content &&
    css`
      flex-grow: 1;
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
  description: boolean;
}
export const StyledDescription = styled.div<StyledDescriptionProps>`
  ${(props: StyledDescriptionProps) =>
    props.description &&
    css`
      flex-grow: 1;
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
