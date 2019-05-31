import { GraphQLDocumentNode, gqlQuery } from './gql-client'

import { ApolloQueryResult } from 'apollo-boost'
import gql from 'graphql-tag'

const TEAMS_QUERY: GraphQLDocumentNode = gql`
  query Teams {
    teams {
      code
      name
      description
    }
  }
`

export const fetchTeams = (): Promise<ApolloQueryResult<any>> =>
  gqlQuery(TEAMS_QUERY)
