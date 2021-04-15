import styled from "styled-components";

export const StyledTodo = styled.div`
  display: block;

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin: 0.2rem;

    span,
    button {
      margin-left: 0.5rem;
    }
    input,
    textarea {
      max-width: 20rem;
      height: 1.2rem;
      padding: 0.2rem;
      margin: 0.5rem;
      border: 1px solid ${({ theme }) => theme.disabledColor};
      border-radius: 0.3rem;

      :focus {
        outline: none;
        ::placeholder {
          opacity: 0;
        }
      }
    }
  }
  div {
    button {
      cursor: pointer;
      margin: 0.5rem;
      float: left;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      word-break: break-word;
      text-align: left;
      th,
      td {
        border-collapse: collapse;
        :first-child {
          width: 12rem;
        }
        :nth-child(2) {
          width: 8rem;
        }
        :nth-child(3) {
          width: 5rem;
        }
        :nth-child(4) {
          width: 8rem;
        }
      }
      th,
      td,
      tr {
        padding: 0.2rem;
      }
      tr {
        border-bottom: 1px solid #ddd;
      }
    }

    div {
      font-size: 85%;
      float: right;
      padding-top: 0.1rem;
      label {
        padding: 0.1rem;
      }
    }
  }
`;
