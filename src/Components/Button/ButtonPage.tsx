import React from "react";
import Button from "./Button";
import styled from "styled-components";

const StyledButtonPage = styled.div``;

const ButtonPage = () => {
  return (
    <StyledButtonPage>
      <div>
        <p>Contained Buttons</p>
        <Button>Default</Button>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button disabled>Disabled</Button>
      </div>

      <div>
        <p>Text Buttons</p>
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

      <div>
        <p>Outline Buttons</p>
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

      <div>
        <p>Icon Buttons</p>
        <Button circular icon="plus" />
        <Button circular icon="minus" />
        <Button circular icon="facebook" />
        <Button circular icon="google" />
      </div>

      <div>
        <p>Circular Buttons</p>
        <Button circular size="small" />
        <Button circular size="medium" />
        <Button circular size="large" />
      </div>

      <div>
        <p>Button of different Sizes</p>
        <Button size="tiny">Tiny</Button>
        <Button size="small">Small</Button>
        <Button size="medium">Medium</Button>
        <Button size="large">Large</Button>
        <Button size="big">Big</Button>
      </div>
    </StyledButtonPage>
  );
};

export default ButtonPage;
