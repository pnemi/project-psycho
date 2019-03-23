import {
  FETCH_ROLES_BEGIN,
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_SUCCESS,
  TOGGLE_ROLE,
} from './rolesActions'

const initialState = {
  data: [],
  loading: false,
  error: null,
}

const reducers = {
  [FETCH_ROLES_BEGIN]: (state, action) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_ROLES_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload.data,
  }),
  [FETCH_ROLES_FAILURE]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
    data: [],
  }),
  [TOGGLE_ROLE]: (state, { payload }) => ({
    ...state,
    data: state.data.map((role) =>
      role.code === payload.code ? { ...role, checked: !role.checked } : role
    ),
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
