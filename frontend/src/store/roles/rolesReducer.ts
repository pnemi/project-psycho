import {
  FETCH_ROLES_BEGIN,
  FETCH_ROLES_FAILURE,
  FETCH_ROLES_SUCCESS,
  RolesActionTypes,
  TOGGLE_ROLE,
} from './rolesActions'

interface RolesState extends FetchableState {
  data: Array<Role>
}

const initialState: RolesState = {
  data: [],
  loading: false,
  error: null,
}

const reducers = {
  [FETCH_ROLES_BEGIN]: (state: RolesState): RolesState => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_ROLES_SUCCESS]: (
    state: RolesState,
    action: RolesActionTypes
  ): RolesState => ({
    ...state,
    loading: false,
    data: action.payload.data,
  }),
  [FETCH_ROLES_FAILURE]: (
    state: RolesState,
    action: RolesActionTypes
  ): RolesState => ({
    ...state,
    loading: false,
    error: action.payload.error,
    data: [],
  }),
  [TOGGLE_ROLE]: (state: RolesState, action: RolesActionTypes) => ({
    ...state,
    data: state.data.map((role) =>
      role.code === action.payload.code
        ? { ...role, checked: !role.checked }
        : role
    ),
  }),
}

export default (
  state: RolesState = initialState,
  action: RolesActionTypes
): RolesState =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
