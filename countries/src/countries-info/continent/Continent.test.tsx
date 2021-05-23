import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Continent } from "./Continent";
import {
  getCountriesContinentCodeMock,
  getCountriesContinentCodeErrorMock,
  getCountriesContinentCodeNoResultsMock,
} from "./__mocks__";

describe("Continent", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render Continent component", async () => {
    render(
      <MockedProvider mocks={getCountriesContinentCodeMock} addTypename={false}>
        <Continent />
      </MockedProvider>,
    );

    fireEvent.change(screen.getByTestId("continent-code-txt"), {
      target: { value: "AS" },
    });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    });

    expect(screen.getAllByTestId("country-list-item").length).toBe(14);
  });

  it("should render error when api fails", async () => {
    render(
      <MockedProvider
        mocks={getCountriesContinentCodeErrorMock}
        addTypename={false}
      >
        <Continent />
      </MockedProvider>,
    );

    fireEvent.change(screen.getByTestId("continent-code-txt"), {
      target: { value: "AS" },
    });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    });

    expect(
      screen.getByText("An error occurred", { exact: false }),
    ).toBeInTheDocument();

    expect(screen.queryAllByTestId("country-list-item").length).toBe(0);
  });

  it("should render no results when api returns null", async () => {
    render(
      <MockedProvider
        mocks={getCountriesContinentCodeNoResultsMock}
        addTypename={false}
      >
        <Continent />
      </MockedProvider>,
    );

    fireEvent.change(screen.getByTestId("continent-code-txt"), {
      target: { value: "P" },
    });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    });

    expect(
      screen.getByText("No results found", { exact: false }),
    ).toBeInTheDocument();

    expect(screen.queryAllByTestId("country-list-item").length).toBe(0);
  });
});
