import styled, { css } from "styled-components";

interface styledProps {
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
}

export const StyledRadio = styled.div<styledProps>`
  display: inline-block;
  position: relative;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    margin: 0;
    padding: 0;
    z-index: 3;
    top: 0.1rem;
    left: 0.1rem;
  }
  span {
    position: absolute;
    width: 0.8em;
    height: 0.8rem;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid;
    z-index: 1;
  }

  label {
    padding: 1.25rem;
  }

  span:after {
    content: "";
    position: absolute;
    display: none;
    top: 0.125em;
    left: 0.125em;
    width: 0.55em;
    height: 0.55em;
    border-radius: 50%;
    background: ${({ theme }) => theme.fontColor};
  }

  input:checked + span:after {
    display: block;
  }

  ${(props: styledProps) =>
    props.primary &&
    css`
      color: ${({ theme }) => theme.fontColor};

      input:hover + span {
        color: ${({ theme }) => theme.primaryColor};
      }
      input:checked + span {
        color: ${({ theme }) => theme.primaryColor};
      }

      span:after {
        background: ${({ theme }) => theme.primaryColor};
      }

      label {
        color: ${({ theme }) => theme.fontColor};
      }
    `}

  ${(props: styledProps) =>
    props.secondary &&
    css`
      color: ${({ theme }) => theme.fontColor};

      input:hover + span {
        color: ${({ theme }) => theme.secondaryColor};
      }
      input:checked + span {
        color: ${({ theme }) => theme.secondaryColor};
      }

      span:after {
        background: ${({ theme }) => theme.secondaryColor};
      }

      label {
        color: ${({ theme }) => theme.fontColor};
      }
    `}

    ${(props: styledProps) =>
    props.disabled &&
    css`
      input,
      span {
        cursor: default;
      }
      color: ${({ theme }) => theme.defaultColor};
      span:after {
        background: ${({ theme }) => theme.defaultColor};
      }
    `} /* @media only screen and (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
      z-index: 3;
      bottom: 0;
    }
  } */
`;
