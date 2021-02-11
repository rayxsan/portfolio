import React, { Component } from "react";
import Input from "../../UI/Input/Input";
import Button from "../Button/Button";
import StyledForm from "./Form.styled";

interface Props {
  id?: string;
}

class Form extends Component<Props> {
  static defaultProps = {
    id: "defaultId",
  };
  render() {
    return (
      <StyledForm>
        <div className="form-example">
          <div className="grid">
            <div className="left-col">
              <Input type="text" placeholder="Username" />
              <Input type="text" placeholder="First Name" />
              <Input type="text" placeholder="Email" />
              <Input type="text" placeholder="Date" />
              <Input type="text" placeholder="Credit Card" />
            </div>
            <div className="right-col">
              <Input type="text" placeholder="Mobile Number" />
              <Input type="text" placeholder="Password" />
              <Input type="text" placeholder="Confirm Password" />
              <Input type="text" placeholder="Radios" />
              <Input type="text" placeholder="Circular Btn" />
            </div>
          </div>
          <Button text size="small" type="submit">
            Submit
          </Button>
        </div>
      </StyledForm>
    );
  }
}

export default Form;
