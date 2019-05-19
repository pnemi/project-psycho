import gql from 'graphql-tag'
import { gqlQuery } from './gql-client'

const LANGUAGES_QUERY = gql`
  query Languages {
    languages {
      name
      code
    }
  }
`

export const fetchLanguages = () => gqlQuery(LANGUAGES_QUERY)
