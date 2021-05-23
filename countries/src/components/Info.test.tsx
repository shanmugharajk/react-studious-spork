import { render } from "@testing-library/react";

import { Info } from "./Info";

describe("Info", () => {
  it("should render Info", () => {
    const { container } = render(<Info>Info</Info>);

    expect(container).toMatchSnapshot();
  });
});
