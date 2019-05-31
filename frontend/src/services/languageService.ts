import { GraphQLDocumentNode, gqlQuery } from './gql-client'

import { ApolloQueryResult } from 'apollo-boost'
import gql from 'graphql-tag'

const LANGUAGES_QUERY: GraphQLDocumentNode = gql`
  query Languages {
    languages {
      name
      code
    }
  }
`

export const fetchLanguages = (): Promise<ApolloQueryResult<any>> =>
  gqlQuery(LANGUAGES_QUERY)
