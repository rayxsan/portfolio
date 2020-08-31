import React from "react";
import { theme } from "../../shared/Theme";
import { StyledRadio } from "./Radio.styled";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
}

interface State {
  checked: boolean;
}

class Radio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { checked: false };
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
    let color = "grey";

    if (this.props.primary) {
      color = theme.primaryColor;
    }
    if (this.props.secondary) {
      color = theme.secondaryColor;
    }
    return (
      <>
        <StyledRadio onClick={this.handleCheckboxChange} color={color}>
          <input
            type="radio"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            disabled={this.props.disabled}
          />
          <span />
          <label style={{ color: color }}>{this.props.label}</label>
        </StyledRadio>
      </>
    );
  }
}

export default Radio;
