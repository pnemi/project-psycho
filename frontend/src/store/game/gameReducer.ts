import {
  GameActionTypes,
  START_ROLE_DISTRIBUTION,
  STOP_ROLE_DISTRIBUTION,
} from './gameActions'

export interface GameState {
  isDistributing: boolean
}

const initialState: GameState = {
  isDistributing: false,
}

const reducers = {
  [START_ROLE_DISTRIBUTION]: (state: GameState): GameState => ({
    ...state,
    isDistributing: true,
  }),
  [STOP_ROLE_DISTRIBUTION]: (state: GameState): GameState => ({
    ...state,
    isDistributing: false,
  }),
}

export default (state: GameState = initialState, action: GameActionTypes) =>
  reducers.hasOwnProperty(action.type) ? reducers[action.type](state) : state
