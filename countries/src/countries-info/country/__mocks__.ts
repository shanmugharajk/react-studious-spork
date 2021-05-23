import { COUNTRIES_INFO_BY_ID } from "./queries";

export const countryMockData = {
  name: "India",
  code: "IN",
  currency: "INR",
  languages: [{ name: "Hindi" }, { name: "English" }],
};

export const getCountryInfoByIdMock = [
  {
    request: {
      query: COUNTRIES_INFO_BY_ID,
      variables: {
        code: "IN",
      },
    },
    result: {
      data: { country: countryMockData },
    },
  },
];

export const getCountryInfoByIdNoResultsMock = [
  {
    request: {
      query: COUNTRIES_INFO_BY_ID,
      variables: {
        code: "KU",
      },
    },
    result: {
      data: { country: null },
    },
  },
];

export const getCountryInfoByIdErrorMock = [
  {
    request: {
      query: COUNTRIES_INFO_BY_ID,
      variables: {
        code: "JU",
      },
    },
    error: new Error("An error occurred"),
  },
];
