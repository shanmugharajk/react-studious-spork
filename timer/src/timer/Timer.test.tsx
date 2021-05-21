import { render, screen } from "@testing-library/react";

import { Timer } from "./Timer";

describe("Timer", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date("Thu May 20 2021 18:22:39 GMT+0530").getTime());
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render Timer component", () => {
    const { container } = render(<Timer />);

    expect(container).toMatchSnapshot();
  });
});
