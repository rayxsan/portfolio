import React, { Component } from "react";
import Input from "../UI/Input/Input";
import Button from '../Button/Button';
import StyledForm from "./Form.styled";

interface Props {
  id?: string;
}

class Form extends Component<Props> {
  static defaultProps = {
    id: 'defaultId'
  }
  render() {
    return (
      <StyledForm>
        <form action="" method="get" className="form-example">
          {/* <Grid> */}
          <Input
            type="text"
            placeholder='Username'
          />
          <Input
            type="text"
            placeholder='First Name'
          />
          <Input
            type="text"
            // id={this.props.id}
            // placeholder={this.props.placeholder}
            // value={this.props.value}
          />
          {/* </Grid> */}
          <Button/>
        </form>
      </StyledForm>
    );
  }
}

export default Form;
