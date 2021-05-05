import React from "react";
import { render, cleanup, waitFor, act } from "@testing-library/react";
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
    const { getByText, getByPlaceholderText } = render(<Todo />);

    const inputAddTask = getByPlaceholderText("New task");
    const inputNote = getByPlaceholderText("Note (Optional)");
    const button = getByText("Add task");

    userEvent.type(inputNote, "New note");

    //Simulate user events
    userEvent.type(inputAddTask, "New task");
    await waitFor(() => expect(button).toBeEnabled());
    act(() => {
      userEvent.click(button);
    });
    // await waitFor(() => {
    //   getByText("Select all");
    // });
  });
});
