import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.GRAPHQL_HOST || ''

const graphqlClient = new GraphQLClient(endpoint, {
  headers: new Headers({ 'content-type': 'application/json' }),
  method: "GET"
})

export default graphqlClient
