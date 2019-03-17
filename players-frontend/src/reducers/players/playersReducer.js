import { CHANGE_NUMBER_OF_PLAYERS } from './playersActions'

export const initialState = {
  numberOfPlayers: 0,
}

export const reducers = {
  [CHANGE_NUMBER_OF_PLAYERS]: (state, { payload }) => ({
    ...state,
    numberOfPlayers: payload.numberOfPlayers,
  }),
}

export default (state = initialState, action) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
