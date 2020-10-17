import styled, { css } from "styled-components";

//TODO Correct position on dotted menu

interface Props {
  show: boolean;
  styledType?: "simple" | "selected" | "dotted";
  selectedText?: string;
}

export const StyledMenuWrapper = styled.div`
  position: relative;

  button {
    position: relative;
  }

  ul {
    position: absolute;
  }
`;

export const StyledMainButton = styled.button.attrs<Props>((props) => ({
  show: props.show || false,
  styledType: props.styledType || "simple",
  selectedText: props.selectedText || "",
}))`
  visibility: ${(props: Props) => (props.show ? "visible" : "hidden")};
  display: block;
  position: relative;
  text-align: left;
  height: 2rem;
  border: 1px solid #ccc;
  background: inherit;

  :hover {
    background-color: #ccc;
  }

  ${(props: Props) =>
    props.styledType === "selected" &&
    css`
      border: 0;
      background: inherit;
      :after {
        content: " ${(props: Props) => props.selectedText}";
        display: block;
        position: relative;
        bottom: 0;
        left: 0;
        right: 0;
        color: #aaa;
      }
    `}

  ${(props: Props) =>
    props.styledType === "dotted" &&
    css`
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 0;
      :after {
        content: "...";
        font-weight: 600;
        transform: rotate(90deg);
        display: block;
        text-align: center;
        margin-left: 0.5em;
      }
    `}
`;

export const StyledMenuList = styled.ul.attrs<Props>((props) => ({
  show: props.show || false,
}))`
  display: ${(props: Props) => (props.show ? "block" : "none")};
  position: absolute;
  padding: 0;
  margin: 0;

  li button {
    position: relative;
    bottom: 2rem;
    border: 0;
    width: 100%;
    height: 2rem;
    background: #eee;
    text-align: left;
    cursor: pointer;

    :hover {
      background-color: #ccc;
    }
  }
  ${(props: Props) =>
    props.styledType === "dotted" &&
    css`
      max-height: 6rem;
      overflow: hidden;
      overflow-y: scroll;
      li button {
        bottom: 0;
      }
    `}
`;
