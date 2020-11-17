import styled, { css } from "styled-components";

interface StyledProps {
  error?: boolean;
}

const StyledFormF = styled.section.attrs<StyledProps>(props => ({
  error: props.error,
}))`
  section {
    column-count: 2;

    input {
      margin: 1.5rem 0 0 0;
      border: 0;

      border-bottom: 0.05rem solid #aaa;
      width: 100%;
      font-size: 0.95rem;
    }

    ${(props: StyledProps) =>
      props.error &&
      css`
        section + input {
          border-bottom: 0.05rem solid red;
        }
      `}

    div[aria-labelledby="my-radio-group"] {
      display: flex;
      label {
        margin-right: 0.5rem;
        input {
          width: auto;
          margin-right: 0.5rem;
        }
      }
    }

    div[aria-labelledby="checkbox-group"] > label {
      display: flex;
      align-items: center;
      margin: 1.5rem 0.5rem 0 0;
      input {
        width: fit-content;
        margin: 0 0.5rem 0 0;
      }
    }
  }

  section > div {
    padding: 0 1rem 0.2rem;
  }

  button {
    display: block;
    margin: 2rem 0 0 1rem;
  }

  span {
    font-size: 0.75rem;
    display: flex;
    color: red;
  }

  error {
    color: red;
  }

  @media screen and (max-width: 67rem) {
    flex-direction: column;
    align-items: stretch;
    section {
      column-count: 1;
    }
  }
`;

export default StyledFormF;
