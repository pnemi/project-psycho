export const FETCH_ROLES_BEGIN = 'FETCH_ROLES_BEGIN'
export const FETCH_ROLES_SUCCESS = 'FETCH_ROLES_SUCCESS'
export const FETCH_ROLES_FAILURE = 'FETCH_ROLES_FAILURE'

export const TOGGLE_ROLE = 'TOGGLE_ROLE'

interface FetchRolesBeginAction extends StorePayload {
  type: typeof FETCH_ROLES_BEGIN
}

interface FetchRolesSuccessAction extends StorePayload {
  type: typeof FETCH_ROLES_SUCCESS
  payload: {
    data: Array<Role>
  }
}

interface FetchRolesErrorAction extends StorePayload {
  type: typeof FETCH_ROLES_FAILURE
  payload: {
    error: any
  }
}

interface ToggleRoleAction extends StorePayload {
  type: typeof TOGGLE_ROLE
  payload: {
    code: string
  }
}

export type RolesActionTypes =
  | FetchRolesBeginAction
  | FetchRolesSuccessAction
  | FetchRolesErrorAction
  | ToggleRoleAction

export const fetchRolesBegin = (): RolesActionTypes => ({
  type: FETCH_ROLES_BEGIN,
})

export const fetchRolesSuccess = (data: Array<Role>): RolesActionTypes => ({
  type: FETCH_ROLES_SUCCESS,
  payload: { data },
})

export const fetchRolesError = (error: any): RolesActionTypes => ({
  type: FETCH_ROLES_FAILURE,
  payload: { error },
})

export const toggleRole = (code: string): RolesActionTypes => ({
  type: TOGGLE_ROLE,
  payload: { code },
})
