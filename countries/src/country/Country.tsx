import * as React from "react";
import { useLazyQuery } from "@apollo/client";

import { CountryCard } from "./CountryCard";
import { COUNTRIES_INFO_BY_ID } from "./graphql";
import type { ICountryInfo } from "./types";

export const Country: React.FunctionComponent = () => {
  const [getCountryInfo, { loading, data, error }] =
    useLazyQuery<ICountryInfo, { code: string }>(COUNTRIES_INFO_BY_ID);

  const handleCountryCodeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const code = event.target.value;
      getCountryInfo({ variables: { code } });
    },
    [],
  );

  return (
    <div className="p-10 space-y-2">
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        htmlFor="country-code"
      >
        Country Information
      </label>

      <input
        className="input-txt-minimal"
        id="country-code"
        name="countryCode"
        type="text"
        placeholder="Country Code"
        size={40}
        onChange={handleCountryCodeChange}
      />

      <div className="h-96 mt-5">
        <CountryCard />
      </div>
    </div>
  );
};
