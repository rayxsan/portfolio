import styled from "styled-components";

interface StyledProps {
  open: boolean;
}

export const StyledDropdown = styled.div<StyledProps>`
  position: relative;
  text-align: left;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  width: max-content;

  div {
    display: inline-block;
    opacity: 0.7;
  }

  svg {
    margin-left: 1em;
    text-align: center;
    font-size: 70%;
  }
  ul {
    display: ${(props: StyledProps) => (props.open ? "block" : "none")};
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    top: 20%;
    padding: 0;
    width: inherit;
    z-index: 10;
    background-color: #fff;
    li {
      text-align: left;
      cursor: default;
      :hover {
        background-color: lightblue;
      }
    }
  }
`;
