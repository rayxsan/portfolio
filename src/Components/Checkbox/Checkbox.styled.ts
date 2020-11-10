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

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }

  svg {
    display: inline-flex;
    align-self: center;
    color: ${({ theme }) => theme.defaultColor};
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

    :hover {
      color: ${({ theme }) => theme.defaultColor};
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
  }

  svg,
  label {
    display: inline-block;
    box-sizing: border-box;
    vertical-align: middle;
    cursor: pointer;
  }

  input:checked + svg + label {
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
  }
  input:disabled + svg + label {
    color: ${({ theme }) => theme.defaultColor};
    cursor: default;
  }

  ${(props: Props) =>
    props.toggle &&
    css`
      svg {
        font-size: 1.4rem;
      }
    `}
`;

export const StyledSlider = styled.div`
  position: relative;
  width: 2.5em;
  display: inline-block;
  margin: 0.5em;
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
    border: 0px solid #ffffff;
    border-radius: 0.25em;
    background-color: #9e9e9e;
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
    background-color: ${(props) => props.color || "grey"};
  }
  input:checked + label,
  input:checked + label:before {
    border-color: ${(props) => props.color || "grey"};
  }
  input:checked + label {
    margin-left: 0;
  }
  input:checked + label:before {
    right: 0px;
    background-color: ${(props) => props.color || "grey"};
    transform: translateX(0.1em);
  }

  > input:disabled:not(:checked) {
    &:before {
      cursor: default;
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
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
