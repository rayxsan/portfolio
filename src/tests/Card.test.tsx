import React from "react";
import Card from "../Components/Elements/Card/Card";
import { cleanup, render } from "@testing-library/react";

describe("testing card component", () => {
  afterEach(cleanup);
  test("Render successfully", () => {
    const { container } = render(<Card />);
    expect(container).toBeInTheDocument();
  });

  test("Test card props", () => {
    const { getByText } = render(
      <Card
        content={{
          header: "Header",
          meta: "meta",
          innerContent: "innerContent",
          description: "description",
        }}
        footer="footer"
      />
    );
    getByText("Header");
    getByText("meta");
    getByText("innerContent");
    getByText("description");
    getByText("footer");
  });
});
