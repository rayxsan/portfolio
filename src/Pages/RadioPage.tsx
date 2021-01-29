import React, { useState } from "react";
import Radio from "../Components/Radio/Radio";
import Card from "../Components/UI/Card/Card";
import styled from "styled-components";

const StyledRadioPage = styled.div`
  display: block;
`;

const RadioPage = () => {
  const [checkedValue, setCheckedValue] = useState("prmary");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setCheckedValue(event.target.name);
    console.log(event.target.name);
  };

  return (
    <StyledRadioPage>
      <Card title="A radio button">
        <Radio label="Radio button" />
      </Card>
      <Card title="Disabled radio button">
        <Radio disabled checked label="Disabled" />
      </Card>
      <Card title="Radio Group">
        <div>
          <Radio
            primary
            label="Primary"
            value="primary"
            name="radioGroup"
            checked={checkedValue === "primary"}
            onChange={handleChange}
          />
          <Radio
            secondary
            label="Secondary"
            value="secondary"
            name="radioGroup"
            checked={checkedValue === "secondary"}
            onChange={handleChange}
          />
        </div>
        <p>{checkedValue}</p>
      </Card>
    </StyledRadioPage>
  );
};

export default RadioPage;
