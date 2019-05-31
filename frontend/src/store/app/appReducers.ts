import { APP_INIT_SUCCESS, AppActionTypes } from './appActions'

export interface AppState {
  isLoaded: boolean
}

const initialState: AppState = {
  isLoaded: false,
}

const reducers = {
  [APP_INIT_SUCCESS]: (state: AppState): AppState => ({
    ...state,
    isLoaded: true,
  }),
}

export default (
  state: AppState = initialState,
  action: AppActionTypes
): AppState =>
  reducers.hasOwnProperty(action.type)
    ? (<any>reducers)[action.type](state)
    : state
