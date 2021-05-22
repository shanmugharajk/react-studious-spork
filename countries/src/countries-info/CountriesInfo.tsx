import * as React from "react";

import { Country } from "~/countries-info/country";
import { Continent } from "~/countries-info/continent";

export const CountriesInfo: React.FunctionComponent = () => {
  return (
    <div className="mx-10 my-5  rounded-lg shadow-md flex justify-evenly border-t-2 border-indigo-800">
      <Country />
      <Continent />
    </div>
  );
};
