import app from './app/appReducers'
import { combineReducers } from 'redux'
import game from './game/gameReducer'
import lang from './lang/langReducer'
import players from './players/playersReducer'
import roles from './roles/rolesReducer'
import teams from './teams/teamsReducer'
import translations from './translations/translationsReducer'

const reducers = combineReducers({
  app,
  game,
  roles,
  players,
  lang,
  teams,
  translations,
})

export default reducers
