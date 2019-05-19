import gql from 'graphql-tag'
import { gqlQuery } from './gql-client'

const TRANSLATIONS_QUERY = gql`
  query Translations($lang: String!) {
    translations {
      code
      value(lang: $lang)
    }
  }
`

export const fetchTranslations = (lang) =>
  gqlQuery(TRANSLATIONS_QUERY, { lang })
