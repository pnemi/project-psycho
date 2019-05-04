import { APP_INIT_SUCCESS } from './appActions'

export const initialState = {
  isLoaded: false,
}

export const reducers = {
  [APP_INIT_SUCCESS]: (state) => ({
    ...state,
    isLoaded: true,
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
