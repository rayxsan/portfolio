import styled, { css } from "styled-components";
import { ButtonSizes, ButtonTypes } from "./Button.common";

const sizes = {
  tiny: {
    fontSize: ".8rem",
    height: "1.5rem",
    width: "5rem",
  },
  small: {
    fontSize: ".9rem",
    height: "1.7rem",
    width: "6rem",
  },
  medium: {
    fontSize: "1rem",
    height: "1.9rem",
    width: "7rem",
  },
  large: {
    fontSize: "1.1rem",
    height: "2.1rem",
    width: "8rem",
  },
  big: {
    fontSize: "1.2rem",
    height: "2.3rem",
    width: "9rem",
  },
};
export interface Props {
  size?: ButtonSizes;
  type?: ButtonTypes;
  text?: boolean;
  outline?: boolean;
  circular?: boolean;
  primary?: boolean;
  secondary?: boolean;
}

export const StyledButton = styled.button.attrs<Props>((props) => ({
  type: props.type || "button",
  size: props.size || "medium",
}))`
  background-color: #ccc;
  border-radius: 0.28rem;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  min-width: fit-content;
  outline: 0;
  opacity: 0.85;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  /* button size: */

  height: ${(props: Props) => sizes[props.size!].height};
  width: ${(props: Props) => sizes[props.size!].width};
  font-size: ${(props: Props) => sizes[props.size!].fontSize};

  :hover:enabled {
    opacity: 1;
  }
  :disabled {
    cursor: default;
    border-color: #bbb;
  }

  ${(props: Props) =>
    props.primary &&
    css`
      min-width: fit-content;
      color: white;
      background-color: ${({ theme }) => theme.primaryColor};
      :disabled {
        background-color: ${({ theme }) => theme.disabledColor};
      }
    `}

  ${(props: Props) =>
    props.secondary &&
    css`
      min-width: fit-content;
      color: white;
      background-color: ${({ theme }) => theme.secondaryColor};
    `}

    ${(props: Props) =>
    props.text &&
    css`
      background: none;
      width: fit-content;
      :hover:enabled {
        background-color: inherit;
      }
      :disabled {
        background: none;
        color: ${({ theme }) => theme.disabledColor};
      }

      /* TODO: set primary and secondary transparent colors for hovering */
      ${(props: Props) =>
        props.primary &&
        css`
          min-width: fit-content;
          color: ${({ theme }) => theme.primaryColor};
          :hover:enabled {
            background-color: inherit;
          }
        `}

      ${(props: Props) =>
        props.secondary &&
        css`
          min-width: fit-content;
          color: ${({ theme }) => theme.secondaryColor};
          :hover:enabled {
            background-color: inherit;
          }
        `}
    `}

    ${(props: Props) =>
    props.outline &&
    css`
      background: none;
      width: fit-content;
      border: 1px solid ${({ theme }) => theme.disabledColor};

      ${(props: Props) =>
        props.primary &&
        css`
          color: ${({ theme }) => theme.primaryColor};
          border-color: ${({ theme }) => theme.primaryColor};
        `}

      ${(props: Props) =>
        props.secondary &&
        css`
          min-width: fit-content;
          color: ${({ theme }) => theme.secondaryColor};
          border-color: ${({ theme }) => theme.secondaryColor};
        `}
    `}


    ${(props: Props) =>
    props.circular &&
    css`
      display: inline-block;
      width: ${(props: Props) => sizes[props.size!].height};
      border-radius: 50%;
      padding: 0;
      margin: 0;
      text-align: center;
    `}
`;
