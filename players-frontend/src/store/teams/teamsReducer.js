import {
  FETCH_TEAMS_BEGIN,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_SUCCESS,
} from './teamsActions'

const initialState = {
  data: {},
  loading: false,
  error: null,
}

const reducers = {
  [FETCH_TEAMS_BEGIN]: (state) => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_TEAMS_SUCCESS]: (state, { payload }) => ({
    ...state,
    loading: false,
    data: payload.data,
  }),
  [FETCH_TEAMS_FAILURE]: (state, { payload }) => ({
    ...state,
    loading: false,
    error: payload.error,
    data: {},
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
