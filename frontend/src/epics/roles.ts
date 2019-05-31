import * as playersActions from '@psycho/store/players/playersActions'
import * as rolesActions from '@psycho/store/roles/rolesActions'

import { ActionsObservable, StateObservable, ofType } from 'redux-observable'
import { catchError, map, mergeMap } from 'rxjs/operators'
import { from, of } from 'rxjs'

import { StoreState } from '@psycho/store'
import { fetchRoles } from '@psycho/services/rolesService'
import { getRequiredNumberOfPlayers } from '@psycho/utils/roles'
import { load } from '@psycho/utils/storage'

const shouldRoleBeChecked = (role: Role) => {
  const savedChecked = load(`${role.code}.checked`)
  return !role.required && savedChecked !== null ? savedChecked : true
}

const selectedRoles = (roles: Array<Role>) =>
  roles.map((role) => ({
    ...role,
    checked: shouldRoleBeChecked(role),
  }))

const unwrapRoles = ({ data }: { data: { roles: Array<Role> } }) => data.roles

export const fetchRolesEpic = (
  action$: ActionsObservable<rolesActions.RolesActionTypes>
) =>
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

export const fetchRolesSuccessEpic = (
  action$: ActionsObservable<rolesActions.RolesActionTypes>,
  state$: StateObservable<StoreState>
) =>
  action$.pipe(
    ofType(rolesActions.FETCH_ROLES_SUCCESS),
    map(() =>
      playersActions.changeNumberOfPlayers(
        getRequiredNumberOfPlayers(state$.value.roles.data)
      )
    )
  )
