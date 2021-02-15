import styled from "styled-components";

interface StyledProps {
  error?: boolean;
}

const StyledFormF = styled.section.attrs<StyledProps>(props => ({
  error: props.error,
}))`
  section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;

    input {
      margin: 1.5rem 0 0 0;
      border: 0;
      border-bottom: 0.05rem solid ${(props: StyledProps) => (props.error ? "red" : "#aaa")};
      width: 100%;
      font-size: 0.95rem;
    }

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

  div {
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
    section {
      display: block;
    }
  }
`;

export default StyledFormF;
