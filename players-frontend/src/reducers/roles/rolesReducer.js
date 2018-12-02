import {
  FETCH_ROLES_BEGIN,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  TOGGLE_ROLE,
} from './rolesActions'

import { load } from '@utils/storage'

const shouldRoleBeChecked = (role) => {
  const savedChecked = load(`${role.code}.checked`)
  return !role.required && savedChecked !== null ? savedChecked : true
}

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const roles = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ROLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload.data.map((item) => ({
          ...item,
          checked: shouldRoleBeChecked(item),
        })),
      }
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: payload.error,
        data: [],
      }
    case TOGGLE_ROLE:
      return {
        ...state,
        data: state.data.map((role) =>
          role.code === payload.code
            ? { ...role, checked: !role.checked }
            : role
        ),
      }
    default:
      return state
  }
}

export default roles
