import gql from 'graphql-tag'
import { gqlQuery } from './gql-client'

const TEAMS_QUERY = gql`
  query Teams {
    teams {
      code
      name
      description
    }
  }
`

export const fetchTeams = () => gqlQuery(TEAMS_QUERY)
