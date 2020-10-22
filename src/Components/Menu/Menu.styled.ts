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

export const StyledMainButton = styled.button<Props>`
  visibility: ${(props: Props) => (props.show ? "visible" : "hidden")};
  display: block;
  position: relative;
  text-align: left;
  height: 2rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
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

export const StyledMenuList = styled.ul<Props>`
  display: ${(props: Props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  padding: 0;
  margin: 0;

  li {
    position: relative;
    bottom: 2rem;
    border: 0;
    height: 2rem;
    background: transparent;

    cursor: pointer;

    button {
      width: 100%;
      height: 2rem;
      bottom: 0.5rem;
      text-align: left;
      border: 0;
      :hover {
        background-color: #ccc;
      }
    }
  }

  ${(props: Props) =>
    props.styledType === "dotted" &&
    css`
      max-height: 6rem; */
      overflow-y: scroll;
      overflow: hidden;
      overflow-y: scroll;
      li button {
        bottom: 0.5rem;
      }
    `}

  ::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.defaultColor};
    border-radius: 3px;
  }
`;
