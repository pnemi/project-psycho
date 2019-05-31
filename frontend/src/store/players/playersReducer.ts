import { CHANGE_NUMBER_OF_PLAYERS, PlayersActionTypes } from './playersActions'

interface PlayersState {
  numberOfPlayers: number
}

const initialState: PlayersState = {
  numberOfPlayers: 0,
}

const reducers = {
  [CHANGE_NUMBER_OF_PLAYERS]: (
    state: PlayersState,
    action: PlayersActionTypes
  ): PlayersState => ({
    ...state,
    numberOfPlayers: action.payload.numberOfPlayers,
  }),
}

export default (
  state: PlayersState = initialState,
  action: PlayersActionTypes
) =>
  reducers.hasOwnProperty(action.type)
    ? reducers[action.type](state, action)
    : state
