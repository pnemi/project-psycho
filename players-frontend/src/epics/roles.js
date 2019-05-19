import * as playersActions from '@psycho/store/players/playersActions'
import * as rolesActions from '@psycho/store/roles/rolesActions'

import { catchError, map, mergeMap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import { fetchRoles } from '@psycho/services/rolesService'
import { getRequiredNumberOfPlayers } from '@psycho/utils/roles'
import { load } from '@psycho/utils/storage'
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

export const fetchRolesEpic = (action$) =>
  action$.pipe(
    ofType(rolesActions.FETCH_ROLES_BEGIN),
    mergeMap(() =>
      from(fetchRoles()).pipe(
        map(unwrapRoles),
        map(selectedRoles),
        map((roles) => rolesActions.fetchRolesSuccess(roles)),
        catchError((error) => of(rolesActions.fetchRolesError(error)))
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
