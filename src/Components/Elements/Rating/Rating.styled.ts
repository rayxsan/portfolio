import styled from "styled-components";

interface StyledRatingProps {
  isChecked: boolean;
}
export const StyledRating = styled.div<StyledRatingProps>`
  svg {
    color: ${(props: StyledRatingProps) =>
      props.isChecked ? "black" : "lightgrey"};
    cursor: pointer;
    :hover {
      color: ${(props: StyledRatingProps) =>
        props.isChecked ? "lightgrey" : "black"};
    }
  }
`;
