import React from "react";
import { StyledRadio } from "./Radio.styled";

interface Props {
  label?: string;
}

interface State {
  checked: boolean;
}

class Radio extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { checked: true };
  }
  render() {
    return (
      <>
        <StyledRadio className="container">
          {this.props.label}
          <input type="radio" checked={this.state.checked} />
          <span className="checkmark"></span>
        </StyledRadio>
      </>
    );
  }
}

export default Radio;
