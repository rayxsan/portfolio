import React from "react";
import { render, fireEvent, cleanup, waitFor } from "@testing-library/react";
import Todo from "../Components/State/Todo";
import userEvent from "@testing-library/user-event";

describe("Todos tests", () => {
  afterEach(cleanup);

  test("Render successfull", () => {
    const { getByText, getByPlaceholderText } = render(<Todo />);

    getByPlaceholderText("New task");
    getByPlaceholderText("Note (Optional)");
    getByText("Add task");
  });

  test("Allows users to add a new task", async () => {
    const {
      getByText,
      getByRole,
      getByPlaceholderText,
      getByLabelText,
      findByText,
    } = render(<Todo />);

    const inputAddTask = await getByPlaceholderText("New task");
    const inputNote = await getByPlaceholderText("Note (Optional)");
    const button = await getByText("Add task");

    expect(button).toBeDisabled();

    //Simulate user events
    userEvent.type(inputAddTask, "New task");
    await waitFor(() => expect(button).toBeEnabled());
    userEvent.click(button);

    //Test new task render
    //getByText("New task");
    // getByText("Pending");
    // getByText("Del");
    // getByText("Tasks: 1");
    // getByText("Completed: 0");
  });
});
