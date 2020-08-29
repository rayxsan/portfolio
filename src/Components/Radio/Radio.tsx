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
        <StyledRadio className="container" onClick={this.handleCheckboxChange}>
          {this.props.label}
          <input
            type="radio"
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            disabled={this.props.disabled}
          />
          <span className="checkmark"></span>
        </StyledRadio>
      </>
    );
  }
}

export default Radio;
