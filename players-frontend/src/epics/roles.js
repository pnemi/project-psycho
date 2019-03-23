import * as playersActions from '@store/players/playersActions'
import * as rolesActions from '@store/roles/rolesActions'

import { map, mergeMap } from 'rxjs/operators'

import { fetchRoles } from '@services/rolesService'
import { from } from 'rxjs'
import { getRequiredNumberOfPlayers } from '@utils/roles'
import { load } from '@utils/storage'
import { ofType } from 'redux-observable'

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
      from(fetchRoles(state$.value.lang.currentLang)).pipe(
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
