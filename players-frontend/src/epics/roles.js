import * as rolesActions from '@reducers/roles/rolesActions'
import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap, map } from 'rxjs/operators'
import gql from 'graphql-tag'

import { gqlQuery } from '../gql-client'

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

export const fetchRolesEpic = (action$, state$) =>
  action$.pipe(
    ofType(rolesActions.FETCH_ROLES_BEGIN),
    mergeMap(() =>
      from(
        gqlQuery(ROLES_QUERY, {
          lang: state$.value.lang.currentLang,
        })
      ).pipe(map(({ data }) => rolesActions.fetchRolesSuccess(data.roles)))
    )
  )
