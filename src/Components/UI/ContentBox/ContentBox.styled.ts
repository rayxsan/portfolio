import styled, { css } from "styled-components";

interface StyledContentBoxProps {
  img?: boolean;
  src?: string;
}

export const StyledContentBox = styled.div<StyledContentBoxProps>`
  border-radius: 4px;
  background-color: ${({ theme }) => theme.solidBackground};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  box-sizing: border-box;
  margin: 1rem;
  padding: 1.5rem 2rem;
  color: ${({ theme }) => theme.fontColor};

  h3 {
    display: flex;
    margin: 0 0 1rem 0;
    font-size: 1.2rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
    letter-spacing: 0.05em;
    overflow: hidden;
  }

  p {
    padding: 0 1rem 1rem 1rem;
    margin: 1rem;
    text-align: left;
  }

  ${(props: StyledContentBoxProps) =>
    props.img &&
    css`
      padding: 0;
      padding-bottom: 1.5rem;
      div:first-child {
        position: relative;
        height: 10rem;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
        background-image: url(${(props: StyledContentBoxProps) => props.src});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        cursor: pointer;
     
        :hover {
          opacity: 0.95;
          }
        }
      }

      h3,
      p {
        padding-left: 2rem;
      }

      img {
        width: 100%;
      }
      img:hover {
        transform: scale(-2.5);
        overflow: hidden;
      }
    `}
`;
