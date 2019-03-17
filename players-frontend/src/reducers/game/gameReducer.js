import { START_ROLE_DISTRIBUTION, STOP_ROLE_DISTRIBUTION } from './gameActions'

export const initialState = {
  isDistributing: false,
}

export const reducers = {
  [START_ROLE_DISTRIBUTION]: (state) => ({
    ...state,
    isDistributing: true,
  }),
  [STOP_ROLE_DISTRIBUTION]: (state) => ({
    ...state,
    isDistributing: false,
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
