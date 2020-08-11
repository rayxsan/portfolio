import React, { Component } from "react";
import { StyledCheckbox, StyledToggle, StyledSlider } from "./Checkbox.styled";

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
    if (this.props.toggle) {
      return (
        <>
          <StyledToggle>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
              disabled={this.props.disabled}
            />
            <div />
          </StyledToggle>
          <label>{this.props.label}</label>
        </>
      );
    }

    if (this.props.slider) {
      return (
        <>
          <StyledSlider>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
              disabled={this.props.disabled}
            />
            <label />
            <div />
          </StyledSlider>
          <label>{this.props.label}</label>
        </>
      );
    }
    return (
      <>
        <StyledCheckbox onClick={() => this.handleCheckboxChange()}>
          <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            disabled={this.props.disabled}
          />
          <label>{this.props.label}</label>
        </StyledCheckbox>
      </>
    );
  }
}

export default Checkbox;
