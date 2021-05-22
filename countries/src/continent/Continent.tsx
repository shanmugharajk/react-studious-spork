import * as React from "react";

export const Continent: React.FunctionComponent = () => {
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
        id="grid-last-name"
        type="text"
        placeholder="Continent Code"
        size={40}
      />
      <div className="h-96 mt-5">
        <span className="text-gray-400 text-md">
          Please enter continent code to fetch details
        </span>
      </div>
    </div>
  );
};
