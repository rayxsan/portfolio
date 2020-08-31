import React from "react";
import { StyledRadio } from "./Radio.styled";

interface Props {
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
    this.state = { checked: true };
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
      <>
        <StyledRadio onClick={this.handleCheckboxChange}>
          <input
            type="radio"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            disabled={this.props.disabled}
          />
          <span />
          <label>{this.props.label}</label>
        </StyledRadio>
      </>
    );
  }
}

export default Radio;
