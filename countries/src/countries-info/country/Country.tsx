import React from "react";
import { useLazyQuery } from "@apollo/client";

import type { ICountryQueryResult, ICountry } from "~/countries-info/types";
import { debounce } from "~/utils";

import { CountryCard } from "./CountryCard";
import { COUNTRIES_INFO_BY_ID } from "./queries";

export const Country: React.FunctionComponent = () => {
  const [countryInfo, setCountryInfo] = React.useState<ICountry>();
  const [apiError, setApiError] = React.useState<string>();

  const [fetchData, { loading, data, error }] =
    useLazyQuery<ICountryQueryResult, { code: string }>(COUNTRIES_INFO_BY_ID);

  React.useEffect(() => {
    if (error) {
      setApiError(`${error?.name} - ${error?.message}`);
    }
  }, [error]);

  React.useEffect(() => {
    setCountryInfo(data?.country);
  }, [data]);

  const getCountryInfo = React.useCallback(
    debounce((code: string) => {
      if (code?.length > 0) {
        fetchData({ variables: { code } });
      }
    }, 500),
    [],
  );

  const handleCountryCodeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCountryInfo(undefined);
      setApiError(undefined);
      getCountryInfo(event.target.value);
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
        data-testid="country-code-txt"
        autoComplete="off"
        className="input-txt-minimal"
        id="country-code"
        name="countryCode"
        type="text"
        placeholder="Country Code"
        size={40}
        onChange={handleCountryCodeChange}
      />

      <div className="h-96 mt-5">
        <CountryCard error={apiError} country={countryInfo} loading={loading} />
      </div>
    </div>
  );
};
