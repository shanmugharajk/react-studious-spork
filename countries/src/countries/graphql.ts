import { gql } from "@apollo/client";

export const COUNTRIES_INFO_BY_ID = gql`
  query country($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      currency
    }
  }
`;
