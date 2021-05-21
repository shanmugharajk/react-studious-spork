import { fireEvent, render, screen } from "@testing-library/react";

import { Counter } from "./Counter";
import { CounterStore } from "./counter-store";

describe("Counter", () => {
  const counterStore = new CounterStore();

  it("should render Counter component", () => {
    const { container } = render(<Counter counterStore={counterStore} />);

    expect(container).toMatchSnapshot();
  });

  it("should increment and decrement count properly", () => {
    render(<Counter counterStore={counterStore} />);

    expect(screen.getByTestId("counter-lbl")).toHaveTextContent("Clicks 0");

    fireEvent.click(screen.getByText("Increment"));
    expect(screen.getByTestId("counter-lbl")).toHaveTextContent("Clicks 1");

    fireEvent.click(screen.getByText("Decrement"));
    expect(screen.getByTestId("counter-lbl")).toHaveTextContent("Clicks 0");
  });
});
