import { MockedProvider } from "@apollo/client/testing";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Country } from "./Country";
import {
  getCountryInfoByIdMock,
  getCountryInfoByIdErrorMock,
  getCountryInfoByIdNoResultsMock,
} from "./__mocks__";

describe("Country", () => {
  beforeAll(() => {
    jest.useFakeTimers();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("should render Country", async () => {
    render(
      <MockedProvider mocks={getCountryInfoByIdMock} addTypename={false}>
        <Country />
      </MockedProvider>,
    );

    fireEvent.change(screen.getByTestId("country-code-txt"), {
      target: { value: "IN" },
    });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    });

    expect(screen.getByText("Name: India")).toBeInTheDocument();
    expect(screen.getByText("Code: IN")).toBeInTheDocument();
    expect(screen.getByText("Currency: INR")).toBeInTheDocument();
    expect(screen.getByText("Languages: Hindi, English")).toBeInTheDocument();
  });

  it("should render error when api fails", async () => {
    render(
      <MockedProvider mocks={getCountryInfoByIdErrorMock} addTypename={false}>
        <Country />
      </MockedProvider>,
    );

    fireEvent.change(screen.getByTestId("country-code-txt"), {
      target: { value: "JU" },
    });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    });

    expect(
      screen.getByText("An error occurred", { exact: false }),
    ).toBeInTheDocument();
  });

  it("should render no results when api returns null", async () => {
    render(
      <MockedProvider
        mocks={getCountryInfoByIdNoResultsMock}
        addTypename={false}
      >
        <Country />
      </MockedProvider>,
    );

    fireEvent.change(screen.getByTestId("country-code-txt"), {
      target: { value: "KU" },
    });

    jest.advanceTimersByTime(500);

    await waitFor(() => {
      expect(screen.getByText("Loading....")).toBeInTheDocument();
    });

    expect(
      screen.getByText("No results found", { exact: false }),
    ).toBeInTheDocument();
  });
});
