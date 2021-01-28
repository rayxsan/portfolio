import styled, { css } from "styled-components";
import { theme } from "../../shared/Theme";

interface styledProps {
  primary?: boolean;
  secondary?: boolean;
}

export const StyledRadio = styled.div<styledProps>`
  display: inline-block;

  ${(props: styledProps) =>
    props.primary &&
    css`
      //border-color: ${({ theme }) => theme.primaryColor};
      color: ${({ theme }) => theme.primaryColor};
    `}

  ${(props: styledProps) =>
    props.secondary &&
    css`
      //border-color: ${({ theme }) => theme.secondaryColor};
      color: ${({ theme }) => theme.secondaryColor};
    `}

  input {
    position: absolute;
    opacity: 0;
    pointer-events: none;
  }
  span {
    position: absolute;
    width: 1em;
    height: 1rem;
    border-radius: 50%;
    cursor: pointer;
    background-color: #ccc;
  }

  span + label {
    margin: 1.25rem;
  }

  label {
    color: ${(props) => props.color || "grey"};
  }
  input:not(:disabled) + span:hover {
    background-color: ${(props) => props.color || "grey"};
  }

  input:checked + span {
    background-color: ${(props) => props.color || "grey"};
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
    top: 0.25rem;
    left: 0.25rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: white;
  }

  input:checked + span:after {
    display: block;
  }

  input:disabled:not(:checked) + span {
    &:before {
      cursor: default;
      box-shadow: none;
      border-color: #bbb;
      background-color: #ddd;
    }
  }
  > input:disabled:checked + span {
    &:after {
      cursor: default;
      color: #999;
    }
  }
  > input:disabled + span {
    cursor: default;
    color: #aaa;
  }
`;
