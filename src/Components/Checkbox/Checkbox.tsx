import React, { Component } from "react";
import { theme } from "../../shared/Theme";
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
  clicked?: (event: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
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
    let color = "";

    if (this.props.primary) {
      color = theme.primaryColor;
    }
    if (this.props.secondary) {
      color = theme.secondaryColor;
    }
    if (this.props.toggle) {
      return (
        <>
          <StyledToggle color={color}>
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
          <StyledSlider onClick={this.handleCheckboxChange} color={color}>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
              disabled={this.props.disabled}
            />
            <label />
          </StyledSlider>
          <label style={{ color: color }}>{this.props.label}</label>
        </>
      );
    }
    return (
      <>
        <StyledCheckbox onClick={this.handleCheckboxChange} color={color}>
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
