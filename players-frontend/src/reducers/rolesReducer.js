import {
  FETCH_ROLES_BEGIN,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE
} from './rolesActions'

const initialState = {
  data: [],
  loading: false,
  error: null
}

const roles = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      }
    case FETCH_ROLES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      }
    case FETCH_ROLES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: []
      }
    default:
      return state
  }
}

export default roles
