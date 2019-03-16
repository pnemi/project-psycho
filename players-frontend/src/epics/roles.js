import * as playersActions from '@reducers/players/playersActions'
import * as rolesActions from '@reducers/roles/rolesActions'

import { map, mergeMap } from 'rxjs/operators'

import { from } from 'rxjs'
import { getRequiredNumberOfPlayers } from '@utils/roles'
import gql from 'graphql-tag'
import { gqlQuery } from '../gql-client'
import { load } from '@utils/storage'
import { ofType } from 'redux-observable'

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

const shouldRoleBeChecked = (role) => {
  const savedChecked = load(`${role.code}.checked`)
  return !role.required && savedChecked !== null ? savedChecked : true
}

const selectedRoles = (roles) =>
  roles.map((role) => ({
    ...role,
    checked: shouldRoleBeChecked(role),
  }))

const unwrapRoles = ({ data }) => data.roles

export const fetchRolesEpic = (action$, state$) =>
  action$.pipe(
    ofType(rolesActions.FETCH_ROLES_BEGIN),
    mergeMap(() =>
      from(
        gqlQuery(ROLES_QUERY, {
          lang: state$.value.lang.currentLang,
        })
      ).pipe(
        map(unwrapRoles),
        map(selectedRoles),
        map((roles) => rolesActions.fetchRolesSuccess(roles))
      )
    )
  )

export const fetchRolesSuccessEpic = (action$, state$) =>
  action$.pipe(
    ofType(rolesActions.FETCH_ROLES_SUCCESS),
    map(() =>
      playersActions.changeNumberOfPlayers(
        getRequiredNumberOfPlayers(state$.value.roles.data)
      )
    )
  )
