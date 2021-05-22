export interface ILanguage {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}

export interface ICountry {
  name: string;
  code: string;
  emoji: string;
  currency: string;
  languages: ILanguage[];
}

export interface IContinent {
  name: string;
  countries: ICountry[];
}

export interface IContinentQueryResult {
  continent: IContinent;
}

export interface ICountryQueryResult {
  country: ICountry;
}
