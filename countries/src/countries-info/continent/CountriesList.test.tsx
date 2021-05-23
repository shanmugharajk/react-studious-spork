import { render } from "@testing-library/react";

import type { ICountry } from "../types";
import { CountriesList } from "./CountriesList";

import { continentMockData } from "./__mocks__";

describe("CountriesList", () => {
  it("should render CountriesList", () => {
    const { container } = render(
      <CountriesList countries={continentMockData.countries as ICountry[]} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render 'loading...' message", () => {
    const { container } = render(<CountriesList loading />);

    expect(container).toMatchSnapshot();
  });

  it("should render error message", () => {
    const { container } = render(<CountriesList error="An error occurred" />);

    expect(container).toMatchSnapshot();
  });

  it("should render 'No results found' message", () => {
    const { container } = render(<CountriesList countries={null} />);

    expect(container).toMatchSnapshot();
  });
});
