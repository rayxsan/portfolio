import React from "react";
import Button from "../Components/Elements/Button/Button";
import ContentBox from "../Components/UI/ContentBox/ContentBox";
import styled from "styled-components";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const StyledButtonPage = styled.div`
  button {
    margin: 2px;
  }
`;

// TODO
// refactor DRY, outsource values
// add page header
const ButtonPage = () => {
  return (
    <StyledButtonPage>
      <ContentBox title="contained buttons">
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button disabled>Disabled</Button>
      </ContentBox>

      <ContentBox title="text buttons">
        <div className="btn-container">
          <Button text>Default</Button>
          <Button text primary>
            Primary
          </Button>
          <Button text secondary>
            Secondary
          </Button>
          <Button text disabled>
            Disabled
          </Button>
        </div>
      </ContentBox>

      <ContentBox title="outlined buttons">
        <div className="btn-container">
          <Button outline>Default</Button>
          <Button outline primary>
            Primary
          </Button>
          <Button outline secondary>
            Secondary
          </Button>
          <Button outline disabled>
            Disabled
          </Button>
        </div>
      </ContentBox>

      <ContentBox title="icon buttons">
        <div className="btn-container">
          <Button primary>
            <FaFacebookF />
            Facebook
          </Button>
          <Button secondary>
            <FaGoogle /> Google
          </Button>
          <Button>
            <FaFacebookF />
          </Button>
          <Button>
            <FaFacebookF />
          </Button>
        </div>
      </ContentBox>

      <ContentBox title="circular buttons">
        <div className="btn-container">
          <Button circular size="small">
            <FaFacebookF />
          </Button>
          <Button circular primary size="medium">
            <FaFacebookF />
          </Button>
          <Button circular secondary size="large">
            <FaFacebookF />
          </Button>
        </div>
      </ContentBox>

      <ContentBox title="diferent size buttons">
        <div className="btn-container">
          <Button size="tiny">Tiny</Button>
          <Button size="small">Small</Button>
          <Button size="medium">Medium</Button>
          <Button size="large">Large</Button>
          <Button size="big">Big</Button>
        </div>
      </ContentBox>
    </StyledButtonPage>
  );
};

export default ButtonPage;
