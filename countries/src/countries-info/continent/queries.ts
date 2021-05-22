import { gql } from "@apollo/client";

export const GET_COUNTRIES_CONTINENT_CODE = gql`
  query continent($code: ID!) {
    continent(code: $code) {
      name
      countries {
        code
        name
        emoji
      }
    }
  }
`;
