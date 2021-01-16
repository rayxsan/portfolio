import styled, { css } from "styled-components";

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
        color: ${({ theme }) => theme.defaultColor};
      }
    `}

  ${(props: Props) =>
    props.styledType === "dotted" &&
    css`
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      border: 0;
      display: block;
      text-align: center;
      font-size: 1rem;
      margin: 0;
      padding-top: 0.3rem;

      :hover {
        ${(props: Props) =>
          props.primary &&
          css`
            background-color: ${({ theme }) => theme.primaryColor};
            color: white;
          `}
        ${(props: Props) =>
          props.secondary &&
          css`
            background-color: ${({ theme }) => theme.secondaryColor};
            color: white;
          `};
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
  box-shadow: 1px 1px 3px 0 #ccc;

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
      background-color: #fff;

      :hover {
        background-color: ${({ theme }) => theme.defaultColor};
        ${(props: Props) =>
          props.primary &&
          css`
            background-color: ${({ theme }) => theme.primaryColor};
            color: white;
          `}

        ${(props: Props) =>
          props.secondary &&
          css`
            background-color: ${({ theme }) => theme.secondaryColor};
            color: white;
          `}
      }
    }
  }

  ${(props: Props) =>
    props.styledType === "dotted" &&
    css`
      max-height: 8rem;
      top: -2rem;
      overflow-y: scroll;
    `}

  ::-webkit-scrollbar {
    width: 2px;
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.defaultColor};
  }
`;
