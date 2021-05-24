import styled, { css } from "styled-components";

interface StyledRatingProps {
  isChecked: boolean;
}
export const StyledRating = styled.div<StyledRatingProps>`
  text-align: left;
  svg {
    color: ${(props: StyledRatingProps) =>
      props.isChecked ? "black" : "lightgrey"};
    cursor: pointer;
  }

  ${(props: StyledRatingProps) =>
    !props.isChecked &&
    css`
      svg :hover {
        //color: black;
      }
    `}
`;
