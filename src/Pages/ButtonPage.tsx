import React from "react";
import Button from "../Components/Button/Button";
import styled from "styled-components";
import { FaFacebookF, FaGoogle } from "react-icons/fa";

const StyledButtonPage = styled.div``;

export const ButtonPage = () => {
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

      <div>
        <p>Circular Buttons</p>
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
