import React from 'react';
import { useLazyQuery } from '@apollo/client';

import { ICountry, IContinentQueryResult } from '~/countries-info/types';
import { debounce } from '~/utils';

import { GET_COUNTRIES_CONTINENT_CODE } from './queries';
import { CountriesList } from './CountriesList';
import { isNull } from '../../utils/object';

export const Continent: React.FunctionComponent = () => {
  const [countries, setCountries] = React.useState<ICountry[] | null>();
  const [apiError, setApiError] = React.useState<string>();

  const [fetchData, { loading, data, error }] = useLazyQuery<
    IContinentQueryResult,
    { code: string }
  >(GET_COUNTRIES_CONTINENT_CODE);

  React.useEffect(() => {
    if (error) {
      setApiError(`${error?.name} - ${error?.message}`);
    }
  }, [error]);

  React.useEffect(() => {
    if (isNull(data?.continent)) {
      setCountries(null);
    } else {
      setCountries(data?.continent?.countries);
    }
  }, [data]);

  const getCountries = React.useCallback(
    debounce((code: string) => {
      if (code?.length > 0) {
        fetchData({ variables: { code } });
      }
    }, 500),
    [],
  );

  const handleContinentCodeChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCountries(undefined);
      setApiError(undefined);
      getCountries(event.target.value);
    },
    [],
  );

  return (
    <div className="p-10 space-y-2">
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        htmlFor="grid-last-name"
      >
        Country List
      </label>

      <input
        className="input-txt-minimal"
        id="continent-code"
        name="continentCode"
        type="text"
        placeholder="Continent Code"
        size={40}
        onChange={handleContinentCodeChange}
      />

      <div className="h-96 mt-5">
        <CountriesList
          countries={countries}
          error={apiError}
          loading={loading}
        />
      </div>
    </div>
  );
};
