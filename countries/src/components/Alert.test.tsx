import { render } from "@testing-library/react";

import { Alert } from "./Alert";

describe("Alert", () => {
  it("should render Alert", () => {
    const { container } = render(<Alert>Error</Alert>);

    expect(container).toMatchSnapshot();
  });
});
