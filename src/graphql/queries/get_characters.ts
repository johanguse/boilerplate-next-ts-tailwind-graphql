import { gql } from "graphql-request";
import graphqlRequestClient from "../graphqlRequestClient";
import { GetCharactersQuery } from 'graphql/generated/graphql'

const getAllCharacters = async () => {
  const query = gql`
    query getCharacters {
        characters {
          results {
            name
            image
          }
        }
      }
  `;

  const response = await graphqlRequestClient.request<GetCharactersQuery>(query);
  const data = JSON.parse(JSON.stringify(response));

  console.log("response ---");
  console.log(response);

  return data.allCharacters.data;
};

export default getAllCharacters;
/*
import { gql } from 'graphql-request'

export const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        name
        image
      }
    }
  }
`*/
