export interface ILanguage {
  code: string;
  name: string;
  native: string;
  rtl: boolean;
}

export interface ICountryInfo {
  name: string;
  code: string;
  currency: string;
  languages: ILanguage[];
}
