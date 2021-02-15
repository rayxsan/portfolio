import React, { useState } from "react";
import Radio from "../Components/Elements/Radio/Radio";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import styled from "styled-components";

const StyledRadioPage = styled.div`
  display: block;
`;

const RadioPage = () => {
  const [checkedValue, setCheckedValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedValue(event.target.value);
  };

  return (
    <StyledRadioPage>
      <ContentBox title="A radio button">
        <Radio label="Radio button" />
      </ContentBox>
      <ContentBox title="Disabled radio button">
        <Radio disabled checked label="Disabled checked" />
        <Radio disabled label="Disabled not checked" />
      </ContentBox>
      <ContentBox title="Radio Group">
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
        <p>Selected value: {checkedValue}</p>
      </ContentBox>
    </StyledRadioPage>
  );
};

export default RadioPage;
