import { useLazyQuery } from "@apollo/client";
import * as React from "react";

import { COUNTRIES_INFO_BY_ID } from "./graphql";

export const Countries: React.FunctionComponent = () => {
  const [getCountryInfo, { loading, data, error }] =
    useLazyQuery(COUNTRIES_INFO_BY_ID);

  React.useEffect(() => {
    getCountryInfo({
      variables: {
        code: "IN",
      },
    });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div>{JSON.stringify(data)}</div>;
};
