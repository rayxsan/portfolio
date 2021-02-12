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
  padding: 0.5em;
  margin: 0;
  margin-top: 1rem;
  margin-right: 1rem;
  min-width: 18rem;
  max-width: 18rem;
  max-height: 24rem;
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
      max-height: 48rem;
      padding: 0.1rem;
      flex-wrap: wrap;
      border-radius: none;
      box-shadow: none;
      :hover {
        transform: none;
      }
    `}
`;

export const StyledHeader = styled.div`
  font-size: 90%;
  font-weight: bold;
  margin: 0;
  text-align: left;
  flex-grow: 1;
`;

export const StyledContent = styled.div`
  flex-grow: 1;
`;
export const StyledDescription = styled.div`
  flex-grow: 1;
`;
export const StyledFooter = styled.div`
  padding: 0;
  flex-basis: 0;
  flex-grow: 0;
  text-align: left;
`;
