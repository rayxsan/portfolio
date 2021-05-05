import React from "react";
import Radio from "../Components/Elements/Radio/Radio";
import { render, cleanup, fireEvent } from "@testing-library/react";

describe("Tests Radio component", () => {
  afterEach(cleanup);

  test("Render Radio component", () => {
    const { getByRole } = render(<Radio />);

    const radio = getByRole("radio");

    expect(radio).toBeInTheDocument();
    expect(radio).not.toBeChecked();

    fireEvent.click(radio);
    expect(radio).toBeChecked();

    fireEvent.click(radio);
    expect(radio).toBeChecked();
  });

  test("checked property", () => {
    const { getByRole } = render(<Radio checked readOnly />);

    const radio = getByRole("radio");
    expect(radio).toBeChecked();
  });

  test("check disabled", () => {
    const { getByRole } = render(<Radio disabled />);

    const radio = getByRole("radio");
    expect(radio).toBeDisabled();
  });

  test("label", () => {
    const { getByText } = render(<Radio label="testing" />);

    getByText("testing");
  });

  test("Radio Group", () => {
    const handleChange = jest.fn();

    const { getByText } = render(
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
    );
  });
});
