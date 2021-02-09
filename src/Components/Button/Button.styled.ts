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

// TODO DRY
export const StyledButton = styled.button.attrs<Props>((props) => ({
  type: props.type || "button",
  size: props.size || "medium",
}))`
  background-color: #ccc;
  border-radius: 0.28rem;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  outline: 0;

  /* button size: */

  height: ${(props: Props) => sizes[props.size!].height};
  width: ${(props: Props) => sizes[props.size!].width};
  font-size: ${(props: Props) => sizes[props.size!].fontSize};

  :hover:enabled {
    opacity: 0.7;
  }
  :disabled {
    cursor: not-allowed;
    border-color: #bbb;
  }

  ${(props: Props) =>
    props.primary &&
    css`
      background-color: ${({ theme }) => theme.primaryColor};
    `}

  ${(props: Props) =>
    props.secondary &&
    css`
      background-color: ${({ theme }) => theme.secondaryColor};
    `}

    ${(props: Props) =>
    props.text &&
    css`
      background: none;
      :hover:enabled {
        background-color: ${({ theme }) => theme.disabledColor};
      }

      /* TODO: set primary and secondary transparent colors for hovering */
      ${(props: Props) =>
        props.primary &&
        css`
          color: ${({ theme }) => theme.primaryColor};
          :hover:enabled {
            background-color: #ccc;
          }
        `}

      ${(props: Props) =>
        props.secondary &&
        css`
          color: ${({ theme }) => theme.secondaryColor};
          :hover:enabled {
            background-color: #ccc;
          }
        `}
    `}

    ${(props: Props) =>
    props.outline &&
    css`
      background: none;
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
          color: ${({ theme }) => theme.secondaryColor};
          border-color: ${({ theme }) => theme.secondaryColor};
        `}
    `}

/*TODO: Center text */
    ${(props: Props) =>
    props.circular &&
    css`
      width: ${(props: Props) => sizes[props.size!].height};
      border-radius: 50%;

      svg {
        padding-top: 0.3em;
        padding-left: 0.1em;
        padding-right: 0.4em;
      }
    `}
`;
