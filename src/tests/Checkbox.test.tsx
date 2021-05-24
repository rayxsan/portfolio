import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Checkbox from "../Components/Elements/Checkbox/Checkbox";

describe("Tests checkbox component", () => {
  afterEach(cleanup);

  test("test correct rendering", () => {
    const { getByRole } = render(<Checkbox />);

    const cb = getByRole("checkbox");

    expect(cb).toBeInTheDocument();
    expect(cb).not.toBeChecked();

    fireEvent.click(cb);
    expect(cb).toBeChecked();

    fireEvent.click(cb);
    expect(cb).not.toBeChecked();
  });

  test("checked property", () => {
    const { getByRole } = render(<Checkbox checked />);

    const cb = getByRole("checkbox");
    expect(cb).toBeChecked();
  });

  test("check disabled", () => {
    const { getByRole } = render(<Checkbox disabled />);

    const cb = getByRole("checkbox");
    expect(cb).toBeDisabled();
  });

  test("label", () => {
    const { getByText } = render(<Checkbox label="testing" />);

    getByText("testing");
  });
});
