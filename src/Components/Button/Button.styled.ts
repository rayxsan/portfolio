import styled from "styled-components";
import { ButtonSizes, ButtonTypes } from "./Button.common";

const sizes = {
  tiny: {
    fontSize: ".6rem",
    height: "1rem",
  },
  small: {
    fontSize: ".8rem",
    height: "2rem",
  },
  medium: {
    fontSize: "1rem",
    height: "3rem",
  },
  large: {
    fontSize: "1.2rem",
    height: "4rem",
  },
  big: {
    fontSize: "1.4rem",
    height: "5rem",
  },
};
export interface Props {
  size?: ButtonSizes;
  type?: ButtonTypes;
  color?: string;
}

// TODO DRY
export const StyledButton = styled.button.attrs<Props>(props => ({
  type: props.type || "button",
  size: props.size || "medium",
  color: props.color || "#ccc",
}))`
  background-color: ${(props: Props) => props.color};
  border-radius: 0.28rem;
  transition: 0.2s;
  cursor: pointer;
  border: none;

  /* button size: */
  height: ${(props: Props) => sizes[props.size!].height};
  line-height: 1rem;
  margin: 0 0.25rem 0 0;
  padding: 0.78rem 1.5rem 0.78rem;
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

export const TextButton = styled.button.attrs<TextButtonProps>(props => ({
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

export const OutlinedButton = styled.button.attrs<OutlinedButtonProps>(props => ({
  type: props.type || "button",
  size: props.size || "medium",
  color: props.color || "black",
}))`
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

// BUG circular btns with long label forms a oval instead of a circle
export const CircularButton = styled.button.attrs<OutlinedButtonProps>(props => ({
  type: props.type || "button",
  size: props.size || "medium",
  color: props.color || "orange",
}))`
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
