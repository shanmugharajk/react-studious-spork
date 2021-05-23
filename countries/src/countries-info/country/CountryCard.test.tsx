import { render } from "@testing-library/react";

import { ICountry } from "~/countries-info/types";

import { CountryCard } from "./CountryCard";
import { countryMockData } from "./__mocks__";

describe("CountryCard", () => {
  it("should render CountryCard", () => {
    const { container } = render(
      <CountryCard country={countryMockData as ICountry} />,
    );

    expect(container).toMatchSnapshot();
  });

  it("should render 'loading...' message", () => {
    const { container } = render(<CountryCard loading />);

    expect(container).toMatchSnapshot();
  });

  it("should render error message", () => {
    const { container } = render(<CountryCard error="An error occurred" />);

    expect(container).toMatchSnapshot();
  });

  it("should render 'No results found' message", () => {
    const { container } = render(<CountryCard country={null} />);

    expect(container).toMatchSnapshot();
  });
});
