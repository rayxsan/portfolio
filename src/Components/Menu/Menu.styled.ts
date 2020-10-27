import styled, { css } from "styled-components";
import { StyledButton } from "../Button/Button.styled";

interface Props {
  show: boolean;
  styledType?: "simple" | "selected" | "dotted";
  selectedText?: string;
  primary?: boolean;
  secondary?: boolean;
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
  text-align: left;
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.defaultColor};
  border-radius: 0.25rem;
  background: inherit;

  :hover {
    opacity: 0.7;
  }

  ${(props: Props) =>
    props.primary &&
    css`
      border-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.primaryColor};
    `}

  ${(props: Props) =>
    props.secondary &&
    css`
      border-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.secondaryColor};
    `}

  ${(props: Props) =>
    props.styledType === "selected" &&
    css`
      border: 0;
      background: inherit;
      :after {
        content: " ${(props: Props) => props.selectedText}";
        display: block;
        position: relative;
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

      :hover {
        ${(props: Props) =>
          props.primary &&
          css`
            background-color: ${({ theme }) => theme.primaryColor};
            color: black;
          `}

        ${(props: Props) =>
          props.secondary &&
          css`
            background-color: ${({ theme }) => theme.secondaryColor};
            color: black;
          `}
      }
    `}
`;

export const StyledMenuList = styled.ul<Props>`
  display: ${(props: Props) => (props.show ? "flex" : "none")};
  flex-direction: column;
  padding: 0;
  margin: 0;
  top: 0;
  background: inherit;

  li {
    position: relative;
    border: 0;
    height: 2rem;
    cursor: pointer;

    button {
      width: 100%;
      height: 2rem;
      text-align: left;
      border: 0;
      z-index: 999;
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
     
    `}

  ::-webkit-scrollbar {
    width: 6px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.defaultColor};
  }
`;
