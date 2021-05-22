import React from "react";

import { Alert, Info } from "~/components";
import { ICountry } from "~/countries-info/types";
import { isNull } from "~/utils";

interface IProps {
  countries?: ICountry[] | null;
  error?: string;
  loading: boolean;
}

export const CountriesList: React.FunctionComponent<IProps> = ({
  countries,
  error,
  loading,
}) => {
  if (error) {
    return <Alert>{error}</Alert>;
  }

  if (loading) {
    return <Info>Loading....</Info>;
  }

  // result from api will set this as null.
  if (isNull(countries)) {
    return <Info>No results found</Info>;
  }

  // We clear when user changes the input with undefined to immediately clear the
  // previous details shown to avoid confusion.
  if (!countries) {
    return null;
  }

  return (
    <ul className="mt-5 p-4 space-y-3 text-gray-600 text-sm h-64 rounded-lg border border-gray-300 overflow-auto">
      {countries.map((country) => (
        <li key={country.code}>
          <span className="inline-block mr-5">{country.emoji}</span>
          <span>{country.name}</span>
        </li>
      ))}
    </ul>
  );
};
