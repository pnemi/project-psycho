import app, { AppState } from './app/appReducers'
import game, { GameState } from './game/gameReducer'
import lang, { LanguageState } from './lang/langReducer'
import players, { PlayersState } from './players/playersReducer'
import roles, { RolesState } from './roles/rolesReducer'
import teams, { TeamsState } from './teams/teamsReducer'
import translations, {
  TranslationsState,
} from './translations/translationsReducer'

import { combineReducers } from 'redux'

export type StoreState = {
  app: AppState
  game: GameState
  roles: RolesState
  players: PlayersState
  lang: LanguageState
  teams: TeamsState
  translations: TranslationsState
}

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
