import { GET_COUNTRIES_CONTINENT_CODE } from "./queries";

export const continentMockData = {
  name: "Asia",
  countries: [
    { code: "AM", name: "Armenia", emoji: "🇦🇲" },
    { code: "BH", name: "Bahrain", emoji: "🇧🇭" },
    { code: "BN", name: "Brunei", emoji: "🇧🇳" },
    { code: "BT", name: "Bhutan", emoji: "🇧🇹" },
    { code: "LA", name: "Laos", emoji: "🇱🇦" },
    { code: "LB", name: "Lebanon", emoji: "🇱🇧" },
    { code: "MO", name: "Macao", emoji: "🇲🇴" },
    { code: "NP", name: "Nepal", emoji: "🇳🇵" },
    { code: "OM", name: "Oman", emoji: "🇴🇲" },
    { code: "QA", name: "Qatar", emoji: "🇶🇦" },
    { code: "TR", name: "Turkey", emoji: "🇹🇷" },
    { code: "TW", name: "Taiwan", emoji: "🇹🇼" },
    { code: "VN", name: "Vietnam", emoji: "🇻🇳" },
    { code: "YE", name: "Yemen", emoji: "🇾🇪" },
  ],
};

export const getCountriesContinentCodeMock = [
  {
    request: {
      query: GET_COUNTRIES_CONTINENT_CODE,
      variables: {
        code: "AS",
      },
    },
    result: {
      data: { continent: continentMockData },
    },
  },
];

export const getCountriesContinentCodeNoResultsMock = [
  {
    request: {
      query: GET_COUNTRIES_CONTINENT_CODE,
      variables: {
        code: "P",
      },
    },
    result: {
      data: { continent: null },
    },
  },
];

export const getCountriesContinentCodeErrorMock = [
  {
    request: {
      query: GET_COUNTRIES_CONTINENT_CODE,
      variables: {
        code: "AS",
      },
    },
    error: new Error("An error occurred"),
  },
];
