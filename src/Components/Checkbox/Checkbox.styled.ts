import styled, { css } from "styled-components";

export interface Props {
  primary?: boolean;
  secondary?: boolean;
  toggle?: boolean;
  slider?: boolean;
}

export const StyledCheckbox = styled.div<Props>`
  display: inline-block;
  box-sizing: border-box;
  vertical-align: middle;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  svg {
    display: inline-flex;
    align-self: center;
    font-size: 125%;
    color: ${({ theme }) => theme.defaultColor};
    opacity: 0.75;

    ${(props: Props) =>
      props.primary &&
      css`
        color: ${({ theme }) => theme.primaryColor};
      `}

    ${(props: Props) =>
      props.secondary &&
      css`
        color: ${({ theme }) => theme.secondaryColor};
      `}
  }

  label {
    margin: 0 0.2rem;
    opacity: 0.85;

    ${(props: Props) =>
      props.primary &&
      css`
        color: ${({ theme }) => theme.primaryColor};
      `}

    ${(props: Props) =>
      props.secondary &&
      css`
        color: ${({ theme }) => theme.secondaryColor};
      `}
  }

  svg,
  label {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer;
  }

  input:not(:disabled) + svg + label {
    :hover {
      opacity: 1;
    }
  }

  input:not(:disabled) + svg {
    :hover {
      opacity: 1;
    }
  }
  input:checked + svg {
    opacity: 1;
  }
  input:checked + svg + label {
    opacity: 1;
    ${(props: Props) =>
      props.primary &&
      css`
        color: ${({ theme }) => theme.primaryColor};
      `}

    ${(props: Props) =>
      props.secondary &&
      css`
        color: ${({ theme }) => theme.secondaryColor};
      `}
  }
  input:disabled + svg {
    cursor: default;
    color: ${({ theme }) => theme.disabledColor};
  }
  input:disabled + svg + label {
    color: ${({ theme }) => theme.disabledColor};
    cursor: default;
  }

  ${(props: Props) =>
    props.toggle &&
    css`
      svg {
        font-size: 150%;
        width: 2rem;
      }
    `}
`;

export const StyledSlider = styled.div<Props>`
  position: relative;
  width: 2.3em;
  display: inline-block;
  margin: 0.5em;
  user-select: none;

  > input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  > label {
    display: block;
    overflow: hidden;
    cursor: pointer;
    height: 0.5em;
    padding: 0;
    line-height: 0.5em;
    border: 0px solid ${({ theme }) => theme.disabledColor};
    border-radius: 0.25em;
    background-color: ${({ theme }) => theme.disabledColor};
    color: blue;
  }
  label:before {
    content: "";
    display: block;
    width: 1.3em;
    height: 1.3em;
    background: #ffffff;
    position: absolute;
    top: -0.4em;
    bottom: 0;
    right: 1.2em;
    border-radius: 50%;
    box-shadow: 0 0.1em 0.3em 0px #757575;
    transition: 0.4s;
  }
  input:checked + label {
    //background-color: red;
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
  }
  input:checked + label,
  input:checked + label:before {
    border-color: grey;
  }
  input:checked + label {
    margin-left: 0;
  }
  input:checked + label:before {
    background-color: #fff;
    right: 0px;
    transform: translateX(0.1em);

    /* ${(props: Props) =>
      props.primary &&
      css`
        background-color: ${({ theme }) => theme.primaryColor};
      `}

    ${(props: Props) =>
      props.secondary &&
      css`
        background-color: ${({ theme }) => theme.secondaryColor};
      `} */
  }

  > input:disabled:not(:checked) {
    &:before {
      cursor: default;
      box-shadow: none;
      border-color: #bbb;
      background-color: #ccc;
    }
  }
  > input:disabled:checked {
    &:after {
      cursor: default;
      color: #999;
    }
  }
  > input:disabled + label {
    cursor: default;
    color: #aaa;
  }
`;
