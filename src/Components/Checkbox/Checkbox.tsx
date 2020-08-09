import React, { Component } from "react";
import { StyledDiv } from "./Checkbox.styled";

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

  componentDidMount = () => {
    if (this.props.checked) {
      this.setState({ checked: true });
    }
  };

  handleCheckboxChange = () => {
    if (!this.props.disabled) {
      this.setState({ checked: !this.state.checked });
    }
  };

  render() {
    return (
      <StyledDiv onClick={this.handleCheckboxChange}>
        <input
          type="checkbox"
          checked={this.state.checked}
          disabled={this.props.disabled}
        ></input>
        <label>{this.props.label}</label>
      </StyledDiv>
    );
  }
}

export default Checkbox;
