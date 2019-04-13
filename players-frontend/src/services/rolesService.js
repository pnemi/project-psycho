import gql from 'graphql-tag'
import { gqlQuery } from './gql-client'

const ROLES_QUERY = gql`
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

export const fetchRoles = () => gqlQuery(ROLES_QUERY)
