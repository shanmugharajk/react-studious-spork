import * as React from "react";

import { Alert, Info } from "~/components";
import { isNull } from "~/utils";

import type { ICountry } from "~/countries-info/types";

interface IProps {
  country?: ICountry | null;
  error?: string;
  loading?: boolean;
}

export const CountryCard: React.FunctionComponent<IProps> = ({
  country,
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
  if (isNull(country)) {
    return <Info>No results found</Info>;
  }

  // We clear when user changes the input with undefined to immediately clear the
  // previous details shown to avoid confusion.
  if (!country) {
    return null;
  }

  const { name, code, currency, languages } = country;

  return (
    <div className="mt-5 p-4 space-y-3 text-gray-600 text-sm border border-gray-300 rounded-lg">
      <div>Name: {name}</div>
      <div>Code: {code}</div>
      <div>Currency: {currency}</div>
      <div>Languages: {languages?.map((l) => l.name).join(", ")}</div>
    </div>
  );
};
