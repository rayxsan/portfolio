import React, { Component } from "react";
import Input from "../UI/Input/Input";
import styled from "styled-components";

const StyledForm = styled.div``;

interface Props {
  name?: "username";
  placeholder?: "text";
  value?: "Hello Moto";
}

class Form extends Component<Props> {
  render() {
    return (
      <StyledForm>
        <form action="" method="get" className="form-example">
          {/* <Grid> */}
          <Input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
          />
          <Input
            type="text"
            name={this.props.name}
            placeholder={this.props.placeholder}
            value={this.props.value}
          />
          {/* </Grid> */}
          {/* <Button submit/> */}
        </form>
      </StyledForm>
    );
  }
}

export default Form;
