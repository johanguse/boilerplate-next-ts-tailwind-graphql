import { gql } from "graphql-request";

export const getChars = gql`
  query getCharacters {
    characters {
      results {
        name
        image
      }
    }
  }
`;
