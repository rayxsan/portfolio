import styled from "styled-components";

interface StyledProps {
  open: boolean;
  textWidth: number;
}

export const StyledDropdown = styled.div<StyledProps>`
  position: relative;
  cursor: pointer;
  text-align: center;
  display: inline-block;
  margin: 0;
  border: 1px solid;
  border-color: ${(props: StyledProps) => (props.open ? "black" : "#ccc")};
  border-bottom: ${(props: StyledProps) =>
    props.open ? "none" : "1px solid #ccc"};
  border-radius: ${(props: StyledProps) =>
    props.open ? "0.25em 0.25em 0 0" : "0.25em"};
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
  }
  ul {
    display: ${(props: StyledProps) => (props.open ? "block" : "none")};
    position: absolute;
    border: 1px solid black;
    border-top: none;
    border-radius: 0 0 0.25rem 0.25rem;
    margin: 0;
    //Negative margins to eliminate white space. Cant find a better solution.
    margin-top: -3px;
    margin-left: -1px;
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
        :last-child {
          border-radius: 0 0 0.25rem 0.25rem;
        }
      }
    }
  }
`;
