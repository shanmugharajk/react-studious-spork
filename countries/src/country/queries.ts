import { gql } from "@apollo/client";

export const COUNTRIES_INFO_BY_ID = gql`
  query country($code: ID!) {
    country(code: $code) {
      name
      code
      currency
      languages {
        name
      }
    }
  }
`;
