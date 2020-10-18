import styled from "styled-components";

const StyledFormF = styled.div`
  Section {
    column-count: 2;
  }
  Input {
    margin: 1.5rem 0 0 0;
    border: 0;
    border-bottom: 0.05rem solid #aaa;
    background-color: #fff;
    width: 100%;
    font-size: 0.95rem;
  }

  span {
    font-size: 0.75rem;
    display: flex;
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

  Button {
    display: block;
    margin: 1rem 0;
  }

  @media screen and (max-width: 50rem) {
    flex-direction: column;
    align-items: stretch;
    section {
      column-count: 1;
    }
  }
`;

export default StyledFormF;
