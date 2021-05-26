import styled from "styled-components";

export const StyledFetchApi = styled.div`
  > div {
    text-align: left;
    svg {
      position: absolute;
      float: left;
      padding-top: 0.5rem;
      padding-left: 0.2rem;
      color: ${({ theme }) => theme.primaryColor};
    }
    input {
      max-width: 15rem;
      height: 2rem;
      padding-left: 1.2rem;
      font-size: 1.2rem;
      box-sizing: border-box;
    }
    input:focus {
      outline: none;
      border: 1px solid ${({ theme }) => theme.primaryColor};
      box-sizing: border-box;
    }
    button {
      margin: 0.5rem 1rem 0 0;
    }
    label {
      float: right;
      font-size: 0.8rem;
      margin-right: 0.2rem;
      margin-top: 1.5rem;
    }
  }
  p {
    margin-bottom: 3rem;
  }
`;
