import { combineReducers } from 'redux'
import game from './game/gameReducer'
import lang from './lang/langReducer'
import players from './players/playersReducer'
import roles from './roles/rolesReducer'

const reducers = combineReducers({
  game,
  roles,
  players,
  lang,
})

export default reducers
