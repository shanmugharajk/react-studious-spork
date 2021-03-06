import { GET_COUNTRIES_CONTINENT_CODE } from "./queries";

export const continentMockData = {
  name: "Asia",
  countries: [
    { code: "AM", name: "Armenia", emoji: "π¦π²" },
    { code: "BH", name: "Bahrain", emoji: "π§π­" },
    { code: "BN", name: "Brunei", emoji: "π§π³" },
    { code: "BT", name: "Bhutan", emoji: "π§πΉ" },
    { code: "LA", name: "Laos", emoji: "π±π¦" },
    { code: "LB", name: "Lebanon", emoji: "π±π§" },
    { code: "MO", name: "Macao", emoji: "π²π΄" },
    { code: "NP", name: "Nepal", emoji: "π³π΅" },
    { code: "OM", name: "Oman", emoji: "π΄π²" },
    { code: "QA", name: "Qatar", emoji: "πΆπ¦" },
    { code: "TR", name: "Turkey", emoji: "πΉπ·" },
    { code: "TW", name: "Taiwan", emoji: "πΉπΌ" },
    { code: "VN", name: "Vietnam", emoji: "π»π³" },
    { code: "YE", name: "Yemen", emoji: "πΎπͺ" },
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
