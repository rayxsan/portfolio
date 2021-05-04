import React from "react";
import Button from "../Components/Elements/Button/Button";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";

describe("Test button component", () => {
  test("Handle click event", () => {
    const handleClick = jest.fn();

    render(<Button clicked={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText(/click me/i));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("Disable prop", () => {
    render(<Button disabled>Click me</Button>);

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
