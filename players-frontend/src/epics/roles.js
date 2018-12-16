import * as actions from '@reducers/roles/rolesActions'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { gqlQuery } from '../gql-client'

const ROLES_QUERY = gql`
  {
    roles(lang: { code: "cs" }) {
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

const fetchRolesEpic = (action$) =>
  action$.pipe(
    ofType(actions.FETCH_ROLES_BEGIN),

    mergeMap(() =>
      from(gqlQuery(ROLES_QUERY)).pipe(
        map(({ data }) => actions.fetchRolesSuccess(data.roles))
      )
    )
  )

export default fetchRolesEpic
