import styled from "styled-components";

interface StyledProps {
  open: boolean;
  textWidth: number;
}

export const StyledDropdown = styled.div<StyledProps>`
  position: relative;
  text-align: left;
  //display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  //height: 2em;
  min-width: ${(props: StyledProps) => props.textWidth + "em"};
  width: ${(props: StyledProps) => props.textWidth + 2 + "em"};
  padding: 1;
  div {
    display: inline-block;
    opacity: 0.7;
  }

  svg {
    float: right;
    text-align: center;
    font-size: 100%;
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
