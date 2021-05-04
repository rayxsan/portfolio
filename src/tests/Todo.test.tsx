import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

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

  test("Allows users to add a new task", () => {
    const { getByText, getByPlaceholderText, getByLabelText } = render(
      <Todo />
    );

    const inputAddTask = getByPlaceholderText("New task");
    const inputNote = getByPlaceholderText("Note (Optional)");
    const button = getByText("Add task");

    //Simulate user events
    userEvent.type(inputAddTask, "New task");
    userEvent.click(button);

    //Test new task render
    getByText("New task");
    // getByText("Pending");
    // getByText("Del");
    // getByText("Tasks: 1");
    // getByText("Completed: 0");
  });
});
