import styled from "styled-components";

const StyledFormF = styled.div`
  Section {
    column-count: 2;
  }

  .radios {
    display: flex;
    label {
      margin-left: 1rem;
    }
  }

  Input {
    margin: 0.5rem 0;
    border: 0;
    border-bottom: 0.05rem solid #aaa;
    background-color: #fff;
    width: 100%;
  }

  div[aria-labelledby="checkbox-group"] > label {
    display: flex;
    align-items: center;
    input {
      width: fit-content;
      margin-right: 0.5rem;
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
