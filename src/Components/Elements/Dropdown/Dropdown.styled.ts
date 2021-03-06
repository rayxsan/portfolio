import styled, { css } from "styled-components";

interface StyledProps {
  open: boolean;
  search?: boolean;
  multiple?: boolean;
  fluid?: boolean;
  textWidth: number;
  selectedList: number;
  selectedOption: number;
  //placeHolder: boolean;
}

export const StyledPlaceHolder = styled.div`
  border: none !important;
  background-color: white !important;
  font-weight: 300 !important;
  opacity: 0.7;
`;

export const StyledDropdown = styled.div<StyledProps>`
  position: relative;
  cursor: pointer;
  text-align: left;
  display: inline-block;
  margin: 0.3rem;
  border: 1px solid;
  border-color: ${(props: StyledProps) => (props.open ? "black" : "#ccc")};
  border-bottom: ${(props: StyledProps) =>
    props.open ? "none" : "1px solid #ccc"};
  border-radius: ${(props: StyledProps) =>
    props.open ? "0.25em 0.25em 0 0" : "0.25em"};
  height: fit-content;
  width: auto;
  min-width: ${(props: StyledProps) => props.textWidth + 3.5 + "em"};
  user-select: none;
  :hover {
    border-color: black;
  }
  div {
    padding: 0.3em 0.25em 0.3em 0.5em;
    display: inline-block;
    user-select: none;
  }

  svg {
    float: right;
    text-align: center;
    font-size: 100%;
    padding: 0.3em 0.5em 0.3em 0.25em;
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
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
    width: 100%;
    z-index: 10;
    background-color: #fff;

    ${(props: StyledProps) =>
      props.selectedList > 4 &&
      css`
        max-height: 8rem;
        overflow-y: scroll;
        ::-webkit-scrollbar {
          width: 2px;
          background: #fff;
        }

        ::-webkit-scrollbar-thumb {
          background: ${({ theme }) => theme.defaultColor};
        }
      `};

    li {
      padding: 0.5em;
      text-align: left;
      cursor: pointer;
      :hover {
        background-color: #eee;
        :last-child {
          border-radius: 0 0 0.25rem 0.25rem;
        }
      }
      label {
        font-size: 70%;
        opacity: 0.6;
      }
      :nth-child(${(props: StyledProps) => props.selectedOption}) {
        background-color: lightgray;
      }
    }
  }

  ${(props: StyledProps) =>
    props.search &&
    css`
      input {
        border: none;
        padding: 0.5em 0.3em 0.5em 0.5em;
        margin-left: 0.2em;
        font-size: 100%;
        outline: 0;
      }

      svg {
        padding-top: 0.5em;
      }
    `}
  ${(props: StyledProps) =>
    props.multiple &&
    css`
      display: ${(props: StyledProps) =>
        props.fluid ? "inline-block" : "block"};
      max-width: 100%;
      padding: 0.25em 2.25em 0.25em 0.25em;
      div {
        display: inline-block;
        border: 1px solid darkgray;
        height: 0.8em;
        margin: 0.25em 0.25em 0.25em 0;
        padding-top: 0.2em;
        padding-bottom: 0.5em;
        border-radius: 0.25em;
        background-color: lightgray;
        text-align: center;
        font-weight: bold;
        opacity: 0.7;
        :hover {
          opacity: 1;
        }
        svg {
          position: relative;
          padding: 0;
          padding-left: 0.3em;
          opacity: 0.5;
          :hover {
            opacity: 1;
          }
        }
      }
      svg {
        position: absolute;
        right: 0;
        top: 0;
        padding-top: 1em;
      }
      ul {
        width: 100%;
        left: 0;
      }
    `}
`;
