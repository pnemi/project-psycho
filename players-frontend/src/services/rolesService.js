import gql from 'graphql-tag'
import { gqlQuery } from './gql-client'

const ROLES_QUERY = gql`
  query Roles($lang: String!) {
    roles(lang: { code: $lang }) {
      order
      code
      name
      description
      required
      listed
      complement
      assignedDuringGame
    }
  }
`

export const fetchRoles = (lang) =>
  gqlQuery(ROLES_QUERY, {
    lang,
  })
