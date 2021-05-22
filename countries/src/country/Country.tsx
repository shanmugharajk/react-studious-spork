import * as React from "react";
import { useLazyQuery } from "@apollo/client";

import { debounce } from "~/utils";

import { CountryCard } from "./CountryCard";
import { COUNTRIES_INFO_BY_ID } from "./queries";
import type { ICountry, ICountryInfo } from "./types";

export const Country: React.FunctionComponent = () => {
  const [countryInfo, setCountryInfo] = React.useState<ICountryInfo>();

  const [fetchData, { loading, data, error }] =
    useLazyQuery<ICountry, { code: string }>(COUNTRIES_INFO_BY_ID);

  React.useEffect(() => {
    setCountryInfo(data?.country);
  }, [data]);

  const getCountryInfo = React.useCallback(
    debounce((code: string) => {
      if (code?.length > 0) {
        fetchData({ variables: { code } });
      }
    }, 1000),
    [],
  );

  const handleCountryCodeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCountryInfo(undefined);
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
        <CountryCard
          error={error?.message}
          data={countryInfo}
          loading={loading}
        />
      </div>
    </div>
  );
};
