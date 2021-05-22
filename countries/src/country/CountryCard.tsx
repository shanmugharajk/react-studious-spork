import * as React from "react";

import { isNull } from "~/utils";

import type { ICountryInfo, ILanguage } from "./types";

interface IProps {
  data?: ICountryInfo;
  error?: string;
  loading: boolean;
}

export const CountryCard: React.FunctionComponent<IProps> = ({
  data,
  error,
  loading,
}) => {
  if (error) {
    return (
      <div>
        <span className="text-red-400">{error}</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <span className="text-gray-400">Loading....</span>
      </div>
    );
  }

  // result from api will set this as null.
  if (isNull(data)) {
    return (
      <div>
        <span className="text-gray-400">No results found</span>
      </div>
    );
  }

  // We clear when user changes the input with undefined to immediately clear the
  // previous details shown to avoid confusion.
  if (!data) {
    return null;
  }

  const { name, code, currency, languages } = data;

  return (
    <div className="mt-5 p-4 space-y-3 text-gray-600 text-sm border border-gray-300 rounded-lg">
      <div>Name: {name}</div>
      <div>Code: {code}</div>
      <div>Currency: {currency}</div>
      <div>Languages: {languages?.map((l) => l.name).join(", ")}</div>
    </div>
  );
};
