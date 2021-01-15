import styled from "styled-components";

interface StyledProps {
  open: boolean;
  textWidth: number;
}

export const StyledDropdown = styled.div<StyledProps>`
  position: relative;
  text-align: left;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  height: 2em;
  width: ${(props: StyledProps) => props.textWidth + 3.5 + "em"};
  :hover {
    border-color: black;
  }

  div {
    padding: 0.5em 0.25em 0.5em 0.5em;
    display: inline-block;
    //opacity: 0.7;
  }

  svg {
    float: right;
    text-align: center;
    font-size: 100%;
    padding: 0.5em 0.5em 0.5em 0.25em;
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
  ul {
    display: ${(props: StyledProps) => (props.open ? "block" : "none")};
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 0.25rem;
    margin: 0;
    padding: 0;
    width: inherit;
    z-index: 10;
    background-color: #fff;
    li {
      padding: 0.5em;
      text-align: left;
      cursor: default;
      :hover {
        background-color: #eee;
      }
    }
  }
`;
