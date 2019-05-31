import { GraphQLDocumentNode, gqlQuery } from './gql-client'

import { ApolloQueryResult } from 'apollo-boost'
import gql from 'graphql-tag'

const ROLES_QUERY: GraphQLDocumentNode = gql`
  query Roles {
    roles {
      order
      code
      name
      description
      team
      required
      complement
      distributedDuringGame
    }
  }
`

export const fetchRoles = (): Promise<ApolloQueryResult<any>> =>
  gqlQuery(ROLES_QUERY)
