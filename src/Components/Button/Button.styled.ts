import styled from "styled-components";
import { ButtonSizes, ButtonTypes } from "./Button.common";

const sizes = {
  tiny: {
    fontSize: ".6rem",
  },
  small: {
    fontSize: ".8rem",
  },
  medium: {
    fontSize: "1rem",
  },
  large: {
    fontSize: "1.2rem",
  },
  big: {
    fontSize: "1.4rem",
  },
};
export interface Props {
  size?: ButtonSizes;
  type?: ButtonTypes;
  color?: string;
}

export const StyledButton = styled.button.attrs<Props>((props) => ({
  type: props.type || "button",
  size: props.size || "medium",
  color: props.color || "#cccc",
}))`
  background-color: ${(props: Props) => props.color};
  border-radius: 0.28rem;
  transition: 0.2s;
  cursor: pointer;
  border: none;

  /* button size: */
  min-height: 1em;
  line-height: 1em;
  margin: 0 0.25em 0 0;
  padding: 0.78em 1.5em 0.78em;
  font-size: ${(props: Props) => sizes[props.size!].fontSize};

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    color: #cccc;
    cursor: not-allowed;
  }
`;

interface TextButtonProps extends Props {}

export const TextButton = styled.button.attrs<TextButtonProps>((props) => ({
  type: props.type || "button",
  size: props.size || "medium",
  color: props.color || "inherit",
}))`
  background: none;
  color: ${(props: Props) => props.color};
  font-weight: 400;
  transition: 0.2s;
  cursor: pointer;
  border: none;

  /* button size: */
  min-height: 1em;
  line-height: 1em;
  margin: 0 0.25em 0 0;
  padding: 0.78em 1.5em 0.78em;
  font-size: ${(props: Props) => sizes[props.size!].fontSize};

  &:hover {
    opacity: 0.7;
    //TODO Change background opacity on hover 
    // background-color: ${(props: Props) => props.color};
  }

  &:disabled {
    color: #cccc;
    cursor: not-allowed;
  }
`;

interface OutlinedButtonProps extends Props {}

export const OutlinedButton = styled.button.attrs<OutlinedButtonProps>(
  (props) => ({
    type: props.type || "button",
    size: props.size || "medium",
    color: props.color || "inherit",
  })
)`
  background: none;
  color: ${(props: Props) => props.color};
  border-radius: 0.28rem;
  font-weight: 400;
  transition: 0.2s;
  cursor: pointer;
  border: 1px solid ${(props: Props) => props.color};

  /* button size: */
  min-height: 1em;
  line-height: 1em;
  margin: 0 0.25em 0 0;
  padding: 0.78em 1.5em 0.78em;
  font-size: ${(props: Props) => sizes[props.size!].fontSize};

  &:hover {
    opacity: 0.7;
    //TODO Change background opacity on hover 
    // background-color: ${(props: Props) => props.color};
  }

  &:disabled {
    color: #cccc;
    cursor: not-allowed;
  }
`;

interface CircularButton extends Props {}

export const CircularButton = styled.button.attrs<OutlinedButtonProps>(
  (props) => ({
    type: props.type || "button",
    size: props.size || "medium",
    color: props.color || "orange",
  })
)`
  display: inline-flex;
  position: relative;
  background: ${(props: Props) => props.color};
  border-radius: 50%;
  cursor: pointer;
  border: none;

  /* button size: */
  
  margin: 0.2em;
  padding: 0.6rem;
  font-size: ${(props: Props) => sizes[props.size!].fontSize};

  &:hover {
    opacity: 0.7;
    //TODO Change background opacity on hover 
    // background-color: ${(props: Props) => props.color};
  }

  &:disabled {
    color: #cccc;
    cursor: not-allowed;
  }

`;
