import {
  FETCH_TEAMS_BEGIN,
  FETCH_TEAMS_FAILURE,
  FETCH_TEAMS_SUCCESS,
  TeamDictionary,
  TeamsActionTypes,
} from './teamsActions'

export interface TeamsState extends FetchableState {
  data: {
    [language: string]: TeamDictionary
  }
}

const initialState: TeamsState = {
  data: {},
  loading: false,
  error: null,
}

const reducers = {
  [FETCH_TEAMS_BEGIN]: (state: TeamsState): TeamsState => ({
    ...state,
    loading: true,
    error: null,
  }),
  [FETCH_TEAMS_SUCCESS]: (
    state: TeamsState,
    action: TeamsActionTypes
  ): TeamsState => ({
    ...state,
    loading: false,
    data: action.payload.data,
  }),
  [FETCH_TEAMS_FAILURE]: (
    state: TeamsState,
    action: TeamsActionTypes
  ): TeamsState => ({
    ...state,
    loading: false,
    error: action.payload.error,
    data: {},
  }),
}

export default (
  state: TeamsState = initialState,
  action: TeamsActionTypes
): TeamsState =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
