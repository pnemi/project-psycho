import ApolloClient, { ApolloQueryResult } from 'apollo-boost/lib/index'

const client: ApolloClient<{}> = new ApolloClient({
  uri: process.env.GQL_ENDPOINT,
})

export interface GraphQLDocumentNode {
  definitions: Array<any>
  kind: string
  loc: Object
}

export const gqlQuery = (
  query: GraphQLDocumentNode,
  variables: object = {}
): Promise<ApolloQueryResult<any>> =>
  client.query({
    query,
    variables,
  })

export default client
