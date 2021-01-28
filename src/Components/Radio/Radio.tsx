import React from "react";
import { StyledRadio } from "./Radio.styled";

interface Props {
  primary?: boolean;
  secondary?: boolean;
  label?: string;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    return (
      <StyledRadio
        onClick={this.handleCheckboxChange}
        onChange={this.props.onChange}
        primary={this.props.primary}
        secondary={this.props.secondary}
      >
        <input
          type="radio"
          checked={this.state.checked || this.props.checked}
          onChange={this.props.onChange}
          onClick={() => this.handleCheckboxChange()}
          disabled={this.props.disabled}
          value={this.props.value}
          name={this.props.name}
        />
        <span />
        <label>{this.props.label}</label>
      </StyledRadio>
    );
  }
}

export default Radio;
