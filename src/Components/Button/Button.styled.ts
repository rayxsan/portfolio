import styled from "styled-components";

export const StyledButton = styled.button.attrs((props) => ({
  type: "default",
}))`
  background-color: #d5d5d5;
  border-radius: 8%;

  &:hover {
    background-color: rgba(52, 49, 76, 0.04);
  }
`;
