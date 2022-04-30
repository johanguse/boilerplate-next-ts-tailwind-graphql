import Home, { HomeProps } from 'templates/Home'
import { QueryClient, useQuery } from "react-query";
import { request } from "graphql-request";
import { dehydrate } from "react-query/hydration";
import graphqlRequestClient from 'graphql/graphqlRequestClient'
import { GetCharactersQuery, useGetCharactersQuery } from 'graphql/generated/graphql'
import { getAllCharacters, getChars } from 'graphql/queries'

export default function Index({ characters }: HomeProps) {
/*
  const { data, status } = useQuery<GetCharactersQuery, Error>("allCharacters", () => {
    return request("https://rickandmortyapi.com/graphql", getChars);
  });

  if (status === "loading") {
    console.log("loading --- ");
    return <div>Loading...</div>;
  }

  if (status === "error") {
    console.log("error --- ");
    return <div>Error</div>;
  }
  console.log("Ok --- ");
  console.log(characters);
  console.log(data?.characters?.results);
  const charactersHome = data?.characters?.results;
*/
  return <Home characters={characters} />
}

export const getStaticProps = async () => {
  const { characters } = await graphqlRequestClient.request<GetCharactersQuery>(
    getChars
  )

  return {
    revalidate: 60,
    props: {
      characters: characters?.results
    }
  }
}


/*
export const getServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery<GetCharactersQuery>(getChars);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
*/
