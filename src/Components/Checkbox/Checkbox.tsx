import React, { Component } from "react";
import { StyledCheckbox, StyledSlider } from "./Checkbox.styled";
import {
  FaRegSquare,
  FaCheckSquare,
  FaToggleOff,
  FaToggleOn,
} from "react-icons/fa";

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
    if (this.props.slider) {
      return (
        <>
          <StyledSlider onClick={this.handleCheckboxChange}>
            <input
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckboxChange}
              disabled={this.props.disabled}
            />
            <label />
          </StyledSlider>
          <label>{this.props.label}</label>
        </>
      );
    }

    let svgRender = this.state.checked ? <FaCheckSquare /> : <FaRegSquare />;

    if (this.props.toggle) {
      svgRender = this.state.checked ? <FaToggleOn /> : <FaToggleOff />;
    }

    return (
      <StyledCheckbox
        primary={this.props.primary}
        secondary={this.props.secondary}
        toggle={this.props.toggle}
        onClick={this.handleCheckboxChange}
      >
        <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleCheckboxChange}
          disabled={this.props.disabled}
        />
        {svgRender}
        <label>{this.props.label}</label>
      </StyledCheckbox>
    );
  }
}

export default Checkbox;
