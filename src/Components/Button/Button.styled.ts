import styled from "styled-components";

interface Props {
  size?: string;
  type?: string;
  color?: string;
}

export const StyledButton = styled.button.attrs<Props>((props) => ({
  type: props.type || "button",
  size: props.size || "1rem",
  color: props.color || "blue",
}))`
  display: block;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${(props: Props) => props.color};
  border-radius: 4px;
  transition: 0.2s;
  cursor: pointer;
  border: none;
  /* pass the dynamic props: */
  margin: ${(props: Props) => props.size};
  padding: ${(props: Props) => props.size};
  &:hover {
    opacity: 0.7;
  }
`;
