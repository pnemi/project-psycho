import { GraphQLDocumentNode, gqlQuery } from './gql-client'

import { ApolloQueryResult } from 'apollo-boost'
import gql from 'graphql-tag'

const TRANSLATIONS_QUERY: GraphQLDocumentNode = gql`
  query Translations($lang: String!) {
    translations {
      code
      value(lang: $lang)
    }
  }
`

export const fetchTranslations = (
  lang: string
): Promise<ApolloQueryResult<any>> => gqlQuery(TRANSLATIONS_QUERY, { lang })
