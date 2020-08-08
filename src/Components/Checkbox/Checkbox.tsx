import React, { Component } from "react";
import { StyledCheckbox } from "./Checkbox.styled";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  toggle?: boolean;
  slider?: boolean;
  disabled?: boolean;
  label?: string;
  labelPosition?: "top" | "bottom" | "left" | "right";
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
interface State {
  checked: boolean;
}

class Checkbox extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  // TODO: add type to event
  //   handleCheckboxChange = (event: any) =>
  //     this.setState({ checked: event.target.checked });

  render() {
    return (
      <label>
        <StyledCheckbox />
        {this.props.label}
      </label>
    );
  }
}

export default Checkbox;
